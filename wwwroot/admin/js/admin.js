var absMenuEditor;
window.adminInterop = {
    enableSideMenu: function () {
        adminlte.Treeview._jQueryInterface.call($(this), 'init')
    },
    getMenuBuilderContent: function () {
        return $("#out").val()
    },
    AddOnErrorReload: function () {
        window.onerror = function () {
            window.location.reload();
        }
    },
    Reload: function () {
        window.location.reload();
    },
    initMediaManager: function () {
        var myCommands = elFinder.prototype._options.commands;
        var disabled = ['callback', 'chmod', 'editor', 'netmount', 'ping', 'zipdl', 'help']; // Not yet implemented commands in elFinder.NetCore
        elFinder.prototype.i18.en.messages.TextArea = "Edit";

        $.each(disabled, function (i, cmd) {
            (idx = $.inArray(cmd, myCommands)) !== -1 && myCommands.splice(idx, 1);
        });

        var options = {
                url: '/api/v2/fs/public/connector', // Default (Local File System)
                rememberLastDir: false, // Prevent elFinder saving in the Browser LocalStorage the last visited directory
                commands: myCommands,
                //lang: 'pt_BR', // elFinder supports UI and messages localization. Check the folder Content\elfinder\js\i18n for all available languages. Be sure to include the corresponding .js file(s) in the JavaScript bundle.
                //onlyMimes: ["image", "text/plain"] // Get files of requested mime types only
                uiOptions: { // UI buttons available to the user
                    toolbar: [
                    ['back', 'forward'],
                    ['reload'],
                    ['home', 'up'],
                    ['mkdir', 'mkfile', 'upload'],
                    ['open', 'download'],
                    ['undo', 'redo'],
                    ['info'],
                    ['quicklook'],
                    ['copy', 'cut', 'paste'],
                    ['rm'],
                    ['duplicate', 'rename', 'edit'],
                    ['selectall', 'selectnone', 'selectinvert'],
                    ['view', 'sort'],
                    ['search']
                ]
                },
            //lang: 'vi', // Change language
    };

        $('#file-manager').elfinder(options).elfinder('instance');
    },
    enableMenuBuilder: function (data) {
        var json = JSON.parse(data)

        // icon picker options
        var iconPickerOpt = { cols: 5, footer: false };

        // menu builder options
        var options = {
            hintCss: { 'border': '1px dashed #13981D' },
            placeholderCss: { 'background-color': 'gray' },
            ignoreClass: 'btn',
            opener: {
                active: true,
                as: 'html',
                close: '<i class="fa fa-minus"></i>',
                open: '<i class="fa fa-plus"></i>',
                openerCss: { 'margin-right': '10px' },
                openerClass: 'btn btn-success btn-xs'
            }
        };

        // initialize the menu builder
        absMenuEditor = new menuEditor('myList', {
            listOptions: options,
            iconPicker: iconPickerOpt,
            labelEdit: 'Edit',
            labelRemove: 'X',
        });
    }
}
