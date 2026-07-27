import React from 'react';
import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#030303] pointer-events-none">
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
      
      {/* Moving orbs without CSS blur for Safari compatibility */}
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
        className="absolute top-[-10%] left-[-10%] w-[80vh] h-[80vh] rounded-full z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(144,0,36,0.15) 0%, rgba(144,0,36,0) 60%)' }}
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
        className="absolute bottom-[-10%] right-[-10%] w-[90vh] h-[90vh] rounded-full z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(49,46,129,0.15) 0%, rgba(49,46,129,0) 60%)' }}
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
        className="absolute top-[20%] right-[10%] w-[70vh] h-[70vh] rounded-full z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(88,28,135,0.1) 0%, rgba(88,28,135,0) 60%)' }}
      />
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_#030303_100%)] opacity-80" />
    </div>
  );
}
