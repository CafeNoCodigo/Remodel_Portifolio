import { useState, useEffect } from 'react';

const CursorTracker = ( { enlarge } ) => {
  const [ cursorX, setCursorX ] = useState( 0 );
  const [ cursorY, setCursorY ] = useState( 0 );

  useEffect(() => {
    const handleMouseMove = ( e ) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div id='cursor'
        style={{
          width: enlarge ? '60px' : '20px',
          height: enlarge ? '60px' : '20px',
          opacity: enlarge ? 0.2 : 1,
          left: cursorX + 'px',
          top: cursorY + 'px',
          position: 'fixed'
        }}>
    </div>
  )
}

export default CursorTracker