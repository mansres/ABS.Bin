window.TerminalUtils = {

    writeToTerminal: function (data) {
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
            success: window.TerminalUtils.writeToTerminal,
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

            if (e.domEvent.keyCode === 13) {
                if (command === "me") {
                    window.TerminalUtils.GetMe();
                } else {
                    try {
                        term.write('\r\n');
                        term.write("~$ " + eval(command));
                        term.write('\r\n');
                        term.write("~$ ");
                    } catch (e) {
                        term.write("~$ " + e);
                        term.write('\r\n');
                        term.write("~$ ");
                    }
                }
                command = "";
            } else if (e.domEvent.keyCode === 8) {
                // Do not delete the prompt
                if (term._core.buffer.x > 2) {
                    term.write('\b \b');
                }
            } else if (printable) {
                command += e.key;
                term.write(e.key);
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