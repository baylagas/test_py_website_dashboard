// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
/*
var options = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 250, // make this 250
      sparkline: {
        enabled: true, // make this true
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  */

// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}

w3.includeHTML();


function toggleLinker(linkName) {
  var linkerArray = document.getElementsByName("linkers");
  for (var linker of linkerArray) {
    if (linker.classList.contains("active_link")) {
      linker.classList.remove("active_link");
    }
  }
  for (var linker of linkerArray) {
    if (linker.id == linkName) {
      linker.classList.add("active_link")
    }
  }
  checkLinkers()
}

function checkLinkers() {
  var linkers = document.getElementsByName("linkers");
  for (var linker of linkers) {
    if (linker.classList.contains("active_link")) {
      if (linker.id == "link_a") {
        hideDivById("admin")
      }
      else if (linker.id == "link_s") {
        hideDivById("subs")
      }
      else if (linker.id == "link_v") {
        hideDivById("videomng")
      }
    }
  }
}

function hideDivById(divId) {
  hideAllDivW3Includes()
  var x = document.getElementById(divId);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideAllDivW3Includes() {
  var array = document.getElementsByName("w3includes");
  for (var element of array) {
    element.style.display = "none";
  }
}

checkLinkers();