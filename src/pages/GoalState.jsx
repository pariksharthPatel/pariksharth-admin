import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addState,
  deleteState,
  editState,
  getStates,
} from "../redux/actions/stateActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { stateTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";

const State = () => {
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "name",
      headerName: "State Name",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "aois",
      headerName: " AOIS",
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

  const tableData = useSelector((state) => state.common.states);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, stateTypes.GET_STATES)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      stateTypes.ADD_STATE,
      stateTypes.UPDATE_STATE,
      stateTypes.DELETE_STATE,
    ])
  );

  const StateAction = ({ data }) => {
    return (
      <IconButton
        key={"StateAction" + data._id}
        onClick={() => navigate("/aoi", { state: data })}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };
  return (
    <div>
      <PageCreator
        screenName={"State"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          goalId: location.state._id,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        rowActions={[StateAction]}
        onAdd={addState}
        onEdit={editState}
        onDelete={deleteState}
        getTableData={(pageData) =>
          getStates({
            query: { ...pageData.query, goalId: location.state._id },
          })
        }
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default State;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "State Name",
    placeholder: "Enter State Name",
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

    label: "State Name",
    placeholder: "Enter State Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
