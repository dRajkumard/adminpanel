import './NewUser.css'


const NewUser = () => {
  return (
    <div className='newUser'>
        <h1 className="newUsertitle">New User</h1>
        <form action="" className="newUserForm">
            <div className="newUserItem">
                <label htmlFor="">UserName</label>
                <input type="text" placeholder='John' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder='John Smith' />
                    </div>
                    <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='rajkumar@gmail.com' />
                    </div>
                    <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='password' />
                    </div>
                    <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="number" placeholder='+91 343l34l3' />
                    </div>
                    <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='Nagercoil|vadasery' />
                    </div>
                    <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <div className="newUserGender">
                    <input type="radio" name="gender" id='male' value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id='female' value="male" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id='other' value="male" />
                    <label htmlFor="other">Other</label>
                    </div>
                    </div>
                    <div className="newUserItem">
                        <label htmlFor="">Active</label>
                        <select name="active" id="active" className='newUserSelect'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            </select>
                        </div>
                        <button className="newUserButton">Create</button>

            </form>
        </div>
  )
}

export default NewUser