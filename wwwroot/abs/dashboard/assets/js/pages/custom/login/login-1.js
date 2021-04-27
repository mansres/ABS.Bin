"use strict";

// Class Definition
var StudioLoginV1 = (function () {
  var login = $("#abs_login");

  var showErrorMsg = function (form, type, msg) {
    var alert = $(
      '<div class="alert alert-bold alert-solid-' +
        type +
        ' alert-dismissible" role="alert">\
			<div class="alert-text">' +
        msg +
        '</div>\
			<div class="alert-close">\
                <i class="flaticon2-cross abs-icon-sm" data-dismiss="alert"></i>\
            </div>\
		</div>'
    );

    form.find(".alert").remove();
    alert.prependTo(form);
    StudioUtil.animateClass(alert[0], "fadeIn animated");
  };

  // Private Functions
  var handleSignInFormSubmit = function () {
    $("#abs_login_signin_submit").click(function (e) {
      e.preventDefault();

      var btn = $(this);
      var form = $("#abs_login_form");

      form.validate({
        rules: {
          username: {
            required: true,
          },
          password: {
            required: true,
          },
        },
      });

      if (!form.valid()) {
        return;
      }

      StudioApp.progress(btn[0]);

      setTimeout(function () {
        StudioApp.unprogress(btn[0]);
      }, 2000);

      // ajax form submit:  http://jquery.malsup.com/form/
      form.ajaxSubmit({
        url: "",
        success: function (response, status, xhr, $form) {
          // similate 2s delay
          setTimeout(function () {
            StudioApp.unprogress(btn[0]);
            showErrorMsg(
              form,
              "danger",
              "Incorrect username or password. Please try again."
            );
          }, 2000);
        },
      });
    });
  };

  // Public Functions
  return {
    // public functions
    init: function () {
      handleSignInFormSubmit();
    },
  };
})();

// Class Initialization
jQuery(document).ready(function () {
  StudioLoginV1.init();
});
