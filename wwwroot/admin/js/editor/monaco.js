var editor, content, lastChild;
function htmlDecode(input) {
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
window.adminPortal = {
    enableMonacoEditor: function (containerId = "monacoEditorContainer", editorLanguage = "html", editorContent = "") {
        // Through the options literal, the behaviour of the editor can be easily customized.
        // Here are a few examples of config options that can be passed to the editor.
        // You can also call editor.updateOptions at any time to change the options.
        try {


            $("#" + containerId).empty();


            console.log(editorContent);

            editor = monaco.editor.create(document.getElementById(containerId), {
                value: unescape(editorContent),
                language: editorLanguage,

                lineNumbers: "on",
                roundedSelection: false,
                automaticLayout: false,
                scrollBeyondLastLine: false,
                readOnly: false,
                theme: "vs-dark",
            });

            window.onresize = function () {
                editor.layout();
            };

            var myBinding = editor.addCommand(monaco.KeyCode.Shift, function () {
                alert('Saving pressed!');
            });

            editor.onKeyDown(window.adminPortal.closeHtmlTags());
        } catch (ex) {
            console.log(ex);
        }
    },
    setHtmlEditorContent: function (content) {
        content = document.getElementById('pageContent');
        lastChild = content.lastElementChild;
        lastChild.innerHTML = content;
    },
    fullScreenCodeEditor: function (containerId = "monacoEditorContainer") {


        var elem = document.getElementById(containerId);

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        editor.layout()
    },
    getHtmlEditorContent: function () {
        content = document.getElementById('pageContent');
        lastChild = content.lastElementChild;
        return lastChild.innerHTML;
    },
    setCodeEditorContent: function (content) {
        if (!editor) {
            window.adminPortal.enableMonacoEditor();
        }
        editor.setValue(htmlDecode(content));
    },
    getCodeEditorContent: function () {
        if (!editor) {
            window.adminPortal.enableMonacoEditor();
        }
        return editor.getValue();
    },
    getSummerNoteEditorContent: function (textAreaId) {
        return $('#' + textAreaId).summernote('code')
    },
    enableSummerNote: function (textAreaId) {

        // Summernote
        $('#' + textAreaId).summernote()

    },
    closeHtmlTags: function () {
        function isBracketClose(event) {
            return (event.browserEvent && event.browserEvent.key == ">") || (event.keyCode == 84 && e.shiftKey);
        }
        return function (e) {

            if (isBracketClose(e)) {
                const position = editor.getPosition();
                const text = editor.getValue(position);
                const splicedText = text.split("\n");
                const line = splicedText[position.lineNumber - 1];


                let preLine = line.substring(0, position.column - 1);
                let postLine = line.substring(position.column - 1);

                let i = 1;
                while (preLine.indexOf("<") == -1 && position.lineNumber - i >= 0) {
                    preLine = splicedText[position.lineNumber - 1 - i] + preLine;
                    i++;
                }

                const regex = /<(\w+)[^\/>]*$/;
                if (preLine.match(regex) && !(postLine.indexOf(">") < postLine.indexOf("<"))) {
                    let content = "</" + preLine.match(regex)[1] + ">";
                    editor.trigger('bla', 'type', { text: content });
                    editor.setPosition(position);
                }
            }
        }
    }
}
