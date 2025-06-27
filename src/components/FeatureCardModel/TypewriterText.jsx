import { useEffect, useState } from 'react';

const TypewriterText = ({ text, trigger }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!trigger) return;

    let index = 0;
    const type = () => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
        setTimeout(type, 30);
      }
    };
    type();
  }, [text, trigger]);

  return <p className="text-white-50 text-lg">{displayedText}</p>;
};

export default TypewriterText;
