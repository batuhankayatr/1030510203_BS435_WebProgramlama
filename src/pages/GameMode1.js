
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarComponent from "../components/NavbarComponent";

 function GameMode1() {
    const [userChoice, setUserChoice] = useState("rock");
    const [computerChoice, setComputerChoice] = useState("rock");
    const [userPoint, setUserPoint] = useState(0);
    const [computerPoint, setComputerPoint] = useState(0);
    const [turnResult, setTurnResult] = useState(null);
    const [result, setResult] = useState("Let's see who wins");
    const [gameOver, setGameOver] = useState(false);
    const choices = ["rock", "paper", "scissors"];
    const apiUrl = "http://localhost:3000/scores";
    const gameMode = "gamemode1";


    const handleLogin = async () => {
        try {
            const userId = localStorage.getItem("user");
            await axios.post(`${apiUrl}`, { userId, userPoint, computerPoint, gameMode });
        } catch (error) {
            console.error("API hatası:", error);
        }
    };

    const handleOnClick = (choice) => {
        setUserChoice(choice);
        generateComputerChoice();
    };

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    };

    const reset = () => {
        window.location.reload();
    };

     useEffect(() => {
         const comboMoves = userChoice + computerChoice
         if (userPoint <= 4 && computerPoint <=4){
             if (comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper'){
                 const updateUserPoints = userPoint + 1
                 setUserPoint(updateUserPoints)
                 setTurnResult('User Got The Point')
                 if (updateUserPoints === 5){
                     setGameOver(true)
                     setResult('user wins')
                     handleLogin()
                 }
             }
         }   if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper'){
             const updateComputerPoints = computerPoint + 1
             setComputerPoint(updateComputerPoints)
             setTurnResult('Computer Got The Point')
             if (updateComputerPoints === 5){
                 setGameOver(true)
                 setResult('Computer wins')
                 handleLogin()
             }
             if (comboMoves === 'paperpaper' || comboMoves === 'rockrock'||  comboMoves === 'scissorsscissors'){
                 setTurnResult('No one got a point')
             }
         }

     },[userChoice,computerChoice])


     return (
        <div className="GameMode1">

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
                <h1>Turn Result: {turnResult}</h1>
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

export default GameMode1;