import PropTypes from 'prop-types';

function DateInput({ setValueInput, year, month, day }) {

    return (
        <div className="date-input">
            <input type="text" id="year" name="date" className="max-w-[80px] appearance-none rounded relative px-3 py-2 m-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={year} placeholder="سال" onChange={setValueInput.bind(this, "year")} />/

            <input type="text" id="month" name="date" className="max-w-[80px] appearance-none rounded relative px-3 py-2 m-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={month} placeholder="ماه" onChange={setValueInput.bind(this, "month")} />/

            <input type="text" id="day" name="date" className="max-w-[80px] appearance-none rounded relative px-3 py-2 m-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={day} placeholder="روز" onChange={setValueInput.bind(this, "day")} />
            <label htmlFor="date">تاریخ</label>
        </div>
    )
}

export default DateInput

DateInput.propTypes = {
    setValueInput: PropTypes.func,
    year: PropTypes.string, month: PropTypes.string, day: PropTypes.string
};
