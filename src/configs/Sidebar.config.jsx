// component
import Iconify from "../components/layout/iconify/Iconify";
import SvgColor from "../components/layout/svg-color";
import { ROLES } from "../constants";

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const sidebarConfig = {
  [ROLES.SUPERADMIN]: [
    {
      title: "dashboard",
      path: "/",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ic:twotone-monitor-heart" />,
    },
    {
      title: "reports",
      path: "/reports",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    {
      title: "Subject",
      path: "/subjects",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    {
      title: "Qualification",
      path: "/qualification",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    {
      title: "Goal",
      path: "/goal",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    {
      title: "State",
      path: "/state",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    {
      title: "Language",
      path: "/language",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    {
      title: "examtype",
      path: "/examtype",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    {
      title: "degree",
      path: "/degree",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    {
      title: "board",
      path: "/board",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    {
      title: "institutes",
      path: "/institutes",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="fluent-mdl2:education" />,
      children: [
        {
          title: "branches",
          path: "/branches",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="fluent:branch-fork-hint-20-regular" />,
        },
      ],
    },
    {
      title: "users",
      path: "/users",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ic:twotone-account-circle" />,
    },

    {
      title: "theme",
      path: "/theme",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ic:twotone-color-lens" />,
    },
    // {
    //   title: "currency",
    //   path: "/currency",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ri:currency-fill" />,
    // },
    // {
    //   title: "offers",
    //   path: "/offers",
    //   icon: <Iconify icon="ic:twotone-discount" />,
    // },
    // {
    //   title: "products",
    //   path: "/products",
    //   icon: icon("ic_cart"),
    // },
    // {
    //   title: "categories",
    //   path: "/categories",
    //   icon: <Iconify icon="icon-park:category-management" />,
    // },

    // {
    //   title: "platforms",
    //   path: "/platforms",
    //   icon: <Iconify icon="ph:stack-duotone" />,
    // },

    // {
    //   title: "setting",
    //   path: "/setting",
    //   icon: <Iconify icon="ant-design:setting-twotone" />,
    // },

    // {
    //   title: "App Errors",
    //   path: "/apperrors",
    //   icon: <Iconify icon="ant-design:warning-twotone" />,
    // },
    // {
    //   title: "blog",
    //   path: "/dashboard/blog",
    //   icon: icon("ic_blog"),
    // },
    // {
    //   title: "login",
    //   path: "/login",
    //   icon: icon("ic_lock"),
    // },
    // {
    //   title: "Not found",
    //   path: "/404",
    //   icon: icon("ic_disabled"),
    // },
  ],
  [ROLES.INSTITUTEADMIN]: [
    // {
    //   title: "POS",
    //   path: "/pos",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="eva:shopping-cart-outline" />,
    // },
    {
      title: "dashboard",
      path: "/",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ic:twotone-monitor-heart" />,
    },
    {
      title: "branches",
      path: "/branches",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="fluent:branch-fork-hint-20-regular" />,
    },
    {
      title: "reports",
      path: "/reports",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },

    {
      title: "users",
      path: "/users",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ic:twotone-account-circle" />,
    },
    {
      title: "Subject",
      path: "/subjects",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    // {
    //   title: "Qualification",
    //   path: "/qualification",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    // },
    {
      title: "Goal",
      path: "/goal",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    },
    {
      title: "question",
      path: "/question",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ic:twotone-monitor-heart" />,
    },
    {
      title: "testseries",
      path: "/testseries",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ic:twotone-monitor-heart" />,
    },
    // {
    //   title: "deals",
    //   path: "/deals",
    //   icon: <Iconify icon="ph:fire-duotone" />,
    // },
    // {
    //   title: "categories",
    //   path: "/categories",
    //   icon: <Iconify icon="icon-park:category-management" />,
    // },
    // {
    //   title: "services",
    //   path: "/services",
    //   icon: <Iconify icon="ic:twotone-home-repair-service" />,
    // },
    // {
    //   title: "user groups",
    //   path: "/usergroups",
    //   icon: <Iconify icon="typcn:group-outline" />,
    // },
    // {
    //   title: "employees",
    //   path: "/employees",
    //   icon: <Iconify icon="clarity:employee-group-line" />,
    // },
    // {
    //   title: "offers",
    //   path: "/offers",
    //   icon: <Iconify icon="ic:twotone-discount" />,
    // },
    // {
    //   title: "expenses",
    //   path: "/expenses",
    //   icon: <Iconify icon="solar:wallet-bold-duotone" />,
    // },
    {
      title: "setting",
      path: "/setting",
      icon: <Iconify icon="ant-design:setting-twotone" />,
    },

    // {
    //   title: "products",
    //   path: "/products",
    //   icon: icon("ic_cart"),
    // },

    // {
    //   title: "platforms",
    //   path: "/platforms",
    //   icon: <Iconify icon="ph:stack-duotone" />,
    // },

    // {
    //   title: "App Errors",
    //   path: "/apperrors",
    //   icon: <Iconify icon="ant-design:warning-twotone" />,
    // },
    // {
    //   title: "blog",
    //   path: "/dashboard/blog",
    //   icon: icon("ic_blog"),
    // },
    // {
    //   title: "login",
    //   path: "/login",
    //   icon: icon("ic_lock"),
    // },
    // {
    //   title: "Not found",
    //   path: "/404",
    //   icon: icon("ic_disabled"),
    // },
  ],
};

export default sidebarConfig;
