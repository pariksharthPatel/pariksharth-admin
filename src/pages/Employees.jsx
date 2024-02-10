import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  getEmployees,
} from "../redux/actions/employeeActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { employeeTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useEffectOnce } from "react-use";
import { getSalonServices } from "../redux/actions/instituteServiceActions";
import { getUserGroups } from "../redux/actions/userGroupActions";
import { IconButton } from "@mui/material";
import ScheduleModal from "../components/ScheuleModal";
import Iconify from "../components/layout/iconify/Iconify";

const Employees = () => {
  const dispatch = useDispatch();
  const isMobile = useResponsive("down", "sm");
  const [scheduleData, setScheduleData] = React.useState();

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "name",
      headerName: "Name",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "mobile",
      headerName: "Mobile",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "userGroups",
      headerName: "Groups",
      type: "string",
      editable: false,
      flex: 1,
      valueGetter: (params) => params.value.map((d) => d.groupName).join(", "),

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

  const tableData = useSelector((state) => state.common.employees);
  const userGroups = useSelector((state) => state.common.usergroups);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, employeeTypes.GET_EMPLOYEES)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      employeeTypes.ADD_EMPLOYEE,
      employeeTypes.UPDATE_EMPLOYEE,
      employeeTypes.DELETE_EMPLOYEE,
    ])
  );
  useEffectOnce(() => {
    dispatch(
      getUserGroups({
        query: {
          isActive: true,
          paginate: false,
        },
      })
    );
  }, []);

  const ScheduleAction = ({ data }) => {
    return (
      <IconButton
        key={"ScheduleAction" + data._id}
        onClick={() => setScheduleData(data)}
      >
        <Iconify icon="ant-design:schedule-twotone" />
      </IconButton>
    );
  };

  const handleSaveSchedule = (data) => {
    dispatch(
      editEmployee({
        data: { ...scheduleData, ...data },
        callBack: () =>
          dispatch(
            getEmployees({
              query: {
                page: 0,
                pageSize: 10,
              },
            })
          ),
      })
    );

    setScheduleData();
  };
  return (
    <div>
      <ScheduleModal
        open={Boolean(scheduleData?.schedule)}
        onClose={() => setScheduleData()}
        employee={scheduleData}
        onConfirm={(schedule) => handleSaveSchedule(schedule)}
        isLoading={isFormLoading}
      />
      <PageCreator
        screenName={"Employees"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,

          userGroups: [],
        }}
        selectOptions={{
          userGroups: userGroups?.data,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        rowActions={[ScheduleAction]}
        // onFormSubmit={onFormSubmit}
        onAdd={addEmployee}
        onEdit={editEmployee}
        onDelete={deleteEmployee}
        getTableData={getEmployees}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Employees;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Employee Name",
    placeholder: "Enter Employee Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  {
    type: "text",
    name: "mobile",
    label: "Employee Mobile",
    placeholder: "Enter Employee Mobile",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "select",

    name: "userGroups",
    label: "Choose Groups ",
    placeholder: "Choose Groups",
    optionLabel: "groupName",
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
    name: "name",
    label: "Employee Name",
    placeholder: "Enter Employee Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
