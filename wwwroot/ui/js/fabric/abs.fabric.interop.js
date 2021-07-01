
window.fabricUtils = {
    enableBreadcrumbs: function () {
        var BreadcrumbHTML = document.querySelector('.ms-Breadcrumb');
        var Breadcrumb = new fabric['Breadcrumb'](BreadcrumbHTML);
    },
    enableCommandBar: function () {
        var CommandBarElements = document.querySelectorAll(".ms-CommandBar");
        for (var i = 0; i < CommandBarElements.length; i++) {
            new fabric['CommandBar'](CommandBarElements[i]);
        }
    },
    initPersonaCards: function () {
        var PersonaCardElement = document.querySelectorAll(".ms-PersonaCard");
        for (var i = 0; i < PersonaCardElement.length; i++) {
            new fabric.PersonaCard(PersonaCardElement[i]);
        }
    },
}