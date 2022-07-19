import { Variants, motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const container: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
}

const item: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
}

const Child = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleClick = () => setIsOpen((prev) => !prev)
  return (
    <button type='button' onClick={handleClick} className='w-full'>
      <div className='flex h-36 w-full flex-wrap gap-2 rounded-md bg-gray-800/70 p-4'>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className='mx-auto flex w-full flex-wrap gap-1 rounded-md'
              variants={container}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
              <motion.li variants={item} className='h-10 w-10 rounded-lg bg-white' />
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </button>
  )
}

export default Child
