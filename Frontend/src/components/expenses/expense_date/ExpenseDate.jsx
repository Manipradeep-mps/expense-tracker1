import './ExpenseDate.css';
const ExpenseDate = (props) => {
    const { date } = props;
    const consolidated_date=(typeof date==='string')?
                    new Date(date):
                    date;

    
    const month = consolidated_date.toLocaleString('US-en', {month: 'long'});
    const date_ = consolidated_date.toLocaleDateString('US-en', {day: 'numeric'});
    const year = consolidated_date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{date_}</div>
            <div className="expense-date__day">{year}</div>
        </div>
    )
};

export default ExpenseDate;