import React from 'react';
import styles from '../CSS/Dasboard.module.css'
import Chart from "react-apexcharts";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import NewApp from './NewApp';
import { PiCircleBold } from "react-icons/pi";
import { IoMdStarOutline } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";

const data = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]

  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]

  },],
  options: {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      // show: true,
      width: 5,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['16/2', '17/8', '18/4', '19/9', '20/5', '21/5', '89/4', '32/42', '99/34'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1,
      colors: ['rgb(100,200,255)', 'rgb(69,129,181)']
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  },
};


function Dashboard(props) {

  const piedata = [
    {

      name: "Redmi",
      value: 46.85
    },
    {
      name: "Samsung",
      value: 17.91
    },
    {
      name: "Apple",
      value: 14.85
    },

  ]

  const COLORS = ['rgb(69,129,181)', 'rgb(236,242,255)', 'rgb(100,200,255)'];

  return (
    <div className='container'>

      <p className={styles.Dashboard_headerss}>Dashboard </p>
      <div className='d-flex s1'>
        <p className={styles.Dashboard_headerss1}>Home/</p>
        <p className={styles.Dashboard_headerss2}>Dashboard</p>
      </div>




      <div className='row '>
        <div className='col-lg-4 mt-2'>
          <div className={styles.topper}>
            <div className='d-flex mt-1 tip'>
              <p className={styles.topper1}>Sales |</p>
              <p className={styles.topper2}>2023</p>
            </div>

            <div className='d-flex'>


              <div className='d-flex'>
                <div className={styles.topper3}>
                  <TbReportSearch className={styles.topper4} />
                </div>
              </div>

              <div className='r1'>
                <p className='r2 '>$966,645.27</p>
                <p className='r3'>35,784 <span className='r4'>| Total</span></p>
              </div>

            </div>



          </div>

        </div>

        <div className='col-lg-4 mt-2'>
          <div className={styles.topper}>
            <div className='d-flex mt-1 tip'>
              <p className={styles.topper1}>Open Purchase Order |</p>
              <p className={styles.topper2}>2023</p>
            </div>

            <div className='d-flex'>

              <div className='d-flex'>
                <div className={styles.topper5}>
                  <BsFillBagCheckFill className={styles.topper6} />
                </div>
              </div>

              <div className='r1'>
                <p className='r2 '>$86,322.27</p>
                <p className='r3'>353 <span className='r4'>| Total</span></p>
              </div>

            </div>



          </div>
        </div>

        <div className='col-lg-4 mt-2'>
          <div className={styles.topper}>
            <div className='d-flex mt-1 tip'>
              <p className={styles.topper1}>Cogs |</p>
              <p className={styles.topper2}>2023</p>
            </div>

            <div className='d-flex'>

              <div className='d-flex'>
                <div className={styles.topper7}>
                  <BsFillBoxSeamFill className={styles.topper8} />
                </div>
              </div>

              <div className='r1'>
                <p className='r2 '>$00.00</p>
                <p className='r5'>00<span className='r4'>| Total</span></p>
              </div>

            </div>


          </div>
        </div>
      </div>



      <div className='row'>
        <div className='col-lg-8'>

          <div className={styles.dash}>
            <div className='d-flex'>
              <p className={styles.dash3}>Sales Overview</p>

              <select className="form-select" aria-label="Default select example">
                <option selected>March 2023</option>
                <option value="March 2022">One</option>
                <option value="March 2021">Two</option>
                <option value="March 2020">Three</option>
              </select>
            </div>

            <Chart options={data.options} series={data.series} type="bar" className={styles.dash2} width="630" />
          </div>

        </div>

        <div className='col-lg-4'>
          <div className={styles.dash4}>
            <div>
              <p className={styles.dash5}>Yearly Breakup</p>
            </div>



            <div className='d-flex'>
              <div>
                <p className={styles.dash6}>$36,358</p>
                <p className={styles.dash8}>9 last year</p>

                <div className='d-flex'>
                  <p className='dashs1'>2022</p>
                  <p className='dashs'>2023</p>
                </div>

              </div>



              <PieChart width={200} height={300} >
                <Pie
                  data={piedata}
                  cx={110}
                  cy={73}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  className='roms'
                >
                  {piedata.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

              </PieChart>




            </div>






          </div>

          <div className={styles.newdash}>

            <div className='row'>
              <div className='col-lg-8'>
                <p className={styles.newdash1}>Monthly Earnings</p>

                <p className={styles.newdash2}>$6,820</p>
                <p className={styles.newdash4}>+19 Last Year</p>
              </div>
              <div className='col-lg-4'>
                <div className={styles.newdash3}>

                  <AiOutlineDollarCircle className='dashes3' />
                </div>
              </div>
            </div>


            <div>
              <NewApp />
            </div>



          </div>


        </div>

      </div>


      <div className='row'>
        <div className='col-lg-4'>
          <div className={styles.dashed}>

            <p className={styles.dashed1}>Recent Transactions</p>

            <div className='container d-flex'>
              <p className={styles.dashed4}>09:30am</p>
              <PiCircleBold className='dashedd' />
              <div className="vl"></div>
              <p className={styles.dashed3}>Payment received from John Doe of $385.90</p>
            </div>

            <div className='container d-flex'>
              <p className={styles.dashed4}>09:30am</p>
              <PiCircleBold className='dashedd1' />
              <div className="vl"></div>
              <p className={styles.dashed3}>Payment received from John Doe of $385.90</p>
            </div>

            <div className='container d-flex'>
              <p className={styles.dashed4}>09:30am</p>
              <PiCircleBold className='dashedd2' />
              <div className="vl"></div>
              <p className={styles.dashed3}>Payment received from John Doe of $385.90</p>
            </div>

            <div className='container d-flex'>
              <p className={styles.dashed4}>09:30am</p>
              <PiCircleBold className='dashedd3' />
              <div className="vl"></div>
              <p className={styles.dashed3}>Payment received from John Doe of $385.90</p>
            </div>

            <div className='container d-flex'>
              <p className={styles.dashed4}>09:30am</p>
              <PiCircleBold className='dashedd4' />

              <p className={styles.dashed3}>Payment received from John Doe of $385.90</p>
            </div>

          </div>

        </div>

        <div className='col-lg-8'>
          <div className={styles.tab}>
            <div className='container'>

              <p className={styles.dashed11}>Recent Transactions</p>

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Assigned</th>
                    <th scope="col">Name</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Budget</th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <th scope="row">1</th>
                    <td>Sunil Joshi</td>
                    <td>Elite Admin</td>
                    <td>
                      <div className={styles.tabs1}>
                        Low
                      </div>

                    </td>
                    <td>$9.4</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>	Real Homes</td>
                    <td>Elite Admin</td>
                    <td>
                      <div className={styles.tabs2}>
                        medium
                      </div>

                    </td>
                    <td>$9.4</td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>MedicalPro </td>
                    <td>Elite Admin</td>
                    <td>
                      <div className={styles.tabs3}>
                        High
                      </div>

                    </td>
                    <td>$9.4</td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>Hosting HTML</td>
                    <td>Elite Admin</td>
                    <td>
                      <div className={styles.tabs4}>
                        Low
                      </div>

                    </td>
                    <td>$9.4</td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td>Sunil Joshi</td>
                    <td>Elite Admin</td>
                    <td>
                      <div className={styles.tabs5}>
                        medium
                      </div>

                    </td>
                    <td>$9.4</td>
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td>Sunil Joshi</td>
                    <td>Elite Admin</td>
                    <td>
                      <div className={styles.tabs6}>
                        critical
                      </div>

                    </td>
                    <td>$9.4</td>
                  </tr>



                </tbody>
              </table>

            </div>


          </div>

        </div>

      </div>


      <div className='row mt-4'>
        <div className='col-lg-3'>
          <div class="card">
            <img class="card-img-top" src="https://themewagon.github.io/Modernize/src/assets/images/products/s4.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5>Boat Headphone</h5>
              <div className='d-flex'>
                <div>
                  <p>$69</p>
                </div>

                <div className='starr'>
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                </div>

              </div>

            </div>
          </div>

        </div>

        <div className='col-lg-3'>

          <div class="card">
            <img class="card-img-top" src="https://themewagon.github.io/Modernize/src/assets/images/products/s5.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5>MacBook Air Pro</h5>
              <div className='d-flex'>
                <div>
                  <p>$623</p>
                </div>

                <div className='starr'>
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className='col-lg-3'>

          <div class="card">
            <img class="card-img-top" src="https://themewagon.github.io/Modernize/src/assets/images/products/s7.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5>Red Valvet Dress</h5>
              <div className='d-flex'>
                <div>
                  <p>$70</p>
                </div>

                <div className='starr'>
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className='col-lg-3'>

          <div class="card">
            <img class="card-img-top" src="https://themewagon.github.io/Modernize/src/assets/images/products/s11.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5>Cute Soft Teddybear</h5>
              <div className='d-flex'>
                <div>
                  <p>$29</p>
                </div>

                <div className='starr'>
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                  <IoMdStarOutline />
                </div>

              </div>
            </div>
          </div>

        </div>




      </div>


      <div className='mt-5 text-center'>
        <p className='foot'>Design and Developed by <span className='foot1'>DESIGNER's X</span></p>
      </div>
      <br />

    </div>


  );
}

export default Dashboard;