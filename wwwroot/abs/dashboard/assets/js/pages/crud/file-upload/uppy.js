"use strict";

// Class definition
var StudioUppy = (function () {
  const Tus = Uppy.Tus;
  const ProgressBar = Uppy.ProgressBar;
  const StatusBar = Uppy.StatusBar;
  const FileInput = Uppy.FileInput;
  const Informer = Uppy.Informer;

  // to get uppy companions working, please refer to the official documentation here: https://uppy.io/docs/companion/
  const Dashboard = Uppy.Dashboard;
  const Dropbox = Uppy.Dropbox;
  const GoogleDrive = Uppy.GoogleDrive;
  const Instagram = Uppy.Instagram;
  const Webcam = Uppy.Webcam;

  // Private functions
  var initUppy1 = function () {
    var id = "#kt_uppy_1";

    var options = {
      proudlyDisplayPoweredByUppy: false,
      target: id,
      inline: true,
      replaceTargetContent: true,
      showProgressDetails: true,
      note: "No filetype restrictions.",
      height: 470,
      metaFields: [
        { id: "name", name: "Name", placeholder: "file name" },
        {
          id: "caption",
          name: "Caption",
          placeholder: "describe what the image is about",
        },
      ],
      browserBackButtonClose: true,
    };

    var uppyDashboard = Uppy.Core({
      autoProceed: true,
      restrictions: {
        maxFileSize: 1000000, // 1mb
        maxNumberOfFiles: 5,
        minNumberOfFiles: 1,
      },
    });

    uppyDashboard.use(Dashboard, options);
    uppyDashboard.use(Tus, { endpoint: "https://master.tus.io/files/" });
    uppyDashboard.use(GoogleDrive, {
      target: Dashboard,
      companionUrl: "https://companion.uppy.io",
    });
    uppyDashboard.use(Dropbox, {
      target: Dashboard,
      companionUrl: "https://companion.uppy.io",
    });
    uppyDashboard.use(Instagram, {
      target: Dashboard,
      companionUrl: "https://companion.uppy.io",
    });
    uppyDashboard.use(Webcam, { target: Dashboard });
  };

  var initUppy2 = function () {
    var id = "#kt_uppy_2";

    var options = {
      proudlyDisplayPoweredByUppy: false,
      target: id,
      inline: true,
      replaceTargetContent: true,
      showProgressDetails: true,
      note: "Images and video only, 2–3 files, up to 1 MB",
      height: 470,
      metaFields: [
        { id: "name", name: "Name", placeholder: "file name" },
        {
          id: "caption",
          name: "Caption",
          placeholder: "describe what the image is about",
        },
      ],
      browserBackButtonClose: true,
    };

    var uppyDashboard = Uppy.Core({
      autoProceed: true,
      restrictions: {
        maxFileSize: 1000000, // 1mb
        maxNumberOfFiles: 5,
        minNumberOfFiles: 1,
        allowedFileTypes: ["image/*", "video/*"],
      },
    });

    uppyDashboard.use(Dashboard, options);
    uppyDashboard.use(Tus, { endpoint: "https://master.tus.io/files/" });
  };

  var initUppy3 = function () {
    var id = "#kt_uppy_3";

    var uppyDrag = Uppy.Core({
      autoProceed: true,
      restrictions: {
        maxFileSize: 1000000, // 1mb
        maxNumberOfFiles: 5,
        minNumberOfFiles: 1,
        allowedFileTypes: ["image/*", "video/*"],
      },
    });

    uppyDrag.use(Uppy.DragDrop, { target: id + " .abs-uppy_drag" });
    uppyDrag.use(ProgressBar, {
      target: id + " .abs-uppy_progress",
      hideUploadButton: false,
      hideAfterFinish: false,
    });
    uppyDrag.use(Informer, { target: id + " .abs-uppy_informer" });
    uppyDrag.use(Tus, { endpoint: "https://master.tus.io/files/" });

    uppyDrag.on("complete", function (file) {
      var imagePreview = "";
      $.each(file.successful, function (index, value) {
        var imageType = /image/;
        var thumbnail = "";
        if (imageType.test(value.type)) {
          thumbnail =
            '<div class="abs-uppy_thumbnail"><img src="' +
            value.uploadURL +
            '"/></div>';
        }
        var sizeLabel = "bytes";
        var filesize = value.size;
        if (filesize > 1024) {
          filesize = filesize / 1024;
          sizeLabel = "kb";
          if (filesize > 1024) {
            filesize = filesize / 1024;
            sizeLabel = "MB";
          }
        }
        imagePreview +=
          '<div class="abs-uppy_thumbnail-container" data-id="' +
          value.id +
          '">' +
          thumbnail +
          ' <span class="abs-uppy_thumbnail-label">' +
          value.name +
          " (" +
          Math.round(filesize, 2) +
          " " +
          sizeLabel +
          ')</span><span data-id="' +
          value.id +
          '" class="abs-uppy_remove-thumbnail"><i class="flaticon2-cancel-music"></i></span></div>';
      });

      $(id + " .abs-uppy_thumbnails").append(imagePreview);
    });

    $(document).on(
      "click",
      id + " .abs-uppy_thumbnails .abs-uppy_remove-thumbnail",
      function () {
        var imageId = $(this).attr("data-id");
        uppyDrag.removeFile(imageId);
        $(
          id + ' .abs-uppy_thumbnail-container[data-id="' + imageId + '"'
        ).remove();
      }
    );
  };

  var initUppy4 = function () {
    var id = "#kt_uppy_4";

    var uppyDrag = Uppy.Core({
      autoProceed: false,
      restrictions: {
        maxFileSize: 1000000, // 1mb
        maxNumberOfFiles: 5,
        minNumberOfFiles: 1,
      },
    });

    uppyDrag.use(Uppy.DragDrop, { target: id + " .abs-uppy_drag" });
    uppyDrag.use(ProgressBar, { target: id + " .abs-uppy_progress" });
    uppyDrag.use(Informer, { target: id + " .abs-uppy_informer" });
    uppyDrag.use(Tus, { endpoint: "https://master.tus.io/files/" });

    uppyDrag.on("complete", function (file) {
      var imagePreview = "";
      $.each(file.successful, function (index, value) {
        var imageType = /image/;
        var thumbnail = "";
        if (imageType.test(value.type)) {
          thumbnail =
            '<div class="abs-uppy_thumbnail"><img src="' +
            value.uploadURL +
            '"/></div>';
        }
        var sizeLabel = "bytes";
        var filesize = value.size;
        if (filesize > 1024) {
          filesize = filesize / 1024;
          sizeLabel = "kb";
          if (filesize > 1024) {
            filesize = filesize / 1024;
            sizeLabel = "MB";
          }
        }
        imagePreview +=
          '<div class="abs-uppy_thumbnail-container" data-id="' +
          value.id +
          '">' +
          thumbnail +
          ' <span class="abs-uppy_thumbnail-label">' +
          value.name +
          " (" +
          Math.round(filesize, 2) +
          " " +
          sizeLabel +
          ')</span><span data-id="' +
          value.id +
          '" class="abs-uppy_remove-thumbnail"><i class="flaticon2-cancel-music"></i></span></div>';
      });

      $(id + " .abs-uppy_thumbnails").append(imagePreview);
    });

    var uploadBtn = $(id + " .abs-uppy_btn");
    uploadBtn.click(function () {
      uppyDrag.upload();
    });

    $(document).on(
      "click",
      id + " .abs-uppy_thumbnails .abs-uppy_remove-thumbnail",
      function () {
        var imageId = $(this).attr("data-id");
        uppyDrag.removeFile(imageId);
        $(
          id + ' .abs-uppy_thumbnail-container[data-id="' + imageId + '"'
        ).remove();
      }
    );
  };

  var initUppy5 = function () {
    // Uppy variables
    // For more info refer: https://uppy.io/
    var elemId = "kt_uppy_5";
    var id = "#" + elemId;
    var $statusBar = $(id + " .abs-uppy_status");
    var $uploadedList = $(id + " .abs-uppy_list");
    var timeout;

    var uppyMin = Uppy.Core({
      debug: true,
      autoProceed: true,
      showProgressDetails: true,
      restrictions: {
        maxFileSize: 1000000, // 1mb
        maxNumberOfFiles: 5,
        minNumberOfFiles: 1,
      },
    });

    uppyMin.use(FileInput, {
      target: id + " .abs-uppy_wrapper",
      pretty: false,
    });
    uppyMin.use(Informer, { target: id + " .abs-uppy_informer" });

    // demo file upload server
    uppyMin.use(Tus, { endpoint: "https://master.tus.io/files/" });
    uppyMin.use(StatusBar, {
      target: id + " .abs-uppy_status",
      hideUploadButton: true,
      hideAfterFinish: false,
    });

    $(id + " .uppy-FileInput-input")
      .addClass("abs-uppy_input-control")
      .attr("id", elemId + "_input_control");
    $(id + " .uppy-FileInput-container").append(
      '<label class="abs-uppy_input-label btn btn-label-brand btn-bold btn-font-sm" for="' +
        (elemId + "_input_control") +
        '">Attach files</label>'
    );

    var $fileLabel = $(id + " .abs-uppy_input-label");

    uppyMin.on("upload", function (data) {
      $fileLabel.text("Uploading...");
      $statusBar.addClass("abs-uppy_status--ongoing");
      $statusBar.removeClass("abs-uppy_status--hidden");
      clearTimeout(timeout);
    });

    uppyMin.on("complete", function (file) {
      $.each(file.successful, function (index, value) {
        var sizeLabel = "bytes";
        var filesize = value.size;
        if (filesize > 1024) {
          filesize = filesize / 1024;
          sizeLabel = "kb";

          if (filesize > 1024) {
            filesize = filesize / 1024;
            sizeLabel = "MB";
          }
        }
        var uploadListHtml =
          '<div class="abs-uppy_list-item" data-id="' +
          value.id +
          '"><div class="abs-uppy_list-label">' +
          value.name +
          " (" +
          Math.round(filesize, 2) +
          " " +
          sizeLabel +
          ')</div><span class="abs-uppy_list-remove" data-id="' +
          value.id +
          '"><i class="flaticon2-cancel-music"></i></span></div>';
        $uploadedList.append(uploadListHtml);
      });

      $fileLabel.text("Add more files");

      $statusBar.addClass("abs-uppy_status--hidden");
      $statusBar.removeClass("abs-uppy_status--ongoing");
    });

    $(document).on(
      "click",
      id + " .abs-uppy_list .abs-uppy_list-remove",
      function () {
        var itemId = $(this).attr("data-id");
        uppyMin.removeFile(itemId);
        $(id + ' .abs-uppy_list-item[data-id="' + itemId + '"').remove();
      }
    );
  };

  var initUppy6 = function () {
    var id = "#kt_uppy_6";
    var options = {
      proudlyDisplayPoweredByUppy: false,
      target: id + " .abs-uppy_dashboard",
      inline: false,
      replaceTargetContent: true,
      showProgressDetails: true,
      note: "No filetype restrictions.",
      height: 470,
      metaFields: [
        { id: "name", name: "Name", placeholder: "file name" },
        {
          id: "caption",
          name: "Caption",
          placeholder: "describe what the image is about",
        },
      ],
      browserBackButtonClose: true,
      trigger: id + " .abs-uppy_btn",
    };

    var uppyDashboard = Uppy.Core({
      autoProceed: true,
      restrictions: {
        maxFileSize: 1000000, // 1mb
        maxNumberOfFiles: 5,
        minNumberOfFiles: 1,
      },
    });

    uppyDashboard.use(Dashboard, options);
    uppyDashboard.use(Tus, { endpoint: "https://master.tus.io/files/" });
    uppyDashboard.use(GoogleDrive, {
      target: Dashboard,
      companionUrl: "https://companion.uppy.io",
    });
    uppyDashboard.use(Dropbox, {
      target: Dashboard,
      companionUrl: "https://companion.uppy.io",
    });
    uppyDashboard.use(Instagram, {
      target: Dashboard,
      companionUrl: "https://companion.uppy.io",
    });
    uppyDashboard.use(Webcam, { target: Dashboard });
  };

  return {
    // public functions
    init: function () {
      initUppy1();
      initUppy2();
      initUppy3();
      initUppy4();
      initUppy5();
      initUppy6();

      swal.fire({
        title: "Notice",
        html:
          "Uppy demos uses <b>https://master.tus.io/files/</b> URL for resumable upload examples and your uploaded files will be temporarely stored in <b>tus.io</b> servers.",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-brand abs-btn abs-btn--wide",
        confirmButtonText: "Ok, I understand",
        onClose: function (e) {
          console.log("on close event fired!");
        },
      });
    },
  };
})();

StudioUtil.ready(function () {
  StudioUppy.init();
});
