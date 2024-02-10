import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addCurrency,
  deleteCurrency,
  editCurrency,
  getAllCurrencys,
} from "../redux/actions/currencyActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { currencyTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";

const Currencys = () => {
  const isMobile = useResponsive("down", "sm");

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "name",
      headerName: "Currency Name",
      type: "string",
      editable: false,
      flex: 1,

      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "symbol",
      headerName: "Currency Symbol",
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

  const tableData = useSelector((state) => state.common.currency);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, currencyTypes.GET_CURRENCYS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      currencyTypes.ADD_CURRENCY,
      currencyTypes.UPDATE_CURRENCY,
      currencyTypes.DELETE_CURRENCY,
    ])
  );
  return (
    <div>
      <PageCreator
        screenName={"Currencies"}
        tableHeaders={tableHeaders}
        tableData={tableData}
        formFields={formFields}
        
        defaultFormData={{
          isActive: true,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        // onFormSubmit={onFormSubmit}
        onAdd={addCurrency}
        onEdit={editCurrency}
        onDelete={deleteCurrency}
        getTableData={getAllCurrencys}
        deleteTitle="name"
        selectable={false}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Currencys;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Currency Name",
    placeholder: "Enter Currency Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  {
    type: "text",
    name: "symbol",
    label: "Currency Symbol",
    placeholder: "Enter Currency Symbol",
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
    name: "name",
    label: "Currency Name",
    placeholder: "Enter Currency Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
