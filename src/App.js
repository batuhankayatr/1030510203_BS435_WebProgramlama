
import './App.css';
import {Button, ButtonGroup, Container} from "@mui/material";
import {Navbar} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import PrivateRoutes from "./PrivateRoute";
import GameMode1 from "./GameMode1";
import GameMode2 from "./GameMode2";
import Login from "./Login";
import Register from "./Register";



function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/GameMode1" element={<GameMode1 />} />
                <Route path="/GameMode2" element={<GameMode2 />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route element={<PrivateRoutes />}>



                </Route>
            </Routes>
        </BrowserRouter>



    </div>
  );
}

export default App;
