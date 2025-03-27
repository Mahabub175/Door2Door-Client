//components
import Dashboard from "../pages/Dashboard/Dashboard";
import AllDeliveries from "../pages/Dashboard/Deliveries/AllDeliveries";

//icons
import { RiQuestionnaireLine, RiHospitalLine } from "react-icons/ri";
import {
  TbTruckDelivery,
  TbFileInvoice,
  TbReportMoney,
  TbBellDollar,
  TbMessageReport,
} from "react-icons/tb";
import { LuStore } from "react-icons/lu";
import { BiCabinet } from "react-icons/bi";
import { BsPeople, BsBarChartLine } from "react-icons/bs";
import { LuSquareCode } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiFacebookLogoBold } from "react-icons/pi";
import { HiOutlineReceiptPercent } from "react-icons/hi2";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: LuLayoutDashboard,
    element: <Dashboard />,
  },
  {
    name: "Deliveries",
    icon: TbTruckDelivery,
    children: [
      {
        name: "All",
        path: "deliveries/all",
        element: <AllDeliveries />,
      },
      {
        name: "Active",
        path: "deliveries/active",
        element: <AllDeliveries />,
      },
      {
        name: "Delivered",
        path: "deliveries/delivered",
        element: <AllDeliveries />,
      },
      {
        name: "Returned",
        path: "deliveries/returned",
        element: <AllDeliveries />,
      },
      {
        name: "Reverse Delivery",
        path: "deliveries/reverse-delivery",
        element: <AllDeliveries />,
      },
    ],
  },
  {
    name: "Invoices",
    path: "invoices",
    icon: TbFileInvoice,
    element: <AllDeliveries />,
  },
  {
    name: "Store",
    path: "store",
    icon: LuStore,
    element: <AllDeliveries />,
  },
  {
    name: "Help Center",
    path: "help-center",
    icon: RiQuestionnaireLine,
    element: <AllDeliveries />,
    new: true,
  },
  {
    name: "Facebook Group",
    section: "Quick links",
    path: "facebook-group",
    icon: PiFacebookLogoBold,
    element: <AllDeliveries />,
  },
  {
    name: "Bulk Delivery",
    path: "bulk-delivery",
    icon: BiCabinet,
    element: <AllDeliveries />,
  },
  {
    name: "Create Store",
    path: "create-store",
    icon: RiHospitalLine,
    element: <AllDeliveries />,
  },
  {
    name: "Pricing Plan",
    path: "pricing-plan",
    icon: TbReportMoney,
    element: <AllDeliveries />,
  },
  {
    name: "Operators",
    path: "operators",
    icon: BsPeople,
    element: <AllDeliveries />,
  },
  {
    name: "Coverage Area",
    path: "coverage-area",
    icon: BsBarChartLine,
    element: <AllDeliveries />,
  },
  {
    name: "Report Issue",
    path: "report-issue",
    icon: TbMessageReport,
    element: <AllDeliveries />,
  },
  {
    name: "Payment Info",
    path: "payment-info",
    icon: TbBellDollar,
    element: <AllDeliveries />,
  },
  {
    name: "Promo",
    path: "promo",
    icon: HiOutlineReceiptPercent,
    element: <AllDeliveries />,
  },
  {
    name: "Developers API",
    path: "developers-api",
    icon: LuSquareCode,
    element: <AllDeliveries />,
  },
  {
    name: "Packaging Poly",
    path: "packaging-poly",
    icon: MdOutlineShoppingBag,
    element: <AllDeliveries />,
  },
];
