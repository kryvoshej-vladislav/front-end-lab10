import { useState, useEffect } from "react";
import './ExpensesFilter.css'

const Filter = (props) => {

    const expensesList = props.expensesList;
    const [selectedYear, setSelectedYear] = useState('');
    const [showSelectYear, setShowSelectYear] = useState(true);

    const changeYearHandler = (event) => {
        const year = event.target.value;
        setSelectedYear(year);
        setShowSelectYear(false);
        props.sortExpenses(year);
    }

    const getYears = () => {
        var presentedYears = [...new Set(expensesList.map(item => item.date.getFullYear()))];
        presentedYears.sort().reverse();
        return presentedYears;
    }

    var years = getYears();

    useEffect(() => {
        setSelectedYear('');
        setShowSelectYear(true);
    }, []);

    return (
        <div className="filter-container">
            <p className="filter-text">Filter by year</p>
            <select className="filter-select" value={selectedYear} onChange={changeYearHandler}>
                <option value="">All</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter;
