import React  from "react"
import { createBrowserRouter , RouterProvider} from "react-router";
import { About, Contact, Courses, Gallary, Home,LoginLogout, Layout } from "./components/index.js"
import { Login } from "./student/student.index.js";

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
          path: "gallary",
          element: <Gallary/>
        },
        {
          path: "courses",
          element: <Courses/>
        },
        {
          path: "login",
          element: <LoginLogout/>
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
