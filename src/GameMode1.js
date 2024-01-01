
import {Image, Navbar} from "react-bootstrap";
import {Button, ButtonGroup, Container} from "@mui/material";
import React, {useEffect, useState} from "react";

function GameMode1() {
    const [userChoice,setUserChoice]= useState('rock')
    const [computerChoice, setComputerChoice]= useState('rock')
    const [userPoint, setUserPoint]= useState(0)
    const [computerPoint, setComputerPoint]= useState(0)
    const [turnResult, setTurnResult]= useState(null)
    const [result,setResult]= useState('Let\'s see who wins')
    const [gameOver, setGameOver]= useState(false)

    const choices = ['rock','paper','scissors']
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
        if (userPoint <= 4 && computerPoint <=4){
            if (comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper'){
                const updateUserPoints = userPoint + 1
                setUserPoint(updateUserPoints)
                setTurnResult('User Got The Point')
                if (updateUserPoints === 5){
                    setGameOver(true)
                    setResult('user wins')
                }
            }
        }   if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper'){
            const updateComputerPoints = computerPoint + 1
            setComputerPoint(updateComputerPoints)
            setTurnResult('Computer Got The Point')
            if (updateComputerPoints === 5){
                setGameOver(true)
                setResult('Computer wins')
            }
            if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors'){
                setTurnResult('No one got a point')
            }
        }

    },[userChoice,computerChoice])

    return (
        <div className="App">

            <Navbar  className="navbarFirst">
                <Container className="contaimer">
                    <Navbar.Brand  href="/Home">
                        <img
                            src="./image/icons8-home-40.png"
                            className="navbarhome"
                         />
                    </Navbar.Brand>

                    <Navbar.Brand >ROCK PAPER SCISSORS</Navbar.Brand>
                    <Navbar.Toggle />
                    {/*<NavbarComponent.Collapse className="justify-content-end">

                    </NavbarComponent.Collapse>*/}
                </Container>
            </Navbar>
            <div className='score'>
                <h1>User Points : {userPoint}</h1>
                <h1>Computer Points: {computerPoint}</h1>
            </div>
            <div className='choices'>
                <div className='choice-user'>
                    <img className='user-hand' src={`./image/${userChoice}.png`} alt=''></img>
                </div>
                <div className='choice-computer'>
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
