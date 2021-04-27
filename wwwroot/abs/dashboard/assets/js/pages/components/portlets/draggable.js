"use strict";

var StudioPortletDraggable = (function () {
  return {
    //main function to initiate the module
    init: function () {
      $("#kt_sortable_portlets").sortable({
        connectWith: ".abs-portlet_head",
        items: ".abs-portlet",
        opacity: 0.8,
        handle: ".abs-portlet_head",
        coneHelperSize: true,
        placeholder: "abs-portlet--sortable-placeholder",
        forcePlaceholderSize: true,
        tolerance: "pointer",
        helper: "clone",
        tolerance: "pointer",
        forcePlaceholderSize: !0,
        helper: "clone",
        cancel: ".abs-portlet--sortable-empty", // cancel dragging if portlet is in fullscreen mode
        revert: 250, // animation in milliseconds
        update: function (b, c) {
          if (c.item.prev().hasClass("abs-portlet--sortable-empty")) {
            c.item.prev().before(c.item);
          }
        },
      });
    },
  };
})();

jQuery(document).ready(function () {
  StudioPortletDraggable.init();
});
