import React, { Children } from 'react'
import { NavLink } from 'react-router-dom'
// import Announce from '../../Components/Assets/icons/Announce.png'
// import Createannouncement from '../../Components/Assets/icons/Createannouncement.png'
// import Editannouncement from '../../Components/Assets/icons/Editannouncement.png'
// import { 
//   Announce,
//   Createannouncement,
//   Editannouncement
// }from '../Assets/icons';
import {menuItem} from '../Constant'


const Sidebarannouncement = ({Children}) => {

//   const menuItem = [{
//     path:"/Announcement",
//     name:"Announcement",
//     icon:{Announce}
//   },
//   {
//     path:"#",
//     name:"Create Announcement",
//     icon:{Createannouncement}
//   },
//   {
//     path:"#",
//     name:"Edit Announcement",
//     icon:{Editannouncement}
//   },
// ]

  return (
    <div className='flex'>
      <div className="bg-black text-white h-auto mt-60 fixed">
        <div className="flex items-center w-40vw"></div>
        {
          menuItem.map((item,index)=>(
          <NavLink to={item.path} key={index} className="flex text-white p-5 pt-10 gap-4" activeclassName="bg-blue-600 text-black">
            <img className="text-5" src={item.icon}></img>
            <div className="text-5">{item.name}</div>
          </NavLink>
          ))
        }
      </div>
      <main>{Children}</main>
      
  
      {/* <div className='fixed mt-50 left-0 w-400 h-900 bg-indigo-900 text-white'>
     
     <ul className="navbar-nav list-none gap-4 justify-center p-0 flex ml-auto text-8 mt-3">
           <nav className="text-2xl w-45 mt-2 font-medium ">
             <NavLink
               to="/Search"
               className={({ isActive }) =>
                 isActive
                   ? "text-white bg-blue-500 p-3 no-underline"
                   : "text-black no-underline"
               }
             >
               Announcement
             </NavLink>
           </nav>

           <nav className="text-2xl  mt-2 font-medium">
             <NavLink
               to=""
               className={({ isActive }) =>
                 isActive
                   ? "text-white bg-blue-500  p-3 no-underline"
                   : "text-black no-underline"
               }
             >
               Create Announcement
             </NavLink>
           </nav>

           <nav className="text-2xl  mt-2 font-medium">
             <NavLink
               to=""
               className={({ isActive }) =>
                 isActive
                   ? "text-white bg-blue-500  p-3 no-underline"
                   : "text-black no-underline"
               }
             >
               Edit Announcement
             </NavLink>
           </nav>
         </ul>
   </div>  */}
    </div>
  )
}

export default Sidebarannouncement
