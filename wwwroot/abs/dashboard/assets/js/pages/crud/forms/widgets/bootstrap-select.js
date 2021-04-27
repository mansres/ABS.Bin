// Class definition

var StudioBootstrapSelect = (function () {
  // Private functions
  var demos = function () {
    // minimum setup
    $(".abs-selectpicker").selectpicker();
  };

  return {
    // public functions
    init: function () {
      demos();
    },
  };
})();

jQuery(document).ready(function () {
  StudioBootstrapSelect.init();
});
