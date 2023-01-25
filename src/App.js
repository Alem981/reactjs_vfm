import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import AddUser from './users/AddUser'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddDriver from './drivers/AddDriver';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/adduser" element={<AddUser />}></Route>
        <Route exact path="/adddriver" element={<AddDriver />}></Route>


      </Routes>
      

      </Router>
    </div>
  );
}

export default App;
