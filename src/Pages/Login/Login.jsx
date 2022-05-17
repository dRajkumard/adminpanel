import './Login.css'
const Login = () => {
    return(
        <div className=" mw-100 bg-light text-center d-flex justify-content-center">
            <div className=' col-md-4 '>
                <h2 className='loginLogo mt-5 mb-4'>Need Labour </h2>
                
                <div className="container loginControl rounded-top rounded-bottom">
                <form action="" className='container'>
                   
                    <div className="form-group row">
                        <h5 className='mt-5 insideLine'>Login to NeedLabour</h5></div><br/>
                        <div className="row mb-3">
                            <input type="text" placeholder='Email address or phone number' className="input-xxlarge border-light p-3 inputLogin" />
                        </div>
                        <div className="row mb-3">
                             <input type="password" placeholder='Password' className="border-light p-3 inputLogin" />
                        </div>
                        <div className="row">
                            <button type="button" class="p-2 form-ml-3 btn btn-primary">Login</button>
                            </div> <br />
                            <div className="forgot mb-5">
                                <h6 class="text-primary ">Forgotten Account?</h6>
                                </div><br />
                                
                    </form>
                    </div>
                </div>
            </div>
    )
}
export default Login