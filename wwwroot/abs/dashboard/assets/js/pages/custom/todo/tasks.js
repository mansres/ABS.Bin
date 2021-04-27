"use strict";

// Class definition
var StudioApptodo = (function () {
  var asideEl = StudioUtil.getByID("abs_todo_aside");

  var asideOffcanvas;

  return {
    // public functions
    init: function () {
      // init
      StudioApptodo.initAside();
    },

    initAside: function () {
      // Mobile offcanvas for mobile mode
      asideOffcanvas = new StudioOffcanvas(asideEl, {
        overlay: true,
        baseClass: "abs-todo_aside",
        closeBy: "abs_todo_aside_close",
        toggleBy: "abs_subheader_mobile_toggle",
      });
    },
  };
})();

StudioUtil.ready(function () {
  StudioApptodo.init();
});
