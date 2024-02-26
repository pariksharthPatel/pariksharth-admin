import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT, ROLES } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addGoal,
  deleteGoal,
  editGoal,
  getGoals,
  importGoal,
} from "../redux/actions/goalActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { goalTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";
import useDisclosure from "../hooks/useDisclosure";
import useLoading from "../hooks/useLoading";

import ImportGoalModal from "../components/ImportGoalModal";

const Goal = () => {
  const [refetchCount, setRefetchCount] = React.useState(0);
  const dispatch = useDispatch();
  const { activeRole } = useSelector((state) => state.auth);
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const dispatch = useDispatch();

  const tableData = useSelector((state) => state.common.goals);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, goalTypes.GET_GOALS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      goalTypes.ADD_GOAL,
      goalTypes.UPDATE_GOAL,
      goalTypes.DELETE_GOAL,
    ])
  );

  const TopicAction = ({ data }) => {
    return (
      <IconButton
        key={"StateAction" + data._id}
        onClick={() => navigate("/state", { state: data })}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };

  const ImportButton = () => {
    return (
      <Button
        variant="outlined"
        startIcon={<Iconify icon="gala:add" />}
        onClick={onOpen}
      >
        Import Goals
      </Button>
    );
  };
  const isImportLoading = useLoading(goalTypes.IMPORT_GOAL);
  const onImport = (subs) => {
    dispatch(
      importGoal({
        data: {
          goalIds: subs.map((el) => el._id),
        },
        callBack: () => {
          onClose();
          setRefetchCount((prev) => prev + 1);
        },
      })
    );
  };
  return (
    <div>
      <ImportGoalModal
        open={isOpen}
        onClose={onClose}
        onConfirm={(goals) => onImport(goals)}
        isLoading={isImportLoading}
        confirmTitle="Import"
      />
      <PageCreator
        refetchCount={refetchCount}
        screenName={"Goal"}
        tableHeaders={tableHeaders(isMobile)}
        toolbarActions={[
          ...(activeRole === ROLES.INSTITUTEADMIN ? [ImportButton] : []),
        ]}
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
        rowActions={[TopicAction]}
        // onFormSubmit={onFormSubmit}
        onAdd={addGoal}
        onEdit={editGoal}
        onDelete={deleteGoal}
        getTableData={getGoals}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Goal;
const tableHeaders = (isMobile) => [
  {
    field: "name",
    headerName: "Goal Name",
    type: "string",
    editable: false,
    flex: 1,
    ...addTableColumnMinWidth(isMobile, 100),
  },

  {
    field: "states",
    headerName: " States",
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
const formFields = [
  {
    type: "text",
    name: "name",
    label: "Goal Name",
    placeholder: "Enter Goal Name",
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

    label: "Goal Name",
    placeholder: "Enter Goal Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
