
import { useState } from 'react'
import NormalRow from './normalRow';
import RoleElement from './roleElement';
import NormalElement from './normalElement';
import WorkExperienceElement from './workExperienceElement';
import MembershipDateElement from './membershipDateElement';
import ButtonElement from './buttonElement';

function Row(props) {

    let { UserData, rowNumber,indexRow } = props;

    const [state, setState] = useState({
        edit: false, editedName: UserData.name, editedDay: props.UserData.membershipDate.split("/")[2],
        editedMonth: props.UserData.membershipDate.split("/")[1], editedYear: props.UserData.membershipDate.split("/")[0],
        editedEmail: props.UserData.email, editedRole: props.UserData.role, editedTitle: props.UserData.title,
        editedField: props.UserData.field, editedAge: props.UserData.age, editedWorkExperience: props.UserData.workExperience,
    });

    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }

    let { edit, editedName, editedDay, editedMonth, editedYear, editedEmail, editedRole, editedTitle, editedField,
        editedAge, editedWorkExperience
    } = state;

    return (
        <tr className={`text-gray-600 ${indexRow === rowNumber - 1 ? "" : "border-b border-gray-200 "}`}>
            {
                Object.keys(UserData).map((element, index) => {

                    if (element === "password" || element === "id") return null;
                    else if (!edit) return (<NormalRow element={element} UserData={UserData} index={index} key={index} />)
                    else {
                        if (element === "role") {
                            return (<RoleElement key={index} editedRole={editedRole} setValueInput={setValueInput} />)

                        } else if (element === "workExperience") {
                            return (
                                <WorkExperienceElement key={index} editedWorkExperience={editedWorkExperience} 
                                setValueInput={setValueInput} />
                            )
                        } else if (element === "membershipDate") {
                            return (
                                <MembershipDateElement key={index} editedYear={editedYear} editedMonth={editedMonth}
                                    editedDay={editedDay} setValueInput={setValueInput} />
                            )
                        } else {
                            return (
                                <NormalElement key={index} element={element} editedTitle={editedTitle}
                                 editedField={editedField}editedAge={editedAge} editedName={editedName} 
                                 editedEmail={editedEmail} setValueInput={setValueInput} />
                            )
                        }
                    }
                })
            }
            <ButtonElement edit={edit} setState={setState} state={state} UserData={UserData} />
        </tr>
    )

}

export default Row;