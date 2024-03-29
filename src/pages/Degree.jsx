import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
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

const Degree = () => {
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);

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
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        // onFormSubmit={onFormSubmit}
        onAdd={addDegree}
        onEdit={editDegree}
        onDelete={deleteDegree}
        getTableData={getDegrees}
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
