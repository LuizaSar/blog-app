import React from 'react'
import Header from '../Header'
import Home from '../Pages/Home/index'
import '../../index'
import Content from '../Pages/Content/index'
import Write from '../Pages/Write/index'

function App () {
   return (
      <div className='container'>
         <Header/>
         <Home/> 
         {/*<Content/>*/}
         {/*<Write/>*/}
      </div>
   )
}

export default App 
