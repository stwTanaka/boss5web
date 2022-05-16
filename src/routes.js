/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "ダッシュボード",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
    menutype:"main",
  },
  
  {
    path: "/icons",
    name: "検索",
    icon: "nc-icon nc-laptop",
    component: Icons,
    layout: "/admin",
    menutype:"search",
  },
  {
    path: "/maps",
    name: "登録",
    icon: "nc-icon nc-cloud-upload-94",
    component: Maps,
    layout: "/admin",
    menutype:"input",
  },
  {
    path: "/notifications",
    name: "出荷",
    icon: "nc-icon nc-delivery-fast",
    component: Notifications,
    layout: "/admin",
    menutype:"ship",
  },
  {
    path: "/user-page",
    name: "オートシップ",
    icon: "nc-icon nc-refresh-69",
    component: UserPage,
    layout: "/admin",
    menutype:"regularpurchase",
  },
  {
    path: "/tables",
    name: "組織",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
    menutype:"tree",
  },
  {
    path: "/typography",
    name: "ボーナス",
    icon: "nc-icon nc-money-coins",
    component: Typography,
    layout: "/admin",
    menutype:"bonus",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin",
    menutype:"other",
  },
];
export default routes;
