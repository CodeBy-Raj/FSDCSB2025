import { useState } from 'react'
import './App.css'
import ImageManipulation from './component/ImageManipulation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'
import MainLayout from './pages/MainLayout'

//how to pass data from child to parent component

function App({regData}) {
  const [data, setData] = useState({});

  const setDataFromChild = (childData) => {
    setData(childData);
    console.log(childData);
  }

  return (
    <>
     {/* <ImageManipulation/> */}

     <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration regData={regData} setRegData={setDataFromChild}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
     </BrowserRouter>

     <h2>
    {
      JSON.stringify(data)
    }
     </h2>
    </>
  )
}

export default App
