// App.js
import './App.css'; 
//import './Components/Style/style.css'
//import './Components/Style/loginstyle.css'

import {Outlet} from 'react-router-dom'
// import Addeditstudent from './Layout/Admin/Addeditstudent';
function App() {
  return (
    <div className="App">
      
      <Outlet/>
    </div>
  );
}

export default App;
