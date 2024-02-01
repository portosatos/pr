import {   Navigate, Route, Routes } from 'react-router-dom';
import './index.css'
import MainPage from './pages/main/MainPage';
import NotFound from './components/notFound/NotFound';
import Shop from './pages/shop/Shop';
// import Captcha from './components/captcha/Captcha'


function App() {
console.log("dfzfdsf");

  return (

    <>
      {/* <Captcha />
       */}
       <Routes>
         <Route path='/' element= {<MainPage/>}/>
         <Route path='/Shop' element= {<Shop/>}/>  
         <Route path='/404' element={<NotFound/>} />
         <Route path='*' element={<Navigate to='/404'/>} />
       </Routes>
    </>
  )
}

export default App
