import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addGoalExam,
  deleteGoalExam,
  editGoalExam,
  getGoalExams,
} from "../redux/actions/goalExamActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { goalExamTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";

const GoalExam = () => {
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);

  const tableHeaders = [
    {
      field: "name",
      headerName: "Exam Name",
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

  const tableData = useSelector((state) => state.common.goalExams);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, goalExamTypes.GET_GOAL_EXAMS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      goalExamTypes.ADD_GOAL_EXAM,
      goalExamTypes.UPDATE_GOAL_EXAM,
      goalExamTypes.DELETE_GOAL_EXAM,
    ])
  );

  const GoalExamAction = ({ data }) => {
    return (
      <IconButton
        key={"GoalExamAction" + data._id}
        onClick={() => navigate("/goalexam", { state: data })}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };
  return (
    <div>
      <PageCreator
        screenName={"GoalExam"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          goalId: location.state.goalId,
          stateId: location.state.stateId,
          aoiId: location.state._id,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        rowActions={[GoalExamAction]}
        // onFormSubmit={onFormSubmit}
        onAdd={addGoalExam}
        onEdit={editGoalExam}
        onDelete={deleteGoalExam}
        getTableData={(pageData) =>
          getGoalExams({
            query: {
              ...pageData.query,
              goalId: location.state.goalId,
              stateId: location.state.stateId,
              aoiId: location.state._id,
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

export default GoalExam;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "GoalExam Name",
    placeholder: "Enter GoalExam Name",
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
    label: "GoalExam Name",
    placeholder: "Enter GoalExam Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
