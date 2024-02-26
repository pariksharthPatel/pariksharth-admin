import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import PageCreator from "../components/pagecreator";
import { DATETIMEFORMAT } from "../constants";
import useResponsive from "../hooks/useResponsive";
import {
  addLanguage,
  deleteLanguage,
  editLanguage,
  getLanguages,
} from "../redux/actions/languageActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { languageTypes } from "../redux/types";
import { addTableColumnMinWidth } from "../utils/addTableColumnMinWidth";

const Languages = () => {
  const isMobile = useResponsive("down", "sm");

  // const dispatch = useDispatch();
  const tableHeaders = [
    {
      field: "name",
      headerName: "Language Name",
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

  const tableData = useSelector((state) => state.common.languages);

  const isTableLoading = useSelector((state) =>
    loadingSelector(state, languageTypes.GET_LANGUAGES)
  );
  const isFormLoading = useSelector((state) =>
    loadingSelector(state, [
      languageTypes.ADD_LANGUAGE,
      languageTypes.UPDATE_LANGUAGE,
      languageTypes.DELETE_LANGUAGE,
    ])
  );
  return (
    <div>
      <PageCreator
        screenName={"Language"}
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
        onAdd={addLanguage}
        onEdit={editLanguage}
        onDelete={deleteLanguage}
        getTableData={getLanguages}
        deleteTitle="name"
        selectable={!isMobile}
        mobileRowActionColumnWidth={120}
      />
    </div>
  );
};

export default Languages;

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Language Name",
    placeholder: "Enter Language Name",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
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
    label: "Language Name",
    placeholder: "Enter Language Name",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
  },
];
