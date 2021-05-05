"use strict";
// Class definition

var StudioCkeditorInline = (function () {
  // Private functions
  var demos = function () {
    InlineEditor.create(document.querySelector("#abs-ckeditor-1"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });

    InlineEditor.create(document.querySelector("#abs-ckeditor-2"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });

    InlineEditor.create(document.querySelector("#abs-ckeditor-3"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });

    InlineEditor.create(document.querySelector("#abs-ckeditor-4"))
      .then((editor) => {
        console.log(editor);
      })
      .catch((error) => {
        console.error(error);
      });

    InlineEditor.create(document.querySelector("#abs-ckeditor-5"))
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
  StudioCkeditorInline.init();
});
