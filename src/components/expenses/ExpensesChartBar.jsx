import React from 'react';
import "./ExpensesChartBar.css";

function Diagram(props) {
    const expenseItems = props.expenseItems;

    const totalPricesByMonth = Array(12).fill(0);

    expenseItems.forEach(item => {
        const date = new Date(item.date);
        const itemMonth = date.getMonth(); 
        totalPricesByMonth[itemMonth] += parseInt(item.amount);  
    });
    
    const maxTotal = Math.max(...totalPricesByMonth);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="diagram-container">
            <ul className="list">
                {totalPricesByMonth.map((total, index) => {
                    const percentageOfMax = maxTotal > 0 ? ((total / maxTotal) * 100).toFixed(2) : '0.00';
                    return (
                        <li key={index}>
                            <div className="listBox">
                                <div className="listBox_filling" style={{height: `${percentageOfMax}%`}}></div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <ul className="MonthRow">
                {months.map((month) => {
                    return (
                        <li>{month}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Diagram;
