// Class definition

var StudioBootstrapSwitch = (function () {
  // Private functions
  var demos = function () {
    // minimum setup
    $("[data-switch=true]").bootstrapSwitch();
  };

  return {
    // public functions
    init: function () {
      demos();
    },
  };
})();

jQuery(document).ready(function () {
  StudioBootstrapSwitch.init();
});
