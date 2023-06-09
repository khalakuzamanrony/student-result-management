import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import AddCourse from "../pages/AddCourse";
import DashboardHome from "../pages/DashboardHome";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddStudent from "../pages/AddStudent";
import AddTeacher from "../pages/AddTeacher";
import Courses from "../pages/Courses";
import PrivateRoute from "./privateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/add-student",
        element: <AddStudent />,
      },
      {
        path: "/dashboard/add-teacher",
        element: <AddTeacher />,
      },
      {
        path: "/dashboard/add-course",
        element: <AddCourse />,
      },
      {
        path: "/dashboard/courses",
        element: <Courses />,
      },
    ],
  },
]);

export default router;
