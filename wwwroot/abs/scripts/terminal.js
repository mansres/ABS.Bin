var commands = [];
var commandIndex = 0;
window.TerminalUtils = {

    setDotnetReference: function (pDotNetReference) {
        window.TerminalUtils.pDotNetReference = pDotNetReference;
    },
    writeToTerminal: function (data) {
        term.write('\r\n');
        term.write(data);
        term.write('\r\n');
        term.write('\r\n');
        term.write("~$ ");
    },
    writeJsonToTerminal: function (data) {
        console.log(data);
        term.write('\r\n');
        term.write(JSON.stringify(data));
        term.write('\r\n');
        term.write('\r\n');
        term.write("~$ ");
    },
    GetMe: function () {
        term.write('\r\n');
        $.ajax({
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("Accept", "text/json");
            },
            url: "/api/v2/me",
            type: 'GET',
            success: window.TerminalUtils.writeJsonToTerminal,
        });
    },
    OpenTerminal: function () {
        $('#terminal_modal').modal({
            keyboard: false
        });
        setTimeout(function () { window.TerminalUtils.InitTerminal() }, 200);
    },
    InitTerminal: function (dotNetReference) {
        terminalDotNetReference = dotNetReference;
        term.dispose();
        $("#terminal").empty();
        term = new Terminal();
        term.onCursorMove(e => { return false; })
        term.open(document.getElementById('terminal'));
        console.log("Opening Terminal.");
        var command = "";
        term.write('Alliance Business Suite');
        term.write('\r\n');
        term.write('Copyright (C) Fenix Alliance Inc. All rights reserved.');
        term.write('\r\n');
        term.write('\r\n');
        term.write("~$ ");

        term.onKey(e => {

            const printable = !e.domEvent.altKey && !e.domEvent.altGraphKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;

            if (e.domEvent.keyCode === 8) {
                command = command.slice(0, -1);
                term.write(e.key);
                command += e.key;
            }

            if (printable) {
                command += e.key;
                term.write(e.key);
            }


            if (e.domEvent.keyCode === 38) {
                term.write('\x1b[2K\r')    
                return;
            }

            if (e.domEvent.keyCode === 40) {
                term.write('\x1b[2K\r')    
                return;
            }

            if (e.domEvent.keyCode === 13) {
                commands.push(command);
                if (command === "me") {
                    window.TerminalUtils.GetMe();
                } else {
                    try {
                        term.write('\r\n');

                        window.TerminalUtils.pDotNetReference.invokeMethodAsync('ExecuteCommand', command).then(data => {
                            term.write(data + '\r\n~$ ');
                        });

                    } catch (e) {
                        term.write("~$ " + e);
                        term.write("\r\n~$ ");
                    }
                }
                command = "";
            } 

        });
    },
    DisposeTerminal: function () {
        term.dispose();
        $("#terminal").empty();
        console.log("Terminal disposed.");
    },
    NewTerminal: function () {

    }
}