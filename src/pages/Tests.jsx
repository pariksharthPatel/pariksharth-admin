import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT, EXAMTYPE } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addTest,
  deleteTest,
  editTest,
  getTests,
} from "../redux/actions/testActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { testTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useEffectOnce } from "react-use";
import { getAllMyGoals } from "../redux/actions/goalActions";
import { getAllMySubjects } from "../redux/actions/subjectActions";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";

const Test = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const isMobile = useResponsive("down", "sm");
  const {
    tests: tableData,
    allSubjects,

    allGoals,
  } = useSelector((state) => state.common);
  const [watchData, setWatchData] = React.useState({});

  useEffectOnce(() => {
    dispatch(getAllMyGoals());
    dispatch(getAllMySubjects());
  }, []);
  // const dispatch = useDispatch();

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, testTypes.GET_TESTS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      testTypes.ADD_TEST,
      testTypes.UPDATE_TEST,
      testTypes.DELETE_TEST,
    ])
  );
  const QuestionAction = ({ data }) => {
    return (
      <IconButton
        key={"QuestionAction" + data._id}
        onClick={() => navigate("/testquestion", { state: data })}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };
  console.log("location", location);
  return (
    <div>
      <PageCreator
        screenName={"Tests"}
        rowActions={[QuestionAction]}
        tableHeaders={tableHeaders(isMobile)}
        tableData={tableData?.data}
        formFields={formFields(watchData)}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          isPublic: true,
          testSeriesId: location.state._id,
          tergetedExams: [],
          startTime: Date.now(),
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        selectOptions={{
          tergetedExams: allGoals,
          examType: Object.keys(EXAMTYPE).map((el) => ({ name: el, _id: el })),
          subjectId: allSubjects,
          topicId:
            allSubjects
              ?.filter((el) => el._id === watchData.subjectId)
              ?.map((d) => d.topics)
              .flat(Infinity) || [],
          subTopicId:
            allSubjects
              ?.filter((el) => el._id === watchData.subjectId)
              ?.map((d) =>
                d.topics
                  .filter((t) => t._id === watchData.topicId)
                  .map((sub) => sub.subTopics)
              )
              .flat(Infinity) || [],
        }}
        // onFormSubmit={onFormSubmit}
        onAdd={addTest}
        onEdit={editTest}
        onDelete={deleteTest}
        getTableData={(pagedata) =>
          getTests({
            query: { ...pagedata.query, testSeriesId: location.state._id },
          })
        }
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
        isWatchEnabled={true}
        onWatchFieldChange={(data) => {
          setWatchData(data);
        }}
      />
    </div>
  );
};

export default Test;
const tableHeaders = (isMobile) => [
  {
    field: "name",
    headerName: "Test Name",
    type: "string",
    editable: false,
    flex: 1,
    ...addTableColumnMinWidth(isMobile, 100),
  },
  {
    field: "questions",
    headerName: "Questions count",
    type: "string",
    editable: false,
    flex: 1,
    ...addTableColumnMinWidth(isMobile, 100),
    valueGetter: ({ value }) => value.length,
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
const formFields = (watchData) => [
  {
    type: "text",
    name: "name",
    label: "Test Name",
    placeholder: "Enter Test Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  {
    type: "select",
    name: "subjectId",
    label: "Choose Subject ",
    placeholder: "Choose Subject",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,
    required: true,
    disabled: false,
    readOnly: false,
    multiple: false,
    width: 3,
    mobileWidth: 4,
  },
  {
    type: "select",
    hidden: !Boolean(watchData.subjectId),
    name: "topicId",
    label: "Choose Topic ",
    placeholder: "Choose Topic",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,
    required: false,

    disabled: false,
    readOnly: false,
    multiple: false,
    width: 3,
    mobileWidth: 4,
  },
  {
    type: "select",
    name: "subTopicId",
    hidden: !(Boolean(watchData.subjectId) && Boolean(watchData.topicId)),
    label: "Choose Sub Topic ",
    placeholder: "Choose Sub Topic",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,
    disabled: false,
    readOnly: false,
    multiple: false,
    required: false,

    width: 3,
    mobileWidth: 4,
  },
  {
    type: "select",
    name: "examType",
    label: "Choose Exam Type ",
    placeholder: "Choose Exam Type",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,
    disabled: false,
    readOnly: false,
    multiple: false,
    required: false,

    width: 3,
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
    label: "Test Name",
    placeholder: "Enter Test Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
