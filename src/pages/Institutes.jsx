import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffectOnce } from "react-use";
import TableImage from "../components/layout/TableImage";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import {
  addInstitute,
  deleteInstitute,
  editInstitute,
  getInstitutes,
} from "../redux/actions/instituteActions";
import { getAllThemes } from "../redux/actions/themeActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { instituteTypes } from "../redux/types";

import DeleteModal from "../components/DeleteModal";

import Iconify from "../components/layout/iconify/Iconify";
import useResponsive from "../hooks/useResponsive";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";
// import { LoadingButton } from "@mui/lab";

const Institutes = () => {
  const dispatch = useDispatch();
  const isMobile = useResponsive("down", "sm");
  const themes = useSelector((state) => state.common.themes);
  const [deleteData, setDeleteData] = React.useState({
    deleteIds: undefined,
    setSelected: undefined,
  });

  const tableHeaders = [
    {
      field: "name",
      headerName: "Institute Name",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 150),
    },
    {
      field: "logoPath",
      headerName: "Logo",
      type: "string",
      editable: false,
      flex: 0.4,
      renderCell: (params) => <TableImage src={params.value} />,
      ...addTableColumnMinWidth(isMobile, 70),
    },

    {
      field: "email",
      headerName: "Email",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 80),
    },
    {
      field: "contactPerson",
      headerName: "Contact Person",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 80),
    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      type: "string",
      editable: false,
      flex: 1,
      ...addTableColumnMinWidth(isMobile, 80),
    },

    {
      field: "isActive",
      headerName: "Active",
      type: "boolean",
      flex: 0.5,
      editable: false,
      ...addTableColumnMinWidth(isMobile, 80),
    },

    {
      field: "createdBy",
      headerName: "Created By",
      type: "string",
      flex: 0.7,
      editable: false,
      ...addTableColumnMinWidth(isMobile, 80),
    },
    {
      field: "createdAt",
      headerName: "Created At",
      type: "dateTime",
      flex: 1,
      editable: false,
      valueFormatter: ({ value }) => moment(value).format(DATETIMEFORMAT),
      ...addTableColumnMinWidth(isMobile, 150),
    },
  ];

  const tableData = useSelector((state) => state.common.institutes);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, instituteTypes.GET_INSTITUTES)
  );

  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      instituteTypes.ADD_INSTITUTE,
      instituteTypes.UPDATE_INSTITUTE,
      instituteTypes.DELETE_INSTITUTE,
    ])
  );

  useEffectOnce(() => {
    dispatch(getAllThemes());
    // dispatch(getAllCurrencys());
  }, []);

  return (
    <div>
      <DeleteModal
        open={Boolean(deleteData?.deleteIds)}
        title={`${deleteData?.deleteIds?.length} Institutes`}
        onConfirm={() =>
          dispatch(
            deleteInstitute({
              data: deleteData?.deleteIds,
              callBack: () => {
                deleteData.setSelected();
                setDeleteData();
              },
            })
          )
        }
        onClose={() => setDeleteData()}
      />
      <PageCreator
        screenName={"Institutes"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFields}
        defaultFormData={{
          isActive: true,
          // description: description,
          // isManyInstitutes: false,
          // isExpired: false,
          // categoryId: [],
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        onAdd={addInstitute}
        onEdit={editInstitute}
        onDelete={deleteInstitute}
        getTableData={getInstitutes}
        deleteTitle="name"
        selectOptions={{
          themeId: themes || [],
          // currencyId: currencies || [],
        }}
        mobileRowActionColumnWidth={150}
        selectable={false}
      />
      <PageCreator
        screenName={"changes by rohanbhai and harsh"}
        tableHeaders={tableHeaders}
        tableData={tableData?.data}
        formFields={formFieldsByRp}
        defaultFormData={{
          isActive: true,
          // description: description,
          // isManyInstitutes: false,
          // isExpired: false,
          // categoryId: [],
        }}
        dialogWidth="lg"
        isLoading={isTableLoading}
        isFormLoading={isFormLoading}
        totalCount={tableData?.totalCount}
        onAdd={addInstitute}
        onEdit={editInstitute}
        onDelete={deleteInstitute}
        getTableData={getInstitutes}
        deleteTitle="name"
        selectOptions={{
          themeId: themes || [],
          // currencyId: currencies || [],
        }}
        mobileRowActionColumnWidth={150}
        selectable={false}
      />{" "}
    </div>
  );
};

export default Institutes;

const description =
  "<span>How To Get The Deal:</span><br/><span>1. Click On Get Deal Button</span><br/><span>2. Add Institute To Cart Or Click On Buy 1</span><br/><span>3. Select Address</span><br/><span>4. Select The Payment Method</span><br/><span>5. Place Order. Happy Looting</span>";

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Institute Name",
    placeholder: "Enter Institute Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "email",
    label: "Institute Email",
    placeholder: "Enter Institute Email",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "contactPerson",
    label: "Contact Person Name",
    placeholder: "Enter Contact Person Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
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
    type: "image",
    name: "logo",
    label: "Choose Logo",
    placeholder: "Choose Logo",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },

  {
    type: "select",
    name: "themeId",
    label: "Choose Theme ",
    placeholder: "Choose Theme",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,
    required: true,
    disabled: false,
    readOnly: false,
    width: 3,
    mobileWidth: 12,
  },

  // {
  //   type: "select",
  //   name: "currencyId",
  //   label: "Choose Currency ",
  //   placeholder: "Choose Currency",
  //   optionLabel: "symbol",
  //   optionValue: "_id",
  //   hasExternalOptions: true,
  //   required: true,
  //   disabled: false,
  //   readOnly: false,
  //   multiple: false,
  //   width: 3,
  //   mobileWidth: 12,
  // },
  {
    type: "text",
    name: "slogan",
    label: "Slogan",
    placeholder: "Enter Slogan",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "targetLocations",
    label: "Target Locations",
    placeholder: "Enter Target Locations",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "domainName",
    label: "Institute Url",
    placeholder: "Enter Institute Url",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },

  {
    type: "text",
    name: "gstNumber",
    label: "GST Number",
    placeholder: "Enter GST Number",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },

  // {
  //   type: "text",
  //   name: "tagLine",
  //   label: "Tag Line",
  //   placeholder: "Enter Tag Line",
  //   required: false,
  //   disabled: false,
  //   readOnly: false,
  //   width: 12,
  //   mobileWidth: 12,
  // },
  {
    type: "text",
    name: "mapUrl",
    label: "Map Url",
    placeholder: "Enter Map Url",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },
  {
    type: "richtext",
    name: "address",
    label: "Address",
    placeholder: "Enter Address",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },

  {
    type: "richtext",
    name: "aboutDetails",
    label: "About Details",
    placeholder: "Enter About Details",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },

  // {
  //   type: "richtext",
  //   name: "workingTime",
  //   label: "Working Time",
  //   placeholder: "Enter Working Time",
  //   required: false,
  //   disabled: false,
  //   readOnly: false,
  //   width: 12,
  //   mobileWidth: 12,
  // },

  {
    type: "text",
    name: "razorpayId",
    label: "Razorpay Id",
    placeholder: "Enter Razorpay Id",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "upiId",
    label: "Upi Id",
    placeholder: "Enter Upi Id",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
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
    width: 2,
    mobileWidth: 12,
  },
];

const formFieldsByRp = [
  {
    type: "subSectionHeader",
    title: "basic information",
    // size: 60, // by default size = 30
    width: 12,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "name",
    label: "Institute Name",
    placeholder: "Enter Institute Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "email",
    label: "Institute Email",
    placeholder: "Enter Institute Email",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },

  {
    type: "text",
    name: "contactPerson",
    label: "Contact Person Name",
    placeholder: "Enter Contact Person Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
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
    type: "image",
    name: "logo",
    label: "Choose Logo",
    placeholder: "Choose Logo",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },

  {
    type: "select",
    name: "themeId",
    label: "Choose Theme ",
    placeholder: "Choose Theme",
    optionLabel: "name",
    optionValue: "_id",
    hasExternalOptions: true,
    required: true,
    disabled: false,
    readOnly: false,
    width: 3,
    mobileWidth: 12,
  },

  // {
  //   type: "select",
  //   name: "currencyId",
  //   label: "Choose Currency ",
  //   placeholder: "Choose Currency",
  //   optionLabel: "symbol",
  //   optionValue: "_id",
  //   hasExternalOptions: true,
  //   required: true,
  //   disabled: false,
  //   readOnly: false,
  //   multiple: false,
  //   width: 3,
  //   mobileWidth: 12,
  // },
  {
    type: "text",
    name: "slogan",
    label: "Slogan",
    placeholder: "Enter Slogan",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "operatingLocations",
    label: "Operating Locations",
    placeholder: "Enter Operating Locations",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "domainName",
    label: "Website",
    placeholder: "Enter Website Url",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },

  {
    type: "richtext",
    // name: "aboutDetails",
    name: "aboutInstitute",
    label: "About Institute",
    placeholder: "Enter About Institute",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },

  // {
  //   type: "text",
  //   name: "tagLine",
  //   label: "Tag Line",
  //   placeholder: "Enter Tag Line",
  //   required: false,
  //   disabled: false,
  //   readOnly: false,
  //   width: 12,
  //   mobileWidth: 12,
  // },

  // changes by rp
  // created a new component
  {
    type: "lineSeperation",
    width: 12,
    mobileWidth: 12,
  },

  {
    type: "subSectionHeader",
    title: "Address",
    // size: 60, // by default size = 30
  },

  {
    type: "richtext",
    name: "address",
    label: "Address",
    placeholder: "Enter Address",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },

  {
    type: "number",
    name: "pincode",
    label: "Pincode",
    placeholder: "Enter Pincode",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },
  {
    type: "select",
    name: "city",
    label: "Village/City",
    placeholder: "Select Village/City",
    // label: "Choose Theme ",
    // placeholder: "Choose Theme",
    optionLabel: "city",
    optionValue: "_id",
    hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },
  {
    type: "select",
    name: "district",
    label: "District",
    placeholder: "State District",
    optionLabel: "district",
    optionValue: "_id",
    hasExternalOptions: true,
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "state",
    label: "State",
    placeholder: "State State",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "mapUrl",
    label: "Google Map Location",
    placeholder: "Enter Google Map Location Url",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },

  // changes by rp
  // created a new component
  {
    type: "lineSeperation",
    width: 12,
    mobileWidth: 12,
  },

  // {
  //   type: "richtext",
  //   name: "workingTime",
  //   label: "Working Time",
  //   placeholder: "Enter Working Time",
  //   required: false,
  //   disabled: false,
  //   readOnly: false,
  //   width: 12,
  //   mobileWidth: 12,
  // },

  {
    type: "subSectionHeader",
    title: "Financial Informations",
    // size: 60, // by default size = 30
  },
  {
    type: "text",
    name: "gstNumber",
    label: "GST Number",
    placeholder: "Enter GST Number",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },

  {
    type: "text",
    name: "razorpayId",
    label: "Razorpay Id",
    placeholder: "Enter Razorpay Id",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "upiId",
    label: "Upi Id",
    placeholder: "Enter Upi Id",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
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
    width: 2,
    mobileWidth: 12,
  },
];
