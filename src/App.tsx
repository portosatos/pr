import './index.css'
import Header from "./components/header/Header"
import Practice from './components/practice/Practice'
// import { BrowserRouter, Route, Routes} from "react-router-dom"


function App() {

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='./' element= { }/>
    //   </Routes>
    // </BrowserRouter>
    <>
      <Practice/>
      <Header/> 
    </>
  )
}

export default App
