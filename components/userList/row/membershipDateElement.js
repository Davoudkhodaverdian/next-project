
import PropTypes from 'prop-types';

function MembershipDateElement({ editedYear, editedMonth, editedDay, setValueInput }) {


    return (
        <td className="flex px-2 justify-center items-center">
            <input type="text" id={"year"} name={"year"} placeholder={"سال"} value={editedYear}
                className="outline-none w-full max-w-[56px] border border-slate-400 rounded-md px-1"
                onChange={setValueInput.bind(this, "editedYear")}
            />
            /
            <input type="text" id={"month"} name={"month"} placeholder={"ماه"} value={editedMonth}
                className="outline-none w-full max-w-[56px] border border-slate-400 rounded-md px-1"
                onChange={setValueInput.bind(this, "editedMonth")}
            />
            /
            <input type="text" id={"day"} name={"day"} placeholder={"روز"} value={editedDay}
                className="outline-none w-full max-w-[56px] border border-slate-400 rounded-md px-1"
                onChange={setValueInput.bind(this, "editedDay")}
            />
        </td>
    )
}

export default MembershipDateElement

MembershipDateElement.propTypes = {
    editedYear: PropTypes.string, editedMonth: PropTypes.string, editedDay: PropTypes.string,
    setValueInput: PropTypes.func
};

