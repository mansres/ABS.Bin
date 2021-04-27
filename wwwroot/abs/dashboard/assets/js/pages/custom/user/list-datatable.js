"use strict";
// Class definition

var StudioUserListDatatable = (function () {
  // variables
  var datatable;

  // init
  var init = function () {
    // init the datatables. Learn more: https://fenix-alliance.com/abse=docs&section=datatable
    datatable = $("#kt_apps_user_list_datatable").StudioDatatable({
      // datasource definition
      data: {
        type: "remote",
        source: {
          read: {
            url:
              "https://fenix-alliance.com/abss/preview/api/datatables/demos/default.php",
          },
        },
        pageSize: 10, // display 20 records per page
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true,
      },

      // layout definition
      layout: {
        scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
        footer: false, // display/hide footer
      },

      // column sorting
      sortable: true,

      pagination: true,

      search: {
        input: $("#generalSearch"),
        delay: 400,
      },

      // columns definition
      columns: [
        {
          field: "RecordID",
          title: "#",
          sortable: false,
          width: 20,
          selector: {
            class: "abs-checkbox--solid",
          },
          textAlign: "center",
        },
        {
          field: "AgentName",
          title: "User",
          width: 200,
          // callback function support for column rendering
          template: function (data, i) {
            var number = 4 + i;
            while (number > 12) {
              number = number - 3;
            }
            var user_img = "100_" + number + ".jpg";

            var pos = StudioUtil.getRandomInt(0, 5);
            var position = [
              "Developer",
              "Designer",
              "CEO",
              "Manager",
              "Architect",
              "Sales",
            ];

            var output = "";
            if (number > 5) {
              output =
                '<div class="abs-user-card-v2">\
								<div class="abs-user-card-v2_pic">\
									<img src="assets/media/users/' +
                user_img +
                '" alt="photo">\
								</div>\
								<div class="abs-user-card-v2_details">\
									<a href="#" class="abs-user-card-v2_name">' +
                data.CompanyAgent +
                '</a>\
									<span class="abs-user-card-v2_desc">' +
                position[pos] +
                "</span>\
								</div>\
							</div>";
            } else {
              var stateNo = StudioUtil.getRandomInt(0, 6);
              var states = [
                "success",
                "brand",
                "danger",
                "success",
                "warning",
                "primary",
                "info",
              ];
              var state = states[stateNo];

              output =
                '<div class="abs-user-card-v2">\
								<div class="abs-user-card-v2_pic">\
									<div class="abs-badge abs-badge--xl abs-badge--' +
                state +
                '">' +
                data.CompanyAgent.substring(0, 1) +
                '</div>\
								</div>\
								<div class="abs-user-card-v2_details">\
									<a href="#" class="abs-user-card-v2_name">' +
                data.CompanyAgent +
                '</a>\
									<span class="abs-user-card-v2_desc">' +
                position[pos] +
                "</span>\
								</div>\
							</div>";
            }

            return output;
          },
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
          field: "ShipName",
          title: "Company",
          width: "auto",
          autoHide: false,
          // callback function support for column rendering
          template: function (data, i) {
            var number = i + 1;
            while (number > 5) {
              number = number - 3;
            }
            var img = number + ".png";

            var skills = [
              "Angular, React",
              "Vue, Kendo",
              ".NET, Oracle, MySQL",
              "Node, SASS, Webpack",
              "MangoDB, Java",
              "HTML5, jQuery, CSS3",
            ];

            var output =
              '\
                        <div class="abs-user-card-v2">\
                            <div class="abs-user-card-v2_pic">\
                                <img src="assets/media/client-logos/logo' +
              img +
              '" alt="photo">\
                            </div>\
                            <div class="abs-user-card-v2_details">\
                                <a href="#" class="abs-user-card-v2_name">' +
              data.CompanyName +
              '</a>\
                                <span class="abs-user-card-v2_email">' +
              skills[number - 1] +
              "</span>\
                            </div>\
                        </div>";

            return output;
          },
        },
        {
          field: "Status",
          title: "Status",
          width: 100,
          // callback function support for column rendering
          template: function (row) {
            var status = {
              1: {
                title: "Pending",
                class: " btn-label-brand",
              },
              2: {
                title: "Processing",
                class: " btn-label-danger",
              },
              3: {
                title: "Success",
                class: " btn-label-success",
              },
              4: {
                title: "Delivered",
                class: " btn-label-success",
              },
              5: {
                title: "Canceled",
                class: " btn-label-warning",
              },
              6: {
                title: "Done",
                class: " btn-label-danger",
              },
              7: {
                title: "On Hold",
                class: " btn-label-warning",
              },
            };
            return (
              '<span class="btn btn-bold btn-sm btn-font-sm ' +
              status[row.Status].class +
              '">' +
              status[row.Status].title +
              "</span>"
            );
          },
        },
        {
          width: 110,
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
          width: 80,
          title: "Actions",
          sortable: false,
          autoHide: false,
          overflow: "visible",
          template: function () {
            return '\
							<div class="dropdown">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown">\
									<i class="flaticon-more-1"></i>\
								</a>\
								<div class="dropdown-menu dropdown-menu-right">\
									<ul class="abs-nav">\
										<li class="abs-nav_item">\
											<a href="#" class="abs-nav_link">\
												<i class="abs-nav_link-icon flaticon2-expand"></i>\
												<span class="abs-nav_link-text">View</span>\
											</a>\
										</li>\
										<li class="abs-nav_item">\
											<a href="#" class="abs-nav_link">\
												<i class="abs-nav_link-icon flaticon2-contract"></i>\
												<span class="abs-nav_link-text">Edit</span>\
											</a>\
										</li>\
										<li class="abs-nav_item">\
											<a href="#" class="abs-nav_link">\
												<i class="abs-nav_link-icon flaticon2-trash"></i>\
												<span class="abs-nav_link-text">Delete</span>\
											</a>\
										</li>\
										<li class="abs-nav_item">\
											<a href="#" class="abs-nav_link">\
												<i class="abs-nav_link-icon flaticon2-mail-1"></i>\
												<span class="abs-nav_link-text">Export</span>\
											</a>\
										</li>\
									</ul>\
								</div>\
							</div>\
						';
          },
        },
      ],
    });
  };

  // search
  var search = function () {
    $("#kt_form_status").on("change", function () {
      datatable.search($(this).val().toLowerCase(), "Status");
    });
  };

  // selection
  var selection = function () {
    // init form controls
    //$('#kt_form_status, #kt_form_type').selectpicker();

    // event handler on check and uncheck on records
    datatable.on(
      "abs-datatable--on-check abs-datatable--on-uncheck abs-datatable--on-layout-updated",
      function (e) {
        var checkedNodes = datatable.rows(".abs-datatable_row--active").nodes(); // get selected records
        var count = checkedNodes.length; // selected records count

        $("#kt_subheader_group_selected_rows").html(count);

        if (count > 0) {
          $("#kt_subheader_search").addClass("abs-hidden");
          $("#kt_subheader_group_actions").removeClass("abs-hidden");
        } else {
          $("#kt_subheader_search").removeClass("abs-hidden");
          $("#kt_subheader_group_actions").addClass("abs-hidden");
        }
      }
    );
  };

  // fetch selected records
  var selectedFetch = function () {
    // event handler on selected records fetch modal launch
    $("#kt_datatable_records_fetch_modal")
      .on("show.bs.modal", function (e) {
        // show loading dialog
        var loading = new StudioDialog({
          type: "loader",
          placement: "top center",
          message: "Loading ...",
        });
        loading.show();

        setTimeout(function () {
          loading.hide();
        }, 1000);

        // fetch selected IDs
        var ids = datatable
          .rows(".abs-datatable_row--active")
          .nodes()
          .find('.abs-checkbox--single > [type="checkbox"]')
          .map(function (i, chk) {
            return $(chk).val();
          });

        // populate selected IDs
        var c = document.createDocumentFragment();

        for (var i = 0; i < ids.length; i++) {
          var li = document.createElement("li");
          li.setAttribute("data-id", ids[i]);
          li.innerHTML = "Selected record ID: " + ids[i];
          c.appendChild(li);
        }

        $(e.target).find("#kt_apps_user_fetch_records_selected").append(c);
      })
      .on("hide.bs.modal", function (e) {
        $(e.target).find("#kt_apps_user_fetch_records_selected").empty();
      });
  };

  // selected records status update
  var selectedStatusUpdate = function () {
    $("#kt_subheader_group_actions_status_change").on(
      "click",
      "[data-toggle='status-change']",
      function () {
        var status = $(this).find(".abs-nav_link-text").html();

        // fetch selected IDs
        var ids = datatable
          .rows(".abs-datatable_row--active")
          .nodes()
          .find('.abs-checkbox--single > [type="checkbox"]')
          .map(function (i, chk) {
            return $(chk).val();
          });

        if (ids.length > 0) {
          // learn more: https://sweetalert2.github.io/
          swal
            .fire({
              buttonsStyling: false,

              html:
                "Are you sure to update " +
                ids.length +
                " selected records status to " +
                status +
                " ?",
              type: "info",

              confirmButtonText: "Yes, update!",
              confirmButtonClass: "btn btn-sm btn-bold btn-brand",

              showCancelButton: true,
              cancelButtonText: "No, cancel",
              cancelButtonClass: "btn btn-sm btn-bold btn-default",
            })
            .then(function (result) {
              if (result.value) {
                swal.fire({
                  title: "Deleted!",
                  text: "Your selected records statuses have been updated!",
                  type: "success",
                  buttonsStyling: false,
                  confirmButtonText: "OK",
                  confirmButtonClass: "btn btn-sm btn-bold btn-brand",
                });
                // result.dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
              } else if (result.dismiss === "cancel") {
                swal.fire({
                  title: "Cancelled",
                  text: "You selected records statuses have not been updated!",
                  type: "error",
                  buttonsStyling: false,
                  confirmButtonText: "OK",
                  confirmButtonClass: "btn btn-sm btn-bold btn-brand",
                });
              }
            });
        }
      }
    );
  };

  // selected records delete
  var selectedDelete = function () {
    $("#kt_subheader_group_actions_delete_all").on("click", function () {
      // fetch selected IDs
      var ids = datatable
        .rows(".abs-datatable_row--active")
        .nodes()
        .find('.abs-checkbox--single > [type="checkbox"]')
        .map(function (i, chk) {
          return $(chk).val();
        });

      if (ids.length > 0) {
        // learn more: https://sweetalert2.github.io/
        swal
          .fire({
            buttonsStyling: false,

            text:
              "Are you sure to delete " + ids.length + " selected records ?",
            type: "danger",

            confirmButtonText: "Yes, delete!",
            confirmButtonClass: "btn btn-sm btn-bold btn-danger",

            showCancelButton: true,
            cancelButtonText: "No, cancel",
            cancelButtonClass: "btn btn-sm btn-bold btn-brand",
          })
          .then(function (result) {
            if (result.value) {
              swal.fire({
                title: "Deleted!",
                text: "Your selected records have been deleted! :(",
                type: "success",
                buttonsStyling: false,
                confirmButtonText: "OK",
                confirmButtonClass: "btn btn-sm btn-bold btn-brand",
              });
              // result.dismiss can be 'cancel', 'overlay',
              // 'close', and 'timer'
            } else if (result.dismiss === "cancel") {
              swal.fire({
                title: "Cancelled",
                text: "You selected records have not been deleted! :)",
                type: "error",
                buttonsStyling: false,
                confirmButtonText: "OK",
                confirmButtonClass: "btn btn-sm btn-bold btn-brand",
              });
            }
          });
      }
    });
  };

  var updateTotal = function () {
    datatable.on("abs-datatable--on-layout-updated", function () {
      //$('#kt_subheader_total').html(datatable.getTotalRows() + ' Total');
    });
  };

  return {
    // public functions
    init: function () {
      init();
      search();
      selection();
      selectedFetch();
      selectedStatusUpdate();
      selectedDelete();
      updateTotal();
    },
  };
})();

// On document ready
StudioUtil.ready(function () {
  StudioUserListDatatable.init();
});
