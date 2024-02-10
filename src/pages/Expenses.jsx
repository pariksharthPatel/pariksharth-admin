import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addExpense,
  deleteExpense,
  editExpense,
  getExpenses,
} from "../redux/actions/expenseActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { expenseTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import TableFile from "../components/layout/TableFile";

const Expenses = () => {
  const isMobile = useResponsive("down", "sm");

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "title",
      headerName: "Expense Name",
      type: "string",
      editable: false,
      flex: 1,

      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "amount",
      headerName: "Expense Amount",
      type: "string",
      editable: false,
      flex: 1,

      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "expenseTime",
      headerName: "Expense Time",
      type: "string",
      editable: false,
      flex: 1,
      valueFormatter: ({ value }) => moment(value).format(DATETIMEFORMAT),
      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "description",
      headerName: "Description",
      type: "string",
      editable: false,
      flex: 1,

      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "file",
      headerName: "Expense Invoice",
      type: "string",
      editable: false,
      flex: 1,
      renderCell: (params) => <TableFile src={params.value} />,
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
    // {
    //   field: "createdAt",
    //   headerName: "Created At",
    //   type: "dateTime",
    //   flex: 0.5,
    //   editable: false,
    //   valueFormatter: ({ value }) => moment(value).format(DATETIMEFORMAT),
    //   ...addTableColumnMinWidth(isMobile, 150),
    // },
  ];

  const tableData = useSelector((state) => state.common.expenses);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, expenseTypes.GET_ALL_EXPENSES)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      expenseTypes.ADD_EXPENSE,
      expenseTypes.UPDATE_EXPENSE,
      expenseTypes.DELETE_EXPENSE,
    ])
  );
  return (
    <div>
      <PageCreator
        screenName={"Expenses"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          // time:new Date()
         
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        // onFormSubmit={onFormSubmit}
        onAdd={addExpense}
        onEdit={editExpense}
        onDelete={deleteExpense}
        getTableData={getExpenses}
        deleteTitle="title"
        mobileRowActionColumnWidth={120}
        selectable={!isMobile}
      />
    </div>
  );
};

export default Expenses;

const formFields = [
  {
    type: "text",
    name: "title",
    label: "Expense Name",
    placeholder: "Enter Expense Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
  },
  {
    type: "float",
    name: "amount",
    label: "Expense Amount",
    placeholder: "Enter Expense Amount",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
  },
 
  {
    type: "text",
    name: "description",
    label: "Expense Description",
    placeholder: "Enter Expense Description",
    required: true,
    disabled: false,
    readOnly: false,
    width: 12,
  },

 

  {
    type: "image",
    name: "file",
    label: "Choose Invoice",
    placeholder: "Choose Invoice",
    required: false,
    disabled: false,
    readOnly: false,
    width: 4,
  },
 
  {
    type: "datetime",
    name: "expenseTime",
    label: "Expense Time",
    placeholder: "Enter Expense Time",
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
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },
 
];
const searchFields = [
  {
    type: "text",
    name: "title",
    label: "Expense Name",
    placeholder: "Enter Expense Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
