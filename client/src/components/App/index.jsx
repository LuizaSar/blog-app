import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header'
import Home from '../Pages/Home/index'
import '../../index'
import Content from '../Pages/Content/index'
import Write from '../Pages/Write/index'
import Settings from '../Pages/Settings'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import { Route, Routes } from 'react-router-dom';

function App () {
   
const user = useSelector(state => state.authorization.username)

console.log(user)
   return (
      <div className='container'>
         <Header/>
         <Routes>
         <Route exact path='/' element={<Home/>} />
         <Route exact path='/register' element={user ? <Home/> : <Register/> } />
         <Route exact path='/login' element={user ? <Home/> : <Login/> }/>
         <Route exact path='/write' element={user ? <Write/> : <Register/> } />
         <Route exact path='/settings' element={user ? <Settings/> : <Register/> } />
         <Route exact path='/post/:id' element={<Content/>} />
         </Routes>
      </div>
   )
}

export default App 
