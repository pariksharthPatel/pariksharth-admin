import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addDeal,
  deleteDeal,
  editDeal,
  getDeals,
} from "../redux/actions/dealActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { dealTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";

const Deals = () => {
  const isMobile = useResponsive("down", "sm");

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "title",
      headerName: "Deal Title",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "subTitle",
      headerName: "Deal Sub Title",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "dealCode",
      headerName: "Deal Code",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "discount",
      headerName: "Discount",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "startTime",
      headerName: "Start Time",
      type: "string",
      editable: false,
      flex: 1,
      valueFormatter: ({ value }) => moment(value).format(DATETIMEFORMAT),
      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "endTime",
      headerName: "End Time",
      type: "string",
      editable: false,
      flex: 1,
      valueFormatter: ({ value }) => moment(value).format(DATETIMEFORMAT),
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

  const tableData = useSelector((state) => state.common.deals);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, dealTypes.GET_CATEGORYS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      dealTypes.ADD_CATEGORY,
      dealTypes.UPDATE_CATEGORY,
      dealTypes.DELETE_CATEGORY,
    ])
  );
  return (
    <div>
      <PageCreator
        screenName={"Deal"}
        tableHeaders={tableHeaders}
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
        // onFormSubmit={onFormSubmit}
        onAdd={addDeal}
        onEdit={editDeal}
        onDelete={deleteDeal}
        getTableData={getDeals}
        deleteTitle="title"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Deals;

const formFields = [
  {
    type: "text",
    name: "title",
    label: "Deal Name",
    placeholder: "Enter Deal Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
  },
  {
    type: "text",
    name: "dealCode",
    label: "Deal Code",
    placeholder: "Enter Deal Code",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
  },
  {
    type: "text",
    name: "subTitle",
    label: "Deal Sub Title",
    placeholder: "Enter Deal Sub Title",
    required: true,
    disabled: false,
    readOnly: false,
    width: 12,
  },

  {
    type: "number",
    name: "discount",
    label: "Discount",
    placeholder: "Enter Discount",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "datetime",
    name: "startTime",
    label: "Start Time",
    placeholder: "Enter Start Time",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "datetime",
    name: "endTime",
    label: "End Time",
    placeholder: "Enter End Time",
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
    name: "title",
    label: "Deal Name",
    placeholder: "Enter Deal Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
