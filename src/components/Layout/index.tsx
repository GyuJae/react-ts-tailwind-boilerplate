import { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Indicator from './Indicator'

const paths = ['/', '/one']

const Layout = () => {
  const { pathname } = useLocation()

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
    <div className='flex h-screen w-screen flex-col items-center justify-center space-y-4 bg-red-500'>
      <main className='h-5/6 w-96 rounded-3xl bg-gray-900 p-4 text-white'>
        <Outlet />
      </main>
      <footer className='flex items-center justify-center'>{PathList}</footer>
    </div>
  )
}

export default Layout
