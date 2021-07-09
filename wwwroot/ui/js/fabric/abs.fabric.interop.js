
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
    initFacePile: function (id) {
        new fabric['Persona'](document.getElementById(id));
    },
    initPersonaCards: function () {
        var PersonaCardElement = document.querySelectorAll(".ms-PersonaCard");
        for (var i = 0; i < PersonaCardElement.length; i++) {
            new fabric.PersonaCard(PersonaCardElement[i]);
        }
    },
    initPersonaCard: function (id) {       
        new fabric.PersonaCard(document.getElementById(id));
    },
}
