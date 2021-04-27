"use strict";
var StudioDatatablesAdvancedColumnRendering = (function () {
  var initTable1 = function () {
    var table = $("#kt_table_1");

    // begin first table
    table.DataTable({
      responsive: true,
      paging: true,
      columnDefs: [
        {
          targets: 0,
          title: "Agent",
          render: function (data, type, full, meta) {
            var number = StudioUtil.getRandomInt(1, 14);
            var user_img = "100_" + number + ".jpg";

            var output;
            if (number > 8) {
              output =
                `
                                <div class="abs-user-card-v2">
                                    <div class="abs-user-card-v2_pic">
                                        <img src="assets/media/users/` +
                user_img +
                `" class="m-img-rounded abs-marginless" alt="photo">
                                    </div>
                                    <div class="abs-user-card-v2_details">
                                        <span class="abs-user-card-v2_name">` +
                full[2] +
                `</span>
                                        <a href="#" class="abs-user-card-v2_email abs-link">` +
                full[3] +
                `</a>
                                    </div>
                                </div>`;
            } else {
              var stateNo = StudioUtil.getRandomInt(0, 7);
              var states = [
                "success",
                "brand",
                "danger",
                "success",
                "warning",
                "dark",
                "primary",
                "info",
              ];
              var state = states[stateNo];

              output =
                `
                                <div class="abs-user-card-v2">
                                    <div class="abs-user-card-v2_pic">
                                        <div class="abs-badge abs-badge--xl abs-badge--` +
                state +
                `"><span>` +
                full[2].substring(0, 1) +
                `</div>
                                    </div>
                                    <div class="abs-user-card-v2_details">
                                        <span class="abs-user-card-v2_name">` +
                full[2] +
                `</span>
                                        <a href="#" class="abs-user-card-v2_email abs-link">` +
                full[3] +
                `</a>
                                    </div>
                                </div>`;
            }

            return output;
          },
        },
        {
          targets: 1,
          render: function (data, type, full, meta) {
            return (
              '<a class="abs-link" href="mailto:' + data + '">' + data + "</a>"
            );
          },
        },
        {
          targets: -1,
          title: "Actions",
          orderable: false,
          render: function (data, type, full, meta) {
            return `
                        <span class="dropdown">
                            <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">
                              <i class="la la-ellipsis-h"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>
                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>
                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>
                            </div>
                        </span>
                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">
                          <i class="la la-edit"></i>
                        </a>`;
          },
        },
        {
          targets: 4,
          render: function (data, type, full, meta) {
            var status = {
              1: { title: "Pending", class: "abs-badge--brand" },
              2: { title: "Delivered", class: " abs-badge--danger" },
              3: { title: "Canceled", class: " abs-badge--primary" },
              4: { title: "Success", class: " abs-badge--success" },
              5: { title: "Info", class: " abs-badge--info" },
              6: { title: "Danger", class: " abs-badge--danger" },
              7: { title: "Warning", class: " abs-badge--warning" },
            };
            if (typeof status[data] === "undefined") {
              return data;
            }
            return (
              '<span class="abs-badge ' +
              status[data].class +
              ' abs-badge--inline abs-badge--pill">' +
              status[data].title +
              "</span>"
            );
          },
        },
        {
          targets: 5,
          render: function (data, type, full, meta) {
            var status = {
              1: { title: "Online", state: "danger" },
              2: { title: "Retail", state: "primary" },
              3: { title: "Direct", state: "success" },
            };
            if (typeof status[data] === "undefined") {
              return data;
            }
            return (
              '<span class="abs-badge abs-badge--' +
              status[data].state +
              ' abs-badge--dot"></span>&nbsp;' +
              '<span class="abs-font-bold abs-font-' +
              status[data].state +
              '">' +
              status[data].title +
              "</span>"
            );
          },
        },
      ],
    });
  };

  return {
    //main function to initiate the module
    init: function () {
      initTable1();
    },
  };
})();

jQuery(document).ready(function () {
  StudioDatatablesAdvancedColumnRendering.init();
});
