window.editorInterop = {
    setDotnetReference: function (pDotNetReference) {
        window.editorInterop.pDotNetReference = pDotNetReference;
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
                window.editorInterop.pDotNetReference.invokeMethodAsync('HandlePageLiveEditValidSubmit');
                return null;
            }
        });
    },
    reloadIframe: function () {
        document.getElementById('iframe1').contentWindow.location.reload();
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

        Vvveb.Builder.init(`/Content/Razor/${pageId}`, function () {
            Vvveb.Gui.init();
            //run code after page/iframe is loaded
            //Vvveb.FileManager.init();
            //Vvveb.SectionList.init();
            //Vvveb.FileManager.addPages(
            //[
            //    { name: `${pageId}`, title: pageTitle, url: `/Content/Razor/${pageId}`, file: "/Content/Razor/@Model.ID", assets: ['demo/narrow-jumbotron/narrow-jumbotron.css'] },
            //]);
            //Vvveb.FileManager.loadPage(`${pageId}`,);
        });
    }
}
