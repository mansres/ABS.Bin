"use strict";

// Class definition
var StudioContactsEdit = (function () {
  // Base elements
  var avatar;

  var initAvatar = function () {
    avatar = new StudioAvatar("kt_contacts_edit_avatar");
  };

  return {
    // public functions
    init: function () {
      initAvatar();
    },
  };
})();

jQuery(document).ready(function () {
  StudioContactsEdit.init();
});
