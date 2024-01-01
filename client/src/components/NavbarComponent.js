import {Container} from "@mui/material";
import React from "react";
import {Navbar} from "react-bootstrap";


function NavbarComponent(){
    const localStorageClean = () => {
        localStorage.removeItem('user')

    }

    return(
        <div className="NavbarComponent">
            <Navbar  className="navbarFirst">
                <Container className="contaimer">
                    <Navbar.Brand  href="/Home">
                        <img
                            src="./image/icons8-home-40.png"
                            className="navbarhome"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand  href="/Login">
                        <img
                            src="./image/icons8-logout-40.png"
                            className="navbarhome"
                            onClick={localStorageClean}
                        />
                    </Navbar.Brand>


                    <Navbar.Brand >ROCK PAPER SCISSORS</Navbar.Brand>
                    <Navbar.Toggle />
                    {/*<NavbarComponent.Collapse className="justify-content-end">

                    </NavbarComponent.Collapse>*/}
                </Container>
            </Navbar>
        </div>

    )
}
export default NavbarComponent;