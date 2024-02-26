import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addTopic,
  deleteTopic,
  editTopic,
  getTopics,
} from "../redux/actions/topicActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { topicTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";

const Topic = () => {
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "name",
      headerName: "Topic Name",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "imagePath",
      headerName: " Image",
      type: "string",
      editable: false,
      flex: 0.5,
      renderCell: (params) => <TableImage src={params.value} />,
      ...addTableColumnMinWidth(isMobile, 70),
    },
    {
      field: "subTopics",
      headerName: " Sub Topics",
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

  const tableData = useSelector((state) => state.common.topics);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, topicTypes.GET_TOPICS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      topicTypes.ADD_TOPIC,
      topicTypes.UPDATE_TOPIC,
      topicTypes.DELETE_TOPIC,
    ])
  );

  const TopicAction = ({ data }) => {
    return (
      <IconButton
        key={"TopicAction" + data._id}
        onClick={() => navigate("/subtopic", { state: data })}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };
  return (
    <div>
      <PageCreator
        screenName={"Topic"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          subjectId: location.state._id,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        rowActions={[TopicAction]}
        // onFormSubmit={onFormSubmit}
        onAdd={addTopic}
        onEdit={editTopic}
        onDelete={deleteTopic}
        getTableData={(pageData) =>
          getTopics({
            query: { ...pageData.query, subjectId: location.state._id },
          })
        }
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Topic;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Topic Name",
    placeholder: "Enter Topic Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "image",
    name: "image",
    label: "Choose Topic Image",
    placeholder: "Choose Topic Image",
    required: false,
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

    label: "Topic Name",
    placeholder: "Enter Topic Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
