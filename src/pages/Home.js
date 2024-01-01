
import {Button, ButtonGroup} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useMediaQuery } from '@mui/material';
import {Card} from "@mui/material";
import { useState } from "react";
import NavbarComponent from "../components/NavbarComponent";




const gotogm1 = () => {
    if (localStorage.getItem('user')){
        window.location.href = "/GameMode1";
    }
    else {
    alert("Önce giriş yap")
    window.location.href = "/Login";}
};
const gotogm2 = () => {
    if (localStorage.getItem('user')){
        window.location.href = "/GameMode2";
    }
    else {
        alert("Önce giriş yap")
        window.location.href = "/Login";}
};

function Home() {
    const isSmallScreen = useMediaQuery('(max-width: 1600px)');
    const [showInputPart, setShow] = useState(false);
    const show_input_part = () => {
        setShow(true);
    };
    const close_input_part = () => {
        setShow(false);
    };
    return (
        <div className="Home">

           <NavbarComponent/>
            <div className="GameModeBut">
                <Button className="acikla" onClick={show_input_part} style={{ fontWeight: 'bold' ,fontSize:'16px',color:"black",backgroundColor:'red',marginLeft: isSmallScreen ? '5px' :"1500px",marginTop:"10px", width:'200px'}}>Oyun Nasıl Oynanır</Button>
                {showInputPart && (
                    <Card
                        className="card"
                        color="success"
                        orientation="horizontal"
                        size="lg"
                        variant="outlined"
                        sx={{paddingLeft:3}}
                    >
                        <div className="input_header1">
                            <CancelIcon className="close_btn1" onClick={close_input_part} style={{color:'red'}}/>
                            <h4  style={{fontSize:'30px' }}>Nasıl Oynanır ?</h4>
                            <h1 style={{fontSize:'25px',color:"red"}}>Game Mode 1:</h1>
                            <h1 style={{fontSize:'20px' }}> Oyun kullanıcı ile bilgisayar arasında oynanır. Kullanıcıya ve bilgisayara 3 farklı seeçim sunulur. Bu seçimler taş kağıt ve makastır. Taşın makasa, makasın kağıda ,kağıdın da taşa üstünlüğü vardır. kullanıcı ve bilgisayar aynı seçimi yaparsa iki tarafta puan alamaz. Seçiim yapan üstünlük sağlayan nesneyi seçerse 1 puan kazanır. 5 puana ilk ulaşan taraf kuzanır.</h1>
                            <h1 style={{fontSize:'25px',color:"red" }}>Game Mode 2:</h1>
                            <h1 style={{fontSize:'20px' }}> Oyun kullanıcıile bilgisayar arasında oynanır. kullanıcı ve bilgisayara 3 farklı seçim sunulur. Kullanıcının puan alabilmesi için bilgisayarla aynı seçimi yapması gerekir. Kullanıcı bilgisayarla aynı seçimi yaptığında kullanıcı puanı 2 puan artar. Eğer kullanıcı ve bilgisayar farklı seçimlerde bulunursa bilgisayar puanı 1 puan artar. 10 puana ilk ulaşan taraf kazanır.</h1>
                        </div>
                    </Card>
                )}
                <ButtonGroup
                    className="buttongrup"
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons">
                    <Button onClick={gotogm1} className="button1"style={{ fontWeight: 'bold' ,fontSize:'16px',color:"darkorange",marginRight: "50px"}} >Game Mode 1</Button>
                    <Button onClick={gotogm2} className="button1"style={{ fontWeight: 'bold' ,fontSize:'16px', color:"darkorange",marginRight: "50px"}}>Game Mode 2</Button>
                </ButtonGroup>


            </div>

        </div>

    );
}
export default Home;
