import React, { useState } from 'react';
import Dashboard from './Dashboard';
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css';
import 'startbootstrap-sb-admin-2/js/sb-admin-2.min';
    function AdminLogin(){

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [allEntry, setAllEntry] = useState([]);
        const [isLogin, setLogin] = useState();

        const setLoginDetails = {email: "test@gmail.com", password: "1234"};

        const submitForm = (e)=>{
            e.preventDefault();
            const newEntry = {email: email, password: password};
            setAllEntry([...allEntry, newEntry]);
            console.log(allEntry);

            if((newEntry.email === setLoginDetails.email)  && (newEntry.password === setLoginDetails.password)){
                alert('You are loged in');
                setLogin (true);
                return(<Dashboard />);
            }else{
                alert('Please try again later');
                setLogin (false);
            }

            // fetch("http://localhost:8000/api/tasks/",
            //     {
            //         method: "POST",
            //         cache: "no-cache",
            //         headers:{
            //             "content_type": "application/json"
            //         },
            //         body: JSON.stringify()
            //     })
            //     .then(response=> response.json())

        }
    
        if(isLogin === true){
            return(<Dashboard />);
        }else {
            return(
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome To Dr Agrivet</h1>
                                            </div>
                                            <form className="user" onSubmit={submitForm}>
                                                <div className="form-group">
                                                    <input 
                                                        type="email" 
                                                        className="form-control form-control-user"
                                                        id="exampleInputEmail" 
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." 
                                                        value={email} 
                                                        onChange={
                                                            (e)=> setEmail(e.target.value)
                                                        }/>
                                                </div>
                                                <div className="form-group">
                                                    <input 
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="exampleInputPassword" 
                                                        placeholder="Password" 
                                                        value={password}
                                                        onChange={
                                                            (e)=> setPassword(e.target.value)
                                                        }
                                                        />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                                        <label className="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                
                                                <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                                                <hr/>
                                            </form>
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                            
                                                {
                                                    allEntry.map((currentEliment)=>{
                                                        return(
                                                            <div class="alert alert-primary p-2" role="alert">
                                                                <p className='mb-1'><label className='font-weight-bold'>Email: </label>{currentEliment.email} | <label className='font-weight-bold'>Password: </label>{currentEliment.password}</p>
                                                            </div>
                                                        );
                                                    })
                                                }
                                             
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
            );
        }
        
    };

export default AdminLogin;