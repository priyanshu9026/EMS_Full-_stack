import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import NotFound from "./pages/NotFound";
import ViewUser from "./users/ViewUser";


function App() {
  return <div className="App">
    <Router>
    <Navbar />
    <Routes>
       <Route exact path="/"element={<Home/>} /> 
       <Route exact path="/Adduser" element={<AddUser/>} /> 
       <Route exact path="/edituser/:id" element={<EditUser/>}/>
       <Route exact path='/viewuser/:id' element={<ViewUser/>} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
    </Router>

  </div>;
}

export default App;
