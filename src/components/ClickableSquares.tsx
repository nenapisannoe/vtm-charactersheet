import React, { useState } from 'react';

interface ClickableLineProps {
  numberOfSquares: number;
}

const ClickableSquares: React.FC<ClickableLineProps> = ({ numberOfSquares }) => {
  const [filledSquares, setFilledSquares] = useState<number[]>([]);

  const handleSquareClick = (index: number) => {
    // Fill the clicked square and all the squares before it
    setFilledSquares((prevFilledSquares) => [...Array(index + 1).keys()]);
  };

  return (
    <div>
      {Array.from({ length: numberOfSquares }).map((_, index) => (
        <div
          key={index}
          className={`square ${filledSquares.includes(index) ? 'filled' : ''}`}
          onClick={() => handleSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default ClickableSquares;