import React from 'react';
import style from '../CSS/Sales_Comparison.module.css'

function Sales_Comparison(props) {
    return (
        <div>
            <p className={style.sale_comparison_header}>Sales Comparison Report </p>
            <div className='d-flex s1'>
                <p className={style.sale_comparison_header1}>Home/</p>
                <p className={style.sale_comparison_header2}>Sales Comparison Report</p>
            </div>

        
        </div>
    );
}

export default Sales_Comparison;