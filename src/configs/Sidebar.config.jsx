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
      icon: <Iconify icon="carbon:dashboard" />,
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
          children: [
            {
              title: "users",
              path: "/users",
              // icon:    icon("ic_analytics"),
              icon: <Iconify icon="flowbite:users-outline" />,
            },
          ],
        },
      ],
    },

    {
      title: "student",
      path: "/student",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="ph:student-bold" />,
    },
    {
      title: "Pariksharth Users",
      // path: "/PariksharthUsers",
      path: "#",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="clarity:users-line" />,
      children: [
        {
          title: "Super Admin",
          // path: "/SuperAdmin",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="dashicons:admin-users" />,
        },
        {
          title: "Administration Staff",
          // path: "/AdministrationStaff",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="ph:users-four" />,
        },
        {
          title: "Marketing Team",
          // path: "/MarketingTeam",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="oui:app-users-roles" />,
        },
        {
          title: "Pariksharth Testers",
          // path: "/PariksharthTesters",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="mdi:users-check-outline" />,
        },
      ],
    },

    {
      title: "Affiliates",
      // path: "/Affiliates",
      path: "#",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="majesticons:library-line" />,
      children: [
        {
          title: "branches",
          // path: "/branches",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="fluent:branch-fork-hint-20-regular" />,
          children: [
            {
              title: "users",
              // path: "/users",
              path: "#",
              // icon:    icon("ic_analytics"),
              icon: <Iconify icon="flowbite:users-outline" />,
            },
          ],
        },
      ],
    },

    {
      title: "Offerings",
      // path: "/reports",
      path: "#",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="fluent-mdl2:product-variant" />,
      children: [
        {
          title: "CurrentAffairs",
          // path: "/CurrentAffairs",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="emojione-monotone:newspaper" />,
        },
        {
          title: "TestSeries",
          // path: "/TestSeries",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="healthicons:i-exam-multiple-choice-outline" />,
        },
        {
          title: "Mock Tests",
          // path: "/Mock Tests",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="healthicons:i-exam-qualification-outline" />,
        },
      ],
    },
    {
      title: "masters",
      // path: "/masters",
      path: "#",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="mdi:database-cog-outline" />,
      children: [
        {
          title: "Subject",
          path: "/subjects",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="material-symbols:topic-outline" />,
        },
        {
          title: "State",
          path: "/state",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="gis:world-map-alt" />,
          // icon: <Iconify icon="gis:map-legend-o" />,  // this is extra one.
        },
        {
          title: "Language",
          path: "/language",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="uil:language" />,
        },
        {
          title: "Exam Type",
          path: "/examtype",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="tabler:adjustments-question" />,
        },

        {
          title: "Qualification",
          // path: "/reports",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="icon-park-outline:degree-hat" />,
          children: [
            {
              title: "degree",
              path: "/degree",
              // icon:    icon("ic_analytics"),
              icon: <Iconify icon="fluent:certificate-16-regular" />,
            },
          ],
        },
        {
          title: "Goal",
          path: "/goal",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="octicon:goal-16" />,
        },
        // {
        //   title: "Board",
        //   // path: "/Board",
        //   path: "#",
        //   // icon:    icon("ic_analytics"),
        //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
        // },
      ],
    },
    {
      title: "reports",
      path: "/reports",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="fluent-mdl2:b-i-dashboard" />,
    },
    // {
    //   title: "Subject",
    //   path: "/subjects",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    // },
    // {
    //   title: "Qualification",
    //   path: "/qualification",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    // },
    // {
    //   title: "Goal",
    //   path: "/goal",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    // },
    // {
    //   title: "State",
    //   path: "/state",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    // },
    // {
    //   title: "Language",
    //   path: "/language",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    // },
    // {
    //   title: "examtype",
    //   path: "/examtype",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    // },
    // {
    //   title: "degree",
    //   path: "/degree",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    // },
    // {
    //   title: "board",
    //   path: "/board",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    // },

    // {
    //   title: "users",
    //   path: "/users",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ic:twotone-account-circle" />,
    // },

    {
      title: "setting",
      // path: "/setting",
      path: "#",
      icon: <Iconify icon="ant-design:setting-twotone" />,
      children: [
        {
          title: "theme",
          path: "/theme",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="ic:twotone-color-lens" />,
        },
      ],
    },
    // {
    //   title: "producttype",
    //   path: "/producttype",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ic:twotone-color-lens" />,
    // },

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
      icon: <Iconify icon="carbon:dashboard" />,
    },
    {
      title: "branches",
      path: "/branches",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="fluent:branch-fork-hint-20-regular" />,
      children: [
        {
          title: "users",
          path: "/users",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="flowbite:users-outline" />,
        },
      ],
    },
    {
      title: "Pariksharth Imports",
      path: "/#",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="uil:import" />,
      children: [
        {
          title: "Goal",
          path: "/goal",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="octicon:goal-16" />,
        },
        {
          title: "Subject",
          path: "/subjects",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="material-symbols:topic-outline" />,
        },
        {
          title: "Offerings",
          // path: "/offerings",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="fluent-mdl2:product-variant" />,
        },
      ],
    },
    {
      title: "question",
      path: "/question",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="mdi:folder-question-outline" />,
    },
    // below component would be dynamic component.
    {
      title: "Launch Offering",
      // path: "/launchOffering",
      path: "#",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="heroicons:rocket-launch" />,
      children: [
        {
          title: "CurrentAffairs",
          // path: "/CurrentAffairs",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="emojione-monotone:newspaper" />,
        },
        {
          title: "TestSeries",
          path: "/TestSeries",
          // path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="healthicons:i-exam-multiple-choice-outline" />,
        },
        {
          title: "Mock Tests",
          // path: "/mockTests",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="healthicons:i-exam-qualification-outline" />,
        },
      ],
    },

    {
      title: "Reports",
      // path: "/reports",
      path: "#",
      // icon:    icon("ic_analytics"),
      icon: <Iconify icon="fluent-mdl2:b-i-dashboard" />,
      children: [
        {
          title: "Student Results",
          // path: "/studentResults",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="ic:twotone-color-lens" />,
        },
        {
          title: "Offering wise Reports",
          // path: "/offeringwiseReports",
          path: "#",
          // icon:    icon("ic_analytics"),
          icon: <Iconify icon="ic:twotone-color-lens" />,
        },
      ],
    },

    // {
    //   title: "users",
    //   path: "/users",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ic:twotone-account-circle" />,
    // },
    // {
    //   title: "student",
    //   path: "/student",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ic:twotone-color-lens" />,
    // },

    // {
    //   title: "Qualification",
    //   path: "/qualification",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ant-design:pie-chart-twotone" />,
    // },

    // {
    //   title: "testseries",
    //   path: "/testseries",
    //   // icon:    icon("ic_analytics"),
    //   icon: <Iconify icon="ic:twotone-monitor-heart" />,
    // },
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
      title: "Profile",
      // path: "/profile",
      path: "#",
      icon: <Iconify icon="flowbite:profile-card-outline" />,
    },
    {
      title: "Notifications",
      // path: "/notifications",
      path: "#",

      icon: <Iconify icon="streamline:notification-message-alert" />,
    },
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
