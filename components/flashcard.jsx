import React from 'react';
import './style.css';
import {useState} from 'react';

function App ({ flashcard }){
    const [flip, setFlip] = useState(false)
    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className='cardFront'>
                {flashcard.question}
            </div>
           
           <div className='cardBack'>
                {flashcard.answer}
           </div>
        </div>
    )
}

export default App