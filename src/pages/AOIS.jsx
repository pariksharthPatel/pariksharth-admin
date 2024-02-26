import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addAoi,
  deleteAoi,
  editAoi,
  getAois,
} from "../redux/actions/aoiActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { aoiTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";

const GoalAoi = () => {
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);

  const tableHeaders = [
    {
      field: "name",
      headerName: "Aoi Name",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "exams",
      headerName: " Exams",
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

  const tableData = useSelector((state) => state.common.aois);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, aoiTypes.GET_AOIS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      aoiTypes.ADD_AOI,
      aoiTypes.UPDATE_AOI,
      aoiTypes.DELETE_AOI,
    ])
  );

  const AoiAction = ({ data }) => {
    return (
      <IconButton
        key={"AoiAction" + data._id}
        onClick={() => navigate("/goalexam", { state: data })}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };
  return (
    <div>
      <PageCreator
        screenName={"Aoi"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          goalId: location.state.goalId,
          stateId: location.state._id,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        rowActions={[AoiAction]}
        // onFormSubmit={onFormSubmit}
        onAdd={addAoi}
        onEdit={editAoi}
        onDelete={deleteAoi}
        getTableData={(pageData) =>
          getAois({
            query: {
              ...pageData.query,
              goalId: location.state.goalId,
              stateId: location.state._id,
            },
          })
        }
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default GoalAoi;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Aoi Name",
    placeholder: "Enter Aoi Name",
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
    label: "Aoi Name",
    placeholder: "Enter Aoi Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
