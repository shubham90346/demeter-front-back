import React, { useState } from 'react';
import style from '../CSS/Home.module.css';
import { AiOutlineMenuFold } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import Dashboard from './Dashboard';

import Item_Report from './Item_Report';
import Sales_Report from './Sales_Report';
import Open_Purchase from './Open_Purchase';
import Sales_Comparison from './Sales_Comparison';
import Purchase_comparison from './Purchase_comparison';
import Customer_comparison from './Customer_comparison';

function Home(props) {
    const [active, IsActive] = useState(1);

    return (
        <div>
            <div className={style.main_header}>
                <div className='row w-100 ' >
                    <div className='col-lg-3' >
                        <p className={style.header}>DEMETER FRAGRANCES</p>
                    </div>
                    <div className='col-lg-9'>
                        <div className={style.header_button}>
                            <button type="button" className={style.btn1}>Login</button>
                            <button type="button" className={style.btn2}>Logout</button>
                            <img src="https://themewagon.github.io/Modernize/src/assets/images/profile/user-1.jpg" alt="" className={style.imgg} />
                        </div>

                        <AiOutlineMenuFold className={style.icon} />

                    </div>
                </div>
                {/* <hr className='lines'></hr> */}

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3' id={style.shadd}>
                            <div className={style.home2}>
                                <div className={style.Dashboard} onClick={() => IsActive(1)} style={active === 1 ? { backgroundColor: 'rgb(69,129,181)', color: 'white', borderRadius: '10px', } : { color: 'rgb(42,99,168)' }}>
                                    <RiDashboardLine className={style.Dashboard2} />
                                    <p className={style.Dashboard1}>Dashboard</p>
                                </div>

                                <div className={style.Dashboard} onClick={() => IsActive(2)} style={active === 2 ? { backgroundColor: 'rgb(69,129,181)', color: 'white', borderRadius: '10px' } : { color: 'rgb(42,99,168)' }} >
                                    <RiDashboardLine className={style.Dashboard2} />
                                    <p className={style.Dashboard1}>Sales Report</p>
                                </div>

                                <div className={style.Dashboard} onClick={() => IsActive(3)} style={active === 3 ? { backgroundColor: 'rgb(69,129,181)', color: 'white', borderRadius: '10px' } : { color: 'rgb(42,99,168)' }}>
                                    <RiDashboardLine className={style.Dashboard2} />
                                    <p className={style.Dashboard1}>Items Report</p>
                                </div>

                                <div className={style.Dashboard} onClick={() => IsActive(4)} style={active === 4 ? { backgroundColor: 'rgb(69,129,181)', color: 'white', borderRadius: '10px' } : { color: 'rgb(42,99,168)' }}>
                                    <RiDashboardLine className={style.Dashboard2} />
                                    <p className={style.Dashboard1}>Open Purchase Order Report</p>
                                </div>

                                <div className={style.Dashboard} onClick={() => IsActive(5)} style={active === 5 ? { backgroundColor: 'rgb(69,129,181)', color: 'white', borderRadius: '10px' } : { color: 'rgb(42,99,168)' }} >
                                    <RiDashboardLine className={style.Dashboard2} />
                                    <p className={style.Dashboard1}>Sales Comparison Report</p>
                                </div>

                                <div className={style.Dashboard} onClick={() => IsActive(6)} style={active === 6 ? { backgroundColor: 'rgb(69,129,181)', color: 'white', borderRadius: '10px' } : { color: 'rgb(42,99,168)' }}>
                                    <RiDashboardLine className={style.Dashboard2} />
                                    <p className={style.Dashboard1}>Open Purchase Comparison Report</p>
                                </div>

                                <div className={style.Dashboard} onClick={() => IsActive(7)} style={active === 7 ? { backgroundColor: 'rgb(69,129,181)', color: 'white', borderRadius: '10px' } : { color: 'rgb(42,99,168)' }}>
                                    <RiDashboardLine className={style.Dashboard2} />
                                    <p className={style.Dashboard1}>Customer Comparison Report</p>
                                </div>

                            </div>
                        </div>
                    
                        <div className='col-lg-9'>

                            <div className={style.home}>
                                {
                                    active == 1 && <>
                                        <Dashboard/>
                                    </>
                                }

                                {
                                    active == 2 && <>
                                        <Sales_Report/>
                                    </>
                                }

                                {
                                    active == 3 && <>
                                        <Item_Report/>
                                    </>
                                }

                                {
                                    active == 4 && <>
                                        <Open_Purchase/>
                                    </>
                                }

                                {
                                    active == 5 && <>
                                        <Sales_Comparison/>
                                    </>
                                }

                                {
                                    active == 6 && <>
                                        <Purchase_comparison/>
                                    </>
                                }

                                {
                                    active == 7 && <>
                                        <Customer_comparison/>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;