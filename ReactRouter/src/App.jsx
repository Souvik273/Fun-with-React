import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Component/Home'
import About from './Component/About'
import DashBoard from './Component/DashBoard'
import Navbar from "./Component/Navbar";
import Param from "./Component/Param";
import Contact from "./Component/Contact";
import Courses from "./Component/Courses";
import JavaScript from "./Component/JavaScript";
import Dsa from "./Component/Dsa";
import ReactJS from "./Component/ReactJS";
import NotFound from "./Component/NotFound";

const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <div><Navbar/><Home/></div>
  },
  {
    path: "/about",
    element: <div><Navbar/><About/></div>
  },
  {
    path: "/dashboard",
    element: <div><Navbar/><DashBoard/></div>,
    children:[
      {
        path:'courses',
        element:<Courses/>,
        children:
        [
          {
            path:'react',
            element:<ReactJS/>
          },
          {
            path:'dsa',
            element:<Dsa/>
          },
          {
            path:'javascript',
            element:<JavaScript/>
          }
        ]
      },
      
    ]
  },
  {
    path:'*',
    element:<NotFound/> 
  },
  {
    path:"/:id",
    element:
    <div>
      <Navbar/>
      <Param/>
    </div>
  },
  {
    path:'/contact',
    element:<div><Navbar/><Contact/></div>
  }
  ]);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
