import React from 'react'
import { motion } from 'framer-motion'

function BackgroundCircles() {
  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        animate={{
            scale:[1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
            duration: 2.5,
        }}
        className="relative top-[90px] flex justify-center items-center">
        
        <div className="absolute border border-[#ffffff] rounded-full h-[190px] w-[190px] mt-52 pt-20 animate-ping" />
        <div className="rounded-full border border-[#333333] h-[350px] w-[350px] absolute mt-52" />
        <div className="rounded-full border border-[#333333] h-[360px] w-[360px] absolute mt-52" />
        <div className="rounded-full border border-[#ffffff] opacity-20 h-[380px] w-[380px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
}


export default BackgroundCircles