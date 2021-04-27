"use strict";
var StudioDatatablesBasicScrollable = (function () {
  var initTable1 = function () {
    var table = $("#kt_table_1");

    // begin first table
    table.DataTable({
      scrollY: "50vh",
      scrollX: true,
      scrollCollapse: true,
      columnDefs: [
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
          targets: 8,
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
          targets: 9,
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

  var initTable2 = function () {
    var table = $("#kt_table_2");

    // begin second table
    table.DataTable({
      scrollY: "50vh",
      scrollX: true,
      scrollCollapse: true,
      createdRow: function (row, data, index) {
        var status = {
          1: { title: "Pending", class: "abs-badge--brand" },
          2: { title: "Delivered", class: " abs-badge--danger" },
          3: { title: "Canceled", class: " abs-badge--primary" },
          4: { title: "Success", class: " abs-badge--success" },
          5: { title: "Info", class: " abs-badge--info" },
          6: { title: "Danger", class: " abs-badge--danger" },
          7: { title: "Warning", class: " abs-badge--warning" },
        };
        var badge =
          '<span class="abs-badge ' +
          status[data[18]].class +
          ' abs-badge--inline abs-badge--pill">' +
          status[data[18]].title +
          "</span>";
        row.getElementsByTagName("td")[18].innerHTML = badge;

        status = {
          1: { title: "Online", state: "danger" },
          2: { title: "Retail", state: "primary" },
          3: { title: "Direct", state: "success" },
        };
        badge =
          '<span class="abs-badge abs-badge--' +
          status[data[19]].state +
          ' abs-badge--dot"></span>&nbsp;' +
          '<span class="abs-font-bold abs-font-' +
          status[data[19]].state +
          '">' +
          status[data[19]].title +
          "</span>";
        row.getElementsByTagName("td")[19].innerHTML = badge;
      },
      columnDefs: [
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
      ],
    });
  };

  return {
    //main function to initiate the module
    init: function () {
      initTable1();
      initTable2();
    },
  };
})();

jQuery(document).ready(function () {
  StudioDatatablesBasicScrollable.init();
});
