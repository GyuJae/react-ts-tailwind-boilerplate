import { MouseEventHandler, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const animate = (index: number, isOpen: boolean) => {
  const opacity = isOpen
    ? {
        0: 0.25,
        1: 0.5,
        2: 1,
        3: 0.5,
        4: 0.25,
      }[index] || 1
    : 1

  const zIndex = isOpen
    ? {
        0: 1,
        1: 2,
        2: 3,
        3: 2,
        4: 1,
      }[index] || 1
    : 1

  const translateX = isOpen
    ? {
        0: '125%',
        1: '50%',
        2: '0%',
        3: '-50%',
        4: '-125%',
      }[index] || '0%'
    : '0%'

  const scale = isOpen
    ? {
        0: 0.6,
        1: 0.8,
        2: 1,
        3: 0.8,
        4: 0.6,
      }[index] || 1
    : 1

  const rotateY = isOpen
    ? {
        0: '45deg',
        1: '45deg',
        2: '0deg',
        3: '-45deg',
        4: '-45deg',
      }[index] || '0deg'
    : '0deg'

  return {
    opacity,
    zIndex,
    translateX,
    scale,
    rotateY,
  }
}

const Center = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClickButton: MouseEventHandler<HTMLButtonElement> = () => setIsOpen((prev) => !prev)

  const List = useMemo(
    () => (
      <ul className='flex w-full justify-center space-x-1'>
        {Array(5)
          .fill(1)
          .map((value, index) => {
            const key = `center-list-${value + index}`
            return (
              <motion.button
                type='button'
                key={key}
                layoutId={key}
                onClick={handleClickButton}
                className='min-h-[65px] min-w-[65px] rounded-xl bg-white shadow-2xl'
                animate={animate(index, isOpen)}
              />
            )
          })}
      </ul>
    ),
    [isOpen]
  )
  return <div className='flex w-full  overflow-hidden'>{List}</div>
}

export default Center
