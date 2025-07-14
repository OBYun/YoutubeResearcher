import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './css/color.css'
import FakeResult from './pages/FakeResult.jsx'
import Header from './component/Header.jsx'
import Search from './component/Search.jsx'
import Result from './pages/Result.jsx'

function App() {


  return (
    <>
      <Header></Header>
      <Search></Search>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<FakeResult></FakeResult>} />
          <Route path = "/result" element = {<Result></Result>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
