import { createReducer } from "@reduxjs/toolkit";
import {
  appErrorTypes,
  categoryTypes,
  commonTypes,
  currencyTypes,
  dashboardTypes,
  offerTypes,
  userTypes,
  instituteTypes,
  settingTypes,
  themeTypes,
  dealTypes,
  expenseTypes,
  instituteServiceTypes,
  userGroupTypes,
  employeeTypes,
} from "../types";

const initialState = {
  imagePreview: {
    open: false,
    src: undefined,
    title: "Image Preview",
  },
  users: [],
  offers: [],

  categories: [],
  deals: [],
  expenses: [],

  institutes: [],
  instituteservices: [],

  setting: {},
  selected: [],
  currency: [],
  themes: [],
  usergroups: [],
  employees: [],

  dashboard: {
    institutes: null,
    users: null,
  },
  appErrors: [],

  currentSalon: {},
  isNavOpen: true,
  isSidebarOpen: true,
  isSidebarShrunk: false,
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(commonTypes.OPEN_IMAGE_PREVIEW, (state, action) => {
      state.imagePreview.open = true;
      state.imagePreview.title = action.payload.title;
      state.imagePreview.src = action.payload.src;
    })
    .addCase(commonTypes.CLOSE_IMAGE_PREVIEW, (state, action) => {
      state.imagePreview.open = false;
      state.imagePreview.title = "Image Preview";
      state.imagePreview.src = undefined;
    })
    .addCase(commonTypes.SHRINK_SIDEBAR, (state, action) => {
      state.isSidebarShrunk = true;
    })
    .addCase(commonTypes.EXPAND_SIDEBAR, (state, action) => {
      state.isSidebarShrunk = false;
    })
    .addCase(userTypes.GET_USERS, (state, action) => {
      state.users = action.payload.data;
    })

    .addCase(offerTypes.GET_OFFERS, (state, action) => {
      state.offers = action.payload.data;
    })
    .addCase(instituteTypes.GET_INSTITUTE_BY_ID, (state, action) => {
      state.currentSalon = action.payload.data;
    })
    .addCase(currencyTypes.GET_ALL_CURRENCYS, (state, action) => {
      state.currency = action.payload.data;
    })
    .addCase(themeTypes.GET_ALL_THEMES, (state, action) => {
      state.themes = action.payload.data;
    })
    .addCase(userTypes.GET_ALL_USERS, (state, action) => {
      state.users = action.payload.data;
    })
    .addCase(categoryTypes.GET_CATEGORYS, (state, action) => {
      state.categories = action.payload.data;
    })
    .addCase(categoryTypes.GET_ALL_CATEGORYS, (state, action) => {
      state.categories = action.payload.data;
    })
    .addCase(employeeTypes.GET_EMPLOYEES, (state, action) => {
      state.employees = action.payload.data;
    })
    .addCase(employeeTypes.GET_ALL_EMPLOYEES, (state, action) => {
      state.employees = action.payload.data;
    })
    .addCase(userGroupTypes.GET_USER_GROUPS, (state, action) => {
      state.usergroups = action.payload.data;
    })
    .addCase(userGroupTypes.GET_ALL_USER_GROUPS, (state, action) => {
      state.usergroups = action.payload.data;
    })
    .addCase(expenseTypes.GET_ALL_EXPENSES, (state, action) => {
      state.expenses = action.payload.data;
    })
    .addCase(dealTypes.GET_ALL_DEALS, (state, action) => {
      state.deals = action.payload.data;
    })
    .addCase(
      instituteServiceTypes.GET_ALL_INSTITUTE_SERVICES,
      (state, action) => {
        state.instituteservices = action.payload.data;
      }
    )
    .addCase(appErrorTypes.GET_APP_ERRORS, (state, action) => {
      state.appErrors = action.payload.data;
    })
    .addCase(instituteTypes.GET_INSTITUTES, (state, action) => {
      state.institutes = action.payload.data;
    })
    .addCase(settingTypes.GET_SETTING, (state, action) => {
      state.setting = action.payload.data;
    })

    .addCase(commonTypes.SET_SELECTED, (state, action) => {
      state.selected = action.payload || [];
    })

    .addCase(dashboardTypes.GET_DASHBOARD_DATA, (state, action) => {
      state.dashboard = action.payload.data;
    });
});

export default commonReducer;
