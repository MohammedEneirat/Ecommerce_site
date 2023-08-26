import React from 'react'
import Style from '../style/addProduct.module.css';

function AddProduct() {
  return (
    <>
      <div className='container-fluid pt-5 '>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className={`col-md-8 pt-3 pb-3 ${Style.form}`}>
            <div>
              <form>
                <div className="mb-4">
                  <label htmlFor="e1" className="form-label">Product Name</label>
                  <input type="text" className="form-control" id="e1" placeholder='add name of product' />
                </div>
                <div className="mb-4">
                  <label htmlFor="e2" className="form-label">Price</label>
                  <input type="text" className="form-control" id="e2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="e3" className="form-label">Image</label>
                  <input type="file" className="form-control" id="e3" />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="e4">Description </label>
                  <textarea className="form-control" id="e4" rows="3"></textarea>
                </div>
                <div className='text-center'><button type="submit" className="btn btn-primary w-50">Add</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct