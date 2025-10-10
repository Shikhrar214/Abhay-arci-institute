import React  from "react"
import { createBrowserRouter , RouterProvider} from "react-router";
import { About, Contact, Courses, Gallary, Home,LoginLogout, Layout } from "./components/index.js"
import { AdditionalDetails, Login } from "./student/student.index.js";

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
        }

      ]
    },
   
    
  ])
  return (
   <>
  <RouterProvider router={router}/>
   </>
  )
}

export default App
