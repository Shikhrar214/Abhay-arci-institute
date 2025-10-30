import React  from "react"
import { createBrowserRouter , RouterProvider} from "react-router";
import { About, Contact, Courses, Gallary, Home,LoginLogout, Layout } from "./components/index.js"
import { AdditionalDetails, Assignment, Dashboard, Login, Payments, Profile } from "./student/student.index.js";
import StaffLogin from "./employee/StaffLogin.jsx";
import StaffDasgboard from "./employee/StaffDashboard.jsx";
import UploadMedia from "./employee/UploadMedia.jsx";
import PersonalDetail from "./employee/PersonalDetail.jsx";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "home",
          element: <Home />
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "gallery",
          element: <Gallary/>
        },
        {
          path: "courses",
          element: <Courses/>
        },
        {
          path: "register",
          element: <LoginLogout/>
        },
        {
          path: "payments",
          element: <AdditionalDetails/>
        },
        {
          path: "login",
          element: <Login/> 
        }

      ]
    },
   {
    path: "student",
    element: <Dashboard/>
   },
  {
    path: "student-profile",
    element: <Profile/>
  },
  {
    path: "assignments",
    element: <Assignment/>
  },
  {
    path: "payment",
    element: <Payments/>
  },
  // employee
  {
    path: "staff-login",
    element: <StaffLogin/>
  },
  {
    path: "staff-dash",
    element: <StaffDasgboard/>
  },
  {
    path: "Staff-media-upload",
    element: <UploadMedia/>
  },
  {
    path: "staff-detail",
    element: <PersonalDetail/>
  }
  ])
  return (
   <>
  <RouterProvider router={router}/>
   </>
  )
}

export default App
