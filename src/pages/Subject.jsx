import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT, ROLES } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addSubject,
  deleteSubject,
  editSubject,
  getSubjects,
  importSubject,
} from "../redux/actions/subjectActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { subjectTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";
import useDisclosure from "../hooks/useDisclosure";
import useLoading from "../hooks/useLoading";

import ImportSubjectModal from "../components/ImportSubjectModal";

const Subject = () => {
  const [refetchCount, setRefetchCount] = React.useState(0);
  const dispatch = useDispatch();
  const { activeRole } = useSelector((state) => state.auth);
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const dispatch = useDispatch();

  const tableData = useSelector((state) => state.common.subjects);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, subjectTypes.GET_SUBJECTS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      subjectTypes.ADD_SUBJECT,
      subjectTypes.UPDATE_SUBJECT,
      subjectTypes.DELETE_SUBJECT,
    ])
  );

  const TopicAction = ({ data }) => {
    return (
      <IconButton
        key={"TopicAction" + data._id}
        onClick={() => navigate("/topic", { state: data })}
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
        Import Subjects
      </Button>
    );
  };
  const isImportLoading = useLoading(subjectTypes.IMPORT_SUBJECT);
  const onImport = (subs) => {
    dispatch(
      importSubject({
        data: {
          subjectIds: subs.map((el) => el._id),
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
      <ImportSubjectModal
        open={isOpen}
        onClose={onClose}
        onConfirm={(subjects) => onImport(subjects)}
        isLoading={isImportLoading}
        confirmTitle="Import"
      />
      <PageCreator
        refetchCount={refetchCount}
        screenName={"Subject"}
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
        onAdd={addSubject}
        onEdit={editSubject}
        onDelete={deleteSubject}
        getTableData={getSubjects}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Subject;
const tableHeaders = (isMobile) => [
  {
    field: "name",
    headerName: "Subject Name",
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
    field: "topics",
    headerName: " Topics",
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
    label: "Subject Name",
    placeholder: "Enter Subject Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "image",
    name: "image",
    label: "Choose Subject Image",
    placeholder: "Choose Subject Image",
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

    label: "Subject Name",
    placeholder: "Enter Subject Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
