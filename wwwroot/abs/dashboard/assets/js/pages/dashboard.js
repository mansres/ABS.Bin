"use strict";

// Class definition
var StudioDashboard = (function () {
  // Sparkline Chart helper function
  var _initSparklineChart = function (src, data, color, border) {
    if (src.length == 0) {
      return;
    }

    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
        ],
        datasets: [
          {
            label: "",
            borderColor: color,
            borderWidth: border,

            pointHoverRadius: 4,
            pointHoverBorderWidth: 12,
            pointBackgroundColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("danger"),
            pointHoverBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0.1)
              .rgbString(),
            fill: false,
            data: data,
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          enabled: false,
          intersect: false,
          mode: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
          labels: {
            usePointStyle: false,
          },
        },
        responsive: true,
        maintainAspectRatio: true,
        hover: {
          mode: "index",
        },
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },

        elements: {
          point: {
            radius: 4,
            borderWidth: 12,
          },
        },

        layout: {
          padding: {
            left: 0,
            right: 10,
            top: 5,
            bottom: 0,
          },
        },
      },
    };

    return new Chart(src, config);
  };

  // Daily Sales chart.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var dailySales = function () {
    var chartContainer = StudioUtil.getByID("abs_chart_daily_sales");

    if (!chartContainer) {
      return;
    }

    var chartData = {
      labels: [
        "Label 1",
        "Label 2",
        "Label 3",
        "Label 4",
        "Label 5",
        "Label 6",
        "Label 7",
        "Label 8",
        "Label 9",
        "Label 10",
        "Label 11",
        "Label 12",
        "Label 13",
        "Label 14",
        "Label 15",
        "Label 16",
      ],
      datasets: [
        {
          //label: 'Dataset 1',
          backgroundColor: StudioApp.getStateColor("success"),
          data: [
            15,
            20,
            25,
            30,
            25,
            20,
            15,
            20,
            25,
            30,
            25,
            20,
            15,
            10,
            15,
            20,
          ],
        },
        {
          //label: 'Dataset 2',
          backgroundColor: "#f3f3fb",
          data: [
            15,
            20,
            25,
            30,
            25,
            20,
            15,
            20,
            25,
            30,
            25,
            20,
            15,
            10,
            15,
            20,
          ],
        },
      ],
    };

    var chart = new Chart(chartContainer, {
      type: "bar",
      data: chartData,
      options: {
        title: {
          display: false,
        },
        tooltips: {
          intersect: false,
          mode: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        barRadius: 4,
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              stacked: true,
            },
          ],
          yAxes: [
            {
              display: false,
              stacked: true,
              gridLines: false,
            },
          ],
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
      },
    });
  };

  // Profit Share Chart.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var profitShare = function () {
    if (!StudioUtil.getByID("abs_chart_profit_share")) {
      return;
    }

    var randomScalingFactor = function () {
      return Math.round(Math.random() * 100);
    };

    var config = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [35, 30, 35],
            backgroundColor: [
              StudioApp.getStateColor("success"),
              StudioApp.getStateColor("danger"),
              StudioApp.getStateColor("brand"),
            ],
          },
        ],
        labels: ["Angular", "CSS", "HTML"],
      },
      options: {
        cutoutPercentage: 75,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "Technology",
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        tooltips: {
          enabled: true,
          intersect: false,
          mode: "nearest",
          bodySpacing: 5,
          yPadding: 10,
          xPadding: 10,
          caretPadding: 0,
          displayColors: false,
          backgroundColor: StudioApp.getStateColor("brand"),
          titleFontColor: "#ffffff",
          cornerRadius: 4,
          footerSpacing: 0,
          titleSpacing: 0,
        },
      },
    };

    var ctx = StudioUtil.getByID("abs_chart_profit_share").getContext("2d");
    var myDoughnut = new Chart(ctx, config);
  };

  // Sales Stats.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var salesStats = function () {
    if (!StudioUtil.getByID("abs_chart_sales_stats")) {
      return;
    }

    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
          "January",
          "February",
          "March",
          "April",
        ],
        datasets: [
          {
            label: "Sales Stats",
            borderColor: StudioApp.getStateColor("brand"),
            borderWidth: 2,
            //pointBackgroundColor: StudioApp.getStateColor('brand'),
            backgroundColor: StudioApp.getStateColor("brand"),
            pointBackgroundColor: Chart.helpers
              .color("#ffffff")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#ffffff")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("danger"),
            pointHoverBorderColor: Chart.helpers
              .color(StudioApp.getStateColor("danger"))
              .alpha(0.2)
              .rgbString(),
            data: [
              10,
              20,
              16,
              18,
              12,
              40,
              35,
              30,
              33,
              34,
              45,
              40,
              60,
              55,
              70,
              65,
              75,
              62,
            ],
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          intersect: false,
          mode: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
          labels: {
            usePointStyle: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        hover: {
          mode: "index",
        },
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
            },
          ],
        },

        elements: {
          point: {
            radius: 3,
            borderWidth: 0,

            hoverRadius: 8,
            hoverBorderWidth: 2,
          },
        },
      },
    };

    var chart = new Chart(StudioUtil.getByID("abs_chart_sales_stats"), config);
  };

  // Sales By StudioUtillication Stats.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var salesByApps = function () {
    // Init chart instances
    _initSparklineChart(
      $("#abs_chart_sales_by_apps_1_1"),
      [10, 20, -5, 8, -20, -2, -4, 15, 5, 8],
      StudioApp.getStateColor("success"),
      2
    );
    _initSparklineChart(
      $("#abs_chart_sales_by_apps_1_2"),
      [2, 16, 0, 12, 22, 5, -10, 5, 15, 2],
      StudioApp.getStateColor("danger"),
      2
    );
    _initSparklineChart(
      $("#abs_chart_sales_by_apps_1_3"),
      [15, 5, -10, 5, 16, 22, 6, -6, -12, 5],
      StudioApp.getStateColor("success"),
      2
    );
    _initSparklineChart(
      $("#abs_chart_sales_by_apps_1_4"),
      [8, 18, -12, 12, 22, -2, -14, 16, 18, 2],
      StudioApp.getStateColor("warning"),
      2
    );

    _initSparklineChart(
      $("#abs_chart_sales_by_apps_2_1"),
      [10, 20, -5, 8, -20, -2, -4, 15, 5, 8],
      StudioApp.getStateColor("danger"),
      2
    );
    _initSparklineChart(
      $("#abs_chart_sales_by_apps_2_2"),
      [2, 16, 0, 12, 22, 5, -10, 5, 15, 2],
      StudioApp.getStateColor("dark"),
      2
    );
    _initSparklineChart(
      $("#abs_chart_sales_by_apps_2_3"),
      [15, 5, -10, 5, 16, 22, 6, -6, -12, 5],
      StudioApp.getStateColor("brand"),
      2
    );
    _initSparklineChart(
      $("#abs_chart_sales_by_apps_2_4"),
      [8, 18, -12, 12, 22, -2, -14, 16, 18, 2],
      StudioApp.getStateColor("info"),
      2
    );
  };

  // Latest Updates.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var latestUpdates = function () {
    if ($("#abs_chart_latest_updates").length == 0) {
      return;
    }

    var ctx = document
      .getElementById("abs_chart_latest_updates")
      .getContext("2d");

    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
        ],
        datasets: [
          {
            label: "Sales Stats",
            backgroundColor: StudioApp.getStateColor("danger"), // Put the gradient here as a fill color
            borderColor: StudioApp.getStateColor("danger"),
            pointBackgroundColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("success"),
            pointHoverBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0.1)
              .rgbString(),

            //fill: 'start',
            data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15],
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          intersect: false,
          mode: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        hover: {
          mode: "index",
        },
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        elements: {
          line: {
            tension: 0.0000001,
          },
          point: {
            radius: 4,
            borderWidth: 12,
          },
        },
      },
    };

    var chart = new Chart(ctx, config);
  };

  // Trends Stats.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var trendsStats = function () {
    if ($("#abs_chart_trends_stats").length == 0) {
      return;
    }

    var ctx = document
      .getElementById("abs_chart_trends_stats")
      .getContext("2d");

    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(
      0,
      Chart.helpers.color("#00c5dc").alpha(0.7).rgbString()
    );
    gradient.addColorStop(
      1,
      Chart.helpers.color("#f2feff").alpha(0).rgbString()
    );

    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "January",
          "February",
          "March",
          "April",
        ],
        datasets: [
          {
            label: "Sales Stats",
            backgroundColor: gradient, // Put the gradient here as a fill color
            borderColor: "#0dc8de",

            pointBackgroundColor: Chart.helpers
              .color("#ffffff")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#ffffff")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("danger"),
            pointHoverBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0.2)
              .rgbString(),

            //fill: 'start',
            data: [
              20,
              10,
              18,
              15,
              26,
              18,
              15,
              22,
              16,
              12,
              12,
              13,
              10,
              18,
              14,
              24,
              16,
              12,
              19,
              21,
              16,
              14,
              21,
              21,
              13,
              15,
              22,
              24,
              21,
              11,
              14,
              19,
              21,
              17,
            ],
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          intersect: false,
          mode: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        hover: {
          mode: "index",
        },
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        elements: {
          line: {
            tension: 0.19,
          },
          point: {
            radius: 4,
            borderWidth: 12,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 0,
          },
        },
      },
    };

    var chart = new Chart(ctx, config);
  };

  // Trends Stats 2.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var trendsStats2 = function () {
    if ($("#abs_chart_trends_stats_2").length == 0) {
      return;
    }

    var ctx = document
      .getElementById("abs_chart_trends_stats_2")
      .getContext("2d");

    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "January",
          "February",
          "March",
          "April",
        ],
        datasets: [
          {
            label: "Sales Stats",
            backgroundColor: "#d2f5f9", // Put the gradient here as a fill color
            borderColor: StudioApp.getStateColor("brand"),

            pointBackgroundColor: Chart.helpers
              .color("#ffffff")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#ffffff")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("danger"),
            pointHoverBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0.2)
              .rgbString(),

            //fill: 'start',
            data: [
              20,
              10,
              18,
              15,
              32,
              18,
              15,
              22,
              8,
              6,
              12,
              13,
              10,
              18,
              14,
              24,
              16,
              12,
              19,
              21,
              16,
              14,
              24,
              21,
              13,
              15,
              27,
              29,
              21,
              11,
              14,
              19,
              21,
              17,
            ],
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          intersect: false,
          mode: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        hover: {
          mode: "index",
        },
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        elements: {
          line: {
            tension: 0.19,
          },
          point: {
            radius: 4,
            borderWidth: 12,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 0,
          },
        },
      },
    };

    var chart = new Chart(ctx, config);
  };

  // Trends Stats.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var latestTrendsMap = function () {
    if ($("#abs_chart_latest_trends_map").length == 0) {
      return;
    }

    try {
      var map = new GMaps({
        div: "#abs_chart_latest_trends_map",
        lat: -12.043333,
        lng: -77.028333,
      });
    } catch (e) {
      console.log(e);
    }
  };

  // Revenue Change.
  // Based on Morris plugin - http://morrisjs.github.io/morris.js/
  var revenueChange = function () {
    if ($("#abs_chart_revenue_change").length == 0) {
      return;
    }

    Morris.Donut({
      element: "abs_chart_revenue_change",
      data: [
        {
          label: "New York",
          value: 10,
        },
        {
          label: "London",
          value: 7,
        },
        {
          label: "Paris",
          value: 20,
        },
      ],
      colors: [
        StudioApp.getStateColor("success"),
        StudioApp.getStateColor("danger"),
        StudioApp.getStateColor("brand"),
      ],
    });
  };

  // Support Tickets Chart.
  // Based on Morris plugin - http://morrisjs.github.io/morris.js/
  var supportCases = function () {
    if ($("#abs_chart_support_tickets").length == 0) {
      return;
    }

    Morris.Donut({
      element: "abs_chart_support_tickets",
      data: [
        {
          label: "Margins",
          value: 20,
        },
        {
          label: "Profit",
          value: 70,
        },
        {
          label: "Lost",
          value: 10,
        },
      ],
      labelColor: "#a7a7c2",
      colors: [
        StudioApp.getStateColor("success"),
        StudioApp.getStateColor("brand"),
        StudioApp.getStateColor("danger"),
      ],
      //formatter: function (x) { return x + "%"}
    });
  };

  // Support Tickets Chart.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var supportRequests = function () {
    var container = StudioUtil.getByID("abs_chart_support_requests");

    if (!container) {
      return;
    }

    var randomScalingFactor = function () {
      return Math.round(Math.random() * 100);
    };

    var config = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [35, 30, 35],
            backgroundColor: [
              StudioApp.getStateColor("success"),
              StudioApp.getStateColor("danger"),
              StudioApp.getStateColor("brand"),
            ],
          },
        ],
        labels: ["Angular", "CSS", "HTML"],
      },
      options: {
        cutoutPercentage: 75,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: false,
          text: "Technology",
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        tooltips: {
          enabled: true,
          intersect: false,
          mode: "nearest",
          bodySpacing: 5,
          yPadding: 10,
          xPadding: 10,
          caretPadding: 0,
          displayColors: false,
          backgroundColor: StudioApp.getStateColor("brand"),
          titleFontColor: "#ffffff",
          cornerRadius: 4,
          footerSpacing: 0,
          titleSpacing: 0,
        },
      },
    };

    var ctx = container.getContext("2d");
    var myDoughnut = new Chart(ctx, config);
  };

  // Activities Charts.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var activitiesChart = function () {
    if ($("#abs_chart_activities").length == 0) {
      return;
    }

    var ctx = document.getElementById("abs_chart_activities").getContext("2d");

    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(
      0,
      Chart.helpers.color("#e14c86").alpha(1).rgbString()
    );
    gradient.addColorStop(
      1,
      Chart.helpers.color("#e14c86").alpha(0.3).rgbString()
    );

    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
        ],
        datasets: [
          {
            label: "Sales Stats",
            backgroundColor: Chart.helpers
              .color("#e14c86")
              .alpha(1)
              .rgbString(), //gradient
            borderColor: "#e13a58",

            pointBackgroundColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("light"),
            pointHoverBorderColor: Chart.helpers
              .color("#ffffff")
              .alpha(0.1)
              .rgbString(),

            //fill: 'start',
            data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15],
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: "nearest",
          intersect: false,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        elements: {
          line: {
            tension: 0.0000001,
          },
          point: {
            radius: 4,
            borderWidth: 12,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0,
          },
        },
      },
    };

    var chart = new Chart(ctx, config);
  };

  // Bandwidth Charts 1.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var bandwidthChart1 = function () {
    if ($("#abs_chart_bandwidth1").length == 0) {
      return;
    }

    var ctx = document.getElementById("abs_chart_bandwidth1").getContext("2d");

    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(
      0,
      Chart.helpers.color("#d1f1ec").alpha(1).rgbString()
    );
    gradient.addColorStop(
      1,
      Chart.helpers.color("#d1f1ec").alpha(0.3).rgbString()
    );

    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
        ],
        datasets: [
          {
            label: "Bandwidth Stats",
            backgroundColor: gradient,
            borderColor: StudioApp.getStateColor("success"),

            pointBackgroundColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("danger"),
            pointHoverBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0.1)
              .rgbString(),

            //fill: 'start',
            data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15],
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: "nearest",
          intersect: false,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        elements: {
          line: {
            tension: 0.0000001,
          },
          point: {
            radius: 4,
            borderWidth: 12,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0,
          },
        },
      },
    };

    var chart = new Chart(ctx, config);
  };

  // Bandwidth Charts 2.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var bandwidthChart2 = function () {
    if ($("#abs_chart_bandwidth2").length == 0) {
      return;
    }

    var ctx = document.getElementById("abs_chart_bandwidth2").getContext("2d");

    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(
      0,
      Chart.helpers.color("#ffefce").alpha(1).rgbString()
    );
    gradient.addColorStop(
      1,
      Chart.helpers.color("#ffefce").alpha(0.3).rgbString()
    );

    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
        ],
        datasets: [
          {
            label: "Bandwidth Stats",
            backgroundColor: gradient,
            borderColor: StudioApp.getStateColor("warning"),
            pointBackgroundColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("danger"),
            pointHoverBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0.1)
              .rgbString(),

            //fill: 'start',
            data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15],
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: "nearest",
          intersect: false,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        elements: {
          line: {
            tension: 0.0000001,
          },
          point: {
            radius: 4,
            borderWidth: 12,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0,
          },
        },
      },
    };

    var chart = new Chart(ctx, config);
  };

  // Bandwidth Charts 2.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var adWordsStat = function () {
    if ($("#abs_chart_adwords_stats").length == 0) {
      return;
    }

    var ctx = document
      .getElementById("abs_chart_adwords_stats")
      .getContext("2d");

    var gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(
      0,
      Chart.helpers.color("#ffefce").alpha(1).rgbString()
    );
    gradient.addColorStop(
      1,
      Chart.helpers.color("#ffefce").alpha(0.3).rgbString()
    );

    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
        ],
        datasets: [
          {
            label: "AdWord Clicks",
            backgroundColor: StudioApp.getStateColor("brand"),
            borderColor: StudioApp.getStateColor("brand"),

            pointBackgroundColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("danger"),
            pointHoverBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0.1)
              .rgbString(),
            data: [12, 16, 9, 18, 13, 12, 18, 12, 15, 17],
          },
          {
            label: "AdWords Views",

            backgroundColor: StudioApp.getStateColor("success"),
            borderColor: StudioApp.getStateColor("success"),

            pointBackgroundColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("danger"),
            pointHoverBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0.1)
              .rgbString(),
            data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15],
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: "nearest",
          intersect: false,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        elements: {
          line: {
            tension: 0.0000001,
          },
          point: {
            radius: 4,
            borderWidth: 12,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0,
          },
        },
      },
    };

    var chart = new Chart(ctx, config);
  };

  // Bandwidth Charts 2.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var financeSummary = function () {
    if ($("#abs_chart_finance_summary").length == 0) {
      return;
    }

    var ctx = document
      .getElementById("abs_chart_finance_summary")
      .getContext("2d");

    var config = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
        ],
        datasets: [
          {
            label: "AdWords Views",

            backgroundColor: StudioApp.getStateColor("success"),
            borderColor: StudioApp.getStateColor("success"),

            pointBackgroundColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0)
              .rgbString(),
            pointHoverBackgroundColor: StudioApp.getStateColor("danger"),
            pointHoverBorderColor: Chart.helpers
              .color("#000000")
              .alpha(0.1)
              .rgbString(),
            data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15],
          },
        ],
      },
      options: {
        title: {
          display: false,
        },
        tooltips: {
          mode: "nearest",
          intersect: false,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: false,
              gridLines: false,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        elements: {
          line: {
            tension: 0.0000001,
          },
          point: {
            radius: 4,
            borderWidth: 12,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0,
          },
        },
      },
    };

    var chart = new Chart(ctx, config);
  };

  // Order Statistics.
  // Based on Chartjs plugin - http://www.chartjs.org/
  var orderStatistics = function () {
    var container = StudioUtil.getByID("abs_chart_order_statistics");

    if (!container) {
      return;
    }

    var MONTHS = [
      "1 Jan",
      "2 Jan",
      "3 Jan",
      "4 Jan",
      "5 Jan",
      "6 Jan",
      "7 Jan",
    ];

    var color = Chart.helpers.color;
    var barChartData = {
      labels: ["1 Jan", "2 Jan", "3 Jan", "4 Jan", "5 Jan", "6 Jan", "7 Jan"],
      datasets: [
        {
          fill: true,
          //borderWidth: 0,
          backgroundColor: color(StudioApp.getStateColor("brand"))
            .alpha(0.6)
            .rgbString(),
          borderColor: color(StudioApp.getStateColor("brand"))
            .alpha(0)
            .rgbString(),

          pointHoverRadius: 4,
          pointHoverBorderWidth: 12,
          pointBackgroundColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
          pointHoverBackgroundColor: StudioApp.getStateColor("brand"),
          pointHoverBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0.1)
            .rgbString(),

          data: [20, 30, 20, 40, 30, 60, 30],
        },
        {
          fill: true,
          //borderWidth: 0,
          backgroundColor: color(StudioApp.getStateColor("brand"))
            .alpha(0.2)
            .rgbString(),
          borderColor: color(StudioApp.getStateColor("brand"))
            .alpha(0)
            .rgbString(),

          pointHoverRadius: 4,
          pointHoverBorderWidth: 12,
          pointBackgroundColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointBorderColor: Chart.helpers.color("#000000").alpha(0).rgbString(),
          pointHoverBackgroundColor: StudioApp.getStateColor("brand"),
          pointHoverBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0.1)
            .rgbString(),

          data: [15, 40, 15, 30, 40, 30, 50],
        },
      ],
    };

    var ctx = container.getContext("2d");
    var chart = new Chart(ctx, {
      type: "line",
      data: barChartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: false,
        scales: {
          xAxes: [
            {
              categoryPercentage: 0.35,
              barPercentage: 0.7,
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
              },
              gridLines: false,
              ticks: {
                display: true,
                beginAtZero: true,
                fontColor: StudioApp.getBaseColor("shape", 3),
                fontSize: 13,
                padding: 10,
              },
            },
          ],
          yAxes: [
            {
              categoryPercentage: 0.35,
              barPercentage: 0.7,
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                color: StudioApp.getBaseColor("shape", 2),
                drawBorder: false,
                offsetGridLines: false,
                drawTicks: false,
                borderDash: [3, 4],
                zeroLineWidth: 1,
                zeroLineColor: StudioApp.getBaseColor("shape", 2),
                zeroLineBorderDash: [3, 4],
              },
              ticks: {
                max: 70,
                stepSize: 10,
                display: true,
                beginAtZero: true,
                fontColor: StudioApp.getBaseColor("shape", 3),
                fontSize: 13,
                padding: 10,
              },
            },
          ],
        },
        title: {
          display: false,
        },
        hover: {
          mode: "index",
        },
        tooltips: {
          enabled: true,
          intersect: false,
          mode: "nearest",
          bodySpacing: 5,
          yPadding: 10,
          xPadding: 10,
          caretPadding: 0,
          displayColors: false,
          backgroundColor: StudioApp.getStateColor("brand"),
          titleFontColor: "#ffffff",
          cornerRadius: 4,
          footerSpacing: 0,
          titleSpacing: 0,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 5,
          },
        },
      },
    });
  };

  // Quick Stat Charts
  var quickStats = function () {
    _initSparklineChart(
      $("#abs_chart_quick_stats_1"),
      [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
      StudioApp.getStateColor("brand"),
      3
    );
    _initSparklineChart(
      $("#abs_chart_quick_stats_2"),
      [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
      StudioApp.getStateColor("danger"),
      3
    );
    _initSparklineChart(
      $("#abs_chart_quick_stats_3"),
      [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
      StudioApp.getStateColor("success"),
      3
    );
    _initSparklineChart(
      $("#abs_chart_quick_stats_4"),
      [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
      StudioApp.getStateColor("success"),
      3
    );
  };

  // Daterangepicker Init
  var daterangepickerInit = function () {
    if ($("#abs_dashboard_daterangepicker").length == 0) {
      return;
    }

    var picker = $("#abs_dashboard_daterangepicker");
    var start = moment();
    var end = moment();

    function cb(start, end, label) {
      var title = "";
      var range = "";

      if (end - start < 100 || label == "Today") {
        title = "Today:";
        range = start.format("MMM D");
      } else if (label == "Yesterday") {
        title = "Yesterday:";
        range = start.format("MMM D");
      } else {
        range = start.format("MMM D") + " - " + end.format("MMM D");
      }

      $("#abs_dashboard_daterangepicker_date").html(range);
      $("#abs_dashboard_daterangepicker_title").html(title);
    }

    picker.daterangepicker(
      {
        direction: StudioUtil.isRTL(),
        startDate: start,
        endDate: end,
        opens: "left",
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, "days"),
            moment().subtract(1, "days"),
          ],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [
            moment().subtract(1, "month").startOf("month"),
            moment().subtract(1, "month").endOf("month"),
          ],
        },
      },
      cb
    );

    cb(start, end, "");
  };

  // Latest Orders
  var datatableLatestOrders = function () {
    if ($("#abs_datatable_latest_orders").length === 0) {
      return;
    }

    var dataJSONArray = [
      {
        RecordID: 200,
        OrderID: "51672-4144",
        Country: "Russia",
        ShipCountry: "RU",
        ShipCity: "Navashino",
        ShipName: "Monahan and Sons",
        ShipAddress: "44114 Autumn Leaf Street",
        CompanyEmail: "blambourn5j@google.com",
        CompanyAgent: "Byram Lambourn",
        CompanyName: "Huel and Sons",
        Currency: "RUB",
        Notes:
          "eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
        Department: "Electronics",
        Website: "china.com.cn",
        Latitude: 55.5292,
        Longitude: 42.2003001,
        ShipDate: "1/13/2016",
        PaymentDate: "2017-09-29 11:36:18",
        TimeZone: "Europe/Moscow",
        TotalPayment: "$240701.63",
        Status: 4,
        Type: 3,
        Actions: null,
      },
    ];

    var datatable = $(".abs-datatable").StudioDatatable({
      data: {
        type: "local",
        source: dataJSONArray,
        pageSize: 10,
        saveState: {
          cookie: false,
          webstorage: true,
        },
        serverPaging: false,
        serverFiltering: false,
        serverSorting: false,
      },

      layout: {
        scroll: true,
        height: 500,
        footer: false,
      },

      sortable: true,

      filterable: false,

      pagination: true,

      columns: [
        {
          field: "RecordID",
          title: "#",
          sortable: false,
          width: 40,
          selector: {
            class: "abs-checkbox--solid",
          },
          textAlign: "center",
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
              '\ <div class="abs-user-card-v2">\
                    <div class="abs-user-card-v2_pic">\
                        <img src="assets/media/client-logos/logo' + img + '" alt="photo">\
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
          field: "ShipDate",
          title: "Date",
          width: 100,
          type: "date",
          format: "MM/DD/YYYY",
          template: function (data) {
            return '<span class="abs-font-bold">' + data.ShipDate + "</span>";
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
          field: "Type",
          title: "Managed By",
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

  // Calendar Init
  var calendarInit = function () {
    if ($("#abs_calendar").length === 0) {
      return;
    }

    var todayDate = moment().startOf("day");
    var YM = todayDate.format("YYYY-MM");
    var YESTERDAY = todayDate.clone().subtract(1, "day").format("YYYY-MM-DD");
    var TODAY = todayDate.format("YYYY-MM-DD");
    var TOMORROW = todayDate.clone().add(1, "day").format("YYYY-MM-DD");

    $("#abs_calendar").fullCalendar({
      isRTL: StudioUtil.isRTL(),
      header: {
        left: "prev,next today",
        center: "title",
        right: "month,agendaWeek,agendaDay,listWeek",
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      navLinks: true,
      defaultDate: moment("2017-09-15"),
      events: [
        {
          title: "Meeting",
          start: moment("2017-08-28"),
          description: "Lorem ipsum dolor sit incid idunt ut",
          className: "fc-event-light fc-event-solid-warning",
        },
        {
          title: "Conference",
          description: "Lorem ipsum dolor incid idunt ut labore",
          start: moment("2017-08-29T13:30:00"),
          end: moment("2017-08-29T17:30:00"),
          className: "fc-event-success",
        },
        {
          title: "Dinner",
          start: moment("2017-08-30"),
          description: "Lorem ipsum dolor sit tempor incid",
          className: "fc-event-light  fc-event-solid-danger",
        },
        {
          title: "All Day Event",
          start: moment("2017-09-01"),
          description: "Lorem ipsum dolor sit incid idunt ut",
          className: "fc-event-danger fc-event-solid-focus",
        },
        {
          title: "Reporting",
          description: "Lorem ipsum dolor incid idunt ut labore",
          start: moment("2017-09-03T13:30:00"),
          end: moment("2017-09-04T17:30:00"),
          className: "fc-event-success",
        },
        {
          title: "Company Trip",
          start: moment("2017-09-05"),
          end: moment("2017-09-07"),
          description: "Lorem ipsum dolor sit tempor incid",
          className: "fc-event-primary",
        },
        {
          title: "ICT Expo 2017 - Product Release",
          start: moment("2017-09-09"),
          description: "Lorem ipsum dolor sit tempor inci",
          className: "fc-event-light fc-event-solid-primary",
        },
        {
          title: "Dinner",
          start: moment("2017-09-12"),
          description: "Lorem ipsum dolor sit amet, conse ctetur",
        },
        {
          id: 999,
          title: "Repeating Event",
          start: moment("2017-09-15T16:00:00"),
          description: "Lorem ipsum dolor sit ncididunt ut labore",
          className: "fc-event-danger",
        },
        {
          id: 1000,
          title: "Repeating Event",
          description: "Lorem ipsum dolor sit amet, labore",
          start: moment("2017-09-18T19:00:00"),
        },
        {
          title: "Conference",
          start: moment("2017-09-20T13:00:00"),
          end: moment("2017-09-21T19:00:00"),
          description: "Lorem ipsum dolor eius mod tempor labore",
          className: "fc-event-success",
        },
        {
          title: "Meeting",
          start: moment("2017-09-11"),
          description: "Lorem ipsum dolor eiu idunt ut labore",
        },
        {
          title: "Lunch",
          start: moment("2017-09-18"),
          className: "fc-event-info fc-event-solid-success",
          description: "Lorem ipsum dolor sit amet, ut labore",
        },
        {
          title: "Meeting",
          start: moment("2017-09-24"),
          className: "fc-event-warning",
          description: "Lorem ipsum conse ctetur adipi scing",
        },
        {
          title: "Happy Hour",
          start: moment("2017-09-24"),
          className: "fc-event-light fc-event-solid-focus",
          description: "Lorem ipsum dolor sit amet, conse ctetur",
        },
        {
          title: "Dinner",
          start: moment("2017-09-24"),
          className: "fc-event-solid-focus fc-event-light",
          description: "Lorem ipsum dolor sit ctetur adipi scing",
        },
        {
          title: "Birthday Party",
          start: moment("2017-09-24"),
          className: "fc-event-primary",
          description: "Lorem ipsum dolor sit amet, scing",
        },
        {
          title: "Company Event",
          start: moment("2017-09-24"),
          className: "fc-event-danger",
          description: "Lorem ipsum dolor sit amet, scing",
        },
        {
          title: "Click for Google",
          url: "http://google.com/",
          start: moment("2017-09-26"),
          className: "fc-event-solid-info fc-event-light",
          description: "Lorem ipsum dolor sit amet, labore",
        },
      ],

      eventRender: function (event, element) {
        if (element.hasClass("fc-day-grid-event")) {
          element.data("content", event.description);
          element.data("placement", "top");
          StudioApp.initPopover(element);
        } else if (element.hasClass("fc-time-grid-event")) {
          element
            .find(".fc-title")
            .append(
              '<div class="fc-description">' + event.description + "</div>"
            );
        } else if (element.find(".fc-list-item-title").lenght !== 0) {
          element
            .find(".fc-list-item-title")
            .append(
              '<div class="fc-description">' + event.description + "</div>"
            );
        }
      },
    });
  };

  // Earnings Sliders
  var earningsSlide = function () {
    var carousel1 = $("#abs_earnings_widget .abs-widget30_head .owl-carousel");
    var carousel2 = $("#abs_earnings_widget .abs-widget30_body .owl-carousel");

    carousel1.find(".carousel").each(function (index) {
      $(this).attr("data-position", index);
    });

    carousel1.owlCarousel({
      rtl: StudioUtil.isRTL(),
      center: true,
      loop: true,
      items: 2,
    });

    carousel2.owlCarousel({
      rtl: StudioUtil.isRTL(),
      items: 1,
      animateIn: "fadeIn(100)",
      loop: true,
    });

    $(document).on("click", ".carousel", function () {
      var index = $(this).attr("data-position");
      if (index) {
        carousel1.trigger("to.owl.carousel", index);
        carousel2.trigger("to.owl.carousel", index);
      }
    });

    carousel1.on("changed.owl.carousel", function () {
      var index = $(this)
        .find(".owl-item.active.center")
        .find(".carousel")
        .attr("data-position");
      if (index) {
        carousel2.trigger("to.owl.carousel", index);
      }
    });

    carousel2.on("changed.owl.carousel", function () {
      var index = $(this)
        .find(".owl-item.active.center")
        .find(".carousel")
        .attr("data-position");
      if (index) {
        carousel1.trigger("to.owl.carousel", index);
      }
    });
  };

  return {
    // Init demos
    init: function () {
      // init charts
      dailySales();
      profitShare();
      salesStats();
      salesByApps();
      latestUpdates();
      trendsStats();
      trendsStats2();
      latestTrendsMap();
      revenueChange();
      supportCases();
      supportRequests();
      activitiesChart();
      bandwidthChart1();
      bandwidthChart2();
      adWordsStat();
      financeSummary();
      quickStats();
      orderStatistics();

      // init daterangepicker
      daterangepickerInit();

      // datatables
      datatableLatestOrders();

      // calendar
      calendarInit();

      // earnings slide
      earningsSlide();

      // demo loading
      var loading = new StudioDialog({
        type: "loader",
        placement: "top center",
        message: "Loading ...",
      });
      loading.show();

      setTimeout(function () {
        loading.hide();
      }, 3000);
    },
  };
})();

// Class initialization on page load
jQuery(document).ready(function () {
  StudioDashboard.init();
});
