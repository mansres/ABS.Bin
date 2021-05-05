"use strict";

var StudioSessionTimeoutDemo = (function () {
  var initDemo = function () {
    $.sessionTimeout({
      title: "Session Timeout Notification",
      message:
        "For security reasons, your ABS session is about to expire due to inactivity.",
      keepAlive: false,
      redirUrl: "/Account/SignOut",
      logoutUrl: "/Account/SignOut",
      warnAfter: 1800000, //warn after 30 minutes
      redirAfter: 2100000, //redirect after 35 min seconds,
      ignoreUserActivity: false,
      countdownMessage: "Redirecting in {timer} seconds.",
      countdownBar: true,
    });
  };

  return {
    //main function to initiate the module
    init: function () {
      initDemo();
    },
  };
})();

jQuery(document).ready(function () {
  StudioSessionTimeoutDemo.init();
});
