import React from 'react';
import { motion } from 'framer-motion';

const TournamentCardSkeleton = () => {
  return (
    <motion.div
      className="min-w-[24rem] rounded-lg shadow bg-dark/80 flex flex-col justify-between"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-full h-[200px] bg-gray-300 rounded-t-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      ></motion.div>
      <div className="p-4 flex flex-col gap-3">
        <motion.div
          className="h-5 bg-gray-300 w-2/3 rounded-md"
          initial={{ width: '50%' }}
          animate={{ width: '100%' }}
        ></motion.div>
        <motion.div
          className="h-4 bg-gray-300 w-1/2 rounded-md"
          initial={{ width: '40%' }}
          animate={{ width: '80%' }}
        ></motion.div>
        <motion.div
          className="h-4 bg-gray-300 w-3/4 rounded-md"
          initial={{ width: '60%' }}
          animate={{ width: '90%' }}
        ></motion.div>
        <motion.div
          className="h-4 bg-gray-300 w-3/5 rounded-md"
          initial={{ width: '50%' }}
          animate={{ width: '70%' }}
        ></motion.div>
        <motion.div
          className="h-4 bg-gray-300 w-4/5 rounded-md"
          initial={{ width: '40%' }}
          animate={{ width: '60%' }}
        ></motion.div>
        <motion.div
          className="h-4 bg-gray-300 w-2/3 rounded-md"
          initial={{ width: '30%' }}
          animate={{ width: '50%' }}
        ></motion.div>
        <motion.div className="flex flex-col gap-1">
          <motion.div
            className="h-10 bg-gray-300 rounded-md"
            initial={{ width: '60%' }}
            animate={{ width: '100%' }}
          ></motion.div>
          <motion.div
            className="h-10 bg-gray-300 rounded-md"
            initial={{ width: '70%' }}
            animate={{ width: '90%' }}
          ></motion.div>
          <motion.div
            className="h-10 bg-gray-300 rounded-md"
            initial={{ width: '50%' }}
            animate={{ width: '80%' }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TournamentCardSkeleton;
