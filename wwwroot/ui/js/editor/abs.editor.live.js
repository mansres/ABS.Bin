window.editorInterop = {
    codeMarkers: [],
    setDotnetReference: function (pDotNetReference) {
        window.editorInterop.pDotNetReference = pDotNetReference;
    },
    invokeSaveChanges: function () {
        window.editorInterop.pDotNetReference.invokeMethodAsync('HandleValidSubmit');
    },
    setModelMarkers: function (markers) {
        window.editorInterop.codeMarkers = markers;
        markers.forEach(function (el) {
            switch (el.severity) {
                case 0:
                    el.severity = monaco.MarkerSeverity.Hint
                    break;
                case 1:
                    el.severity = monaco.MarkerSeverity.Info
                    break;
                case 2:
                    el.severity = monaco.MarkerSeverity.Warning
                    break;
                case 3:
                    el.severity = monaco.MarkerSeverity.Error
                    break;
                default:
            }
        });

        monaco.editor.setModelMarkers(editor.getModel(), 'test', markers)
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
                window.editorInterop.invokeSaveChanges();
                return null;
            }
        });
    },
    reloadIframe: function () {
        document.getElementById('iframe1').contentWindow.location.reload();
        window.editorInterop.disableIframeLinks()
        window.editorInterop.enableIframeInspectorforAllTags()
    },
    toggleLeftColumn: function () {
        Vvveb.Gui.toggleLeftColumn()
    },
    toggleRightColumn: function () {
        Vvveb.Gui.toggleRightColumn()
    },
    toggleEditor: function () {
        Vvveb.Gui.toggleEditor()
    },
    initEditor: function (pageId, pageTitle = "Page Title Placeholder") {
        //if url has #no-right-panel set one panel demo
        if (window.location.hash.indexOf("no-right-panel") != -1) {
            $("#vvveb-builder").addClass("no-right-panel");
            $(".component-properties-tab").show();
            Vvveb.Components.componentPropertiesElement = "#left-panel .component-properties";
        } else {
            $(".component-properties-tab").hide();
        }
    },
    enableIframeInspectorforAllTags: function (tag) {

        window.editorInterop.enableIframeInspector('*')
    },
    enableIframeInspector: function (tag) {
        
        $('#iframe1').contents().find(tag).each(function () {

            $(this).click(function (event) {
                var selection = document.getElementById('iframe1').contentWindow.getSelection();
                if (selection && selection.length !== 0) {
                    window.editorInterop.searchCodeModel(selection.toString());
                }
            })

            $(this).click(function (event) {
                try {

                    if (this.id) {
                        window.editorInterop.searchCodeModel(this.id.toString())
                    } else {
                        window.editorInterop.searchCodeModel(this.classList.toString())
                    }

                } catch (e) {
                    //noop
                }
            });
        });
    },
    searchCodeModel: function (query) {
        if (!query)
            return;

        const model = editor.getModel();
        const range = model.findMatches(query)[0].range;
        if (range) {

            console.log(range)
            editor.revealLine(range.startLineNumber);

            editor.setSelection(range);
            editor.getAction('actions.find').run();
        }

    },
    formatCode: function () {
        var options = {
            "indent": "auto",
            "indent-spaces": 4,
            "wrap": 2000,
            "markup": true,
            "output-xml": false,
            "output-html": true,
            "numeric-entities": true,
            "quote-marks": true,
            "quote-nbsp": false,
            "show-body-only": false,
            "quote-ampersand": false,
            "break-before-br": true,
            "uppercase-tags": false,
            "uppercase-attributes": false,
            "drop-font-tags": false,
            "tidy-mark": false
        }

        //var html = window.adminPortal.getCodeEditorContent();
        //var result = tidy_html5(html, options);

        //window.adminPortal.setCodeEditorContent(result)
    },
    disableIframeLinks: function () {

        $('#iframe1').contents().find('a').each(function () {
            $(this).click(function (event) {
                event.preventDefault();
            });
        });
    }
}
