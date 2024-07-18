import React from 'react'
import './style.css' 

export default function () {
  return (
  <div className="container">
      <div className="content_block">
        <div className="profile">
          <div className="profile_img">
            <img src="/public/image-victor.jpg" alt="" />
          </div>
          <div className="profile_info">
            <h3>Victor Crest <span>26</span></h3>
            <p>London</p>
          </div>
        </div>

        <div className='stats_container'>
        
        <hr />
          
        <div className="stats">
          <div className="stat_count">
            <h3>80K</h3>
            <p>Followers</p>
          </div>
          
          <div className="stat_count">
            <h3>803K</h3>
            <p>Likes</p>
          </div>
          
          <div className="stat_count">
            <h3>1.4K</h3>
            <p>Photos</p>
          </div>
        </div>
  
        </div>
      </div>
  </div>
  )
}

