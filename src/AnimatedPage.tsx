/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedPage = ({ children }: any) => {
  const animation1 = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  return (
    <>
      {children}
      <motion.div
        className="slide-in"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default AnimatedPage;
