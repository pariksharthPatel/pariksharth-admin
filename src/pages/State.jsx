import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
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

const States = () => {
  const isMobile = useResponsive("down", "sm");

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
    loadingSelector(state, stateTypes.GET_CATEGORYS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      stateTypes.ADD_CATEGORY,
      stateTypes.UPDATE_CATEGORY,
      stateTypes.DELETE_CATEGORY,
    ])
  );
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
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        // onFormSubmit={onFormSubmit}
        onAdd={addState}
        onEdit={editState}
        onDelete={deleteState}
        getTableData={getStates}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default States;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "State Name",
    placeholder: "Enter State Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
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
