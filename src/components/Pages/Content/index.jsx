import React from 'react'
import './styles.css'
import Sidebar from '../../Sidebar/index'
import PostContent from '../../PostContent/index'

function Content() {
   return (
      <div className='content'>
         <PostContent/>
         <Sidebar/>
      </div>
   )
}

export default Content
