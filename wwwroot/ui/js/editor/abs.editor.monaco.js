var editor, content, lastChild;

function htmlDecode(input) {
    var e = document.createElement('textarea');
    e.innerHTML = input;
    // handle case of empty input
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function createDependencyProposals(range) {
    // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
    // TODO: server side type & member lookup
    return [
        {
            label: 'GetHolderId',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: "Fast, unopinionated, minimalist web framework",
            insertText: '{var holderId = await HolderService.GetCurrentAccountHolderIDAsync(User)}',
            range: range
        },
        {
            label: 'DateTime',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: "Recursively mkdir, like <code>mkdir -p</code>",
            insertText: '@DateTime',
            range: range
        },
        {
            label: 'HolderService',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: "Recursively mkdir, like <code>mkdir -p</code>",
            insertText: 'HolderService',
            range: range
        },
        {
            label: 'HolderService.GetCurrentAccountHolderIDAsync(User)',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: "Recursively mkdir, like <code>mkdir -p</code>",
            insertText: 'HolderService.GetCurrentAccountHolderIDAsync(User)',
            range: range
        },
        {
            label: 'DateTime.Now',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: "Recursively mkdir, like <code>mkdir -p</code>",
            insertText: '@DateTime.Now',
            range: range
        },
        {
            label: '"my-third-party-library"',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: "Describe your library here",
            insertText: '"${1:my-third-party-library}": "${2:1.2.3}"',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        }
    ];
}

window.adminPortal = {
    setDotnetReference: function (pDotNetReference) {
        window.adminPortal.pDotNetReference = pDotNetReference;
    },
    addSaveActionToMonaco: function () {
        editor.addAction({
            // An unique identifier of the contributed action.
            id: 'savePage',

            // A label of the action that will be presented to the user.
            label: 'Save Page',

            // An optional array of keybindings for the action.
            keybindings: [
                // chord
                monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S)
            ],

            // A precondition for this action.
            precondition: null,

            // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
            keybindingContext: null,

            contextMenuGroupId: 'navigation',

            contextMenuOrder: 1.5,

            // Method that will be executed when the action is triggered.
            // @param editor The editor instance is passed in as a convinience
            run: function (ed) {
                window.adminPortal.pDotNetReference.invokeMethodAsync('HandleValidSubmit');
                return null;
            }
        });
    },
    enableMonacoEditor: function (containerId = "monacoEditorContainer", editorLanguage = "html", editorContent = "") {
        // Through the options literal, the behaviour of the editor can be easily customized.
        // Here are a few examples of config options that can be passed to the editor.
        // You can also call editor.updateOptions at any time to change the options.
        try {

            if (editor) {
                editor.dispose()
            }

            $("#" + containerId).empty();

            monaco.languages.registerCompletionItemProvider('razor', {
                provideCompletionItems: function (model, position) {
                    // find out if we are completing a property in the 'dependencies' object.
                    var textUntilPosition = model.getValueInRange({ startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column });
                   
                    var word = model.getWordUntilPosition(position);

                    var range = {
                        startLineNumber: position.lineNumber,
                        endLineNumber: position.lineNumber,
                        startColumn: word.startColumn,
                        endColumn: word.endColumn
                    };

                    return { suggestions: [] };

                    if (textUntilPosition.match(/"@"\s*:\s*\{\s*("[^"]*"\s*:\s*"[^"]*"\s*,\s*)*([^"]*)?$/)) {
                        return { suggestions: [] };
                    }

                    if (textUntilPosition.match(/@/)) {
                        return {
                            suggestions: createDependencyProposals(range)
                        };
                    }
                }
            });

            editor = monaco.editor.create(document.getElementById(containerId), {
                value: unescape(editorContent),
                language: editorLanguage,

                lineNumbers: "on",
                roundedSelection: false,
                automaticLayout: true,
                scrollBeyondLastLine: true,
                readOnly: false,
                theme: "vs-dark",
            });

            editor.onKeyDown(window.adminPortal.closeHtmlTags());

            window.onresize = function () {
                editor.layout();
            };

        } catch (ex) {
            console.log(ex);
        }
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
