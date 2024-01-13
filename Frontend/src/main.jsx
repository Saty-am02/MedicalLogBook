import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Components/Style/style.css'
import './Components/Style/loginstyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Addeditstudent from './Layout/Admin/Addeditstudent.jsx';
import Internals from './Layout/Student/Internals.jsx';
import Login from '../src/Layout/Login/Adminloginform.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index={true} path="/" element={<Login/>}></Route>
      <Route index={true} path="/addedit" element={<Addeditstudent/>}></Route>
      <Route index={true} path="/internals" element={<Internals/>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
