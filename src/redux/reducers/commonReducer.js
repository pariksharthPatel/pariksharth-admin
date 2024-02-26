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
  branchTypes,
  subjectTypes,
  topicTypes,
  subTopicTypes,
  authTypes,
  qualificationTypes,
  degreeTypes,
  boardTypes,
  goalTypes,
  stateTypes,
  aoiTypes,
  goalExamTypes,
  questionTypes,
} from "../types";

const initialState = {
  imagePreview: {
    open: false,
    src: undefined,
    title: "Image Preview",
  },
  users: [],

  institutes: [],
  instituteservices: [],

  allSubjects: [],
  subjects: [],
  topics: [],
  subTopics: [],

  allQualifications: [],
  qualifications: [],
  degrees: [],
  boards: [],

  allGoals: [],
  goals: [],
  states: [],
  aois: [],
  goalExams: [],

  questions: [],

  setting: {},
  selected: [],
  offers: [],

  categories: [],
  deals: [],
  expenses: [],
  currency: [],
  themes: [],
  usergroups: [],
  employees: [],

  dashboard: {
    institutes: null,
    users: null,
  },
  appErrors: [],
  branches: [],

  currentSalon: {},
  isNavOpen: true,
  isSidebarOpen: true,
  isSidebarShrunk: false,
  isRoleSelectorOpen: false,
};

const commonReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(authTypes.LOGIN_USER, (state, action) => {
      if (action.payload.data.user.roles.length > 0) {
        state.isRoleSelectorOpen = true;
      }
    })
    .addCase(authTypes.GET_USER_BY_TOKEN, (state, action) => {
      if (action.payload.data.roles.length > 0) {
        // state.isRoleSelectorOpen = true;
      }
    })
    .addCase(commonTypes.OPEN_ROLE_SELECTOR, (state, action) => {
      state.isRoleSelectorOpen = true;
    })
    .addCase(commonTypes.CLOSE_ROLE_SELECTOR, (state, action) => {
      state.isRoleSelectorOpen = false;
    })

    .addCase(instituteTypes.GET_INSTITUTE_BY_ID, (state, action) => {
      state.currentSalon = action.payload.data;
    })
    .addCase(userTypes.GET_USERS, (state, action) => {
      state.users = action.payload.data;
    })
    .addCase(userTypes.GET_ALL_USERS, (state, action) => {
      state.users = action.payload.data;
    })

    .addCase(subjectTypes.GET_SUBJECTS, (state, action) => {
      state.subjects = action.payload.data;
    })
    .addCase(subjectTypes.GET_ALL_SUBJECTS, (state, action) => {
      state.allSubjects = action.payload.data;
    })

    .addCase(topicTypes.GET_TOPICS, (state, action) => {
      state.topics = action.payload.data;
    })
    .addCase(topicTypes.GET_ALL_TOPICS, (state, action) => {
      state.topics = action.payload.data;
    })
    .addCase(subTopicTypes.GET_SUB_TOPICS, (state, action) => {
      state.subTopics = action.payload.data;
    })
    .addCase(subTopicTypes.GET_ALL_SUB_TOPICS, (state, action) => {
      state.subTopics = action.payload.data;
    })
    .addCase(qualificationTypes.GET_QUALIFICATIONS, (state, action) => {
      state.qualifications = action.payload.data;
    })
    .addCase(qualificationTypes.GET_ALL_QUALIFICATIONS, (state, action) => {
      state.allQualifications = action.payload.data;
    })

    .addCase(degreeTypes.GET_DEGREES, (state, action) => {
      state.degrees = action.payload.data;
    })
    .addCase(degreeTypes.GET_ALL_DEGREES, (state, action) => {
      state.degrees = action.payload.data;
    })
    .addCase(boardTypes.GET_BOARDS, (state, action) => {
      state.boards = action.payload.data;
    })

    .addCase(goalTypes.GET_GOALS, (state, action) => {
      state.goals = action.payload.data;
    })
    .addCase(goalTypes.GET_ALL_GOALS, (state, action) => {
      state.allGoals = action.payload.data;
    })

    .addCase(stateTypes.GET_STATES, (state, action) => {
      state.states = action.payload.data;
    })
    .addCase(stateTypes.GET_ALL_STATES, (state, action) => {
      state.states = action.payload.data;
    })
    .addCase(aoiTypes.GET_AOIS, (state, action) => {
      state.aois = action.payload.data;
    })
    .addCase(aoiTypes.GET_ALL_AOIS, (state, action) => {
      state.aois = action.payload.data;
    })
    .addCase(goalExamTypes.GET_GOAL_EXAMS, (state, action) => {
      state.goalExams = action.payload.data;
    })
    .addCase(goalExamTypes.GET_ALL_GOAL_EXAMS, (state, action) => {
      state.goalExams = action.payload.data;
    })

    .addCase(questionTypes.GET_QUESTIONS, (state, action) => {
      state.questions = action.payload.data;
    })

    //misc

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

    .addCase(categoryTypes.GET_CATEGORYS, (state, action) => {
      state.categories = action.payload.data;
    })
    .addCase(categoryTypes.GET_ALL_CATEGORYS, (state, action) => {
      state.categories = action.payload.data;
    })
    .addCase(currencyTypes.GET_ALL_CURRENCYS, (state, action) => {
      state.currency = action.payload.data;
    })
    .addCase(themeTypes.GET_ALL_THEMES, (state, action) => {
      state.themes = action.payload.data;
    })
    .addCase(appErrorTypes.GET_APP_ERRORS, (state, action) => {
      state.appErrors = action.payload.data;
    })
    .addCase(offerTypes.GET_OFFERS, (state, action) => {
      state.offers = action.payload.data;
    })
    .addCase(instituteTypes.GET_INSTITUTES, (state, action) => {
      state.institutes = action.payload.data;
    })
    .addCase(branchTypes.GET_BRANCHS, (state, action) => {
      state.branches = action.payload.data;
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
