
import React, {useEffect, useState} from "react";
import NavbarComponent from "../components/NavbarComponent";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function GameMode2() {
    const [userChoice,setUserChoice]= useState('rock')
    const [computerChoice, setComputerChoice]= useState('rock')
    const [userPoint, setUserPoint]= useState(-2)
    const [computerPoint, setComputerPoint]= useState(0)
    const [result,setResult]= useState('Seçim Yapınız !')
    const [gameOver, setGameOver]= useState(false)
    const gameMode = "gamemode2";
    const choices = ['rock','paper','scissors']
    const apiUrl = "http://localhost:3000/scores";
    const navigate = useNavigate();
    const handleScore = async () => {
        try {
            const userId = localStorage.getItem("user");
            await axios.post(`${apiUrl}`, { userId, userPoint, computerPoint, gameMode });
        } catch (error) {
            console.error("API hatası:", error);
        }
    };
    const handleOnClick = (choice) =>{
        setUserChoice(choice)
        generateComputerChoice()
    }
    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)

    }
    const reset = () => {
        window.location.reload()

    }

    useEffect(() => {
        const comboMoves = userChoice + computerChoice
        if (userPoint <= 9 && computerPoint <=9){
            if (comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors'){
                const updateUserPoints = userPoint + 2
                setUserPoint(updateUserPoints)
                if (updateUserPoints === 10){
                    setGameOver(true)
                    setResult('KAZANDIN !')
                    handleScore()
                }
            }
        }   if (comboMoves === 'rockscissors' || comboMoves ==='rockpaper' || comboMoves === 'paperrock' || comboMoves ==='paperscissors'|| comboMoves === 'scissorsrock' || comboMoves === 'scissorspaper' ){
            const updateComputerPoints = computerPoint + 1
            setComputerPoint(updateComputerPoints)
            if (updateComputerPoints === 10){
                setGameOver(true)
                setResult('BİLGİSAYAR KAZANDI !')
                handleScore()
            }

        }

    },[userChoice,computerChoice])
    useEffect(() => {
        const userId = localStorage.getItem("user");
        if (!userId) {
            navigate('/Login');
        }
    }, [navigate]);

    return (
        <div className="GameMode2">

            <NavbarComponent/>
            <div className='score'>
                <h1>User Points : {userPoint}</h1>
                <h1>Computer Points: {computerPoint}</h1>
            </div>
            <div className='choices'>
                <div className='choice-user'>
                    <h1 className="choice_1">USER</h1>
                    <img className='user-hand' src={`./image/${userChoice}.png`} alt=''></img>
                </div>
                <div className='choice-computer'>
                    <h1 className="choice_1">COMPUTER</h1>
                    <img className='computer-hand' src={`./image/${computerChoice}.png`} alt=''></img>
                </div>
            </div>
            <div className='button-div'>
                {choices.map((choice,index) =>
                    <button className='button' key={index} onClick={() => handleOnClick(choice)} disabled={gameOver}>
                        {choice}
                    </button>)}
            </div>
            <div className='result'>
                <h1>Final Result: {result}</h1>
            </div>
            <div className='button-div'>
                {gameOver &&
                    <button className='button_r' onClick={() => reset()}> Restart Game</button>

                }
            </div>

        </div>

    );
}

export default GameMode2;
