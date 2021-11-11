import React from 'react'
import './styles.css'

function Post () {
   return (
      <div className='post'>
         <div className="post__img">
            <img src="https://images.unsplash.com/photo-1635669390010-3adc3ea258c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80" alt="" />
         </div>
         <div className="post__categories">
            <span>Digital</span>
            <span>AI</span>
            <span>Career</span>
         </div>
         <div className="post__content">
            <div className="post__title">YouTube’s approach to copyright</div>
            <div className="post__date">1 hour ago</div>
            <div className="post__text">YouTube supports updating copyright rules for the digital age 
            and has been working closely with policymakers across Europe on Article 17’s implementation 
             while also continuing to contribute to the economy. For example, YouTube’s creative ecosystem 
             contributed approximately €775 million to Germany’s GDP in 2019, supporting the equivalent 
             of 25,000 full time equivalent jobs, according to Oxford Economics...</div>
         </div>
      </div>
   )
}

export default Post
