import { lazy } from "react";

export  const Home = lazy(() => import("../pages/home/Home.jsx"));
export  const Layout = lazy(() => import("../layout/Layout.jsx"));
export  const Login = lazy(() => import("../pages/login/Login.jsx"));
export  const Register = lazy(() => import("../pages/register/Register.jsx"));
export  const Dashboard = lazy(() => import("../pages/dashboard/Dashboard.jsx"));
export  const Test = lazy(() => import("../pages/test/Test.jsx"));
export  const Users = lazy(() => import("../pages/users/Users.js"));
