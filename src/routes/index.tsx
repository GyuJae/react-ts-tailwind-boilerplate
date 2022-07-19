import Layout from 'components/Layout'
import { Route, Routes } from 'react-router-dom'
import Zero from './Zero'
import One from './One'
import Two from './Two'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Zero />} />
        <Route path='/one' element={<One />} />
        <Route path='/two' element={<Two />} />
      </Route>
    </Routes>
  )
}

export default App
