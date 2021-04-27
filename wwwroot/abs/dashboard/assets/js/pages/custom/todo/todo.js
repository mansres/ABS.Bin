"use strict";

// Class definition
var StudioAppTodo = (function () {
  var asideEl;
  var listEl;
  var viewEl;

  var asideOffcanvas;

  var initEditor = function (editor) {
    // init editor
    var options = {
      modules: {
        toolbar: {},
      },
      placeholder: "Type message...",
      theme: "snow",
    };

    var editor = new Quill("#" + editor, options);
  };

  var initAttachments = function (elemId) {
    var id = "#" + elemId;
    var previewNode = $(id + " .dropzone-item");
    previewNode.id = "";
    var previewTemplate = previewNode.parent(".dropzone-items").html();
    previewNode.remove();

    var myDropzone = new Dropzone(id, {
      // Make the whole body a dropzone
      url: "https://fenix-alliance.com/scripts/void.php", // Set the url for your upload script location
      parallelUploads: 20,
      maxFilesize: 1, // Max filesize in MB
      previewTemplate: previewTemplate,
      previewsContainer: id + " .dropzone-items", // Define the container to display the previews
      clickable: id + "_select", // Define the element that should be used as click trigger to select files.
    });

    myDropzone.on("addedfile", function (file) {
      // Hookup the start button
      $(document)
        .find(id + " .dropzone-item")
        .css("display", "");
    });

    // Update the total progress bar
    myDropzone.on("totaluploadprogress", function (progress) {
      document.querySelector(id + " .progress-bar").style.width =
        progress + "%";
    });

    myDropzone.on("sending", function (file) {
      // Show the total progress bar when upload starts
      document.querySelector(id + " .progress-bar").style.opacity = "1";
    });

    // Hide the total progress bar when nothing's uploading anymore
    myDropzone.on("complete", function (progress) {
      var thisProgressBar = id + " .dz-complete";
      setTimeout(function () {
        $(
          thisProgressBar + " .progress-bar, " + thisProgressBar + " .progress"
        ).css("opacity", "0");
      }, 300);
    });
  };

  return {
    // public functions
    init: function () {
      asideEl = StudioUtil.getByID("kt_todo_aside");
      listEl = StudioUtil.getByID("kt_todo_list");
      viewEl = StudioUtil.getByID("kt_todo_view");

      // init
      StudioAppTodo.initAside();
      StudioAppTodo.initList();
      StudioAppTodo.initCommentForm();
      StudioAppTodo.initView();
    },

    initAside: function () {
      // Mobile offcanvas for mobile mode
      asideOffcanvas = new StudioOffcanvas(asideEl, {
        overlay: true,
        baseClass: "abs-todo_aside",
        closeBy: "kt_todo_aside_close",
        toggleBy: "kt_subheader_mobile_toggle",
      });
    },

    initList: function () {
      // View message
      StudioUtil.on(listEl, ".abs-todo_item", "click", function (e) {
        var actionsEl = StudioUtil.find(this, ".abs-todo_actions");

        // skip actions click
        if (
          e.target === actionsEl ||
          (actionsEl && actionsEl.contains(e.target) === true)
        ) {
          return false;
        }

        if (StudioUtil.isInResponsiveRange("tablet-and-mobile") === false) {
          return; // mobile mode
        }

        // demo loading
        var loading = new StudioDialog({
          type: "loader",
          placement: "top center",
          message: "Loading ...",
        });
        loading.show();

        setTimeout(function () {
          loading.hide();

          StudioUtil.css(listEl, "display", "none");
          StudioUtil.css(viewEl, "display", "flex");
        }, 700);
      });

      // Group selection
      StudioUtil.on(
        listEl,
        ".abs-todo_toolbar .abs-todo_check .abs-checkbox input",
        "click",
        function () {
          var items = StudioUtil.findAll(
            listEl,
            ".abs-todo_items .abs-todo_item"
          );

          for (var i = 0, j = items.length; i < j; i++) {
            var item = items[i];
            var checkbox = StudioUtil.find(
              item,
              ".abs-todo_actions .abs-checkbox input"
            );
            checkbox.checked = this.checked;

            if (this.checked) {
              StudioUtil.addClass(item, "abs-todo_item--selected");
            } else {
              StudioUtil.removeClass(item, "abs-todo_item--selected");
            }
          }
        }
      );

      // Individual selection
      StudioUtil.on(
        listEl,
        ".abs-todo_item .abs-checkbox input",
        "click",
        function () {
          var item = this.closest(".abs-todo_item");

          if (item && this.checked) {
            StudioUtil.addClass(item, "abs-todo_item--selected");
          } else {
            StudioUtil.removeClass(item, "abs-todo_item--selected");
          }
        }
      );
    },

    initView: function () {
      // Back to listing
      StudioUtil.on(
        viewEl,
        ".abs-todo_toolbar .abs-todo_icon.abs-todo_icon--back",
        "click",
        function () {
          // demo loading
          var loading = new StudioDialog({
            type: "loader",
            placement: "top center",
            message: "Loading ...",
          });
          loading.show();

          setTimeout(function () {
            loading.hide();

            StudioUtil.css(listEl, "display", "flex");
            StudioUtil.css(viewEl, "display", "none");
          }, 700);
        }
      );
    },

    initCommentForm: function () {
      initEditor("kt_todo_post_editor");
      initAttachments("kt_todo_post_attachments");
    },
  };
})();

StudioUtil.ready(function () {
  StudioAppTodo.init();
});
