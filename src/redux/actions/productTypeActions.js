import { productTypeApi } from "../../API";
import { productTypeTypes, REQUESTMETHOD } from "../types";

export const getAllProductTypes = () => {
  return {
    type: productTypeTypes.GET_ALL_PRODUCT_TYPES,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: productTypeApi.GET_ALL_PRODUCT_TYPES,
    },
  };
};

export const getProductTypes = ({ query, callBack }) => {
  return {
    type: productTypeTypes.GET_PRODUCT_TYPES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: productTypeApi.GET_PRODUCT_TYPES,
      callBack,
    },
  };
};

export const addProductType = ({ data, callBack }) => {
  return {
    type: productTypeTypes.ADD_PRODUCT_TYPE,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: productTypeApi.ADD_PRODUCT_TYPE,
      isFormData: false,
      enableMessages: true,
      successMessage: "ProductType Added Successfully",
      failMessage: "Failed to add ProductType",
      callBack,
    },
  };
};

export const editProductType = ({ data, callBack }) => {
  return {
    type: productTypeTypes.UPDATE_PRODUCT_TYPE,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: productTypeApi.UPDATE_PRODUCT_TYPE,
      isFormData: false,

      enableMessages: true,
      successMessage: "ProductType Updated Successfully",
      failMessage: "Failed to update ProductType",
      callBack,
    },
  };
};

export const deleteProductType = ({ data, callBack }) => {
  return {
    type: productTypeTypes.DELETE_PRODUCT_TYPE,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: productTypeApi.DELETE_PRODUCT_TYPE,
      isFormData: false,
      enableMessages: true,
      successMessage: "ProductType deleted Successfully",
      failMessage: "Failed to delete ProductType",
      callBack,
    },
  };
};
