import React, { useEffect, useState } from 'react'
import Style from '../style/product.module.css'

function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products").then((response) => response.json()).then((data) => {
      setData(data.products)
      console.log(data)
    })
  }, [])
  return (
    <>
      <div className='text-center mt-5'><span className='h2 text-center'>Our Product</span></div>
      <div className='container-fluid'>
        <div className='row'>

          {data.map((data) => {
            return (
              <div className='col-lg-3 col-md-4 col-sm-6' key={data.id}>
                <div className={`card ${Style.cards}`}>
                  <img className={`card-img-top ${Style.myImage}`}src={`http://127.0.0.1:8000/storage/${data.image}`} alt="Card_cap" />
                  <div className="card-body">
                    <h5 className="card-title text-center">{data.name}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href="/#" className="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>

    </>
  )
}

export default Product