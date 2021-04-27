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
