import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Components/Style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Addeditstudent from './Layout/Admin/Addeditstudent.jsx';
import Internals from './Layout/Student/Internals.jsx';
import Parentdetail from './Layout/Admin/Parentdetail.jsx'
import Addeditstudentlayout from './Layout/Admin/Addeditstudentlayout.jsx'
import Login from './Layout/Login/Adminloginform.jsx'
import Sample from './Layout/Admin/Sample.jsx'
import Adminsidebar from './Components/Admin/Adminsidebar.jsx'
import Adminnavbar from './Components/Admin/Adminnavbar.jsx'
import Adminhomepage from './Layout/Admin/Adminhomepage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index={true} path="/" element={<Login/>}></Route>
      <Route index={true} path="/addedit" element={<Addeditstudent/>}></Route>
      <Route index={true} path="/internals" element={<Internals/>}></Route>
      <Route index={true} path="/parentdetail" element={<Parentdetail/>}></Route>
      <Route index={true} path="/addeditstudentlayout" element={<Addeditstudentlayout/>}></Route>
      <Route index={true} path="/Sample" element={<Sample/>}></Route>
      <Route index={true} path="/Adminsidebar" element={<Adminsidebar/>}></Route>
      <Route index={true} path="/Adminhomepage" element={<Adminhomepage/>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
