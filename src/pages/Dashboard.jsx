import { Card, CardHeader, Grid, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardCard from "../components/layout/DashboardCard";
import LoadingContainer from "../components/layout/LoadingContainer";
import { getDashboard } from "../redux/actions/dashboardActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { dashboardTypes } from "../redux/types";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@emotion/react";
import Chart from "react-apexcharts";
const Dashboard = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { dashboard } = useSelector((state) => state.common);
  React.useEffect(() => {
    dispatch(getDashboard({}));
  }, []);

  const isDashLoading = useSelector((state) =>
    loadingSelector(state, [dashboardTypes.GET_DASHBOARD_DATA])
  );

  console.log("dashboard", dashboard);

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

  const tablesData = {
    "Scheduled Exams": {
      columns: [
        { field: "srNo", headerName: "Sr No", width: 90 },
        {
          field: "examName",
          headerName: "Exam Name",
          width: 150,
          editable: true,
        },
        {
          field: "publishedBy",
          headerName: "Published By",
          width: 150,
          editable: true,
        },
        {
          field: "startDateAndTime",
          headerName: "Start Date And Time",
          // type: "number",
          type: "string",
          width: 110,
          editable: true,
        },
        {
          field: "endDateAndTime",
          headerName: "End Date And Time",
          // type: "number",
          type: "string",
          width: 110,
          editable: true,
        },
        {
          field: "enrolledStudents",
          headerName: "Enrolled Students",
          // description: "This column has a value getter and is not sortable.",
          // sortable: false,
          type: "number",
          width: 140,
          // valueGetter: (params) =>
          //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
        {
          field: "amount",
          headerName: "Amount",
          // description: "This column has a value getter and is not sortable.",
          // sortable: false,
          type: "number",
          width: 160,
          // valueGetter: (params) =>
          //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
        {
          field: "offering",
          headerName: "Offering",
          // description: "This column has a value getter and is not sortable.",
          // sortable: false,
          type: "string",
          width: 160,
          // valueGetter: (params) =>
          //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
        // {
        //   field: "enrolledStudents",
        //   headerName: "Enrolled Students",
        //   // description: "This column has a value getter and is not sortable.",
        //   // sortable: false,
        //   type: "number",
        //   width: 160,
        //   // valueGetter: (params) =>
        //   //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        // },
      ],
      rows: [
        {
          id: 1,
          srNo: 1,
          examName: "Snow",
          publishedBy: "Jon",
          startDate: 14,
          endDate: 18,
          enrolledStudents: 50,
          amount: 200000,
          offering: "testseries",
        },
        // { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
        // { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
        // { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
        // { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
        // { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
        // { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        // { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        // { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
      ],
    },
    "Completed Exams": {
      columns: [
        { field: "srNo", headerName: "Sr No", width: 90 },
        {
          field: "examName",
          headerName: "Exam Name",
          width: 150,
          editable: true,
        },
        {
          field: "publishedBy",
          headerName: "Published By",
          width: 150,
          editable: true,
        },
        // {
        //   field: "startDateAndTime",
        //   headerName: "Start Date And Time",
        //   // type: "number",
        //   type: "Date",
        //   width: 110,
        //   editable: true,
        // },
        {
          field: "endDateAndTime",
          headerName: "End Date And Time",
          // type: "number",
          type: "Date",
          width: 110,
          editable: true,
        },
        {
          field: "enrolledStudents",
          headerName: "Enrolled Students",
          // description: "This column has a value getter and is not sortable.",
          // sortable: false,
          type: "number",
          width: 140,
          // valueGetter: (params) =>
          //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
        {
          field: "attemptedStudents",
          headerName: "Attempted Students",
          // description: "This column has a value getter and is not sortable.",
          // sortable: false,
          type: "number",
          width: 140,
          // valueGetter: (params) =>
          //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
        {
          field: "amount",
          headerName: "Amount",
          // description: "This column has a value getter and is not sortable.",
          // sortable: false,
          type: "number",
          width: 160,
          // valueGetter: (params) =>
          //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
        {
          field: "offering",
          headerName: "Offering",
          // description: "This column has a value getter and is not sortable.",
          // sortable: false,
          type: "string",
          width: 160,
          // valueGetter: (params) =>
          //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
        {
          field: "examStatus",
          headerName: "Exam Status",
          // description: "This column has a value getter and is not sortable.",
          // sortable: false,
          type: "string",
          width: 160,
          // valueGetter: (params) =>
          //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        },
        // {
        //   field: "enrolledStudents",
        //   headerName: "Enrolled Students",
        //   // description: "This column has a value getter and is not sortable.",
        //   // sortable: false,
        //   type: "number",
        //   width: 160,
        //   // valueGetter: (params) =>
        //   //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
        // },
      ],
      rows: [
        {
          id: 1,
          srNo: 1,
          examName: "Snow",
          publishedBy: "Jon",
          startDate: 14,
          endDate: 18,
          enrolledStudents: 50,
          amount: 200000,
          offering: "testseries",
        },
      ],
    },
  };

  return (
    <Stack>
      {/* <Grid container spacing={3}> */}
      {/* <Grid container style={{ rowGap: "5px", columnGap: "5px" }}> */}
      <Grid container>
        <LoadingContainer isLoading={isDashLoading} height={400}>
          <Grid item xs={12} sm={6} md={2} mx={2} mb={2}>
            <DashboardCard
              sx={{
                width: "225px",
                height: "160px",
              }}
              title="Institutes"
              // total={dashboard?.users}
              total={10}
              icon={"mdi:university"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={2} mx={2} mb={2}>
            <DashboardCard
              sx={{
                width: "225px",
                height: "160px",
              }}
              title="Students"
              // total={dashboard?.products}
              total={20}
              color="info"
              icon={"mdi:account-student"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} mx={2} mb={2}>
            <DashboardCard
              sx={{
                width: "225px",
                height: "160px",
              }}
              title="Faculties"
              // total={dashboard?.expiredProducts}
              total={30}
              color="warning"
              icon={"game-icons:teacher"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} mx={2} mb={2}>
            <DashboardCard
              sx={{
                width: "225px",
                height: "160px",
              }}
              title="Tests Conducted"
              // total={dashboard?.expiredProducts}
              total={40}
              color="success"
              icon={"ant-design:schedule-filled"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} mx={2} mb={2}>
            <DashboardCard
              sx={{
                width: "225px",
                height: "160px",
              }}
              title="Tests scheduled"
              // total={dashboard?.expiredProducts}
              total={50}
              color="error"
              icon={"ri:calendar-schedule-fill"}
              // icon={"healthicons:i-schedule-school-date-time-negative"}
            />
          </Grid>
        </LoadingContainer>

        {/* <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={"ant-design:windows-filled"}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            title="Bug Reports"
            total={234}
            color="error"
            icon={"ant-design:bug-filled"}
          />
        </Grid> */}
      </Grid>

      {Object.keys(tablesData).map((key, index) => {
        // let { columns, rows } = tablesData[key];
        return (
          <div key={index}>
            <Card variant="outlined" elevation={0}>
              <CardHeader
                title={key}
                sx={{
                  "& .MuiCardHeader-action": {
                    // width: "40%",
                    flex: 10,
                    [theme.breakpoints.down("md")]: {
                      flex: 10,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    },
                  },
                }}
              />
            </Card>

            <DataGrid
              rows={tablesData[key].rows}
              columns={tablesData[key].columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[5]}
              // checkboxSelection
              disableRowSelectionOnClick
            />
          </div>
        );
      })}
      {/* <Card variant="outlined" elevation={0}>
          <CardHeader
            title="Scheduled Exams"
            sx={{
              "& .MuiCardHeader-action": {
                // width: "40%",
                flex: 10,
                [theme.breakpoints.down("md")]: {
                  flex: 10,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                },
              },
            }}
          />
        </Card>

        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          // checkboxSelection
          disableRowSelectionOnClick
        /> */}
      <div className="mixed-chart" my={10}>
        <Card variant="outlined" elevation={0}>
          <CardHeader
            title="Active Users"
            sx={{
              "& .MuiCardHeader-action": {
                // width: "40%",
                flex: 10,
                [theme.breakpoints.down("md")]: {
                  flex: 10,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                },
              },
            }}
          />
        </Card>
        <Chart
          options={options}
          series={options.series}
          type="bar"
          width="100%"
          height={350}
        />
      </div>
    </Stack>
  );
  // return (
  //   <Card>
  //     <CardHeader title="Setting" />

  //     <Divider />
  //     <CardContent>
  //       {isLoading ? (
  //         <CircularProgress />
  //       ) : (

  //       )}
  //     </CardContent>
  //     <Divider />
  //     <CardActions>
  //       <LoadingButton
  //         variant="contained"
  //         loading={isLoading}
  //         size="small"
  //         onClick={() => formRef.current.click()}
  //       >
  //         Update
  //       </LoadingButton>
  //     </CardActions>
  //   </Card>
  // );
};

export default Dashboard;
