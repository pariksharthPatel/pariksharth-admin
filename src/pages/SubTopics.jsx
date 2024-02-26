import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addSubTopic,
  deleteSubTopic,
  editSubTopic,
  getSubTopics,
} from "../redux/actions/subTopicActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { subTopicTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";

const SubTopic = () => {
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "name",
      headerName: "SubTopic Name",
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

  const tableData = useSelector((state) => state.common.subTopics);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, subTopicTypes.GET_SUB_TOPICS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      subTopicTypes.ADD_SUB_TOPIC,
      subTopicTypes.UPDATE_SUB_TOPIC,
      subTopicTypes.DELETE_SUB_TOPIC,
    ])
  );

  const SubTopicAction = ({ data }) => {
    return (
      <IconButton
        key={"SubTopicAction" + data._id}
        onClick={() => navigate("/subsubTopic")}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };
  return (
    <div>
      <PageCreator
        screenName={"SubTopic"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          subjectId: location.state.subjectId,
          topicId: location.state._id,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        rowActions={[SubTopicAction]}
        // onFormSubmit={onFormSubmit}
        onAdd={addSubTopic}
        onEdit={editSubTopic}
        onDelete={deleteSubTopic}
        getTableData={(pageData) =>
          getSubTopics({
            query: {
              ...pageData.query,
              subjectId: location.state.subjectId,
              topicId: location.state._id,
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

export default SubTopic;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "SubTopic Name",
    placeholder: "Enter SubTopic Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "image",
    name: "image",
    label: "Choose SubTopic Image",
    placeholder: "Choose SubTopic Image",
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
    label: "SubTopic Name",
    placeholder: "Enter SubTopic Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
