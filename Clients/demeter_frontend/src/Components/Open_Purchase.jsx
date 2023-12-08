import React from 'react';
import style from '../CSS/open_purchase.module.css'
import { IoIosSearch } from "react-icons/io";

function Open_Purchase(props) {
    return (
        <div className='container'>
            <p className={style.purchase_header}>Open Purchase Order Report </p>
            <div className='d-flex s1'>
                <p className={style.purchase_header1}>Home/</p>
                <p className={style.purchase_header2}>Open Purchase Order Report</p>
            </div>


            <div className={style.purchase_header3}>
                <p className={style.purchase_header4}>Search By</p>
                <div className='container d-flex'>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='f2'>Vendor Name</label>
                        <input type="email" className="form-control ff1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group ff3">
                        <label for="exampleInputEmail1" className='f2'>Memu</label>
                        <input type="email" className="form-control f5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    {/* <div className="form-group f3">
                        <label for="exampleInputEmail1" className='f2'>Price</label>
                        <input type="email" className="form-control f1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div> */}

                    <div className='ff3'>
                        <p className='f2'>Price</p>
                        <select className="form-select f8" aria-label="Default select example">
                            <option selected className='f9'>High To Low</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='ff3'>
                        <p className='f2'>Order Status</p>
                        <select className="form-select f8" aria-label="Default select example">
                            <option selected className='f9'>select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="form-group ff3">
                        <label for="exampleInputEmail1" className='f2'>Date Range</label>
                        <input type="date" className="form-control f1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className='f11'>
                        <IoIosSearch className='f12' />
                    </div>



                </div>
            </div>

            <div className={style.purchasetable}>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ref Number</th>
                            <th scope="col">Vendor Name</th>
                            <th scope="col">Memo</th>
                            <th scope="col">Order Status</th>
                            <th scope="col">Total Price</th>
                            <th scope="col">Dated</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </div>
    );
}

export default Open_Purchase;