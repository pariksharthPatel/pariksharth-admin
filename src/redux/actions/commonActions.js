import { commonTypes } from "../types";

export const openImagePreview = ({ title, src }) => {
  return {
    type: commonTypes.OPEN_IMAGE_PREVIEW,
    payload: {
      title,
      src,
    },
  };
};

export const closeImagePreview = () => {
  return {
    type: commonTypes.CLOSE_IMAGE_PREVIEW,
  };
};

export const setSelected = (data = []) => {
  return {
    type: commonTypes.SET_SELECTED,
    payload: data,
  };
};

export const openNavBar = () => {
  return {
    type: commonTypes.OPEN_NAVBAR,
  };
};

export const closeNavBar = () => {
  return {
    type: commonTypes.CLOSE_NAVBAR,
  };
};

export const openSidebar = () => {
  return {
    type: commonTypes.OPEN_NAVBAR,
  };
};

export const closeSidebar = () => {
  return {
    type: commonTypes.CLOSE_NAVBAR,
  };
};

export const shrinkSidebar = () => {
  return {
    type: commonTypes.SHRINK_SIDEBAR,
  };
};

export const expandSidebar = () => {
  return {
    type: commonTypes.EXPAND_SIDEBAR,
  };
};
export const openRoleSelector = () => {
  return {
    type: commonTypes.OPEN_ROLE_SELECTOR,
  };
};
export const closeRoleSelector = () => {
  return {
    type: commonTypes.CLOSE_ROLE_SELECTOR,
  };
};
