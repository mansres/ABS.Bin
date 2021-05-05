"use strict";

// Class definition
var StudioUserProfile = (function () {
  // Base elements
  var avatar;
  var offcanvas;

  // Private functions
  var initAside = function () {
    // Mobile offcanvas for mobile mode
    offcanvas = new StudioOffcanvas("kt_user_profile_aside", {
      overlay: true,
      baseClass: "abs-app_aside",
      closeBy: "kt_user_profile_aside_close",
      toggleBy: "kt_subheader_mobile_toggle",
    });
  };

  var initUserForm = function () {
    avatar = new StudioAvatar("kt_user_avatar");
  };

  return {
    // public functions
    init: function () {
      initAside();
      initUserForm();
    },
  };
})();

StudioUtil.ready(function () {
  StudioUserProfile.init();
});
