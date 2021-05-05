"use strict";
// Class definition

var StudioDefaultDatatableDemo = (function () {
  // Private functions

  // basic demo
  var demo = function () {
    var datatable = $(".abs-datatable").StudioDatatable({
      data: {
        type: "remote",
        source: {
          read: {
            url:
              "https://fenix-alliance.com/abss/preview/api/datatables/demos/default.php",
          },
        },
        pageSize: 20,
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true,
      },

      layout: {
        scroll: true,
        height: 550,
        footer: false,
      },

      sortable: true,

      filterable: false,

      pagination: true,

      search: {
        input: $("#generalSearch"),
      },

      rows: {
        autoHide: false,
      },

      columns: [
        {
          field: "RecordID",
          title: "#",
          sortable: false,
          width: 20,
          type: "number",
          selector: false,
          textAlign: "center",
        },
        {
          field: "OrderID",
          title: "Order ID",
        },
        {
          field: "Country",
          title: "Country",
          template: function (row) {
            return row.Country + " " + row.ShipCountry;
          },
        },
        {
          field: "CompanyEmail",
          title: "Email",
          width: 150,
        },
        {
          field: "ShipAddress",
          title: "Ship Address",
          width: 200,
        },
        {
          field: "ShipDate",
          title: "Ship Date",
          type: "date",
          format: "MM/DD/YYYY",
        },
        {
          field: "CompanyName",
          title: "Company Name",
          width: 200,
        },
        {
          field: "Status",
          title: "Status",
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
        {
          field: "Actions",
          title: "Actions",
          sortable: false,
          width: 110,
          overflow: "visible",
          autoHide: false,
          template: function () {
            return '\
							<div class="dropdown">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
	                                <i class="la la-ellipsis-h"></i>\
	                            </a>\
							    <div class="dropdown-menu dropdown-menu-right">\
							        <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
							        <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
							        <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
							    </div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">\
								<i class="la la-edit"></i>\
							</a>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">\
								<i class="la la-trash"></i>\
							</a>\
						';
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
    // public functions
    init: function () {
      demo();
    },
  };
})();

jQuery(document).ready(function () {
  StudioDefaultDatatableDemo.init();
});
