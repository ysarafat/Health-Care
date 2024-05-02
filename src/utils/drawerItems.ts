import { USER_ROLE } from "@/constants/role";
import { TDrawerItem } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
export const drawerItems = (role: string): TDrawerItem[] => {
  const roleMenus: TDrawerItem[] = [];
  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: GroupIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: GroupIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: GroupIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: GroupIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: GroupIcon,
        }
      );
      break;
    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: GroupIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: GroupIcon,
        }
      );
      break;
    case USER_ROLE.PATENT:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: GroupIcon,
        },
        {
          title: "Perceptions",
          path: `${role}/perceptions`,
          icon: GroupIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: GroupIcon,
        }
      );
      break;
    default:
      break;
  }
  return [...roleMenus];
};
