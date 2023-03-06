import React from 'react';
import './App.css'
import {useState} from 'react';
import FlashcardList from '../components/flashcardList';


function App() {
  const [flashcards, setFlashcards] = useState(Sample_FlashCard);

  return(
      <div className='questions'>
        <div className='title'>
          <h1>Let's see how good you are at naming Planets.</h1>
        </div>
          <FlashcardList flashcards={flashcards} />
      </div>
  )
}

const Sample_FlashCard = [
  {
      id: 1, 
      question: 'Which is the smallest planet within our solar system?', 
      answer: 'Mercury',
  },
  {
      id: 2, 
      question: 'The moon called Titan orbits which planet?', 
      answer: 'Saturn',
  }, 
  {
    id: 3, 
    question: 'Which planet is larger, Neptune or Saturn?', 
    answer: 'Saturn',
  }, 
  {
    id: 4, 
    question: 'There have been more missions to this planet versus any other planet', 
    answer: 'Mars',
  }, 
  {
    id: 5, 
    question: 'What protects Earth from meteoroids and radiation from the sun?', 
    answer: `It's Atmosphere`,
  }, 
  {
    id: 6, 
    question: 'How many of our planets can be seen without a telescope?', 
    answer: '5—Mercury, Venus, Mars, Jupiter, and Saturn',
  }, 
  {
    id: 7, 
    question: 'Which planet is closest in size to Earth?', 
    answer: 'Venus',
  }, 
  {
    id: 8, 
    question: 'Which planet has the most moons?', 
    answer: 'Saturn',
  }, 
  {
    id: 9, 
    question: 'Which planets have no moons?', 
    answer: 'Mercury and Venus',
  },
  {
    id: 10, 
    question: 'Which is the oldest planet in our solar system?', 
    answer: 'Jupiter',
  }
]


export default App
