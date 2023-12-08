import React from 'react';
import style from '../CSS/Item.module.css'
import { IoIosSearch } from "react-icons/io";

function Item_Report(props) {
    return (
        <div className='container'>
            <p className={style.item_header}>Item Report </p>
            <div className='d-flex s1'>
                <p className={style.item_header1}>Home/</p>
                <p className={style.item_header2}>item Report</p>
            </div>

            <div className={style.item_header3}>
                <p className={style.item_header4}>Search By</p>

                <div className='container d-flex' >
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='f2'>Customer Name</label>
                        <input type="email" className="form-control item1 " id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className='item3'>
                        <p className='f2'>Stock Status</p>
                        <select className="form-select item2" aria-label="Default select example">
                            <option selected className=''>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='item4'>
                        <p className='f2'>Status</p>
                        <select className="form-select item2" aria-label="Default select example">
                            <option selected className=''>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='item4'>
                        <p className='f2'>Sale Price</p>
                        <select className="form-select item5" aria-label="Default select example">
                            <option selected className=''>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='f111'>
                        <IoIosSearch className='f112' />
                    </div>


                </div>




            </div>

            <div className='container itemtable'>

                <table class="table">
                    <thead>
                        <tr className=''>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Purchase Price</th>
                            <th scope="col">Sale Price</th>
                            <th scope="col">Income Account Name</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>Otto</td>


                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>Otto</td>
                        </tr>
                    </tbody>
                </table>

            </div>




        </div>
    );
}

export default Item_Report;