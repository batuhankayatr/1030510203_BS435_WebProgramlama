
import './styles/App.css';
import {Button, ButtonGroup, Container} from "@mui/material";
import {Navbar} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoutes from "./PrivateRoute";
import GameMode1 from "./pages/GameMode1";
import GameMode2 from "./pages/GameMode2";
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
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
