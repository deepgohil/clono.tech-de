import React, { useEffect, useState } from 'react';

const TypewriterAnimation = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const revealText = async () => {
      setIsVisible(false);
      await sleep(500);

      if (isMounted) {
        setVisibleText('');
        setIsVisible(true);
        await typeText(text);
      }
    };

    revealText();

    return () => {
      isMounted = false;
    };
  }, [text]);

  const typeText = async (text) => {
    for (let i = 0; i < text.length; i++) {
      await sleep(100);
      setVisibleText((prevText) => prevText + text.charAt(i));
    }
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <div className="relative overflow-hidden">
      <div className={`inline-block ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{visibleText}</div>
    </div>
  );
};

export default TypewriterAnimation;



