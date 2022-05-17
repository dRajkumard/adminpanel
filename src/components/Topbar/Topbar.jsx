import React from 'react'
import './Topbar.css'
import {Notifications,Settings} from "@material-ui/icons";
import Topadmin from '../Assert/images/Topadmin.png'
  

const Topbar = () => {
  return (
    <div className='topbar'>
    <div className="topbarWrapper">
      <div className="topLeft">
        <span className="logo">NL</span>
        <span className="label">NeedLabour </span> <h6 className='adminLabel'>Admin panel</h6>
      </div>
      <div className="topRight">
        <label htmlFor="">Search</label>
        <input type="text" className="searchInput" placeholder='search here'/>
         
      
        
          <div className="topbarIconContainer">
            <Notifications/>
             <span className="topIconBadge">2</span>
          </div>
          
          <div className="topbarIconContainer">
            <Settings/>
             <span className="topIconBadge">2</span>
          </div>
            <img src={Topadmin} alt="" className="topavatar" />
        </div>
    
        </div>
        
    </div>
  )
}

export default Topbar