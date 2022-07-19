import { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Indicator from './Indicator'
import { motion } from 'framer-motion'

const paths = ['/', '/one']

const Layout = () => {
  const { pathname } = useLocation()

  const backgroundColor =
    {
      '/': '#ED2939',
      '/one': '#F79862',
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

  return (
    <motion.div
      className='flex h-screen w-screen flex-col items-center justify-center space-y-4'
      animate={{ backgroundColor }}
    >
      <main className='h-5/6 w-96 rounded-3xl bg-gray-900 p-4 text-white'>
        <Outlet />
      </main>
      <footer className='flex items-center justify-center'>{PathList}</footer>
    </motion.div>
  )
}

export default Layout
