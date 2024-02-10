import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import TableColorcolumn from "../components/layout/TableColorcolumn";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addTheme,
  deleteTheme,
  editTheme,
  getAllThemes,
} from "../redux/actions/themeActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { themeTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";

const Themes = () => {
  const isMobile = useResponsive("down", "sm");

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "name",
      headerName: "Theme Name",
      type: "string",
      editable: false,
      flex: 1,

      ...addTableColumnMinWidth(isMobile, 100),
    },
    {
      field: "primaryColor",
      headerName: "Primary Color",
      type: "string",
      editable: false,
      flex: 1,
      renderCell: (params) => <TableColorcolumn color={params.value} />,
      ...addTableColumnMinWidth(isMobile, 70),
    },
    {
      field: "secondaryColor",
      headerName: "Secondary Color",
      type: "string",
      editable: false,
      flex: 1,
      renderCell: (params) => <TableColorcolumn color={params.value} />,
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

  const tableData = useSelector((state) => state.common.themes);
console.log('themes',tableData)
  const isTableLoading = useSelector((state) =>
    loadingSelector(state, themeTypes.GET_THEMES)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      themeTypes.ADD_THEME,
      themeTypes.UPDATE_THEME,
      themeTypes.DELETE_THEME,
    ])
  );
  return (
    <div>
      <PageCreator
        screenName={"Themes"}
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
        onAdd={addTheme}
        onEdit={editTheme}
        onDelete={deleteTheme}
        getTableData={getAllThemes}
        deleteTitle="name"
        selectable={false}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Themes;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Theme Name",
    placeholder: "Enter Theme Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "color",
    name: "primaryColor",
    label: "Choose Theme Primary Color",
    placeholder: "Choose Theme Primary Color",
    required: true,
    disabled: false,
    readOnly: false,
    width: 4,
  },

  {
    type: "color",
    name: "secondaryColor",
    label: "Choose Theme Secondary Color",
    placeholder: "Choose Theme Secondary Color",
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
    label: "Theme Name",
    placeholder: "Enter Theme Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
