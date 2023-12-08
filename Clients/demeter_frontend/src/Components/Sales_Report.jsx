import React from 'react';
import style from '../CSS/Sales.module.css'
import { IoIosSearch } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import styles from '../CSS/Dasboard.module.css'

function Sales_Report(props) {
    return (
        <div className='container'>
            <p className={style.sales_header}>Sales Report</p>
            <div className='d-flex s1'>
                <p className={style.sales_header1}>Home/</p>
                <p className={style.sales_header2}> Sales Report</p>
            </div>

           

            <div className={style.sales_header3} >
                <p className={style.sales_header4}>Search By</p>

                <div className='container d-flex'>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='f2'>Customer Name</label>
                        <input type="email" className="form-control f1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group f3">
                        <label for="exampleInputEmail1" className='f2'>Memu</label>
                        <input type="email" className="form-control f5" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className="form-group f3">
                        <label for="exampleInputEmail1" className='f2'>PO Number</label>
                        <input type="email" className="form-control f1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className='f3'>
                        <p className='f2'>Order Type</p>
                        <select className="form-select f8" aria-label="Default select example">
                            <option selected className='f9'>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className='f3'>
                        <p className='f2'>Price</p>
                        <select className="form-select f8" aria-label="Default select example">
                            <option selected className='f9'>High To Low</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="form-group f3">
                        <label for="exampleInputEmail1" className='f2'>Date Range</label>
                        <input type="date" className="form-control f1" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div className='f11'>
                        <IoIosSearch className='f12' />
                    </div>



                </div>
            </div>



            <div className='container'>
                <div className='row '>
                    <div className='col-lg-4 mt-4'>
                        <div className={styles.topper}>
                            <div className='d-flex mt-1 tip'>
                                <p className={styles.topper1}>Total Revenue |</p>
                                <p className={styles.topper2}>2023</p>
                            </div>

                            <div className='d-flex'>


                                <div className='d-flex'>
                                    <div className={styles.topper3}>
                                        <TbReportSearch className={styles.topper4} />
                                    </div>
                                </div>

                                <div className='r1'>
                                    <p className='r2 '>966,645</p>
                                    <p className='r3'>35,784 <span className='r4'>| Total</span></p>
                                </div>

                            </div>



                        </div>

                    </div>

                    <div className='col-lg-4 mt-4'>
                        <div className={styles.topper}>
                            <div className='d-flex mt-1 tip'>
                                <p className={styles.topper1}>Total Orders |</p>
                                <p className={styles.topper2}>2023</p>
                            </div>

                            <div className='d-flex'>

                                <div className='d-flex'>
                                    <div className={styles.topper5}>
                                        <BsFillBagCheckFill className={styles.topper6} />
                                    </div>
                                </div>

                                <div className='r1'>
                                    <p className='r2 '>86,322.27</p>
                                    <p className='r3'>353 <span className='r4'>| Total</span></p>
                                </div>

                            </div>



                        </div>
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <div className={styles.topper}>
                            <div className='d-flex mt-1 tip'>
                                <p className={styles.topper1}>Largest Order |</p>
                                <p className={styles.topper2}>2023</p>
                            </div>

                            <div className='d-flex'>

                                <div className='d-flex'>
                                    <div className={styles.topper7}>
                                        <BsFillBoxSeamFill className={styles.topper8} />
                                    </div>
                                </div>

                                <div className='r1'>
                                    <p className='r2 '>$200.780</p>
                                    <p className='r5'>00<span className='r4'>| Total</span></p>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </div>


            <div className='container tabling'>
                <table class="table">
                    <thead>
                        <tr className='ott'>
                            <th scope="col">#</th>
                            <th scope="col">PO Number</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Memo</th>
                            <th scope="col">Order Type</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal Price</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Tax</th>
                            <th scope="col">Balance Remaining</th>
                            <th scope="col">Date</th>

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
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </div>
    );
}

export default Sales_Report;