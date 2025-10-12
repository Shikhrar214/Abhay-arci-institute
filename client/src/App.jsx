import React  from "react"
import { createBrowserRouter , RouterProvider} from "react-router";
import { About, Contact, Courses, Gallary, Home,LoginLogout, Layout } from "./components/index.js"
import { AdditionalDetails, Assignment, Dashboard, Login, Payments, Profile } from "./student/student.index.js";

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
  }
  ])
  return (
   <>
  <RouterProvider router={router}/>
   </>
  )
}

export default App
