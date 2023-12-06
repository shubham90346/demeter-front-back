import React from 'react';
import styles from '../CSS/Dasboard.module.css'
import Chart from "react-apexcharts";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";




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

            <p className={styles.dash5}>Yearly Breakup</p>


            <div className='d-flex'>
              <div>
                <p className={styles.dash6}>$36,358</p>
                <p>+9% last year</p>
              </div>

              <div  >
                <PieChart width={200} height={300} >
                  <Pie
                    data={piedata}
                    cx={90}
                    cy={74}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {piedata.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>

                </PieChart>

              </div>


            </div>






          </div>
        </div>

      </div>

    </div>


  );
}

export default Dashboard;