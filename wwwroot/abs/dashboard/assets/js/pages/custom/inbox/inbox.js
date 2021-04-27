"use strict";

// Class definition
var StudioAppInbox = (function () {
  var asideEl;
  var listEl;
  var viewEl;
  var composeEl;

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

  var initForm = function (formEl) {
    var formEl = StudioUtil.getByID(formEl);

    // Init autocompletes
    var toEl = StudioUtil.find(formEl, "[name=compose_to]");
    var tagifyTo = new Tagify(toEl, {
      delimiters: ", ", // add new tags when a comma or a space character is entered
      maxTags: 10,
      blacklist: ["fuck", "shit", "pussy"],
      keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
      whitelist: [
        {
          value: "Chris Muller",
          email: "chris.muller@wix.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_11.jpg",
          class: "tagify_tag--brand",
        },
        {
          value: "Nick Bold",
          email: "nick.seo@gmail.com",
          initials: "SS",
          initialsState: "warning",
          pic: "",
        },
        {
          value: "Alon Silko",
          email: "alon@fenix-alliance.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_6.jpg",
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_8.jpg",
        },
        {
          value: "Sara Loran",
          email: "sara.loran@tilda.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_9.jpg",
        },
        {
          value: "Eric Davok",
          email: "davok@mix.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_13.jpg",
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_13.jpg",
        },
        {
          value: "Lina Nilson",
          email: "lina.nilson@loop.com",
          initials: "LN",
          initialsState: "danger",
          pic: "./assets/media/users/100_15.jpg",
        },
      ],
      templates: {
        dropdownItem: function (tagData) {
          try {
            var html = "";

            html += '<div class="tagify_dropdown_item">';
            html += '   <div class="abs-media-card">';
            html +=
              '       <span class="abs-media abs-media--' +
              (tagData.initialsState ? tagData.initialsState : "") +
              '" style="background-image: url(\'' +
              (tagData.pic ? tagData.pic : "") +
              "')\">";
            html +=
              "           <span>" +
              (tagData.initials ? tagData.initials : "") +
              "</span>";
            html += "       </span>";
            html += '       <div class="abs-media-card_info">';
            html +=
              '           <a href="#" class="abs-media-card_title">' +
              (tagData.value ? tagData.value : "") +
              "</a>";
            html +=
              '           <span class="abs-media-card_desc">' +
              (tagData.email ? tagData.email : "") +
              "</span>";
            html += "       </div>";
            html += "   </div>";
            html += "</div>";

            return html;
          } catch (err) {}
        },
      },
      transformTag: function (tagData) {
        tagData.class = "tagify_tag tagify_tag--brand";
      },
      dropdown: {
        classname: "color-blue",
        enabled: 1,
        maxItems: 5,
      },
    });

    var ccEl = StudioUtil.find(formEl, "[name=compose_cc]");
    var tagifyC = new Tagify(ccEl, {
      delimiters: ", ", // add new tags when a comma or a space character is entered
      maxTags: 10,
      blacklist: ["fuck", "shit", "pussy"],
      keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
      whitelist: [
        {
          value: "Chris Muller",
          email: "chris.muller@wix.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_11.jpg",
          class: "tagify_tag--brand",
        },
        {
          value: "Nick Bold",
          email: "nick.seo@gmail.com",
          initials: "SS",
          initialsState: "warning",
          pic: "",
        },
        {
          value: "Alon Silko",
          email: "alon@fenix-alliance.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_6.jpg",
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_8.jpg",
        },
        {
          value: "Sara Loran",
          email: "sara.loran@tilda.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_9.jpg",
        },
        {
          value: "Eric Davok",
          email: "davok@mix.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_13.jpg",
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_13.jpg",
        },
        {
          value: "Lina Nilson",
          email: "lina.nilson@loop.com",
          initials: "LN",
          initialsState: "danger",
          pic: "./assets/media/users/100_15.jpg",
        },
      ],
      templates: {
        dropdownItem: function (tagData) {
          try {
            var html = "";

            html += '<div class="tagify_dropdown_item">';
            html += '   <div class="abs-media-card">';
            html +=
              '       <span class="abs-media abs-media--' +
              (tagData.initialsState ? tagData.initialsState : "") +
              '" style="background-image: url(\'' +
              (tagData.pic ? tagData.pic : "") +
              "')\">";
            html +=
              "           <span>" +
              (tagData.initials ? tagData.initials : "") +
              "</span>";
            html += "       </span>";
            html += '       <div class="abs-media-card_info">';
            html +=
              '           <a href="#" class="abs-media-card_title">' +
              (tagData.value ? tagData.value : "") +
              "</a>";
            html +=
              '           <span class="abs-media-card_desc">' +
              (tagData.email ? tagData.email : "") +
              "</span>";
            html += "       </div>";
            html += "   </div>";
            html += "</div>";

            return html;
          } catch (err) {}
        },
      },
      transformTag: function (tagData) {
        tagData.class = "tagify_tag tagify_tag--brand";
      },
      dropdown: {
        classname: "color-blue",
        enabled: 1,
        maxItems: 5,
      },
    });

    var bccEl = StudioUtil.find(formEl, "[name=compose_bcc]");
    var tagifyBcc = new Tagify(bccEl, {
      delimiters: ", ", // add new tags when a comma or a space character is entered
      maxTags: 10,
      blacklist: ["fuck", "shit", "pussy"],
      keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
      whitelist: [
        {
          value: "Chris Muller",
          email: "chris.muller@wix.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_11.jpg",
          class: "tagify_tag--brand",
        },
        {
          value: "Nick Bold",
          email: "nick.seo@gmail.com",
          initials: "SS",
          initialsState: "warning",
          pic: "",
        },
        {
          value: "Alon Silko",
          email: "alon@fenix-alliance.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_6.jpg",
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_8.jpg",
        },
        {
          value: "Sara Loran",
          email: "sara.loran@tilda.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_9.jpg",
        },
        {
          value: "Eric Davok",
          email: "davok@mix.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_13.jpg",
        },
        {
          value: "Sam Seanic",
          email: "sam.senic@loop.com",
          initials: "",
          initialsState: "",
          pic: "./assets/media/users/100_13.jpg",
        },
        {
          value: "Lina Nilson",
          email: "lina.nilson@loop.com",
          initials: "LN",
          initialsState: "danger",
          pic: "./assets/media/users/100_15.jpg",
        },
      ],
      templates: {
        dropdownItem: function (tagData) {
          try {
            var html = "";

            html += '<div class="tagify_dropdown_item">';
            html += '   <div class="abs-media-card">';
            html +=
              '       <span class="abs-media abs-media--' +
              (tagData.initialsState ? tagData.initialsState : "") +
              '" style="background-image: url(\'' +
              (tagData.pic ? tagData.pic : "") +
              "')\">";
            html +=
              "           <span>" +
              (tagData.initials ? tagData.initials : "") +
              "</span>";
            html += "       </span>";
            html += '       <div class="abs-media-card_info">';
            html +=
              '           <a href="#" class="abs-media-card_title">' +
              (tagData.value ? tagData.value : "") +
              "</a>";
            html +=
              '           <span class="abs-media-card_desc">' +
              (tagData.email ? tagData.email : "") +
              "</span>";
            html += "       </div>";
            html += "   </div>";
            html += "</div>";

            return html;
          } catch (err) {}
        },
      },
      transformTag: function (tagData) {
        tagData.class = "tagify_tag tagify_tag--brand";
      },
      dropdown: {
        classname: "color-blue",
        enabled: 1,
        maxItems: 5,
      },
    });

    // CC input display
    StudioUtil.on(
      formEl,
      ".abs-inbox_to .abs-inbox_tool.abs-inbox_tool--cc",
      "click",
      function (e) {
        var inputEl = StudioUtil.find(formEl, ".abs-inbox_to");
        StudioUtil.addClass(inputEl, "abs-inbox_to--cc");
        StudioUtil.find(formEl, "[name=compose_cc]").focus();
      }
    );

    // CC input hide
    StudioUtil.on(
      formEl,
      ".abs-inbox_to .abs-inbox_field.abs-inbox_field--cc .abs-inbox_icon--delete",
      "click",
      function (e) {
        var inputEl = StudioUtil.find(formEl, ".abs-inbox_to");
        StudioUtil.removeClass(inputEl, "abs-inbox_to--cc");
      }
    );

    // BCC input display
    StudioUtil.on(
      formEl,
      ".abs-inbox_to .abs-inbox_tool.abs-inbox_tool--bcc",
      "click",
      function (e) {
        var inputEl = StudioUtil.find(formEl, ".abs-inbox_to");
        StudioUtil.addClass(inputEl, "abs-inbox_to--bcc");
        StudioUtil.find(formEl, "[name=compose_bcc]").focus();
      }
    );

    // BCC input hide
    StudioUtil.on(
      formEl,
      ".abs-inbox_to .abs-inbox_field.abs-inbox_field--bcc .abs-inbox_icon--delete",
      "click",
      function (e) {
        var inputEl = StudioUtil.find(formEl, ".abs-inbox_to");
        StudioUtil.removeClass(inputEl, "abs-inbox_to--bcc");
      }
    );
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
      asideEl = StudioUtil.getByID("abs_inbox_aside");
      listEl = StudioUtil.getByID("abs_inbox_list");
      viewEl = StudioUtil.getByID("abs_inbox_view");
      composeEl = StudioUtil.getByID("abs_inbox_compose");

      // init
      StudioAppInbox.initAside();
      StudioAppInbox.initList();
      StudioAppInbox.initView();
      StudioAppInbox.initReply();
      StudioAppInbox.initCompose();
    },

    initAside: function () {
      // Mobile offcanvas for mobile mode
      asideOffcanvas = new StudioOffcanvas(asideEl, {
        overlay: true,
        baseClass: "abs-inbox_aside",
        closeBy: "abs_inbox_aside_close",
        toggleBy: "abs_subheader_mobile_toggle",
      });

      // View list
      StudioUtil.on(
        asideEl,
        '.abs-nav_item .abs-nav_link[data-action="list"]',
        "click",
        function (e) {
          var type = StudioUtil.attr(this, "data-type");
          var listItemsEl = StudioUtil.find(listEl, ".abs-inbox_items");
          var navItemEl = this.closest(".abs-nav_item");
          var navItemActiveEl = StudioUtil.find(
            asideEl,
            ".abs-nav_item.abs-nav_item--active"
          );

          // demo loading
          var loading = new StudioDialog({
            type: "loader",
            placement: "top center",
            message: "Loading ...",
          });
          loading.show();

          setTimeout(function () {
            loading.hide();

            StudioUtil.css(listEl, "display", "flex"); // show list
            StudioUtil.css(viewEl, "display", "none"); // hide view

            StudioUtil.addClass(navItemEl, "abs-nav_item--active");
            StudioUtil.removeClass(navItemActiveEl, "abs-nav_item--active");

            StudioUtil.attr(listItemsEl, "data-type", type);
          }, 600);
        }
      );
    },

    initList: function () {
      // View message
      StudioUtil.on(listEl, ".abs-inbox_item", "click", function (e) {
        var actionsEl = StudioUtil.find(this, ".abs-inbox_actions");

        // skip actions click
        if (
          e.target === actionsEl ||
          (actionsEl && actionsEl.contains(e.target) === true)
        ) {
          return false;
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
        ".abs-inbox_toolbar .abs-inbox_check .abs-checkbox input",
        "click",
        function () {
          var items = StudioUtil.findAll(
            listEl,
            ".abs-inbox_items .abs-inbox_item"
          );

          for (var i = 0, j = items.length; i < j; i++) {
            var item = items[i];
            var checkbox = StudioUtil.find(
              item,
              ".abs-inbox_actions .abs-checkbox input"
            );
            checkbox.checked = this.checked;

            if (this.checked) {
              StudioUtil.addClass(item, "abs-inbox_item--selected");
            } else {
              StudioUtil.removeClass(item, "abs-inbox_item--selected");
            }
          }
        }
      );

      // Individual selection
      StudioUtil.on(
        listEl,
        ".abs-inbox_item .abs-checkbox input",
        "click",
        function () {
          var item = this.closest(".abs-inbox_item");

          if (item && this.checked) {
            StudioUtil.addClass(item, "abs-inbox_item--selected");
          } else {
            StudioUtil.removeClass(item, "abs-inbox_item--selected");
          }
        }
      );
    },

    initView: function () {
      // Back to listing
      StudioUtil.on(
        viewEl,
        ".abs-inbox_toolbar .abs-inbox_icon.abs-inbox_icon--back",
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

      // Expand/Collapse reply
      StudioUtil.on(
        viewEl,
        ".abs-inbox_messages .abs-inbox_message .abs-inbox_head",
        "click",
        function (e) {
          var dropdownToggleEl = StudioUtil.find(
            this,
            ".abs-inbox_details .abs-inbox_tome .abs-inbox_label"
          );
          var groupActionsEl = StudioUtil.find(
            this,
            ".abs-inbox_actions .abs-inbox_group"
          );

          // skip dropdown toggle click
          if (
            e.target === dropdownToggleEl ||
            (dropdownToggleEl && dropdownToggleEl.contains(e.target) === true)
          ) {
            return false;
          }

          // skip group actions click
          if (
            e.target === groupActionsEl ||
            (groupActionsEl && groupActionsEl.contains(e.target) === true)
          ) {
            return false;
          }

          var message = this.closest(".abs-inbox_message");

          if (StudioUtil.hasClass(message, "abs-inbox_message--expanded")) {
            StudioUtil.removeClass(message, "abs-inbox_message--expanded");
          } else {
            StudioUtil.addClass(message, "abs-inbox_message--expanded");
          }
        }
      );
    },

    initReply: function () {
      initEditor("abs_inbox_reply_editor");
      initAttachments("abs_inbox_reply_attachments");
      initForm("abs_inbox_reply_form");

      // Show/Hide reply form
      StudioUtil.on(
        viewEl,
        ".abs-inbox_reply .abs-inbox_actions .btn",
        "click",
        function (e) {
          var reply = this.closest(".abs-inbox_reply");

          if (StudioUtil.hasClass(reply, "abs-inbox_reply--on")) {
            StudioUtil.removeClass(reply, "abs-inbox_reply--on");
          } else {
            StudioUtil.addClass(reply, "abs-inbox_reply--on");
          }
        }
      );

      // Show reply form for messages
      StudioUtil.on(
        viewEl,
        ".abs-inbox_message .abs-inbox_actions .abs-inbox_group .abs-inbox_icon.abs-inbox_icon--reply",
        "click",
        function (e) {
          var reply = StudioUtil.find(viewEl, ".abs-inbox_reply");
          StudioUtil.addClass(reply, "abs-inbox_reply--on");
        }
      );

      // Remove reply form
      StudioUtil.on(
        viewEl,
        ".abs-inbox_reply .abs-inbox_foot .abs-inbox_icon--remove",
        "click",
        function (e) {
          var reply = this.closest(".abs-inbox_reply");

          swal
            .fire({
              text: "Are you sure to discard this reply ?",
              //type: "error",
              buttonsStyling: false,

              confirmButtonText: "Discard reply",
              confirmButtonClass: "btn btn-danger",

              showCancelButton: true,
              cancelButtonText: "Cancel",
              cancelButtonClass: "btn btn-label-brand",
            })
            .then(function (result) {
              if (StudioUtil.hasClass(reply, "abs-inbox_reply--on")) {
                StudioUtil.removeClass(reply, "abs-inbox_reply--on");
              }
            });
        }
      );
    },

    initCompose: function () {
      initEditor("abs_inbox_compose_editor");
      initAttachments("abs_inbox_compose_attachments");
      initForm("abs_inbox_compose_form");

      // Remove reply form
      StudioUtil.on(
        composeEl,
        ".abs-inbox_form .abs-inbox_foot .abs-inbox_secondary .abs-inbox_icon.abs-inbox_icon--remove",
        "click",
        function (e) {
          swal
            .fire({
              text: "Are you sure to discard this message ?",
              type: "danger",
              buttonsStyling: false,

              confirmButtonText: "Discard draft",
              confirmButtonClass: "btn btn-danger",

              showCancelButton: true,
              cancelButtonText: "Cancel",
              cancelButtonClass: "btn btn-label-brand",
            })
            .then(function (result) {
              $(composeEl).modal("hide");
            });
        }
      );
    },
  };
})();

StudioUtil.ready(function () {
  StudioAppInbox.init();
});
