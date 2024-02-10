import { useRoutes } from "react-router-dom";
// import ErrorBoundary from "../components/RouteErrorBoundary";
import ErrorBoundary from "../components/ErrorBoundary";

import Categories from "../pages/Categories";
import Dashboard from "../pages/Dashboard";
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
import Deals from "../pages/Deals";
import Expenses from "../pages/Expenses";
import SalonServices from "../pages/SalonServices";
import UserGroups from "../pages/UserGroups";
import Employees from "../pages/Employees";
import { getInstituteById } from "../redux/actions/instituteActions";
import { useEffect } from "react";
import POS from "../pages/POS";
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
          path: "/institutes",
          element: <Institutes />,
        },
        {
          path: "/users",
          element: <Users />,
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
          path: "/pos",
          element: <POS />,
        },

        {
          path: "/users",
          element: <Users />,
        },
        {
          errorElement: <ErrorBoundary />,

          path: "/deals",
          element: <Deals />,
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

          path: "/services",
          element: <SalonServices />,
        },

        {
          errorElement: <ErrorBoundary />,

          path: "/usergroups",
          element: <UserGroups />,
        },
        {
          errorElement: <ErrorBoundary />,

          path: "/employees",
          element: <Employees />,
        },
        {
          errorElement: <ErrorBoundary />,

          path: "/expenses",
          element: <Expenses />,
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
