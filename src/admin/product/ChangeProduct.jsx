import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Style from "../style/changeData.module.css";

function ChangeProduct() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("  http://localhost:4000/products").then((response) => response.json()).then((data) => setData(data))

  }, [])
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-2 col-md-0'></div>
          <div className='col-md-12 col-lg-8'>
            <div className="card card-cascade narrower mt-5">
              <div className={`view view-cascade gradient-card-header narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center text-light ${Style.images}`}>
                <div>
                  <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
                    <i className="fas fa-th-large mt-0 text-light"></i>
                  </button>
                  <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
                    <i className="fas fa-columns mt-0 text-light"></i>
                  </button>
                </div>
                <span className="white-text mx-3 h3">Product</span>
                <div>
                  <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
                    <i className="fas fa-pencil-alt mt-0 text-light"></i>
                  </button>
                  <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
                    <i className="far fa-trash-alt mt-0 text-light"></i>
                  </button>
                  <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
                    <i className="fas fa-info-circle mt-0 text-light"></i>
                  </button>
                </div>
              </div>
              <div className="px-4 text-center">
                <div className="table-wrapper">
                  <table className="table table-hover mb-0">
                    <thead>
                      <tr>
                        <th>
                          <input className="form-check-input" type="checkbox" id="checkbox1" />
                          <label className="form-check-label label-table" htmlFor="checkbox1"></label>
                        </th>
                        <th >
                          <span href='/#'>ID</span>
                        </th>
                        <th className="th-lg">
                          <span href='/#'>Product Name</span>
                        </th>
                        <th className="th-lg">
                          <span href='/#'>More Details</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.map((e) => {
          return (
            <tr key={e.id}>
              <th scope="row">
                <input className="form-check-input" type="checkbox" id="checkbox4" />
                <label className="form-check-label label-table" htmlFor="checkbox4"></label>
              </th>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td><button className='btn btn-success'> More Details </button></td>
            </tr>
          )
        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChangeProduct