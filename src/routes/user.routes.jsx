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

//components
import Dashboard from "../pages/Dashboard/Dashboard";
import AllDeliveries from "../pages/Dashboard/Deliveries/AllDeliveries";
import NewDelivery from "../pages/Dashboard/Deliveries/NewDelivery";
import Store from "../pages/Dashboard/Store/Store";
import HelpCenter from "../pages/Dashboard/HelpCenter/HelpCenter";
import CreateStore from "../pages/Dashboard/Store/CreateStore";
import PricingPlan from "../pages/Dashboard/PricingPlan/PricingPlan";
import CoverageArea from "../pages/Dashboard/CoverageArea/CoverageArea";
import ReportIssue from "../pages/Dashboard/ReportIssue/ReportIssue";
import PaymentInfo from "../pages/Dashboard/PaymentInfo/PaymentInfo";
import Promo from "../pages/Dashboard/Promo/Promo";
import DeveloperApi from "../pages/Dashboard/DeveloperApi/DeveloperApi";
import PackagingPoly from "../pages/Dashboard/PackagingPoly/PackagingPoly";

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
      {
        name: "New Delivery",
        path: "deliveries/new-delivery",
        element: <NewDelivery />,
        hide: true,
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
    element: <Store />,
  },
  {
    name: "Help Center",
    path: "help-center",
    icon: RiQuestionnaireLine,
    element: <HelpCenter />,
    new: true,
  },
  {
    name: "Facebook Group",
    section: "Quick links",
    path: "facebook-group",
    icon: PiFacebookLogoBold,
    element: <AllDeliveries />,
    link: "https://www.facebook.com/groups/1272471483507271",
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
    element: <CreateStore />,
  },
  {
    name: "Pricing Plan",
    path: "pricing-plan",
    icon: TbReportMoney,
    element: <PricingPlan />,
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
    element: <CoverageArea />,
  },
  {
    name: "Report Issue",
    path: "report-issue",
    icon: TbMessageReport,
    element: <ReportIssue />,
  },
  {
    name: "Payment Info",
    path: "payment-info",
    icon: TbBellDollar,
    element: <PaymentInfo />,
  },
  {
    name: "Promo",
    path: "promo",
    icon: HiOutlineReceiptPercent,
    element: <Promo />,
  },
  {
    name: "Developers API",
    path: "developers-api",
    icon: LuSquareCode,
    element: <DeveloperApi />,
  },
  {
    name: "Packaging Poly",
    path: "packaging-poly",
    icon: MdOutlineShoppingBag,
    element: <PackagingPoly />,
  },
];
