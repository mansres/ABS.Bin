"use strict";

// Class definition
var StudioUserEdit = (function () {
  // Base elements
  var avatar;

  var initUserForm = function () {
    avatar = new StudioAvatar("kt_user_edit_avatar");
  };

  return {
    // public functions
    init: function () {
      initUserForm();
    },
  };
})();

jQuery(document).ready(function () {
  StudioUserEdit.init();
});
