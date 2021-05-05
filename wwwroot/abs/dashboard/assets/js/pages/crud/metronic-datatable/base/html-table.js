"use strict";
// Class definition

var StudioDatatableHtmlTableDemo = (function () {
  // Private functions

  // demo initializer
  var demo = function () {
    var datatable = $(".abs-datatable").StudioDatatable({
      data: {
        saveState: { cookie: false },
      },
      search: {
        input: $("#generalSearch"),
      },
      columns: [
        {
          field: "DepositPaid",
          type: "number",
        },
        {
          field: "OrderDate",
          type: "date",
          format: "YYYY-MM-DD",
        },
        {
          field: "Status",
          title: "Status",
          autoHide: false,
          // callback function support for column rendering
          template: function (row) {
            var status = {
              1: { title: "Pending", class: "abs-badge--brand" },
              2: { title: "Delivered", class: " abs-badge--danger" },
              3: { title: "Canceled", class: " abs-badge--primary" },
              4: { title: "Success", class: " abs-badge--success" },
              5: { title: "Info", class: " abs-badge--info" },
              6: { title: "Danger", class: " abs-badge--danger" },
              7: { title: "Warning", class: " abs-badge--warning" },
            };
            return (
              '<span class="abs-badge ' +
              status[row.Status].class +
              ' abs-badge--inline abs-badge--pill">' +
              status[row.Status].title +
              "</span>"
            );
          },
        },
        {
          field: "Type",
          title: "Type",
          autoHide: false,
          // callback function support for column rendering
          template: function (row) {
            var status = {
              1: { title: "Online", state: "danger" },
              2: { title: "Retail", state: "primary" },
              3: { title: "Direct", state: "success" },
            };
            return (
              '<span class="abs-badge abs-badge--' +
              status[row.Type].state +
              ' abs-badge--dot"></span>&nbsp;<span class="abs-font-bold abs-font-' +
              status[row.Type].state +
              '">' +
              status[row.Type].title +
              "</span>"
            );
          },
        },
      ],
    });

    $("#kt_form_status").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "Status");
    });

    $("#kt_form_type").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "Type");
    });

    $("#kt_form_status,#kt_form_type").selectpicker();
  };

  return {
    // Public functions
    init: function () {
      // init dmeo
      demo();
    },
  };
})();

jQuery(document).ready(function () {
  StudioDatatableHtmlTableDemo.init();
});
