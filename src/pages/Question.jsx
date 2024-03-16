import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { AnsType, DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addQuestion,
  deleteQuestion,
  editQuestion,
  getQuestions,
} from "../redux/actions/questionActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { questionTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import useDisclosure from "../hooks/useDisclosure";
import { useEffectOnce } from "react-use";
import { getAllMySubjects } from "../redux/actions/subjectActions";
import { getAllMyGoals } from "../redux/actions/goalActions";

const Question = () => {
  const [refetchCount, setRefetchCount] = React.useState(0);
  const dispatch = useDispatch();
  const { activeRole } = useSelector((state) => state.auth);
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [watchData, setWatchData] = React.useState({});
  // const dispatch = useDispatch();

  const {
    questions: tableData,
    allSubjects,
    allGoals,
  } = useSelector((state) => state.common);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, questionTypes.GET_QUESTIONS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      questionTypes.ADD_QUESTION,
      questionTypes.UPDATE_QUESTION,
      questionTypes.DELETE_QUESTION,
    ])
  );

  useEffectOnce(() => {
    dispatch(getAllMySubjects());
    dispatch(getAllMyGoals());
  }, []);
  console.log("allGoals", allGoals);
  const formFields = [
    {
      type: "text",
      name: "filtered",
      label: "Filter Values",
      placeholder: "Enter Filter Values",
      required: true,
      disabled: false,
      readOnly: false,
      width: 4,
    },

    {
      type: "select",
      name: "ansType",
      label: "Choose AnswerType ",
      placeholder: "Choose AnswerType",
      optionLabel: "text",
      optionValue: "value",
      hasExternalOptions: true,
      required: true,
      disabled: false,
      readOnly: false,
      multiple: false,
      width: 2,
      mobileWidth: 4,
    },
    {
      type: "text",
      name: "ans",
      label: "Answer",
      placeholder: "Enter Answer",
      required: true,
      disabled: false,
      readOnly: false,
      width: 2,
    },
    {
      type: "text",
      name: "que",
      label: "Question",
      placeholder: "Enter Question",
      required: true,
      disabled: false,
      readOnly: false,
      width: 12,
    },
    ...["a", "b", "c", "d"].map((el) => {
      return {
        type: "text",
        name: el,
        label: `${el} Values`,
        placeholder: `Enter ${el} Values`,
        required: false,
        disabled: false,
        readOnly: false,
        width: 3,
      };
    }),
    {
      type: "select",
      name: "subject",
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
      hidden: !Boolean(watchData.subject),
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
      hidden: !(Boolean(watchData.subject) && Boolean(watchData.topic)),
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
      name: "tergetedExams",
      label: "Choose Targeted Exams ",
      placeholder: "Choose Targeted Exams",
      optionLabel: "name",
      optionValue: "_id",
      hasExternalOptions: true,
      required: true,
      disabled: false,
      readOnly: false,
      multiple: true,
      width: 3,
      mobileWidth: 4,
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

  const formFieldsByRp = [
    {
      type: "subSectionHeader",
      title: "Question Properties",
      // size: 60, // by default size = 30
      width: 12,
      mobileWidth: 12,
    },

    {
      type: "select",
      name: "languageOfQuestion",
      label: "Language",
      placeholder: "Language",
      // label: "Language Of Question",
      // placeholder: "Language Of Question",
      optionLabel: "text",
      optionValue: "value",
      hasExternalOptions: true,
      required: true,
      disabled: false,
      readOnly: false,
      multiple: false,
      width: 3,
      mobileWidth: 12,
    },
    {
      type: "select",
      name: "subject",
      label: "Subject ",
      placeholder: "Subject",
      optionLabel: "name",
      optionValue: "_id",
      hasExternalOptions: true,
      required: true,
      disabled: false,
      readOnly: false,
      multiple: false,
      width: 3,
      mobileWidth: 12,
    },
    {
      type: "select",
      hidden: !Boolean(watchData.subject),
      name: "topic",
      label: "Topic ",
      placeholder: "Topic",
      optionLabel: "name",
      optionValue: "_id",
      hasExternalOptions: true,
      required: false,

      disabled: false,
      readOnly: false,
      multiple: false,
      width: 3,
      mobileWidth: 12,
    },
    {
      type: "select",
      name: "subTopic",
      hidden: !(Boolean(watchData.subject) && Boolean(watchData.topic)),
      label: "Sub Topic ",
      placeholder: "Sub Topic",
      optionLabel: "name",
      optionValue: "_id",
      hasExternalOptions: true,
      disabled: false,
      readOnly: false,
      multiple: false,
      required: false,

      width: 3,
      mobileWidth: 12,
    },
    {
      type: "select",
      name: "difficulty",
      label: "Difficulty Level ",
      placeholder: "Difficulty Level",
      optionLabel: "text",
      optionValue: "value",
      hasExternalOptions: true,
      required: true,
      disabled: false,
      readOnly: false,
      multiple: false,
      width: 4,
      mobileWidth: 4,
    },
    {
      type: "select",
      name: "classLevel",
      label: "Class Level",
      placeholder: "Class Level",
      optionLabel: "text",
      optionValue: "value",
      hasExternalOptions: true,
      required: true,
      disabled: false,
      readOnly: false,
      multiple: false,
      width: 4,
      mobileWidth: 4,
    },
    {
      type: "select",
      name: "questionType",
      label: "Question Type",
      placeholder: "Question Type",
      optionLabel: "text",
      optionValue: "value",
      hasExternalOptions: true,
      required: true,
      disabled: false,
      readOnly: false,
      multiple: false,
      width: 4,
      mobileWidth: 4,
    },
    {
      type: "select",
      name: "subjectType",
      label: "Subject Type",
      placeholder: "Subject Type",
      optionLabel: "text",
      optionValue: "value",
      hasExternalOptions: true,
      required: true,
      disabled: false,
      readOnly: false,
      multiple: false,
      width: 4,
      mobileWidth: 12,
    },

    // {
    //   type: "select",
    //   name: "numberOfQuestion",
    //   label: "Number Of Question",
    //   placeholder: "Number Of Question",
    //   optionLabel: "text",
    //   optionValue: "value",
    //   hasExternalOptions: true,
    //   required: true,
    //   disabled: false,
    //   readOnly: false,
    //   multiple: false,
    //   width: 4,
    //   mobileWidth: 4,
    // },
    // {
    //   type: "text",
    //   name: "filtered",
    //   label: "Filter Values updated",
    //   placeholder: "Enter Filter Values",
    //   required: true,
    //   disabled: false,
    //   readOnly: false,
    //   width: 4,
    // },

    {
      type: "select",
      name: "ansType",
      label: "AnswerType ",
      placeholder: "AnswerType",
      optionLabel: "text",
      optionValue: "value",
      hasExternalOptions: true,
      required: true,
      disabled: false,
      readOnly: false,
      multiple: false,
      width: 4,
      mobileWidth: 12,
    },
    {
      type: "select",
      name: "tergetedExams",
      label: "Targeted Exams ",
      placeholder: "Targeted Exams",
      optionLabel: "name",
      optionValue: "_id",
      hasExternalOptions: true,
      required: true,
      disabled: false,
      readOnly: false,
      multiple: true,
      width: 4,
      mobileWidth: 12,
    },

    // changes by rp
    // created a new component
    {
      type: "lineSeperation",
      width: 12,
      mobileWidth: 12,
    },

    {
      type: "subSectionHeader",
      title: "Question details",
      // size: 60, // by default size = 30
    },

    {
      type: "text",
      name: "que",
      label: "Question",
      placeholder: "Enter Question",
      required: true,
      disabled: false,
      readOnly: false,
      width: 12,
    },
    ...["a", "b", "c", "d"].map((el) => {
      return {
        type: "text",
        name: el,
        label: `Option ${el}`,
        placeholder: `Enter Option ${el}`,
        required: false,
        disabled: false,
        readOnly: false,
        width: 3,
      };
    }),
    ...["aImg", "bImg", "cImg", "dImg"].map((el) => {
      return {
        type: "text",
        name: el,
        label: `Image ${el}`,
        placeholder: `Upload Image ${el}`,
        required: false,
        disabled: false,
        readOnly: false,
        width: 3,
      };
    }),

    {
      type: "select",
      name: "ans",
      label: "Correct Option",
      // placeholder: "Enter Answer",
      required: true,
      disabled: false,
      readOnly: false,
      width: 2,
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

  return (
    <div>
      <PageCreator
        refetchCount={refetchCount}
        screenName={"Question"}
        tableHeaders={tableHeaders(isMobile)}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          tergetedExams: [],
          ansType: "SINGLE",
          ans: "a",
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        selectOptions={{
          ansType: Object.keys(AnsType).map((el) => ({ text: el, value: el })),
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
        // onFormSubmit={onFormSubmit}
        onAdd={addQuestion}
        onEdit={editQuestion}
        onDelete={deleteQuestion}
        getTableData={getQuestions}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
        isWatchEnabled={true}
        onWatchFieldChange={(data) => {
          setWatchData(data);
        }}
        // {...(ROLES.FACULTY === activeRole && {
        //   onAdd: addQuestion,
        //   onEdit: editQuestion,
        //   onDelete: deleteQuestion,
        // })}
      />
      <PageCreator
        refetchCount={refetchCount}
        screenName={"Question By Rp"}
        tableHeaders={tableHeaders(isMobile)}
        tableData={tableData?.data}
        formFields={formFieldsByRp}
        searchFields={searchFieldsByRp}
        defaultFormData={{
          isActive: true,
          tergetedExams: [],
          ansType: "SINGLE",
          ans: "a",
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        selectOptions={{
          ansType: Object.keys(AnsType).map((el) => ({ text: el, value: el })),
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
        // onFormSubmit={onFormSubmit}
        onAdd={addQuestion}
        onEdit={editQuestion}
        onDelete={deleteQuestion}
        getTableData={getQuestions}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
        isWatchEnabled={true}
        onWatchFieldChange={(data) => {
          setWatchData(data);
        }}
        // {...(ROLES.FACULTY === activeRole && {
        //   onAdd: addQuestion,
        //   onEdit: editQuestion,
        //   onDelete: deleteQuestion,
        // })}
      />
    </div>
  );
};

export default Question;
const tableHeaders = (isMobile) => [
  {
    field: "que",
    headerName: " Question",
    type: "string",
    editable: false,
    flex: 0.5,
    // valueFormatter: ({ value }) => value.length,

    ...addTableColumnMinWidth(isMobile, 70),
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
    name: "que",

    label: "Question",
    placeholder: "Enter Question",
    required: false,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  {
    type: "select",
    name: "difficultyLevel",
    label: "Difficulty Level",
    placeholder: "Enter Difficulty Level",
    required: false,
    disabled: false,
    readOnly: false,
    width: 3,
  },
  // {
  //   type: "text",
  //   name: "filtered",
  //   label: "Filter Values",
  //   placeholder: "Enter Filter Values",
  //   required: false,
  //   disabled: false,
  //   readOnly: false,
  //   width: 3,
  // },

  {
    type: "select",
    name: "subject",
    label: "Subject ",
    placeholder: "Subject",
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
    label: "Topic ",
    placeholder: "Topic",
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
    label: "Sub Topic ",
    placeholder: "Sub Topic",
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
    label: "Targeted Exams ",
    placeholder: "Targeted Exams",
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
const searchFieldsByRp = [
  {
    type: "text",
    name: "que",

    label: "Question",
    placeholder: "Enter Question",
    required: false,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  {
    type: "select",
    name: "difficultyLevel",
    label: "Difficulty Level",
    placeholder: "Enter Difficulty Level",
    required: false,
    disabled: false,
    readOnly: false,
    width: 3,
  },
  // {
  //   type: "text",
  //   name: "filtered",
  //   label: "Filter Values",
  //   placeholder: "Enter Filter Values",
  //   required: false,
  //   disabled: false,
  //   readOnly: false,
  //   width: 3,
  // },

  {
    type: "select",
    name: "subject",
    label: "Subject ",
    placeholder: "Subject",
    // optionLabel: "name",
    // optionValue: "_id",
    // hasExternalOptions: true,
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
    label: "Topic ",
    placeholder: "Topic",
    // optionLabel: "name",
    // optionValue: "_id",
    // hasExternalOptions: true,
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
    label: "Sub Topic ",
    placeholder: "Sub Topic",
    // optionLabel: "name",
    // optionValue: "_id",
    // hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    multiple: false,
    width: 3,
    mobileWidth: 4,
  },
  {
    type: "select",
    name: "classLevel",
    label: "Class Level",
    placeholder: "Class Level",
    optionLabel: "text",
    optionValue: "value",
    hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    multiple: false,
    width: 4,
    mobileWidth: 4,
  },
  {
    type: "select",
    name: "questionType",
    label: "Question Type",
    placeholder: "Question Type",
    optionLabel: "text",
    optionValue: "value",
    hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    multiple: false,
    width: 4,
    mobileWidth: 4,
  },
  {
    type: "select",
    name: "subjectType",
    label: "Subject Type",
    placeholder: "Subject Type",
    optionLabel: "text",
    optionValue: "value",
    hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    multiple: false,
    width: 4,
    mobileWidth: 12,
  },

  {
    type: "select",
    name: "ansType",
    label: "AnswerType ",
    placeholder: "AnswerType",
    optionLabel: "text",
    optionValue: "value",
    hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    multiple: false,
    width: 4,
    mobileWidth: 12,
  },
  {
    type: "select",
    name: "tergetedExams",
    label: "Targeted Exams ",
    placeholder: "Targeted Exams",
    // optionLabel: "name",
    // optionValue: "_id",
    // hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    multiple: true,
    width: 4,
    mobileWidth: 12,
  },
];
