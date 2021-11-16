import React from 'react'
import './styles.css'

function PostContent() {
   return (
      <div className='post-content'>
         <div className="post-content__img">
            <img src="https://images.unsplash.com/photo-1635669390010-3adc3ea258c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80" alt="" />
         </div>
         <div className="post-content__title">
            YouTube’s approach to copyright
            <div className='post-content__edit'>
            <i class="far fa-edit"></i>
            <i class="far fa-trash-alt"></i>
            </div>
            </div>
            <div className="post-content__info">
               <div className="post-content__author">Author: <span> Melissa </span> </div>   
               <div className="post-content__date">Published: <span>1 day ago</span> </div>
            </div>
            <div className="post-content__text">
           <p> EU member states are in the process of implementing the European Copyright Directive into national law. These changes include the incorporation of Article 15, which introduced a new copyright for press publishers, and Article 17, which introduced new rules for certain content-sharing services like YouTube. Here’s a little more on what YouTube in particular is doing. 
            Developing our compliance plans</p> 
            <p>YouTube supports updating copyright rules for the digital age and has been working closely with policymakers across Europe on Article 17’s implementation and on a means of compliance that best meets the needs of our partners’ growing businesses, while also continuing to contribute to the economy. For example, YouTube’s creative ecosystem contributed approximately €775 million to Germany’s GDP in 2019, supporting the equivalent of 25,000 full time equivalent jobs, according to Oxford Economics. As we develop our compliance plans, it’s important to us that the fundamental rights of rightsholders, including media companies, creators, artists and users, are protected. At the same time, supporting the creative industries such as the YouTube creators who are building next generation media companies that impact the economy's overall success, is a priority to us.
            Implementing Content ID for better creative control</p>
            <p>YouTube has long believed that effective rightsholder management is key to a healthy business and flourishing creativity. This is why we created a set of copyright management tools, for example, investing over 100 million U.S. dollars to develop our Content ID technology which allows rightsholders 
               to manage their content across the platform in a highly nuanced and sophisticated way.</p> 
            </div>

      </div>
   )
}

export default PostContent
