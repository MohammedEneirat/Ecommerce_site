import React from 'react'
import styles from "../style/nav.module.css";
import Nav from './Nav';
import SideBar from './SideBar';

function Home() {
  //width="400" height="400"

  return (
    <>
    <Nav/>
      <div className={`container-fluid pb-10 navbar-light bg-light ${styles.side}`}>
        <div className='row'>
          <SideBar/>
          <div className='col-md-9 col-sm-12 mt-1'>
            
            <div id="carouselExampleIndicators" className="carousel slide">

              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <img width="500" height="630" className="d-block w-100 " src="https://ithinkbigger.com/wp-content/uploads/2022/03/eCommerce-Website-Components-photo.jpg" alt='...' />
                </div>
                <div className="carousel-item">
                  <img width="500" height="630" className="d-block w-100 " src="https://csismtechnologies.com/wp-content/uploads/2019/08/ecommerceslider.jpg" alt="..." />
                </div>
                <div className="carousel-item">
                  <img width="500" height="630" className="d-block w-100" src="https://www.abitcorp.com/images/bg-banner-service-ecommerce2.jpg" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;