import { useState } from 'react'
import Home from './component/Home'
import Header from './component/Header'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './component/About'
import Login from './component/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
