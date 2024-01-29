import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-300 overflow-hidden mt-32  fixed navbar-expand-lg navbar-dark bg-grey fixed-top w-100 h-20'>
    
    <ul className="navbar-nav list-none gap-5 justify-center p-0 flex ml-auto text-8 mt-3">
            <nav className="text-2xl w-45 mt-2 font-medium ">
              <NavLink
                to="/Adminhomepage"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-500 p-3 no-underline"
                    : "text-black no-underline"
                }
              >
                Registration
              </NavLink>
            </nav>

            <nav className="text-2xl  mt-2 font-medium">
              <NavLink
                to="/Announcementhomepage"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-500  p-3 no-underline"
                    : "text-black no-underline"
                }
              >
                Announcements{" "}
              </NavLink>
            </nav>

            <nav className="text-2xl  mt-2 font-medium">
              <NavLink
                to="/Gradesheet"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-500  p-3 no-underline"
                    : "text-black no-underline"
                }
              >
                Gradesheet
              </NavLink>
            </nav>
          </ul>
        </div>
      
   
  )
}

export default Navbar
