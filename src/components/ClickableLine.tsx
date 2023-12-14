// ClickableLine.tsx
import React, { useState } from 'react';

interface ClickableLineProps {
  numberOfCircles: number;
}

const ClickableLine: React.FC<ClickableLineProps> = ({ numberOfCircles }) => {
  const [filledCircles, setFilledCircles] = useState<number[]>([]);

  const handleCircleClick = (index: number) => {
    // Fill the clicked circle and all the circles before it
    setFilledCircles((prevFilledCircles) => [...Array(index + 1).keys()]);
  };

  return (
    <div>
      {Array.from({ length: numberOfCircles }).map((_, index) => (
        <div
          key={index}
          className={`circle ${filledCircles.includes(index) ? 'filled' : ''}`}
          onClick={() => handleCircleClick(index)}
        />
      ))}
    </div>
  );
};

export default ClickableLine;
