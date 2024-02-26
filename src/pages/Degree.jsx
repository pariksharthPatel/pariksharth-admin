import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addDegree,
  deleteDegree,
  editDegree,
  getDegrees,
} from "../redux/actions/degreeActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { degreeTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";

const Degree = () => {
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "name",
      headerName: "Degree Name",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "boards",
      headerName: " Boards",
      type: "string",
      editable: false,
      flex: 0.5,
      valueFormatter: ({ value }) => value.length,

      ...addTableColumnMinWidth(isMobile, 70),
    },

    {
      field: "createdBy",
      headerName: "Created By",
      type: "string",
      flex: 0.5,
      editable: false,
      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "createdAt",
      headerName: "Created At",
      type: "dateTime",
      flex: 0.5,
      editable: false,
      valueFormatter: ({ value }) => moment(value).format(DATETIMEFORMAT),
      ...addTableColumnMinWidth(isMobile, 150),
    },
  ];

  const tableData = useSelector((state) => state.common.degrees);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, degreeTypes.GET_DEGREES)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      degreeTypes.ADD_DEGREE,
      degreeTypes.UPDATE_DEGREE,
      degreeTypes.DELETE_DEGREE,
    ])
  );

  const DegreeAction = ({ data }) => {
    return (
      <IconButton
        key={"DegreeAction" + data._id}
        onClick={() => navigate("/board", { state: data })}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };
  return (
    <div>
      <PageCreator
        screenName={"Degree"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          qualificationId: location.state._id,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        rowActions={[DegreeAction]}
        onAdd={addDegree}
        onEdit={editDegree}
        onDelete={deleteDegree}
        getTableData={(pageData) =>
          getDegrees({
            query: { ...pageData.query, qualificationId: location.state._id },
          })
        }
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Degree;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Degree Name",
    placeholder: "Enter Degree Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "boolean",
    name: "isActive",
    label: "Status",
    placeholder: "Enter Status",
    required: false,
    disabled: false,
    readOnly: false,
    width: 4,
  },
];
const searchFields = [
  {
    type: "text",
    name: "name",

    label: "Degree Name",
    placeholder: "Enter Degree Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
