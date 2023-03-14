import React from 'react'
import cardPairs from './cardParts.json'
import {useState} from 'react'
import './flashcard.css'


function Flashcard (){
    const [isFlipped, setFlipped] = useState(false);
    const [currentCard, setCurrectCard] = useState(0);
    const [guess, setGuess] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState(cardPairs.parts[currentCard].answer);
    const [currectStreak, setcurrectStreak] = useState(0);
    const [numCard, setNumCard] = useState(cardPairs.parts.length);

    const checkAnswer = () =>{
        if(correctAnswer.toLowerCase() === guess.toLowerCase()){
            setcurrectStreak(currectStreak + 1);
            setGuess('');
            if(currentCard == numCard - 1){
                setCurrectCard(currentCard - 1);
                setCorrectAnswer(cardPairs.parts[currentCard - 1].answer);
            }else{
                setCurrectCard(currentCard + 1);
                setCorrectAnswer(cardPairs.parts[currentCard + 1].answer);
            }
            
            console.log(correctAnswer)
        }else{
            setcurrectStreak(streek => 0);
        }
    }


    const flipCard = () =>{
        setFlipped(!isFlipped);
    }

    const nextCard = () =>{
        if(currentCard < numCard - 1){
            setCurrectCard(currentCard + 1);
            setCorrectAnswer(cardPairs.parts[currentCard + 1].answer);
            console.log(cardPairs.parts[currentCard + 1].answer);
            setGuess('');
        }
    }

    const previousCard = () =>{
        if(currentCard > 0){
            setCurrectCard(currentCard - 1);
            setCorrectAnswer(cardPairs.parts[currentCard - 1].answer);
            console.log(cardPairs.parts[currentCard - 1].answer);
            setGuess('');
        }
    }
    
    // const shuffle = () => {
    //     const newIndex = Math.floor(Math.random() * 10);
    //     setCurrectCard(currentCard => (currentCard + newIndex) % numCard - 1);
    //     setCorrectAnswer(correctAnswer => correctAnswer = cardPairs.parts[newIndex].answer);
    //     setGuess('');
    // }

    return (
        <div>
            <p className='numberOfCard'>Number of Card: {numCard}</p>
            <p>Streek: {currectStreak}</p>
            <div onClick={flipCard} className='card'>
                <div className='flashCard'>
                    <h2>{isFlipped ? cardPairs.parts[currentCard].answer : cardPairs.parts[currentCard].question}</h2>
                </div>
            </div>

            <div className='userAnswer'>
                <input className='userInput' placeholder='Enter Your Answer... ' value={guess} onChange={(e) => setGuess(e.target.value)}></input>
                <button className='submit' onClick={checkAnswer}>Submit</button>
            </div>

            <div className='button'>
                <button className="previous" onClick={previousCard}>Previous</button>
                <button className="next" onClick={nextCard}>Next</button>
                {/* <button onClick = {shuffle}>Shuffle</button> */}
            </div>
        </div>
    )
}

export default Flashcard
