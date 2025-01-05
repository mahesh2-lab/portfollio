import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import './cursor.css';
import { useCursorContext } from './context/CursorContext.jsx';

function Cursor() {
  const { initialCursorVariant, animateCursorVariant, animateCursor } = useCursorContext();
  const cursorX = useMotionValue();
  const cursorY = useMotionValue();

  const variants = {
    cursorEnter: {
      border: '1px solid #eeff00',
      boxShadow: '0 0 1px 0px #eeff00 inset, 0 0 1px 0px #eeff00',
      scale: 2,
      borderRadius: '50%',
      backgroundColor: 'transparent',
      transition: {
        duration: 0.2,
      },
    },
    cursorLeave: {
      scale: 0,
      border: 0,
      backgroundColor: 'transparent',
      transition: {
        duration: 0.2,
      },
    },
    buttonHover: {
      scale: 1,
      backgroundColor: '#eeff00',
      borderRadius: '50%',
    },
  };

  useEffect(() => {
    const app = document.querySelector('#app');
    const mouseMoveHandler = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };
    const mouseEnterHandler = () => {
      animateCursor('cursorEnter');
    };
    const mouseLeaveHandler = () => {
      animateCursor('cursorLeave');
    };
    window.addEventListener('mousemove', mouseMoveHandler);
    app.addEventListener('mouseenter', mouseEnterHandler);
    app.addEventListener('mouseleave', mouseLeaveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      app.removeEventListener('mouseenter', mouseEnterHandler);
      app.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, [animateCursor, cursorX, cursorY]);

  return (
    <motion.div
      className="cursor"
      variants={variants}
      initial={initialCursorVariant}
      animate={animateCursorVariant}
      style={{
        translateX: cursorX,
        translateY: cursorY,
        transformOrigin: 'center',
      }}
    />
  );
}

export default Cursor;