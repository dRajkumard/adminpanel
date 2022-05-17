import './User.css'
import Electric from '../../components/Assert/images/Electric.jpg'
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons'
import {Link} from "react-router-dom"
const User = () => {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className='userTitle'>Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
        </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img src= {Electric} alt="" className='userShowImg' />
                <div className="userShowTopTitle"> 
                  <span className="userShowUserName">Rajkumar</span>
                  <span className="userShowUserTitle">Electrician</span>
                  </div>
                  </div>
                  <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    </div>
                    <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">Rajkumar999</span>
                    </div>
                    
                    <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">10.2.2022</span>
                    </div>
                    
                    <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+91 9560040404</span>
                    </div>
                    
                    <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">Rajkumarfeather1@gmail.com</span>
                    </div>
                    
                    <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">11-848 Nagercoil</span>
                    </div>
                  </div>

              <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                   <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                      <label htmlFor="">UserName</label>
                      <input type="text" placeholder='rajkumar91' className="userUpdateInput" />
                      </div>
                      
                      
                    <div className="userUpdateItem">
                      <label htmlFor="">FullName</label>
                      <input type="text" placeholder='Rajkumar' className="userUpdateInput" />
                      </div>
                     
                      
                    <div className="userUpdateItem">
                      <label htmlFor="">Email</label>
                      <input type="email" placeholder='rajkumar.d408@gmail.com' className="userUpdateInput" />
                      </div>
                     
                      
                    <div className="userUpdateItem">
                      <label htmlFor="">Phone</label>
                      <input type="number" placeholder='+919657676763' className="userUpdateInput" />
                      </div>
                      
                    <div className="userUpdateItem">
                      <label htmlFor="">Address</label>
                      <input type="email" placeholder='11-97lfk ,Nagercoil' className="userUpdateInput" />
                      </div>
                      </div>
                     
                      <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                          <img className="userUpdateImg" src= {Electric} alt="" />
                     
                        <label htmlFor="file"><Publish/></label>
                        <input type="file" id='file' style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                        </div>
                      </form>
                </div>
             
              </div>
        </div>
  )
}

export default User