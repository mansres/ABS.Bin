"use strict";

// Class Definition
var StudioLoginGeneral = (function () {
  var login = $("#abs_login");

  var showErrorMsg = function (form, type, msg) {
    var alert = $(
      '<div class="alert alert-' +
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
    //alert.animateClass('fadeIn animated');
    StudioUtil.animateClass(alert[0], "fadeIn animated");
    alert.find("span").html(msg);
  };

  // Private Functions
  var displaySignUpForm = function () {
    login.removeClass("abs-login--forgot");
    login.removeClass("abs-login--signin");

    login.addClass("abs-login--signup");
    StudioUtil.animateClass(
      login.find(".abs-login_signup")[0],
      "flipInX animated"
    );
  };

  var displaySignInForm = function () {
    login.removeClass("abs-login--forgot");
    login.removeClass("abs-login--signup");

    login.addClass("abs-login--signin");
    StudioUtil.animateClass(
      login.find(".abs-login_signin")[0],
      "flipInX animated"
    );
    //login.find('.abs-login_signin').animateClass('flipInX animated');
  };

  var displayForgotForm = function () {
    login.removeClass("abs-login--signin");
    login.removeClass("abs-login--signup");

    login.addClass("abs-login--forgot");
    //login.find('.abs-login--forgot').animateClass('flipInX animated');
    StudioUtil.animateClass(
      login.find(".abs-login_forgot")[0],
      "flipInX animated"
    );
  };

  var handleFormSwitch = function () {
    $("#abs_login_forgot").click(function (e) {
      e.preventDefault();
      displayForgotForm();
    });

    $("#abs_login_forgot_cancel").click(function (e) {
      e.preventDefault();
      displaySignInForm();
    });

    $("#abs_login_signup").click(function (e) {
      e.preventDefault();
      displaySignUpForm();
    });

    $("#abs_login_signup_cancel").click(function (e) {
      e.preventDefault();
      displaySignInForm();
    });
  };

  var handleSignInFormSubmit = function () {
    $("#abs_login_signin_submit").click(function (e) {
      e.preventDefault();
      var btn = $(this);
      var form = $(this).closest("form");

      form.validate({
        rules: {
          email: {
            required: true,
            email: true,
          },
          password: {
            required: true,
          },
        },
      });

      if (!form.valid()) {
        return;
      }

      btn
        .addClass(
          "abs-spinner abs-spinner--right abs-spinner--sm abs-spinner--light"
        )
        .attr("disabled", true);

      form.ajaxSubmit({
        url: "",
        success: function (response, status, xhr, $form) {
          // similate 2s delay
          setTimeout(function () {
            btn
              .removeClass(
                "abs-spinner abs-spinner--right abs-spinner--sm abs-spinner--light"
              )
              .attr("disabled", false);
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

  var handleSignUpFormSubmit = function () {
    $("#abs_login_signup_submit").click(function (e) {
      e.preventDefault();

      var btn = $(this);
      var form = $(this).closest("form");

      form.validate({
        rules: {
          fullname: {
            required: true,
          },
          email: {
            required: true,
            email: true,
          },
          password: {
            required: true,
          },
          rpassword: {
            required: true,
          },
          agree: {
            required: true,
          },
        },
      });

      if (!form.valid()) {
        return;
      }

      btn
        .addClass(
          "abs-spinner abs-spinner--right abs-spinner--sm abs-spinner--light"
        )
        .attr("disabled", true);

      form.ajaxSubmit({
        url: "",
        success: function (response, status, xhr, $form) {
          // similate 2s delay
          setTimeout(function () {
            btn
              .removeClass(
                "abs-spinner abs-spinner--right abs-spinner--sm abs-spinner--light"
              )
              .attr("disabled", false);
            form.clearForm();
            form.validate().resetForm();

            // display signup form
            displaySignInForm();
            var signInForm = login.find(".abs-login_signin form");
            signInForm.clearForm();
            signInForm.validate().resetForm();

            showErrorMsg(
              signInForm,
              "success",
              "Thank you. To complete your registration please check your email."
            );
          }, 2000);
        },
      });
    });
  };

  var handleForgotFormSubmit = function () {
    $("#abs_login_forgot_submit").click(function (e) {
      e.preventDefault();

      var btn = $(this);
      var form = $(this).closest("form");

      form.validate({
        rules: {
          email: {
            required: true,
            email: true,
          },
        },
      });

      if (!form.valid()) {
        return;
      }

      btn
        .addClass(
          "abs-spinner abs-spinner--right abs-spinner--sm abs-spinner--light"
        )
        .attr("disabled", true);

      form.ajaxSubmit({
        url: "",
        success: function (response, status, xhr, $form) {
          // similate 2s delay
          setTimeout(function () {
            btn
              .removeClass(
                "abs-spinner abs-spinner--right abs-spinner--sm abs-spinner--light"
              )
              .attr("disabled", false); // remove
            form.clearForm(); // clear form
            form.validate().resetForm(); // reset validation states

            // display signup form
            displaySignInForm();
            var signInForm = login.find(".abs-login_signin form");
            signInForm.clearForm();
            signInForm.validate().resetForm();

            showErrorMsg(
              signInForm,
              "success",
              "Cool! Password recovery instruction has been sent to your email."
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
      handleFormSwitch();
      handleSignInFormSubmit();
      handleSignUpFormSubmit();
      handleForgotFormSubmit();
    },
  };
})();

// Class Initialization
jQuery(document).ready(function () {
  StudioLoginGeneral.init();
});
