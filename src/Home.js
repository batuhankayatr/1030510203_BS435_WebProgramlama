
import {Navbar} from "react-bootstrap";
import {Button, ButtonGroup, Container} from "@mui/material";


const gotogm1 = () => {
    window.location.href = "/GameMode1";
};
const gotogm2 = () => {
    window.location.href = "/GameMode2";
};

function Home() {

    return (
        <div className="App">

            <Navbar  className="navbarFirst">
                <Container>
                    <Navbar.Brand >ROCK PAPER SCISSORS</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="GameModeBut">
                <ButtonGroup className="buttongrup"
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons">

                    <Button onClick={gotogm1} className="button1" style={{ fontWeight: 'bold' ,fontSize:'16px',color:"orange"}}>Game Mode 1</Button>
                    <Button onClick={gotogm2} className="button1" style={{ fontWeight: 'bold' ,fontSize:'16px',color:"orange"}}>Game Mode 2</Button>
                </ButtonGroup>
            </div>
            <div>

            </div>

        </div>

    );
}

export default Home;
