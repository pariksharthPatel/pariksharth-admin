import { LoadingButton } from "@mui/lab";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FormCreator from "../components/FormCreator";
import { getSetting, editSettting } from "../redux/actions/settingActions";
import { loadingSelector } from "../redux/reducers/loadingReducer";
import { instituteTypes, settingTypes } from "../redux/types";
import {
  editInstitute,
  getInstituteById,
} from "../redux/actions/instituteActions";
import { useEffectOnce } from "react-use";
import { getAllThemes } from "../redux/actions/themeActions";
const Settings = () => {
  const formRef = React.useRef();
  const dispatch = useDispatch();
  const { instituteId } = useSelector((state) => state.auth);
  const { currentInstitute, themes } = useSelector((state) => state.common);

  console.log("instituteId", instituteId, currentInstitute);
  useEffectOnce(() => {
    dispatch(getInstituteById({ instituteId }));
    dispatch(getAllThemes());
  }, []);

  const handleSubmit = (values) => {
    dispatch(
      editInstitute({
        data: values,
        callBack: () => {
          dispatch(getInstituteById({ instituteId }));
        },
      })
    );
  };
  const isLoading = useSelector((state) =>
    loadingSelector(state, [
      instituteTypes.GET_INSTITUTE_BY_ID,
      instituteTypes.UPDATE_INSTITUTE,
    ])
  );
  return (
    <Card>
      <CardHeader title="Setting" />

      <Divider />
      <CardContent>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <FormCreator
            ref={formRef}
            formFields={formFields}
            isSearchForm={false}
            formData={currentInstitute}
            onSubmit={(values) => handleSubmit(values)}
            selectOptions={{
              themeId: themes || [],
            }}
          />
        )}
      </CardContent>
      <Divider />
      <CardActions>
        <LoadingButton
          variant="contained"
          loading={isLoading}
          size="small"
          onClick={() => formRef.current.click()}
        >
          Update
        </LoadingButton>
      </CardActions>
    </Card>
  );
};

export default Settings;

const formFields = [
  {
    type: "text",
    name: "email",
    label: "Email Address",
    placeholder: "Enter Email Address",
    required: false,
    disabled: false,
    readOnly: false,
    width: 6,
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
    type: "float",
    name: "taxPercentage",
    label: "Tax Percentage ",
    placeholder: "Enter Tax Percentage",
    required: true,
    disabled: false,
    readOnly: false,
    width: 3,
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
  {
    type: "text",
    name: "paymentApiKey",
    label: "Payment Api Key",
    placeholder: "Enter Payment Api Key",
    required: true,
    disabled: false,
    readOnly: false,
    width: 6,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "domainName",
    label: "Institute Url",
    placeholder: "Enter Institute Url",
    required: true,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },
  {
    type: "text",
    name: "tagLine",
    label: "Tag Line",
    placeholder: "Enter Tag Line",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },
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

  {
    type: "richtext",
    name: "workingTime",
    label: "Working Time",
    placeholder: "Enter Working Time",
    required: false,
    disabled: false,
    readOnly: false,
    width: 12,
    mobileWidth: 12,
  },
];
