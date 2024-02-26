import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addExamType,
  deleteExamType,
  editExamType,
  getExamTypes,
} from "../redux/actions/examTypeActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { examTypeTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";

const ExamTypes = () => {
  const isMobile = useResponsive("down", "sm");

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "name",
      headerName: "ExamType Name",
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

  const tableData = useSelector((state) => state.common.examTypes);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, examTypeTypes.GET_EXAM_TYPES)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      examTypeTypes.ADD_EXAM_TYPE,
      examTypeTypes.UPDATE_EXAM_TYPE,
      examTypeTypes.DELETE_EXAM_TYPE,
    ])
  );
  return (
    <div>
      <PageCreator
        screenName={"ExamType"}
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
        onAdd={addExamType}
        onEdit={editExamType}
        onDelete={deleteExamType}
        getTableData={getExamTypes}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default ExamTypes;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "ExamType Name",
    placeholder: "Enter ExamType Name",
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
    label: "ExamType Name",
    placeholder: "Enter ExamType Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
