"use strict";

// Class definition
var StudioAvatarDemo = (function () {
  // Private functions
  var initDemos = function () {
    var avatar1 = new StudioAvatar("kt_user_avatar_1");
    var avatar2 = new StudioAvatar("kt_user_avatar_2");
    var avatar3 = new StudioAvatar("kt_user_avatar_3");
    var avatar4 = new StudioAvatar("kt_user_avatar_4");
  };

  return {
    // public functions
    init: function () {
      initDemos();
    },
  };
})();

StudioUtil.ready(function () {
  StudioAvatarDemo.init();
});
