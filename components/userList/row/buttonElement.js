
import { removeUser, editUser } from '../../../store/slices/userListSlice';
import { useDispatch } from 'react-redux';

function ButtonElement({ edit, state, UserData, setState }) {

    const dispatch = useDispatch();

    const EditChangeMethod = async (id) => {

        let dataChanged = {
            name: state.editedName, email: state.editedEmail, role: state.editedRole, password: Date.now().toString(),
            membershipDate: (Number(state.editedYear) + "/" + Number(state.editedMonth) + "/" + Number(state.editedDay)),
            title: state.editedTitle, field: state.editedField, age: state.editedAge, workExperience: state.editedWorkExperience,
        }

        try {
        
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users/${id}`, {
                method: "PUT",
                body: JSON.stringify(dataChanged),
                headers: { 
                    'Content-Type': 'application/json',
                    'charset': 'utf-8 ' 
                }
            })
            dispatch(editUser( {id, dataChanged} ))

        } catch (error) {
            console.log(error)

        }

        dispatch(editUser({ ...dataChanged }, id))
        setState(prevState => ({ ...prevState, edit: false }))
    }

    const EditStateMethod = (key) => setState(prevState => ({ ...prevState, edit: true }))


    const removeUserHandler = async (id) => {

        try {
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'utf-8 '
                }
            })
            dispatch(removeUser(id));
        } catch (error) { console.log(error) }
    }


    let { id, key } = UserData;
    return (
        <td className="px-2">
            {
                edit ? (
                    <>
                        <button type="button" className="btn btn-sm btn-primary btn-custom mx-2 text-indigo-600" onClick={EditChangeMethod.bind(this, id, key)}>Edited</button>
                    </>
                ) : (
                    <>
                        <button type="button" className="btn btn-sm btn-primary btn-custom mx-2 text-indigo-600" onClick={EditStateMethod.bind(this, key)}>Edit</button>
                        <button type="button" className="btn btn-sm btn-danger remove btn-custom text-red-600" onClick={removeUserHandler.bind(this, id)}>Remove</button>
                    </>
                )

            }

        </td>
    )
}

export default ButtonElement