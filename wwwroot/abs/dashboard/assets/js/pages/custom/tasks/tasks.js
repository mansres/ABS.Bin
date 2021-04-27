"use strict";

// Class definition
var StudioApptasks = (function () {
  var asideEl = StudioUtil.getByID("abs_tasks_aside");

  var asideOffcanvas;

  return {
    // public functions
    init: function () {
      // init
      StudioApptasks.initAside();
    },

    initAside: function () {
      // Mobile offcanvas for mobile mode
      asideOffcanvas = new StudioOffcanvas(asideEl, {
        overlay: true,
        baseClass: "abs-tasks_aside",
        closeBy: "abs_tasks_aside_close",
        toggleBy: "abs_subheader_mobile_toggle",
      });
    },
  };
})();

StudioUtil.ready(function () {
  StudioApptasks.init();
});
