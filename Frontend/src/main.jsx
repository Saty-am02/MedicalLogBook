import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import './Components/Style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Addeditstudent from './Layout/Admin/Addeditstudent.jsx';
import Internals from './Layout/Student/Internals.jsx';
import Parentdetail from './Layout/Admin/Parentdetail.jsx'
import Addeditstudentlayout from './Layout/Admin/Addeditstudentlayout.jsx'
import Login from './Layout/Login/Adminloginform.jsx'
//import Sample from './Layout/Admin/Sample.jsx'
import Adminsidebar from './Components/Admin/Adminsidebar.jsx'
import Adminnavbar from './Components/Admin/Adminnavbar.jsx'
import Adminhomepage from './Layout/Admin/Adminhomepage.jsx'
import Sidebar from './Components/Student/Sidebar.jsx';
//import Search from './Layout/Admin/Searchstudent.jsx';
import SearchStudent from './Layout/Admin/Searchstudent.jsx';
import Addeditfaculty from './Layout/Admin/Addeditfaculty.jsx'
import Searchfaculty from './Layout/Admin/Searchfaculty.jsx';
import Announcement from './Layout/Admin/Announcement.jsx';
import Gradesheet from './Layout/Admin/Gradesheet.jsx';
import Navbar from './Components/Admin/Navbar.jsx';
import Announcementsidebar from './Components/Admin/Announcementsidebar.jsx';
import Sidebarannouncement from './Components/Admin/Sidebarannouncement.jsx';
import Announcementhomepage from './Layout/Admin/Announcementhomepage.jsx';
import EditAnnouncement from './Layout/Admin/EditAnnouncement.jsx';
import Createannouncement from './Layout/Admin/CreateAnnouncement.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index={true} path="/" element={<Login/>}></Route>
      <Route index={true} path="/addedit" element={<Addeditstudent/>}></Route>
      <Route index={true} path="/internals" element={<Internals/>}></Route>
      <Route index={true} path="/parentdetail" element={<Parentdetail/>}></Route>
      <Route index={true} path="/addeditstudentlayout" element={<Addeditstudentlayout/>}></Route>
      <Route index={true} path="/Adminsidebar" element={<Adminsidebar/>}></Route>
      <Route index={true} path="/Adminhomepage" element={<Adminhomepage/>}></Route>
      <Route index={true} path="/Sidebar" element={<Sidebar/>}></Route>
      <Route index={true} path="/Searchstudent" element={<SearchStudent/>}></Route>
      <Route index={true} path="/Addeditfaculty" element={<Addeditfaculty/>}></Route>
      <Route index={true} path="/Searchfaculty" element={<Searchfaculty/>}></Route>
      <Route index={true} path="/Announcement" element={<Announcement/>}></Route>
      <Route index={true} path="/Gradesheet" element={<Gradesheet/>}></Route>
      <Route index={true} path="/Navbar" element={<Navbar/>}></Route>
      <Route index={true} path="/Announcementsidebar" element={<Announcementsidebar/>}></Route>
      <Route index={true} path="/Sidebarannouncement" element={<Sidebarannouncement/>}></Route>
      <Route index={true} path="/Announcementhomepage" element={<Announcementhomepage/>}></Route>
      <Route index={true} path="/EditAnnouncement" element={<EditAnnouncement/>}></Route>
      <Route index={true} path="/Createannouncement" element={<Createannouncement/>}></Route>

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
