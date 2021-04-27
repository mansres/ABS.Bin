"use strict";
// Class definition

var StudioCkeditorBalloon = (function () {
  // Private functions
  var demos = function () {
    BalloonEditor.create(document.querySelector("#abs-ckeditor-1"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });

    BalloonEditor.create(document.querySelector("#abs-ckeditor-2"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });

    BalloonEditor.create(document.querySelector("#abs-ckeditor-3"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });

    BalloonEditor.create(document.querySelector("#abs-ckeditor-4"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });

    BalloonEditor.create(document.querySelector("#abs-ckeditor-5"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    // public functions
    init: function () {
      demos();
    },
  };
})();

// Initialization
jQuery(document).ready(function () {
  StudioCkeditorBalloon.init();
});
