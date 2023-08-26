import React, { useState } from 'react'
import { useAuth } from '../contextAPI/Auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();


    const handleLogin = async (event) => {
        event.preventDefault();
        auth.login(email,password)
    }
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" >
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>
                                <form onSubmit={handleLogin}>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />

                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />

                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                </form>
                                <div className="form-check d-flex justify-content-start mb-4">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                    <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login