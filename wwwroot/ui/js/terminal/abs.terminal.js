var term = new Terminal();
var command = "";
var commands = [];
var commandIndex = 0;
var terminalLoaded = false;

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
    InitTerminal: function () {
        term.dispose();
        $("#terminal").empty();
        term = new Terminal();
        term.onCursorMove(e => { return false; })
        term.open(document.getElementById('terminal'));
        term.write('Alliance Business Suite');
        term.write('\r\n');
        term.write('Copyright (C) Fenix Alliance Inc. All rights reserved.');
        term.write('\r\n');
        term.write('\r\n');
        term.write("~$ ");
        term.focus()
        term.onKey(e => {

            const printable = !e.domEvent.altKey
                && !e.domEvent.altGraphKey
                && !e.domEvent.ctrlKey
                && !e.domEvent.metaKey
                && !(e.domEvent.keyCode === 40)
                && !(e.domEvent.keyCode === 39)
                && !(e.domEvent.keyCode === 38)
                && !(e.domEvent.keyCode === 37)
                && !(e.domEvent.keyCode === 13)
                && !(e.domEvent.keyCode === 8);

            if (commandIndex < 0) {
                commandIndex = 0;
            }
            if (commandIndex > commands.length) {
                commandIndex = commands.length;
            }

            // Up arrow
            if (e.domEvent.keyCode === 38) {
                window.TerminalUtils.InitTerminal();
                command = commands[commandIndex];
                term.write(command)    
                commandIndex++;
                term.focus()
                return;
            }


            // Down arrow
            if (e.domEvent.keyCode === 40) {
                window.TerminalUtils.InitTerminal();
                command = commands[commandIndex];
                term.write(command)    
                commandIndex--;
                term.focus()
                return;
            }
            // Backspace
            if (e.domEvent.keyCode === 8) {
                command = command.slice(0, -1);
                term.reset();
                term.write("~$ " + command);
                return;
            }

            if (printable) {
                command += e.key;
                term.write(e.key);
                return;
            }

            if (e.domEvent.keyCode === 13) {
                if (command.length == 0) {
                    return;
                }
                console.log(command);
                commands.unshift(command);
                if (command === "me") {
                    window.TerminalUtils.GetMe();
                } else {
                    try {
                        window.TerminalUtils.pDotNetReference.invokeMethodAsync('ExecuteCommand', command).then(data => {
                            term.write(data + '~$ ');
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
