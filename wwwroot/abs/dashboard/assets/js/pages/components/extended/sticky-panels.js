"use strict";
// Class definition
// Based on:  https://github.com/rgalus/sticky-js

var StudioStickyPanelsDemo = (function () {
  // Private functions

  // Basic demo
  var demo1 = function () {
    if (StudioLayout.onAsideToggle) {
      var sticky = new Sticky(".sticky");

      StudioLayout.onAsideToggle(function () {
        setTimeout(function () {
          sticky.update(); // update sticky positions on aside toggle
        }, 500);
      });
    }
  };

  return {
    // public functions
    init: function () {
      demo1();
    },
  };
})();

jQuery(document).ready(function () {
  StudioStickyPanelsDemo.init();
});
