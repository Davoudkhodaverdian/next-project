
import { useEffect, useState } from 'react'
import NormalElement from './normalElement';
import RoleElement from './roleElement';
import NormalEditedElement from './normalEditedElement';
import WorkExperienceElement from './workExperienceElement';
import MembershipDateElement from './membershipDateElement';
import ButtonElement from './buttonElement/buttonElement';
import PropTypes from 'prop-types';

function Row({ UserData, rowNumber, indexRow }) {

    const [state, setState] = useState({
        edit: false, editedName: "", editedDay: "", editedMonth: "", editedYear: "", editedEmail: "", editedRole: "",
        editedTitle: "", editedField: "", editedAge: "", editedWorkExperience: "", editedUserPassword: "",
    });

    useEffect(() => {

        let { name, membershipDate, email, role, title, field, age, workExperience, userPassword } = UserData
        setState({
            edit: false, editedName: name, editedDay: membershipDate.split("/")[2], editedMonth: membershipDate.split("/")[1],
            editedYear: membershipDate.split("/")[0], editedEmail: email, editedRole: role, editedTitle: title, editedField: field,
            editedAge: age, editedWorkExperience: workExperience, editedUserPassword: userPassword,
        })
    }, [])

    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }

    let {
        edit, editedName, editedDay, editedMonth, editedYear, editedEmail, editedRole, editedTitle, editedField, editedAge,
        editedWorkExperience
    } = state;

    let rowItems = [
        { name: "name", id: 1 }, { name: "membershipDate", id: 2 }, { name: "title", id: 3 }, { name: "field", id: 4 },
        { name: "age", id: 5 }, { name: "workExperience", id: 6 }, { name: "email", id: 7 }, { name: "role", id: 8 }
    ]

    return (
        <tr className={`text-gray-600 ${indexRow === rowNumber - 1 ? "" : "border-b border-gray-200 "}`}>
            {
                //tpes of row items
                rowItems.map((item) => (
                    !edit ? <NormalElement key={item.id} element={item.name} UserData={UserData} />
                        : item.name === "role" ?
                            <RoleElement key={item.id} editedRole={editedRole} setValueInput={setValueInput} />
                            : item.name === "workExperience" ?
                                <WorkExperienceElement key={item.id} editedWorkExperience={editedWorkExperience}
                                    setValueInput={setValueInput} />
                                : item.name === "membershipDate" ?
                                    <MembershipDateElement key={item.id} editedYear={editedYear} editedMonth={editedMonth}
                                        editedDay={editedDay} setValueInput={setValueInput} />
                                    : <NormalEditedElement key={item.id} element={item.name} editedTitle={editedTitle}
                                        editedField={editedField} editedAge={editedAge} editedName={editedName}
                                        editedEmail={editedEmail} setValueInput={setValueInput} />
                ))
            }
            {/* buttons for edit and romove and cancel of current row */}
            <ButtonElement edit={edit} setState={setState} state={state} UserData={UserData} />
        </tr>
    )
}

export default Row;

Row.propTypes = {
    UserData: PropTypes.object,
    rowNumber: PropTypes.number,
    indexRow: PropTypes.number
};