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
  SET_ACTIVE_ROLE: "/auth/activeRole",

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
export const branchApi = {
  GET_BRANCHS: "/branch",
  GET_ALL_BRANCHS: "/branch/all",

  ADD_BRANCH: "/branch",
  UPDATE_BRANCH: "/branch",
  DELETE_BRANCH: "/branch",
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

export const subjectApi = {
  GET_SUBJECTS: "/subject",
  GET_ALL_SUBJECTS: "/subject/all",
  GET_ALL_MY_SUBJECTS: "/subject/all/mySubjects",

  ADD_SUBJECT: "/subject",
  UPDATE_SUBJECT: "/subject",
  DELETE_SUBJECT: "/subject",
  IMPORT_SUBJECT: "/subject/import",
};

export const questionBankApi = {
  GET_QUESTION_BANKS: "/questionbank",
  GET_ALL_QUESTION_BANKS: "/questionbank/all",
  GET_ALL_MY_QUESTION_BANKS: "/questionbank/all/mySubjects",

  ADD_QUESTION_BANK: "/questionbank",
  UPDATE_QUESTION_BANK: "/questionbank",
  DELETE_QUESTION_BANK: "/questionbank",
  IMPORT_QUESTION_BANK: "/questionbank/import",
};

export const topicApi = {
  GET_TOPICS: "/subject/topic",
  GET_ALL_TOPICS: "/subject/topic/all",

  ADD_TOPIC: "/subject/topic",
  UPDATE_TOPIC: "/subject/topic",
  DELETE_TOPIC: "/subject/topic",
};

export const subTopicApi = {
  GET_SUB_TOPICS: "/subject/subtopic",
  GET_ALL_SUB_TOPICS: "/subject/subtopic/all",

  ADD_SUB_TOPIC: "/subject/subtopic",
  UPDATE_SUB_TOPIC: "/subject/subtopic",
  DELETE_SUB_TOPIC: "/subject/subtopic",
};

export const degreeApi = {
  GET_DEGREES: "/degree",
  GET_ALL_DEGREES: "/degree/all",

  ADD_DEGREE: "/degree",
  UPDATE_DEGREE: "/degree",
  DELETE_DEGREE: "/degree",
};

export const boardApi = {
  GET_BOARDS: "/board",
  GET_ALL_BOARDS: "/board/all",

  ADD_BOARD: "/board",
  UPDATE_BOARD: "/board",
  DELETE_BOARD: "/board",
};

export const goalApi = {
  GET_GOALS: "/goal",
  GET_ALL_GOALS: "/goal/all",
  GET_ALL_MY_GOALS: "/goal/all/myGoals",

  ADD_GOAL: "/goal",
  UPDATE_GOAL: "/goal",
  DELETE_GOAL: "/goal",
  IMPORT_GOAL: "/goal/import",
};

export const questionApi = {
  GET_QUESTIONS: "/question",
  GET_ALL_QUESTIONS: "/question/all",

  ADD_QUESTION: "/question",
  UPDATE_QUESTION: "/question",
  DELETE_QUESTION: "/question",
};

export const stateApi = {
  GET_STATES: "/state",
  GET_ALL_STATES: "/state/all",

  ADD_STATE: "/state",
  UPDATE_STATE: "/state",
  DELETE_STATE: "/state",
};

export const testSeriesApi = {
  GET_TEST_SERIESS: "/testseries",
  GET_ALL_TEST_SERIESS: "/testseries/all",

  ADD_TEST_SERIES: "/testseries",
  PUBLISH_TEST_SERIES: "/testseries/publish",

  UPDATE_TEST_SERIES: "/testseries",
  DELETE_TEST_SERIES: "/testseries",
};
export const testApi = {
  GET_TESTS: "/test",
  GET_ALL_TESTS: "/test/all",
  GET_ALL_TEST_QUESTIONS: "/test/questions/all",
  GET_TEST_QUESTIONS: "/test/questions",

  ADD_TEST: "/test",
  ADD_TEST_QUESTIONS: "/test/questions",

  UPDATE_TEST: "/test",
  DELETE_TEST: "/test",
};
export const languageApi = {
  GET_LANGUAGES: "/language",
  GET_ALL_LANGUAGES: "/language/all",

  ADD_LANGUAGE: "/language",
  UPDATE_LANGUAGE: "/language",
  DELETE_LANGUAGE: "/language",
};
export const examTypeApi = {
  GET_EXAM_TYPES: "/examtype",
  GET_ALL_EXAM_TYPES: "/examtype/all",

  ADD_EXAM_TYPE: "/examtype",
  UPDATE_EXAM_TYPE: "/examtype",
  DELETE_EXAM_TYPE: "/examtype",
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
