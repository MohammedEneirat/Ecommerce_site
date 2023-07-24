import React, { useState } from 'react'
import AddProduct from './AddProduct';
import ChangeProduct from './ChangeProduct';

function ControlPanel() {
    let [btnSelect, setBtn] = useState("Update");
    let [isActive, setActive] = useState(false)

    const MyComponent = () => {
        if (btnSelect === "Add") {
            return <AddProduct />
        }
        else if (btnSelect === "Update") {
            return <ChangeProduct />
        }
    }

    const Data = (e) => {
        setBtn(e.target.value)
        setActive(current => !current)
    }
    return (
        <>
            <div className='text-center mt-4'>
                <span className='text-center h2'>Product Control Panel</span>
            </div>
            <div className='container'><div className='mt-4'>
                <div className="btn-group btn-success">
                    <button className={`btn btn-success`} style={{
                        backgroundColor: isActive ? 'rgb(27, 89, 3)' : '',
                        color: isActive ? 'white' : '',
                    }} value="Add" aria-current="page" onClick={Data}>Add New Product</button>
                    <button className={`btn btn-success`} style={{
                        backgroundColor: isActive ? '' : "rgb(27, 89, 3)",
                    }} value="Update" onClick={Data}> Updata OR Delete </button>
                </div>
            </div></div>
            <div>
                {MyComponent()}
            </div>
        </>
    )
}

export default ControlPanel