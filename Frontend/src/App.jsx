// App.js
import './App.css'; 
import './Components/Style/style.css'
import './Components/Style/loginstyle.css'
//import Adminsidebar from './Components/Admin/Adminsidebar';
//import Addeditstudent from './Layout/Admin/Addeditstudent';
//import Internalmarks from './Components/Homepage/Internalmarks';
//import Sidebar from './Components/Homepage/Sidebar';
//import Navbar from './Components/Homepage/Navbar';
//import Internals from './Components/Homepage/Internals';
// import Demo from './Components/Homepage/demo';
import {Outlet} from 'react-router-dom'
// import Addeditstudent from './Layout/Admin/Addeditstudent';
function App() {
  return (
    <div className="App">
      {/* <Internalmarks/> */}
      {/* <Demo/> */}
      {/* <Sidebar/> */}
      {/* <Navbar/> */}
      {/* <Internals/> */}
      {/* <Adminsidebar/> */}
      {/* <Addeditstudent/> */}
      <Outlet/>
    </div>
  );
}

export default App;
