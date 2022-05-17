import React from 'react'
import {LineStyle,Timeline,TrendingUp,Person,MonetizationOnOutlined,ReportOffTwoTone,
MailOutlineTwoTone,FeedbackOutlined,MessageOutlined,ControlPoint,ReportProblemOutlined,WorkOutlineRounded,ArrowLeft,ArrowDropDownTwoTone} from '@material-ui/icons'
import './Sidebar.css'
import { Link } from 'react-router-dom'



function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <i class="bi bi-arrow-left-square-fill"></i>
                
                <ul className='mainsidebarList '>
                    <li className='mainsidebar'><a className="mainsidebarListItem">Dashboard < ArrowDropDownTwoTone/></a>
                    <ul className="sidebarList">
                    <Link to='/' className='link'>
                    <li className="sidebarListItem">
                        <LineStyle/>
                        Home
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline/>
                        <a>Analytics</a>
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp/>
                        Sales
                    </li>
                </ul>
                    </li>
                    <li className='mainsidebar'><a className="mainsidebarListItem">QuickMenu < ArrowDropDownTwoTone/></a>
                    <div className="sidebarMenu">
                <ul className="sidebarList">
                    <Link to="/users" className='link'>
                    <li className="sidebarListItem">
                        <Person className='sidebarIcon'/>
                        Users
                    </li>
                    </Link>
                    <Link to="/products" className='link'>
                    <li className="sidebarListItem">
                        <WorkOutlineRounded className='sidebarIcon'/>
                        Service Man
                    </li>
                    </Link>
                    <Link to="/transaction" className='link'>
                    <li className="sidebarListItem">
                        <MonetizationOnOutlined className='sidebarIcon'/>
                        Transctions
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <ReportOffTwoTone className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
            </li>
                    <li className='mainsidebar'><a className="mainsidebarListItem">Notification < ArrowDropDownTwoTone/></a> 
                    <div className="sidebarMenu">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutlineTwoTone className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <FeedbackOutlined className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <MessageOutlined className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div></li>
                    <li className='mainsidebar'><a className="mainsidebarListItem">Staffs < ArrowDropDownTwoTone/></a>
                    <div className="sidebarMenu">
                <h3 className="sidebarTitle"></h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <ControlPoint className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <ReportProblemOutlined className='sidebarIcon'/>
                         Reports
                    </li>
                </ul>
            </div>
                    </li>
                    
                    </ul>
                
            </div>
            
         
           
           
            
            
        </div>
    
    </div>
  )
}

export default Sidebar