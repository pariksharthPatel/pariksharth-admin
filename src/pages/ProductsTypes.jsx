import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT, ROLES } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addProductType,
  deleteProductType,
  editProductType,
  getProductTypes,
} from "../redux/actions/productTypeActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { productTypeTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";

const ProductTypes = () => {
  const dispatch = useDispatch();

  const isMobile = useResponsive("down", "sm");

  // const dispatch = useDispatch();

  const tableData = useSelector((state) => state.common.productTypes);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, productTypeTypes.GET_PRODUCT_TYPES)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      productTypeTypes.ADD_PRODUCT_TYPE,
      productTypeTypes.UPDATE_PRODUCT_TYPE,
      productTypeTypes.DELETE_PRODUCT_TYPE,
    ])
  );

  return (
    <div>
      <PageCreator
        screenName={"ProductTypees"}
        tableHeaders={tableHeaders(isMobile)}
        tableData={tableData?.data}
        formFields={formFields}
        defaultFormData={{
          isActive: true,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        // onFormSubmit={onFormSubmit}
        onAdd={addProductType}
        onEdit={editProductType}
        onDelete={deleteProductType}
        getTableData={getProductTypes}
        deleteTitle="name"
        selectable={false}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default ProductTypes;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "ProductType Name",
    placeholder: "Enter ProductType Name",
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
    label: "ProductType Name",
    placeholder: "Enter ProductType Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
const tableHeaders = (isMobile) => [
  {
    field: "name",
    headerName: "ProductType Name",
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
