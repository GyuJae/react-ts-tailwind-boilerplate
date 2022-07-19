import Layout from 'components/Layout'
import { Route, Routes } from 'react-router-dom'
import Zero from './Zero'
import One from './One'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Zero />} />
        <Route path='/one' element={<One />} />
      </Route>
    </Routes>
  )
}

export default App
