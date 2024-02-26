import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addBoard,
  deleteBoard,
  editBoard,
  getBoards,
} from "../redux/actions/boardActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { boardTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";

const Board = () => {
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);

  const tableHeaders = [
    {
      field: "name",
      headerName: "Board Name",
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

  const tableData = useSelector((state) => state.common.boards);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, boardTypes.GET_BOARDS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      boardTypes.ADD_BOARD,
      boardTypes.UPDATE_BOARD,
      boardTypes.DELETE_BOARD,
    ])
  );

  const BoardAction = ({ data }) => {
    return (
      <IconButton
        key={"BoardAction" + data._id}
        onClick={() => navigate("/subboard")}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };
  return (
    <div>
      <PageCreator
        screenName={"Board"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          qualificationId: location.state.qualificationId,
          degreeId: location.state._id,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        rowActions={[BoardAction]}
        // onFormSubmit={onFormSubmit}
        onAdd={addBoard}
        onEdit={editBoard}
        onDelete={deleteBoard}
        getTableData={(pageData) =>
          getBoards({
            query: {
              ...pageData.query,
              qualificationId: location.state.qualificationId,
              degreeId: location.state._id,
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

export default Board;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Board Name",
    placeholder: "Enter Board Name",
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
    label: "Board Name",
    placeholder: "Enter Board Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
