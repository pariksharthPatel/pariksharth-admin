import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addTestSeries,
  deleteTestSeries,
  editTestSeries,
  getTestSeriess,
  publishTestSeries,
} from "../redux/actions/testSeriesActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { testSeriesTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useEffectOnce } from "react-use";
import { getAllMyGoals } from "../redux/actions/goalActions";
import { IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";
import { useNavigate } from "react-router-dom";
import { getAllMySubjects } from "../redux/actions/subjectActions";

const TestSeries = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isMobile = useResponsive("down", "sm");
  const {
    testSeries: tableData,
    allGoals,

    allSubjects,
  } = useSelector((state) => state.common);

  useEffectOnce(() => {
    dispatch(getAllMySubjects());

    dispatch(getAllMyGoals());
  }, []);
  // const dispatch = useDispatch();

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, testSeriesTypes.GET_TEST_SERIESS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      testSeriesTypes.ADD_TEST_SERIES,
      testSeriesTypes.UPDATE_TEST_SERIES,
      testSeriesTypes.DELETE_TEST_SERIES,
    ])
  );
  const TestAction = ({ data }) => {
    return (
      <IconButton
        key={"TestAction" + data._id}
        onClick={() => navigate("/tests", { state: data })}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };

  const PublishAction = ({ data }) => {
    return (
      <IconButton
        key={"TestAction" + data._id}
        onClick={() => dispatch(publishTestSeries({ data: { id: data._id } }))}
      >
        <Iconify icon="mingcute:print-line" />
      </IconButton>
    );
  };
  console.log("allSubjects", allSubjects);
  return (
    <div>
      <PageCreator
        screenName={"Test Serieses"}
        tableHeaders={tableHeaders(isMobile)}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        rowActions={[TestAction, PublishAction]}
        defaultFormData={{
          isActive: true,
          isPublic: true,
          tergetedExams: [],
          subjects: [],
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        selectOptions={{
          tergetedExams: allGoals,
          subjects: allSubjects,
        }}
        // onFormSubmit={onFormSubmit}
        onAdd={addTestSeries}
        onEdit={editTestSeries}
        onDelete={deleteTestSeries}
        getTableData={getTestSeriess}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default TestSeries;
const tableHeaders = (isMobile) => [
  {
    field: "name",
    headerName: "TestSeries Name",
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
const formFields = [
  {
    type: "text",
    name: "name",
    label: "TestSeries Name",
    placeholder: "Enter TestSeries Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  {
    type: "select",
    name: "subjects",
    label: "Choose Subject ",
    placeholder: "Choose Subject",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    multiple: true,
    width: 3,
    mobileWidth: 4,
  },
  {
    type: "text",
    name: "examCode",
    label: "TestSeries Exam Code",
    placeholder: "Enter TestSeries Exam Code",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "number",
    name: "price",
    label: "Price",
    placeholder: "Enter Price",
    required: true,
    disabled: false,
    readOnly: false,
    width: 2,
  },
  {
    type: "number",
    name: "salePrice",
    label: " Sale Price",
    placeholder: "Enter  Sale Price",
    required: true,
    disabled: false,
    readOnly: false,
    width: 2,
  },
  {
    type: "richtext",
    name: "description",
    label: "Description",
    placeholder: "Enter Description",
    required: true,
    disabled: false,
    readOnly: false,
    width: 12,
  },

  {
    type: "select",
    name: "tergetedExams",
    label: "Choose Targeted Exams ",
    placeholder: "Choose Targeted Exams",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    multiple: false,
    width: 4,
    mobileWidth: 4,
  },

  {
    type: "datetime",
    name: "startTime",
    label: "Start Time",
    placeholder: "Enter Start Time",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "datetime",
    name: "endTime",
    label: "End Time",
    placeholder: "Enter End Time",
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
  {
    type: "boolean",
    name: "isQuestionRepetable",
    label: "Is question repeatable",
    placeholder: "Enter Is question repeatable",
    required: false,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  {
    type: "boolean",
    name: "isPublic",
    label: "Is Public",
    placeholder: "Enter Is Public",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
const searchFields = [
  {
    type: "text",
    name: "name",
    label: "TestSeries Name",
    placeholder: "Enter TestSeries Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
