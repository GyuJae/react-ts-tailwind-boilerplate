import { useMemo, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Indicator from './Indicator'
import { motion } from 'framer-motion'
import Cog from './Cog'

const paths = ['/', '/one', '/two']

const Layout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [pathIndex, setPathIndex] = useState<number>(paths.findIndex((item) => item === pathname) || 0)

  const backgroundColor =
    {
      '/': '#ED2939',
      '/one': '#FD6A02',
      '/two': '#FFCC00',
    }[pathname] || '#ffffff'

  const PathList = useMemo(
    () => (
      <nav>
        <ul className='flex space-x-2'>
          {paths.map((path) => (
            <Indicator key={`nav-link-${path}`} path={path} isCurrent={pathname === path} />
          ))}
        </ul>
      </nav>
    ),
    [pathname]
  )

  const handleClickPrevPage = () => {
    const changeIndex = pathIndex === 0 ? paths.length - 1 : pathIndex - 1
    navigate(paths[changeIndex])
    setPathIndex(changeIndex)
  }

  const handleClickNextPage = () => {
    const changeIndex = pathIndex === paths.length - 1 ? 0 : pathIndex + 1
    navigate(paths[changeIndex])
    setPathIndex(changeIndex)
  }

  return (
    <motion.div
      className='relative flex h-screen w-screen flex-col items-center justify-center space-y-4 overflow-hidden'
      animate={{ backgroundColor }}
    >
      <Cog />
      <main className='flex h-5/6 items-center space-x-6 '>
        <button type='button' onClick={handleClickPrevPage}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
          </svg>
        </button>
        <div className='h-full w-96 rounded-3xl bg-gray-900 p-4 text-white'>
          <Outlet />
        </div>
        <button type='button' onClick={handleClickNextPage}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </main>
      <footer className='flex items-center justify-center'>{PathList}</footer>
    </motion.div>
  )
}

export default Layout
