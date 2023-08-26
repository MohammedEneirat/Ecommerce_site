import React, { useEffect, useState } from 'react';
import Style from "../style/order.module.css";


function Orders() {
    var r = 0;
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/api/orders").then((response) => response.json()).then((data) => setData(data))
    }, [])

    return (
        <>
            <div className={`${Style.page} pt-5`}>
                <div className='text-center '>
                    <span className='h2'>
                        Orders
                    </span>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-2'>

                        </div>
                        <div className='col-md-8 mt-4'>
                            <table className={`table text-center ${Style.tables}`} >
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">custmer</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {data.map((e) => {
                                        r+=1
                                        return (
                                            <tr key={e.id}>
                                                <th scope="row">{r}</th>
                                                <td>{e.name}</td>
                                                <td>{e.Date}</td>
                                                <td> <button className='btn btn-success' value={e.description}>Details</button> </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Orders;