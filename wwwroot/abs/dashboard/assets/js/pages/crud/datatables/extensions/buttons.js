"use strict";
var StudioDatatablesExtensionButtons = (function () {
  var initTable1 = function () {
    // begin first table
    var table = $("#kt_table_1").DataTable({
      responsive: true,
      // Pagination settings
      dom: `<'row'<'col-sm-6 text-left'f><'col-sm-6 text-right'B>>
			<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

      buttons: ["print", "copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"],
      columnDefs: [
        {
          targets: 6,
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
          targets: 7,
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
    // begin first table
    var table = $("#kt_table_2").DataTable({
      responsive: true,

      buttons: ["print", "copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"],
      processing: true,
      serverSide: true,
      ajax: {
        url:
          "https://fenix-alliance.com/abss/preview/api/datatables/demos/server.php",
        type: "POST",
        data: {
          // parameters for custom backend script demo
          columnsDef: [
            "OrderID",
            "Country",
            "ShipCity",
            "ShipAddress",
            "CompanyAgent",
            "CompanyName",
            "Status",
            "Type",
          ],
        },
      },
      columns: [
        { data: "OrderID" },
        { data: "Country" },
        { data: "ShipCity" },
        { data: "ShipAddress" },
        { data: "CompanyAgent" },
        { data: "CompanyName" },
        { data: "Status" },
        { data: "Type" },
      ],
      columnDefs: [
        {
          targets: 6,
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
          targets: 7,
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

    $("#export_print").on("click", function (e) {
      e.preventDefault();
      table.button(0).trigger();
    });

    $("#export_copy").on("click", function (e) {
      e.preventDefault();
      table.button(1).trigger();
    });

    $("#export_excel").on("click", function (e) {
      e.preventDefault();
      table.button(2).trigger();
    });

    $("#export_csv").on("click", function (e) {
      e.preventDefault();
      table.button(3).trigger();
    });

    $("#export_pdf").on("click", function (e) {
      e.preventDefault();
      table.button(4).trigger();
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
  StudioDatatablesExtensionButtons.init();
});
