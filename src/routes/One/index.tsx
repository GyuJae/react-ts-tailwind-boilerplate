import { useMemo } from 'react'
import { motion } from 'framer-motion'

const One = () => {
  const List = useMemo(
    () => (
      <motion.ul drag='x' dragConstraints={{ left: -1200, right: 0 }} className='flex space-x-4'>
        {Array(5)
          .fill(1)
          .map((value, index) => {
            const key = `firstList-${value + index}`
            return <div key={key} className='min-h-[200px] min-w-[300px] rounded-xl bg-white shadow-2xl' />
          })}
      </motion.ul>
    ),
    []
  )
  return (
    <div>
      <div className='flex w-full  overflow-hidden'>{List}</div>
    </div>
  )
}

export default One
