import { useRoutes } from "react-router-dom";
// import ErrorBoundary from "../components/RouteErrorBoundary";
import ErrorBoundary from "../components/ErrorBoundary";

import Categories from "../pages/Categories";
import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Reports";
import Themes from "../pages/Themes";
import Currency from "../pages/Currency";

import Login from "../pages/Login";
import Main from "../pages/Main";
import Offers from "../pages/Offers";
// import Platforms from "../pages/Platforms";
// import Products from "../pages/Products";
import Settings from "../pages/Settings";
// import Users from "../pages/Users";
import ProtectedRoute from "./ProtectedRoute";
// import AppErrors from "../pages/AppErrors";
import UnAuthorized from "../components/UnAuthorized";
import { ROLES } from "../constants";
import Institutes from "../pages/Institutes";
import Users from "../pages/Users";
import { useDispatch, useSelector } from "react-redux";
import { useEffectOnce } from "react-use";
import { getUserByToken } from "../redux/actions/authActions";

import { getInstituteById } from "../redux/actions/instituteActions";
import { useEffect } from "react";
import Branches from "../pages/Branches";
import Subject from "../pages/Subject";
import Topic from "../pages/Topics";
import SubTopic from "../pages/SubTopics";
import Degree from "../pages/Degree";
import Board from "../pages/Board";
import Goal from "../pages/Goal";
import Question from "../pages/Question";
import States from "../pages/State";
import Languages from "../pages/Language";
import ExamTypes from "../pages/ExamType";
import TestSeries from "../pages/TestSeries";
import Test from "../pages/Tests";
import TestQuestion from "../pages/TestQuestions";
import ProductTypes from "../pages/ProductsTypes";
import Students from "../pages/Students";
import Affiliates from "../pages/Affiliates";
import AffiliatesBranches from "../pages/AffiliatesBranches";
import AffiliatesUsers from "../pages/AffiliatesUsers";
import MockTests from "../pages/MockTests";

export function Router() {
  const dispatch = useDispatch();
  const { role, instituteId } = useSelector((state) => state.auth);
  useEffectOnce(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(getUserByToken());
    }
  }, []);

  useEffect(() => {
    if (instituteId) {
      dispatch(getInstituteById({ instituteId }));
    }
  }, [instituteId]);
  const routes = {
    [ROLES.SUPERADMIN]: {
      path: "/",
      element: (
        <ProtectedRoute role={ROLES.SUPERADMIN}>
          <Main />
        </ProtectedRoute>
      ),
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/reports",
          element: <Reports />,
        },

        {
          path: "/institutes",
          element: <Institutes />,
        },
        {
          path: "/branches",
          element: <Branches />,
        },
        {
          path: "/users",
          element: <Users />,
        },

        {
          path: "/affiliates",
          element: <Affiliates />,
        },
        {
          path: "/affiliatesBranches",
          element: <AffiliatesBranches />,
        },
        {
          path: "/affiliatesUsers",
          element: <AffiliatesUsers />,
        },

        {
          path: "/theme",
          element: <Themes />,
        },
        {
          path: "/currency",
          element: <Currency />,
        },
        {
          path: "/offers",
          element: <Offers />,
          errorElement: <ErrorBoundary />,
        },

        {
          errorElement: <ErrorBoundary />,

          path: "/categories",
          element: <Categories />,
        },
        {
          errorElement: <ErrorBoundary />,

          path: "/subjects",
          exact: true,
          element: <Subject />,
        },

        {
          path: "/degree",
          exact: true,
          element: <Degree />,
        },
        {
          path: "/board",
          exact: true,
          element: <Board />,
        },
        {
          errorElement: <ErrorBoundary />,

          path: "/goal",
          exact: true,
          element: <Goal />,
        },
        {
          path: "/state",
          exact: true,
          element: <States />,
        },
        {
          path: "/language",
          exact: true,
          element: <Languages />,
        },
        {
          path: "/examtype",
          exact: true,
          element: <ExamTypes />,
        },

        {
          path: "/topic",
          exact: true,
          element: <Topic />,
        },
        {
          path: "/subtopic",
          exact: true,
          element: <SubTopic />,
        },
        {
          path: "/producttype",
          exact: true,
          element: <ProductTypes />,
        },
        {
          path: "/student",
          exact: true,
          element: <Students />,
        },

        {
          errorElement: <ErrorBoundary />,

          path: "/setting",
          element: <Settings />,
        },
      ],
    },
    [ROLES.INSTITUTEADMIN]: {
      path: "/",
      element: (
        <ProtectedRoute role={ROLES.INSTITUTEADMIN}>
          <Main />
        </ProtectedRoute>
      ),
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/branches",
          element: <Branches />,
        },
        // {
        //   path: "/pos",
        //   element: <POS />,
        // },

        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/student",
          exact: true,
          element: <Students />,
        },
        {
          errorElement: <ErrorBoundary />,

          path: "/subjects",
          exact: true,
          element: <Subject />,
        },
        {
          path: "/topic",
          exact: true,
          element: <Topic />,
        },
        {
          path: "/subtopic",
          exact: true,
          element: <SubTopic />,
        },

        {
          errorElement: <ErrorBoundary />,

          path: "/goal",
          exact: true,
          element: <Goal />,
        },

        {
          path: "/question",
          exact: true,
          element: <Question />,
        },
        {
          path: "/testseries",
          exact: true,
          element: <TestSeries />,
        },
        // remove this if required to remove.
        // {
        //   path: "/tests",
        //   exact: true,
        //   element: <Test />,
        // },
        {
          path: "/mocktests",
          exact: true,
          element: <MockTests />,
        },

        // {
        //   errorElement: <ErrorBoundary />,

        //   path: "/deals",
        //   element: <Deals />,
        // },
        // {
        //   path: "/offers",
        //   element: <Offers />,
        //   errorElement: <ErrorBoundary />,
        // },

        // {
        //   errorElement: <ErrorBoundary />,

        //   path: "/categories",
        //   element: <Categories />,
        // },
        // {
        //   errorElement: <ErrorBoundary />,

        //   path: "/services",
        //   element: <SalonServices />,
        // },

        // {
        //   errorElement: <ErrorBoundary />,

        //   path: "/usergroups",
        //   element: <UserGroups />,
        // },
        // {
        //   errorElement: <ErrorBoundary />,

        //   path: "/employees",
        //   element: <Employees />,
        // },
        // {
        //   errorElement: <ErrorBoundary />,

        //   path: "/expenses",
        //   element: <Expenses />,
        // },

        {
          errorElement: <ErrorBoundary />,

          path: "/setting",
          element: <Settings />,
        },
      ],
    },
    [ROLES.FACULTY]: {
      path: "/",
      element: (
        <ProtectedRoute role={ROLES.INSTITUTEADMIN}>
          <Main />
        </ProtectedRoute>
      ),
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },

        {
          path: "/tests",
          exact: true,
          element: <Test />,
        },
        {
          path: "/testquestion",
          exact: true,
          element: <TestQuestion />,
        },

        {
          errorElement: <ErrorBoundary />,

          path: "/setting",
          element: <Settings />,
        },
      ],
    },
  };
  const router = useRoutes([
    role
      ? routes[role]
      : {
          path: "/",
          element: <ProtectedRoute role={ROLES.SUPERADMIN}></ProtectedRoute>,
        },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/unauthorized",
      element: <UnAuthorized />,
    },
  ]);
  return router;
}
