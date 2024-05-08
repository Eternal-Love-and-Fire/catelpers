import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      const newText = text.substring(0, charIndex + 1);
      setDisplayText(newText);
      setCharIndex(charIndex + 1);
    }, 50);

    return () => clearTimeout(typingTimer);
  }, [text, charIndex]);

  return <span>{displayText}</span>;
};

export default Typewriter;
