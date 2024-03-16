import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT, ROLES } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addBranch,
  deleteBranch,
  editBranch,
  getBranchs,
} from "../redux/actions/branchActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { branchTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useEffectOnce } from "react-use";
import { getAllInstitutes } from "../redux/actions/instituteActions";

const AffiliatesBranches = () => {
  const dispatch = useDispatch();

  const isMobile = useResponsive("down", "sm");
  const institutes = useSelector((state) => state.common.institutes);
  const { instituteId, activeRole } = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  const tableData = useSelector((state) => state.common.branches);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, branchTypes.GET_CURRENCYS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      branchTypes.ADD_CURRENCY,
      branchTypes.UPDATE_CURRENCY,
      branchTypes.DELETE_CURRENCY,
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
        screenName={"Branches"}
        tableHeaders={tableHeaders(isMobile)}
        tableData={tableData?.data}
        formFields={formFields(activeRole, instituteId)}
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
        onAdd={addBranch}
        onEdit={editBranch}
        onDelete={deleteBranch}
        getTableData={getBranchs}
        deleteTitle="name"
        selectable={false}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default AffiliatesBranches;

const formFields = (activeRole, instituteId) => [
  {
    type: "text",
    name: "name",
    label: "Branch Name",
    placeholder: "Enter Branch Name",
    required: true,
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
    label: "Branch Name",
    placeholder: "Enter Branch Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
const tableHeaders = (isMobile) => [
  {
    field: "name",
    headerName: "Branch Name",
    type: "string",
    editable: false,
    flex: 1,

    ...addTableColumnMinWidth(isMobile, 100),
  },
  {
    field: "instituteId",
    headerName: "Institute",
    type: "string",
    editable: false,
    flex: 1,

    ...addTableColumnMinWidth(isMobile, 100),
    valueGetter: (params) => params.value.name,
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
