import React from 'react';
import Posts from '../../Posts';
import Hero from '../../Hero/index'
import Sidebar from '../../Sidebar';
import './styles.css'

function Home() {
   return (
      <div>
         <Hero/>
         <div className='home'>
         <Posts/>
         <Sidebar/>
         </div>
      </div>
   )
}

export default Home
