import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT, ROLES } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addUser,
  deleteUser,
  editUser,
  getUsers,
} from "../redux/actions/userActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { userTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useEffectOnce } from "react-use";
import {
  getAllInstitutes,
  getInstitutes,
} from "../redux/actions/instituteActions";
import { FORMMODE } from "../enums";
import { getAllBranchs } from "../redux/actions/branchActions";

const Users = () => {
  const dispatch = useDispatch();
  const isMobile = useResponsive("down", "sm");
  const institutes = useSelector((state) => state.common.institutes);
  console.log("institutes", institutes);
  const { instituteId, activeRole } = useSelector((state) => state.auth);
  const [watchData, setWatchData] = React.useState({});

  // const dispatch = useDispatch();

  const { users: tableData, allBranches } = useSelector(
    (state) => state.common
  );

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, userTypes.GET_PLATFORMS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      userTypes.ADD_PLATFORM,
      userTypes.UPDATE_PLATFORM,
      userTypes.DELETE_PLATFORM,
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
  useEffect(() => {
    if (watchData.activeRole === ROLES.BRANCHADMIN) {
      dispatch(getAllBranchs());
    }
  }, [watchData.activeRole]);
  console.log("institutes.data", allBranches);
  return (
    <div>
      <PageCreator
        screenName={"Users"}
        tableHeaders={tableHeaders(isMobile)}
        tableData={tableData?.data}
        formFields={formFields(instituteId, activeRole, watchData)}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          roles: [],
          services: [],
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        selectOptions={{
          roles: Object.keys(ROLES)
            .filter((r) => r !== ROLES.SUPERADMIN)
            .map((el) => ({ text: el, value: el })),
          activeRole: Object.keys(ROLES)
            .filter((r) => r !== ROLES.SUPERADMIN)
            .map((el) => ({ text: el, value: el })),
          instituteId: institutes,
          branchId: allBranches,
        }}
        // onFormSubmit={onFormSubmit}
        onAdd={addUser}
        onEdit={editUser}
        onDelete={deleteUser}
        getTableData={getUsers}
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

export default Users;

const formFields = (instituteId, activeRole, watchData) => [
  {
    type: "select",
    hideAt: FORMMODE.ADD,

    name: "roles",
    label: "Choose Role ",
    placeholder: "Choose Role",
    optionLabel: "text",
    optionValue: "value",
    hasExternalOptions: true,
    required: true,
    disabled: false,
    readOnly: false,
    multiple: true,
    width: 4,
    mobileWidth: 12,
  },

  {
    type: "select",

    name: "activeRole",
    label: "Choose Role ",
    placeholder: "Choose Role",
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
    hidden: watchData.activeRole !== ROLES.BRANCHADMIN,

    name: "branchId",
    label: "Choose Branch ",
    placeholder: "Choose Branch",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,
    required: true,
    disabled: false,
    readOnly: false,
    multiple: false,
    width: 4,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "name",
    label: "User Name",
    placeholder: "Enter User Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
  },

  {
    type: "text",
    name: "email",
    label: "User Email",
    placeholder: "Enter User Email",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
  },
  {
    type: "password",
    name: "password",
    hideAt: FORMMODE.EDIT,
    label: "User Password",
    placeholder: "Enter User Password",
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
    type: "select",
    hidden: Boolean(instituteId) && activeRole !== ROLES.SUPERADMIN,

    name: "instituteId",
    label: "Choose Institute ",
    placeholder: "Choose Institute",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,

    required: true,
    disabled: false,
    readOnly: false,
    multiple: false,
    width: 4,
    mobileWidth: 12,
  },

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
    label: "User Name",
    placeholder: "Enter User Name",
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
    headerName: "User Name",
    type: "string",
    editable: false,
    flex: 1,

    ...addTableColumnMinWidth(isMobile, 100),
  },
  {
    field: "email",
    headerName: "User Email",
    type: "string",
    editable: false,
    flex: 1,
    ...addTableColumnMinWidth(isMobile, 70),
  },
  {
    field: "activeRole",
    headerName: "User Role",
    type: "string",
    editable: false,
    flex: 1,
    ...addTableColumnMinWidth(isMobile, 70),
    valueGetter: (params) => params.value,
  },

  {
    field: "instituteId",
    headerName: "Institute Name",
    type: "string",
    editable: false,
    flex: 1,
    ...addTableColumnMinWidth(isMobile, 70),
    // valueGetter: (params) => params.name,
    valueFormatter: ({ value }) => value?.name || "-",
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
