// import React from "react";
// import Chart from "react-apexcharts";

// const Reports = () => {
//   const options = {
//     series: [
//       {
//         name: "Net Profit",
//         data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//       },
//       {
//         name: "Revenue",
//         data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//       },
//       {
//         name: "Free Cash Flow",
//         data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
//       },
//     ],
//     chart: {
//       type: "bar",
//       height: 350,
//       toolbar: {
//         tools: {
//           zoomin: true,
//           zoomout: true,
//           download: true, // Add download button
//         },
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "55%",
//         endingShape: "rounded",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ["transparent"],
//     },
//     xaxis: {
//       categories: [
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//       ],
//     },
//     yaxis: {
//       title: {
//         text: "$ (thousands)",
//       },
//     },
//     fill: {
//       opacity: 1,
//     },
//     tooltip: {
//       y: {
//         formatter: function (val) {
//           return "$ " + val + " thousands";
//         },
//       },
//     },
//   };

//   return (
//     <div>
//       <div className="mixed-chart">
//         <Chart
//           options={options}
//           series={options.series}
//           type="bar"
//           width="500"
//         />
//       </div>
//     </div>
//   );
// };

// export default Reports;
import React from "react";
import Chart from "react-apexcharts"; // Import Chart from react-apexcharts

const Reports = () => {
  var options = {
    series: [
      {
        name: "Backend Users",
        data: [
          44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57, 56, 61, 58, 63, 60,
          66, 44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57, 56, 61, 58, 63,
          60, 66, 44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57,
        ],
      },
      {
        name: "Students",
        data: [
          76, 85, 101, 98, 87, 105, 91, 114, 94, 58, 63, 60, 66, 44, 55, 57, 56,
          61, 58, 63, 60, 66, 44, 55, 57, 56, 61, 58, 63, 60, 66, 44, 55, 57,
          56, 61, 58, 63, 60, 66, 44, 55, 57, 56, 61, 580, 63, 60,
        ],
      },
      //   {
      //     name: "Free Cash Flow",
      //     data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      //   },
    ],
    chart: {
      type: "bar",
      height: 350,
      zoom: {
        enabled: true,
      },
      //   toolbar: {
      //     show: true, // Ensure the toolbar is visible
      //     tools: {
      //       download: true,
      //       zoomin: true, // Enable zoom in button
      //       zoomout: true, // Enable zoom out button
      //     },
      //   },
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
      categories: [
        "00:00",
        "00:30",
        "01:00",
        "01:30",
        "02:00",
        "02:30",
        "03:00",
        "03:30",
        "04:00",
        "04:30",
        "05:00",
        "05:30",
        "06:00",
        "06:30",
        "07:00",
        "07:30",
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
      ],
      tickPlacement: "on",
    },
    yaxis: {
      title: {
        text: "Count",
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
  return (
    <div>
      <div className="mixed-chart">
        <Chart
          options={options}
          series={options.series}
          type="bar"
          width="100%"
          height={350}
        />
      </div>
    </div>
  );
};

export default Reports;
