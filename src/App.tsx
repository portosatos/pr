import './index.css'
import Header from "./components/header/Header"
import Captcha from './components/captcha/Captcha'
// import { BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
console.log("dfzfdsf");

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='./' element= { }/>
    //   </Routes>
    // </BrowserRouter>
    <>
      <Header/> 
      <Captcha />
    </>
  )
}

export default App
