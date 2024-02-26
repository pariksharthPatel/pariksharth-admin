import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT, ROLES } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addQualification,
  deleteQualification,
  editQualification,
  getQualifications,
  importQualification,
} from "../redux/actions/qualificiationActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { qualificationTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import Iconify from "../components/layout/iconify";
import useDisclosure from "../hooks/useDisclosure";
import useLoading from "../hooks/useLoading";

import ImportQualificationModal from "../components/ImportQualificationModal";

const Qualification = () => {
  const [refetchCount, setRefetchCount] = React.useState(0);
  const dispatch = useDispatch();
  const { activeRole } = useSelector((state) => state.auth);
  const isMobile = useResponsive("down", "sm");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const dispatch = useDispatch();

  const tableData = useSelector((state) => state.common.qualifications);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, qualificationTypes.GET_QUALIFICATIONS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      qualificationTypes.ADD_QUALIFICATION,
      qualificationTypes.UPDATE_QUALIFICATION,
      qualificationTypes.DELETE_QUALIFICATION,
    ])
  );

  const TopicAction = ({ data }) => {
    return (
      <IconButton
        key={"DegreeAction" + data._id}
        onClick={() => navigate("/degree", { state: data })}
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
        Import Qualifications
      </Button>
    );
  };
  const isImportLoading = useLoading(qualificationTypes.IMPORT_QUALIFICATION);
  const onImport = (subs) => {
    dispatch(
      importQualification({
        data: {
          qualificationIds: subs.map((el) => el._id),
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
      <ImportQualificationModal
        open={isOpen}
        onClose={onClose}
        onConfirm={(qualifications) => onImport(qualifications)}
        isLoading={isImportLoading}
        confirmTitle="Import"
      />
      <PageCreator
        refetchCount={refetchCount}
        screenName={"Qualification"}
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
        onAdd={addQualification}
        onEdit={editQualification}
        onDelete={deleteQualification}
        getTableData={getQualifications}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Qualification;
const tableHeaders = (isMobile) => [
  {
    field: "name",
    headerName: "Qualification Name",
    type: "string",
    editable: false,
    flex: 1,
    ...addTableColumnMinWidth(isMobile, 100),
  },

  {
    field: "degrees",
    headerName: " Degrees",
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
    label: "Qualification Name",
    placeholder: "Enter Qualification Name",
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

    label: "Qualification Name",
    placeholder: "Enter Qualification Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
