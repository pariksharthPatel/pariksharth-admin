import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addSalonService,
  deleteSalonService,
  editSalonService,
  getSalonServices,
} from "../redux/actions/instituteServiceActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { instituteServiceTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
import { useEffectOnce } from "react-use";
import { getCategorys } from "../redux/actions/categoryActions";

const SalonServices = () => {
  const dispatch = useDispatch();
  const isMobile = useResponsive("down", "sm");

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
      field: "imageSrc",
      headerName: " Image",
      type: "string",
      editable: false,
      flex: 0.5,
      renderCell: (params) => <TableImage src={params.value} />,
      ...addTableColumnMinWidth(isMobile, 70),
    },

    {
      field: "categoryName",
      headerName: "Category",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "salePrice",
      headerName: "Sale Price",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "discount",
      headerName: "Discount",
      type: "number",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "estimatedTime",
      headerName: "Estimated Time",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "nextDayService",
      headerName: "Next Day Service",
      type: "boolean",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 100),
    },

    {
      field: "taxable",
      headerName: "Taxable",
      type: "boolean",
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

  const tableData = useSelector((state) => state.common.instituteservices);
  const categories = useSelector((state) => state.common.categories);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, instituteServiceTypes.GET_INSTITUTE_SERVICES)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      instituteServiceTypes.ADD_INSTITUTE_SERVICE,
      instituteServiceTypes.UPDATE_INSTITUTE_SERVICE,
      instituteServiceTypes.DELETE_INSTITUTE_SERVICE,
    ])
  );
  console.log(".populate(populate);", categories);
  useEffectOnce(() => {
    dispatch(
      getCategorys({
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
        screenName={"Service"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        searchFields={searchFields}
        defaultFormData={{
          isActive: true,
          nextDayService: false,
          taxable: false,
        }}
        selectOptions={{
          categoryId: categories?.data,
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        // onFormSubmit={onFormSubmit}
        onAdd={addSalonService}
        onEdit={editSalonService}
        onDelete={deleteSalonService}
        getTableData={getSalonServices}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default SalonServices;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Service Name",
    placeholder: "Enter Service Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "image",
    name: "imageSrc",
    label: "Choose Service Image",
    placeholder: "Choose Service Image",
    required: false,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "select",

    name: "categoryId",
    label: "Choose Category ",
    placeholder: "Choose Category",
    optionLabel: "categoryName",
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
    type: "float",
    name: "salePrice",
    label: "Sale Price",
    placeholder: "Enter Sale Price",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "float",
    name: "price",
    label: "Price",
    placeholder: "Enter Price",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
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
    type: "text",
    name: "estimatedTime",
    label: "Estimated Time",
    placeholder: "Enter Estimated Time",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },
  {
    type: "text",
    name: "description",
    label: "Description",
    placeholder: "Enter Description",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
  },

  {
    type: "boolean",
    name: "nextDayService",
    label: "Next Day Service",
    placeholder: "Enter Next Day Service",
    required: false,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "boolean",
    name: "taxable",
    label: "Taxable",
    placeholder: "Enter Taxable",
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
    name: "name",
    label: "Service Name",
    placeholder: "Enter Service Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
