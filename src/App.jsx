import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './css/color.css'
import Header from './component/Header.jsx'
import Search from './component/Search.jsx'

function App() {


  return (
    <>
      <Header></Header>
      <Search></Search>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
