"use strict";

// Class definition
var StudioContactsListColumns = (function () {
  // Private functions
  var initAside = function () {
    // Mobile offcanvas for mobile mode
    var offcanvas = new StudioOffcanvas("kt_contact_aside", {
      overlay: true,
      baseClass: "abs-app_aside",
      closeBy: "kt_contact_aside_close",
      toggleBy: "kt_subheader_mobile_toggle",
    });
  };

  return {
    // public functions
    init: function () {
      initAside();
    },
  };
})();

StudioUtil.ready(function () {
  StudioContactsListColumns.init();
});
