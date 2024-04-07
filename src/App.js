import Jsx from "./containar/Jsx";
import Users from "./containar/Users"
import DataBuinding from "./containar/DataBuinding";
import {Routes,NavLink,Route} from "react-router-dom";

function App(){
  return (
    // <div> 
    //   <Jsx/>
    //   <DataBuinding/>
    // </div>//div for export multiple xml 
    <div>
      <nav className="navber navbar-expand navber-light bg-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to= "/binding">DataBuinding</NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Routes class>
        <Route path ="/"element = {<Jsx/>}></Route>
        <Route path ="/binding" element = {<DataBuinding/>}></Route>
        <Route path ="/users" element={<Users/>}></Route>
        </Routes>
      </div>
    </div>
  )
}
export default App;

