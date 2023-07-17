import React from 'react'
import { Link } from 'react-router-dom'
function SideBar() {
  return (
    <div className={`col-md-3 col-sm-12 mt-5`}>
            <span className='navbar-brand'><h3 className='text-center'>Financial Data</h3></span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex text-secondary">
              <li className='nav-item'>
                <Link className='nav-link'>
                  <span className='h4'>Purchases</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>
                  <span className='h4'>The_Sales</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>
                  <span className='h4'>Net_profit</span>
                </Link>
              </li>
            </ul>
            
          </div>
  )
}

export default SideBar