export const dashboardApi = {
  GET_DASHBOARD_DATA: "/dashboardreports/dashboard",
};

export const appErrorApi = {
  GET_APP_ERRORS: "/app-error",
};

export const settingApi = {
  UPDATE_SETTING: "/setting",
  GET_SETTING: "/setting",
};

export const userApi = {
  LOGIN: "/auth/login",

  GET_USER_BY_TOKEN: "/auth/details/token",

  GET_USERS: "/admin",
  GET_ALL_USERS: "/admin/all",

  ADD_USER: "/admin/instituteadmin",
  UPDATE_USER: "/admin",
  DELETE_USER: "/admin",
};

export const offerApi = {
  GET_OFFERS: "/offer",
  GET_ALL_OFFERS: "/offer/all",

  ADD_OFFER: "/offer",
  UPDATE_OFFER: "/offer",
  DELETE_OFFER: "/offer",
};

export const currencyApi = {
  GET_CURRENCYS: "/currency",
  GET_ALL_CURRENCYS: "/currency/all",

  ADD_CURRENCY: "/currency",
  UPDATE_CURRENCY: "/currency",
  DELETE_CURRENCY: "/currency",
};

export const themeApi = {
  GET_THEMES: "/theme",
  GET_ALL_THEMES: "/theme/all",

  ADD_THEME: "/theme",
  UPDATE_THEME: "/theme",
  DELETE_THEME: "/theme",
};

export const instituteApi = {
  GET_INSTITUTES: "/institute",

  GET_ALL_INSTITUTES: "/institute/all",

  ADD_INSTITUTE: "/institute",
  UPDATE_INSTITUTE: "/institute",
  DELETE_INSTITUTE: "/institute",
  BATCH_DELETE_INSTITUTES: "/institute/batch",

  // SENT_NOTIFICATION: "/product/sendnotification",
};

export const categoryApi = {
  GET_CATEGORYS: "/category",
  GET_ALL_CATEGORYS: "/category/all",

  ADD_CATEGORY: "/category",
  UPDATE_CATEGORY: "/category",
  DELETE_CATEGORY: "/category",
};

export const dealApi = {
  GET_DEALS: "/deal",
  GET_ALL_DEALS: "/deal/all",

  ADD_DEAL: "/deal",
  UPDATE_DEAL: "/deal",
  DELETE_DEAL: "/deal",
};

export const userGroupApi = {
  GET_USER_GROUPS: "/usergroup",
  GET_ALL_USER_GROUPS: "/usergroup/all",

  ADD_USER_GROUP: "/usergroup",
  UPDATE_USER_GROUP: "/usergroup",
  DELETE_USER_GROUP: "/usergroup",
};

export const employeeApi = {
  GET_EMPLOYEES: "/employee",
  GET_ALL_EMPLOYEES: "/employee/all",

  ADD_EMPLOYEE: "/employee",
  UPDATE_EMPLOYEE: "/employee",
  DELETE_EMPLOYEE: "/employee",
};

export const instituteServiceApi = {
  GET_INSTITUTE_SERVICES: "/instituteservice",
  GET_ALL_INSTITUTE_SERVICES: "/instituteservice/all",

  ADD_INSTITUTE_SERVICE: "/instituteservice",
  UPDATE_INSTITUTE_SERVICE: "/instituteservice",
  DELETE_INSTITUTE_SERVICE: "/instituteservice",
};

export const expenseApi = {
  GET_EXPENSES: "/expense",
  GET_ALL_EXPENSES: "/expense/all",

  ADD_EXPENSE: "/expense",
  UPDATE_EXPENSE: "/expense",
  DELETE_EXPENSE: "/expense",
};
