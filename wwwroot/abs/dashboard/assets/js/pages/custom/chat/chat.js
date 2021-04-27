"use strict";

// Class definition
var StudioAppChat = (function () {
  var chatAsideEl;
  var chatContentEl;

  // Private functions
  var initAside = function () {
    // Mobile offcanvas for mobile mode
    var offcanvas = new StudioOffcanvas(chatAsideEl, {
      overlay: true,
      baseClass: "abs-app_aside",
      closeBy: "kt_chat_aside_close",
      toggleBy: "kt_chat_aside_mobile_toggle",
    });

    // User listing
    var userListEl = StudioUtil.find(chatAsideEl, ".abs-scroll");
    if (!userListEl) {
      return;
    }

    // Initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar)
    StudioUtil.scrollInit(userListEl, {
      mobileNativeScroll: true, // enable native scroll for mobile
      desktopNativeScroll: false, // disable native scroll and use custom scroll for desktop
      resetHeightOnDestroy: true, // reset css height on scroll feature destroyed
      handleWindowResize: true, // recalculate hight on window resize
      rememberPosition: true, // remember scroll position in cookie
      height: function () {
        // calculate height
        var height;
        var portletBodyEl = StudioUtil.find(
          chatAsideEl,
          ".abs-portlet > .abs-portlet_body"
        );
        var widgetEl = StudioUtil.find(
          chatAsideEl,
          ".abs-widget.abs-widget--users"
        );
        var searchbarEl = StudioUtil.find(chatAsideEl, ".abs-searchbar");

        if (StudioUtil.isInResponsiveRange("desktop")) {
          height = StudioLayout.getContentHeight();
        } else {
          height = StudioUtil.getViewPort().height;
        }

        if (chatAsideEl) {
          height =
            height -
            parseInt(StudioUtil.css(chatAsideEl, "margin-top")) -
            parseInt(StudioUtil.css(chatAsideEl, "margin-bottom"));
          height =
            height -
            parseInt(StudioUtil.css(chatAsideEl, "padding-top")) -
            parseInt(StudioUtil.css(chatAsideEl, "padding-bottom"));
        }

        if (widgetEl) {
          height =
            height -
            parseInt(StudioUtil.css(widgetEl, "margin-top")) -
            parseInt(StudioUtil.css(widgetEl, "margin-bottom"));
          height =
            height -
            parseInt(StudioUtil.css(widgetEl, "padding-top")) -
            parseInt(StudioUtil.css(widgetEl, "padding-bottom"));
        }

        if (portletBodyEl) {
          height =
            height -
            parseInt(StudioUtil.css(portletBodyEl, "margin-top")) -
            parseInt(StudioUtil.css(portletBodyEl, "margin-bottom"));
          height =
            height -
            parseInt(StudioUtil.css(portletBodyEl, "padding-top")) -
            parseInt(StudioUtil.css(portletBodyEl, "padding-bottom"));
        }

        if (searchbarEl) {
          height = height - parseInt(StudioUtil.css(searchbarEl, "height"));
          height =
            height -
            parseInt(StudioUtil.css(searchbarEl, "margin-top")) -
            parseInt(StudioUtil.css(searchbarEl, "margin-bottom"));
        }

        // remove additional space
        height = height - 5;

        return height;
      },
    });
  };

  return {
    // public functions
    init: function () {
      // elements
      chatAsideEl = StudioUtil.getByID("kt_chat_aside");

      // init aside and user list
      initAside();

      // init inline chat example
      StudioChat.setup(StudioUtil.getByID("kt_chat_content"));

      // trigger click to show popup modal chat on page load
      if (StudioUtil.getByID("kt_app_chat_launch_btn")) {
        setTimeout(function () {
          StudioUtil.getByID("kt_app_chat_launch_btn").click();
        }, 1000);
      }
    },
  };
})();

StudioUtil.ready(function () {
  StudioAppChat.init();
});
