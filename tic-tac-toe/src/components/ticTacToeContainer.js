import { useState } from "react";
import PropTypes from 'prop-types';
import TicTacToeLayout from "./ticTacToeLayouts";

function TicTacToeContainer() {
    const initialButtonText = Array(9).fill("");
    const [buttonText, setButtonText] = useState(initialButtonText);
    const [xRound, setXround] = useState(true);
    const [winner, setWinner] = useState(null);

    const whoIsWinner = (newText) => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (
                newText[a] &&
                newText[a] === newText[b] &&
                newText[a] === newText[c]
            ) {
                setWinner(`Победил ${newText[a]}`);
                return;
            }
        }

        if (!newText.includes("") && winner === null) {
            setWinner("Ничья");
        }
    };

    const onClickCell = (index) => {
        if (buttonText[index] === "" && winner === null) {
            const newText = [...buttonText];
            newText[index] = xRound ? "X" : "O";
            setXround(!xRound);
            setButtonText(newText);
            whoIsWinner(newText);
        }
    };

    return (
        <TicTacToeLayout
            buttonText={buttonText}
            xRound={xRound}
            winner={winner}
            onClickCell={onClickCell}
            onNewGame={() => {
                setButtonText(initialButtonText);
                setXround(true);
                setWinner(null);
            }}
        />
    );
}

TicTacToeLayout.propTypes = {
    buttonText: PropTypes.arrayOf(PropTypes.string).isRequired,
    xRound: PropTypes.bool.isRequired,
    winner: PropTypes.string,
    onClickCell: PropTypes.func.isRequired,
    onNewGame: PropTypes.func.isRequired,
};

export default TicTacToeContainer;
