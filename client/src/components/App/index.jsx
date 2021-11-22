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
import MyPosts from '../Pages/MyPosts'
import Contact from '../Pages/Contact'

function App () {
   
const user = useSelector(state => state.authorization.user)

console.log(user)
   return (
      <div className='container'>
         <Header/>
         <Routes>
         <Route exact path='/' element={<Home/>} />
         <Route exact path='/register' element={user?.username ? <Home/> : <Register/> } />
         <Route exact path='/login' element={user?.username ? <Home/> : <Login/> }/>
         <Route exact path='/write' element={user?.username ? <Write/> : <Register/> } />
         <Route exact path='/myposts' element={user?.username ? <MyPosts/> : <Register/> } />
         <Route exact path='/settings' element={user?.username ? <Settings/> : <Register/> } />
         <Route exact path='/post/:id' element={<Content/>} />
         <Route exact path='/contact' element={<Contact/>} />
         </Routes>
      </div>
   )
}

export default App 
