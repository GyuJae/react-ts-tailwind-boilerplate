import { useMemo } from 'react'
import { motion } from 'framer-motion'

const Carousel = () => {
  const List = useMemo(
    () => (
      <motion.ul drag='x' dragConstraints={{ left: -640, right: 0 }} className='flex space-x-4'>
        {Array(5)
          .fill(1)
          .map((value, index) => {
            const key = `carousel-list-${value + index}`
            return <li key={key} className='min-h-[180px] min-w-[180px] rounded-xl bg-white shadow-2xl' />
          })}
      </motion.ul>
    ),
    []
  )
  return <div className='flex w-full  overflow-hidden'>{List}</div>
}

export default Carousel
