import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addUserGroup,
  deleteUserGroup,
  editUserGroup,
  getUserGroups,
} from "../redux/actions/userGroupActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { userGroupTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useEffectOnce } from "react-use";
import { getSalonServices } from "../redux/actions/instituteServiceActions";

const UserGroups = () => {
  const dispatch = useDispatch();
  const isMobile = useResponsive("down", "sm");

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "groupName",
      headerName: "Name",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "services",
      headerName: "Services",
      type: "string",
      editable: false,
      flex: 1,
      valueGetter: (params) => params.value.map((d) => d.name).join(", "),

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

  const tableData = useSelector((state) => state.common.usergroups);
  const instituteservices = useSelector(
    (state) => state.common.instituteservices
  );

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, userGroupTypes.GET_USER_GROUPS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      userGroupTypes.ADD_USER_GROUP,
      userGroupTypes.UPDATE_USER_GROUP,
      userGroupTypes.DELETE_USER_GROUP,
    ])
  );
  useEffectOnce(() => {
    dispatch(
      getSalonServices({
        query: {
          isActive: true,
          paginate: false,
        },
      })
    );
  }, []);
  return (
    <div>
      <PageCreator
        screenName={"User Groups"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,

          services: [],
        }}
        selectOptions={{
          services: instituteservices?.data,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        // onFormSubmit={onFormSubmit}
        onAdd={addUserGroup}
        onEdit={editUserGroup}
        onDelete={deleteUserGroup}
        getTableData={getUserGroups}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default UserGroups;

const formFields = [
  {
    type: "text",
    name: "groupName",
    label: "Group Name",
    placeholder: "Enter Group Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "select",

    name: "services",
    label: "Choose Services ",
    placeholder: "Choose Services",
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
    name: "groupName",
    label: "Group Name",
    placeholder: "Enter Group Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
