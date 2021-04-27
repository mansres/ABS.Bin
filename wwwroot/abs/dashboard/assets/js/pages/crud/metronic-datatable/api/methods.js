"use strict";
// Class definition

var StudioDefaultDatatableDemo = (function () {
  // Private functions

  // basic demo
  var demo = function () {
    var options = {
      // datasource definition
      data: {
        type: "remote",
        source: {
          read: {
            url:
              "https://fenix-alliance.com/abss/preview/api/datatables/demos/default.php",
          },
        },
        pageSize: 20, // display 20 records per page
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true,
      },

      // layout definition
      layout: {
        scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
        height: 550, // datatable's body's fixed height
        footer: false, // display/hide footer
      },

      // column sorting
      sortable: true,

      pagination: true,

      search: {
        input: $("#generalSearch"),
      },

      // columns definition
      columns: [
        {
          field: "RecordID",
          title: "#",
          sortable: false,
          width: 30,
          type: "number",
          selector: { class: "abs-checkbox--solid" },
          textAlign: "center",
        },
        {
          field: "ID",
          title: "ID",
          width: 30,
          type: "number",
          template: function (row) {
            return row.RecordID;
          },
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
          field: "ShipDate",
          title: "Ship Date",
          type: "date",
          format: "MM/DD/YYYY",
        },
        {
          field: "CompanyName",
          title: "Company Name",
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
    };

    var datatable = $(".abs-datatable").StudioDatatable(options);

    // both methods are supported
    // datatable.methodName(args); or $(datatable).StudioDatatable(methodName, args);

    $("#kt_datatable_destroy").on("click", function () {
      // datatable.destroy();
      $(".abs-datatable").StudioDatatable("destroy");
    });

    $("#kt_datatable_init").on("click", function () {
      datatable = $(".abs-datatable").StudioDatatable(options);
    });

    $("#kt_datatable_reload").on("click", function () {
      // datatable.reload();
      $(".abs-datatable").StudioDatatable("reload");
    });

    $("#kt_datatable_sort_asc").on("click", function () {
      datatable.sort("Status", "asc");
    });

    $("#kt_datatable_sort_desc").on("click", function () {
      datatable.sort("Status", "desc");
    });

    // get checked record and get value by column name
    $("#kt_datatable_get").on("click", function () {
      // select active rows
      datatable.rows(".abs-datatable_row--active");
      // check selected nodes
      if (datatable.nodes().length > 0) {
        // get column by field name and get the column nodes
        var value = datatable.columns("CompanyName").nodes().text();
        console.log(value);
      }
    });

    // record selection
    $("#kt_datatable_check").on("click", function () {
      var input = $("#kt_datatable_check_input").val();
      datatable.setActive(input);
    });

    $("#kt_datatable_check_all").on("click", function () {
      // datatable.setActiveAll(true);
      $(".abs-datatable").StudioDatatable("setActiveAll", true);
    });

    $("#kt_datatable_uncheck_all").on("click", function () {
      // datatable.setActiveAll(false);
      $(".abs-datatable").StudioDatatable("setActiveAll", false);
    });

    $("#kt_datatable_hide_column").on("click", function () {
      datatable.columns("ShipDate").visible(false);
    });

    $("#kt_datatable_show_column").on("click", function () {
      datatable.columns("ShipDate").visible(true);
    });

    $("#kt_datatable_remove_row").on("click", function () {
      datatable.rows(".abs-datatable_row--active").remove();
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
