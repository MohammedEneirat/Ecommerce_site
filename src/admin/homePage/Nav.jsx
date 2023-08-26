import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../style/nav.module.css";
import { useAuth } from '../../contextAPI/Auth';
import axios from '../../api/axios';

function Nav() {

    const auth = useAuth()

    const out = async ()=>{
        try {
            await axios.post('/logout')
            auth.logout();
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light z-index-20  pb-0 pt-0  ${styles.Nav_divs__x2kCr}`}>
                <div className="container-fluid">
                    <span className="navbar-brand">
                        <img src="data:image/png;base64,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"
                            alt="" width="70" height="50" />

                    </span>
                    <span className="navbar-brand"><p className='h2'>AL_Baraka Bakery</p></span>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                            <li className="nav-item">
                                <Link className="nav-link active " aria-current="page" to="/"><span className='h5'>Home</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/product"><span className='h5'>Product</span></Link>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle  " href="http://localhost:3000/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className='h5'>Order</span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/order" >order</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" >Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li ><p className="dropdown-item" >Something else here</p></li>
                                </ul>
                            </li>

                            <li className="nav-item nav-link" onClick={out}>
                                    <span className=' h5'>logout</span>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav