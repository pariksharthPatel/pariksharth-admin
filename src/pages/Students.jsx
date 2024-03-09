import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT, ROLES } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addStudent,
  deleteStudent,
  editStudent,
  getStudents,
} from "../redux/actions/studentActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { studentTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useEffectOnce } from "react-use";
import { getAllInstitutes } from "../redux/actions/instituteActions";
import { FORMMODE } from "../enums";

const Students = () => {
  const dispatch = useDispatch();
  const isMobile = useResponsive("down", "sm");
  const institutes = useSelector((state) => state.common.institutes);
  console.log("institutes", institutes);
  const { instituteId, activeRole } = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  const { students: tableData } = useSelector((state) => state.common);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, studentTypes.GET_STUDENTS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      studentTypes.ADD_STUDENT,
      studentTypes.UPDATE_STUDENT,
      studentTypes.DELETE_STUDENT,
    ])
  );

  useEffectOnce(() => {
    dispatch(
      getAllInstitutes({
        query: {
          isActive: true,
        },
      })
    );
  }, []);

  return (
    <div>
      <PageCreator
        screenName={"Students"}
        tableHeaders={tableHeaders(isMobile)}
        tableData={tableData?.data}
        formFields={formFields(instituteId, activeRole)}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        selectOptions={{
          instituteId: institutes,
        }}
        // onFormSubmit={onFormSubmit}
        onAdd={addStudent}
        onEdit={editStudent}
        onDelete={deleteStudent}
        getTableData={getStudents}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Students;

const formFields = (instituteId, activeRole) => [
  {
    type: "text",
    name: "name",
    label: "Student Name",
    placeholder: "Enter Student Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
  },
  {
    type: "image",
    name: "image",
    label: "Choose Profile Image",
    placeholder: "Choose Profile Image",
    required: false,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  {
    type: "text",
    name: "contactNumber",
    label: "Contact Number",
    placeholder: "Enter Contact Number",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "email",
    label: "Student Email",
    placeholder: "Enter Student Email",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
  },
  {
    type: "password",
    name: "password",
    hideAt: FORMMODE.EDIT,
    label: "Student Password",
    placeholder: "Enter Student Password",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  // {
  //   type: "select",
  //   name: "roles",

  //   label: "Choose Role ",
  //   placeholder: "Choose Role",
  //   optionLabel: "text",
  //   optionValue: "value",
  //   hasExternalOptions: true,
  //   required: true,
  //   disabled: false,
  //   readOnly: false,
  //   multiple: true,
  //   width: 4,
  //   mobileWidth: 12,
  // },

  {
    type: "boolean",
    name: "isActive",
    label: "Status",
    placeholder: "Enter Status",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },
];
const searchFields = [
  {
    type: "text",
    name: "name",
    label: "Student Name",
    placeholder: "Enter Student Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
    clearable: true,
  },
  {
    type: "select",
    // hidden: Boolean(instituteId),

    name: "instituteId",
    label: "Choose Institute ",
    placeholder: "Choose Institute",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    multiple: false,
    width: 6,
    mobileWidth: 12,
    clearable: true,
    hasEmptyOption: true,
  },
];

const tableHeaders = (isMobile) => [
  {
    field: "name",
    headerName: "Name",
    type: "string",
    editable: false,
    flex: 1,

    ...addTableColumnMinWidth(isMobile, 100),
  },
  {
    field: "contactNumber",
    headerName: "Contact Number",
    type: "string",
    editable: false,
    flex: 1,

    ...addTableColumnMinWidth(isMobile, 100),
  },
  {
    field: "profileImage",
    headerName: " Image",
    type: "string",
    editable: false,
    flex: 0.5,
    renderCell: (params) => <TableImage src={params.value} />,
    ...addTableColumnMinWidth(isMobile, 70),
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    editable: false,
    flex: 1,
    ...addTableColumnMinWidth(isMobile, 70),
  },
  {
    field: "isMobileVerified",
    headerName: "Verified",
    type: "boolean",
    flex: 1,
    editable: false,
    ...addTableColumnMinWidth(isMobile, 80),
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
