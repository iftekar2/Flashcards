import React from 'react';
import Flashcard from './flashcard';

function FlashcardList({ flashcards }){
    return (
        <div className='cardGrid'>
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}

export default FlashcardList