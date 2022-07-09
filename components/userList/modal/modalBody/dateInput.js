

function DateInput({ setValueInput, year, month, day }) {

    return (
        <div className="date-input">

            <input type="text" id="year" name="date" className="input-custom"
                value={year} placeholder="سال" onChange={setValueInput.bind(this, "year")} />

            <input type="text" id="month" name="date" className="input-custom"
                value={month} placeholder="ماه" onChange={setValueInput.bind(this, "month")} />

            <input type="text" id="day" name="date" className="input-custom"
                value={day} placeholder="روز" onChange={setValueInput.bind(this, "day")} />

            <label htmlFor="date">تاریخ</label>
        </div>
    )
}

export default DateInput
