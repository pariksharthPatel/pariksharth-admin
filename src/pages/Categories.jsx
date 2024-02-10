import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getCategorys,
} from "../redux/actions/categoryActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { categoryTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";

const Categories = () => {
  const isMobile = useResponsive("down", "sm");

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "categoryName",
      headerName: "Category Name",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "categoryImage",
      headerName: " Image",
      type: "string",
      editable: false,
      flex: 0.5,
      renderCell: (params) => <TableImage src={params.value} />,
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

  const tableData = useSelector((state) => state.common.categories);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, categoryTypes.GET_CATEGORYS)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      categoryTypes.ADD_CATEGORY,
      categoryTypes.UPDATE_CATEGORY,
      categoryTypes.DELETE_CATEGORY,
    ])
  );
  return (
    <div>
      <PageCreator
        screenName={"Category"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          enableNotification: false,
          showInHomepage: false,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        // onFormSubmit={onFormSubmit}
        onAdd={addCategory}
        onEdit={editCategory}
        onDelete={deleteCategory}
        getTableData={getCategorys}
        deleteTitle="categoryName"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Categories;

const formFields = [
  {
    type: "text",
    name: "categoryName",
    label: "Category Name",
    placeholder: "Enter Category Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "image",
    name: "categoryImage",
    label: "Choose Category Image",
    placeholder: "Choose Category Image",
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
    name: "categoryName",
    label: "Category Name",
    placeholder: "Enter Category Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
