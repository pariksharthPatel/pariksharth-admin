import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import { getQuestions } from "../redux/actions/questionActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { questionTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { Button } from "@mui/material";
import { useEffectOnce } from "react-use";
import { getAllMySubjects } from "../redux/actions/subjectActions";
import { getAllMyGoals } from "../redux/actions/goalActions";
import { addTestQuestions } from "../redux/actions/testActions";
import { useLocation } from "react-router-dom";

const TestQuestion = () => {
  const [refetchCount, setRefetchCount] = React.useState(0);
  const dispatch = useDispatch();
  const { activeRole } = useSelector((state) => state.auth);
  const isMobile = useResponsive("down", "sm");
  // const dispatch = useDispatch();
  const [watchData, setWatchData] = React.useState({});
  const location = useLocation();

  const {
    questions: tableData,
    allSubjects,

    allGoals,
  } = useSelector((state) => state.common);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, questionTypes.GET_QUESTIONS)
  );

  const BatchQuestionAddAction = ({ selected, setSelected }) => {
    return (
      selected?.length > 0 && (
        <Button
          key="BatchQuestionAddAction"
          variant="contained"
          onClick={() => {
            // alert("this is selected");
            dispatch(
              addTestQuestions({
                data: {
                  testId: location.state._id,
                  questions: selected,
                },
              })
            );
          }}
        >
          Add {selected?.length} Questions
        </Button>
      )
    );
  };
  useEffectOnce(() => {
    dispatch(getAllMySubjects());
    dispatch(getAllMyGoals());
  }, []);
  return (
    <div>
      <PageCreator
        toolbarActions={[BatchQuestionAddAction]}
        refetchCount={refetchCount}
        screenName={"TestQuestion"}
        tableHeaders={tableHeaders(isMobile)}
        tableData={tableData?.data}
        searchFields={searchFields}
        dialogWidth="lg"
        isLoading={isTableLoading}
        totalCount={tableData?.totalCount}
        getTableData={getQuestions}
        selectable={true}
        mobileRowActionColumnWidth={120}
        isWatchEnabled={true}
        onWatchFieldChange={(data) => {
          setWatchData(data);
        }}
        selectOptions={{
          subject: allSubjects,
          topic:
            allSubjects
              ?.filter((el) => el._id === watchData.subject)
              ?.map((d) => d.topics)
              .flat(Infinity) || [],
          subTopic:
            allSubjects
              ?.filter((el) => el._id === watchData.subject)
              ?.map((d) =>
                d.topics
                  .filter((t) => t._id === watchData.topic)
                  .map((sub) => sub.subTopics)
              )
              .flat(Infinity) || [],
          tergetedExams: allGoals,
        }}
      />
    </div>
  );
};

export default TestQuestion;
const tableHeaders = (isMobile) => [
  {
    field: "name",
    headerName: "TestQuestion Name",
    type: "string",
    editable: false,
    flex: 1,
    ...addTableColumnMinWidth(isMobile, 100),
  },

  {
    field: "filtered",
    headerName: " Filter Code",
    type: "string",
    editable: false,
    flex: 0.5,
    // valueFormatter: ({ value }) => value.length,

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

const searchFields = [
  {
    type: "text",
    name: "name",

    label: "TestQuestion Name",
    placeholder: "Enter TestQuestion Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  {
    type: "text",
    name: "filtered",
    label: "Filter Values",
    placeholder: "Enter Filter Values",
    required: false,
    disabled: false,
    readOnly: false,
    width: 3,
  },
  {
    type: "text",
    name: "filtered",
    label: "Filter Values",
    placeholder: "Enter Filter Values",
    required: false,
    disabled: false,
    readOnly: false,
    width: 3,
  },

  {
    type: "select",
    name: "subject",
    label: "Choose Subject ",
    placeholder: "Choose Subject",
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
    name: "topic",
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
    name: "subTopic",
    label: "Choose Sub Topic ",
    placeholder: "Choose Sub Topic",
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
    width: 3,
    mobileWidth: 4,
  },
];
