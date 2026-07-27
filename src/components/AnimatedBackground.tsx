import React from 'react';
import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
      
      {/* Moving blurred orbs */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[60vh] h-[60vh] rounded-full bg-burgundy/10 blur-[120px] z-0 pointer-events-none"
        style={{ transform: 'translateZ(0)' }}
      />
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vh] h-[70vh] rounded-full bg-indigo-900/10 blur-[140px] z-0 pointer-events-none"
        style={{ transform: 'translateZ(0)' }}
      />
      <motion.div
        animate={{
          x: [0, 30, -50, 0],
          y: [0, 40, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] right-[10%] w-[50vh] h-[50vh] rounded-full bg-purple-900/5 blur-[100px] z-0 pointer-events-none"
        style={{ transform: 'translateZ(0)' }}
      />
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-100" />
    </div>
  );
}
