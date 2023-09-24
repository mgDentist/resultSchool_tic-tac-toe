import { useState } from 'react';
import './App.css';

function App() {
  const initialButtonText = Array(9).fill('');
  const [buttonText, setButtonText] = useState(initialButtonText);
  const [xRound, setXround] = useState(true);
  const [winner, setWinner] = useState(null);

  const whoIsWinner = (newText) => {
    // eslint-disable-next-line array-callback-return
    newText.map((text, index) => {
      if (buttonText[0] === buttonText[1] && buttonText[0] === buttonText[2] && buttonText[0] !== '') {
        setWinner(`Победил ${buttonText[0]}`);
      }
      if (buttonText[3] === buttonText[4] && buttonText[3] === buttonText[5] && buttonText[3] !== '') {
        setWinner(`Победил ${buttonText[3]}`);
      }
      if (buttonText[6] === buttonText[7] && buttonText[6] === buttonText[8] && buttonText[6] !== '') {
        setWinner(`Победил ${buttonText[0]}`);
      }
      if (buttonText[0] === buttonText[3] && buttonText[0] === buttonText[6] && buttonText[0] !== '') {
        setWinner(`Победил ${buttonText[0]}`);
      }
      if (buttonText[1] === buttonText[4] && buttonText[1] === buttonText[7] && buttonText[1] !== '') {
        setWinner(`Победил ${buttonText[1]}`);
      }
      if (buttonText[2] === buttonText[5] && buttonText[2] === buttonText[8] && buttonText[2] !== '') {
        setWinner(`Победил ${buttonText[2]}`);
      }
      if (buttonText[0] === buttonText[4] && buttonText[0] === buttonText[8] && buttonText[0] !== '') {
        setWinner(`Победил ${buttonText[0]}`);
      }
      if (buttonText[0] === buttonText[4] && buttonText[0] === buttonText[8] && buttonText[0] !== '') {
        setWinner(`Победил ${buttonText[0]}`);
      }
      if (buttonText[2] === buttonText[4] && buttonText[2] === buttonText[6] && buttonText[2] !== '') {
        setWinner(`Победил ${buttonText[2]}`);
      }
      if (!newText.includes('') && winner === null) {
        setWinner('Ничья');
      }
    })
  }

  const onClickCell = (index) => {
    if (buttonText[index] === '' && winner === null) {
      const newText = [...buttonText]
      newText[index] = xRound ? 'X' : 'O';
      setXround(!xRound);
      setButtonText(newText);
      whoIsWinner(newText);
      
    }
  }

  const renderButtons = () => {
    return buttonText.map((text, index) => (
      <button className='button-cell' key={index} onClick={() => {
        onClickCell(index)
      }}>{text}</button>
    ))
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={() => {
          setButtonText(initialButtonText);
          setXround(true);
        }}
        >
        Новая игра
        </button>
        <p className='cells-module'>
          {renderButtons()}
        </p>
        <p>
          {winner ? `${winner}` : `Сейчас ходит: ${xRound ? 'X' : 'O'}`}
        </p>
      </header>
    </div>
  );
}

export default App;
