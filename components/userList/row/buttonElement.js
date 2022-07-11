
import { removeUser, editUser } from '../../../store/slices/userListSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCurrentUser } from '../../../store/slices/currentUserSlice';
import { toast } from 'react-toastify';
import { useRouter } from 'next/dist/client/router';
import { setAuthenticate } from '../../../store/slices/authenticateSlice';

function ButtonElement({ edit, state, UserData, setState }) {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser.currentUser);
    const router = useRouter();
    const EditChangeMethod = async (id) => {
        debugger
        let dataChanged = {
            name: state.editedName, email: state.editedEmail, role: state.editedRole, password: Date.now().toString(),
            membershipDate: (Number(state.editedYear) + "/" + Number(state.editedMonth) + "/" + Number(state.editedDay)),
            title: state.editedTitle, field: state.editedField, age: state.editedAge, workExperience: state.editedWorkExperience,
        }
      
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users/${id}`, {
                method: "PUT",
                body: JSON.stringify(dataChanged),
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'utf-8 '
                }
            });
            debugger
            const data = await res.json();
            debugger
            const responseData = data.data;
            dispatch(editUser({ id, dataChanged:responseData }))
            if (currentUser.id === id) { dispatch(setCurrentUser(responseData)) }
            setState({ ...responseData, edit: false })
            toast(<div className='vazir-matn-font'>ویرایش انجام شد</div>);
 
    }

    const EditStateMethod = (key) => { setState(prevState => ({ ...prevState, edit: true })) }

    const Cancel = () => {
        setState({
            edit: false, editedName: UserData.name, editedDay: UserData.membershipDate.split("/")[2],
            editedMonth: UserData.membershipDate.split("/")[1], editedYear: UserData.membershipDate.split("/")[0],
            editedEmail: UserData.email, editedRole: UserData.role, editedTitle: UserData.title,
            editedField: UserData.field, editedAge: UserData.age, editedWorkExperience: UserData.workExperience,
        });
    }

    const removeUserHandler = async (id) => {

        try {
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users/${id}`, {
                method: "DELETE", headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
            })

            if (currentUser.id === id) {
                dispatch(setCurrentUser({}));
                dispatch(setAuthenticate(false));
                toast(<div className='vazir-matn-font'>شما از لیست کاربران حذف شدید، از سایت خارج میشوید</div>);
                router.push("/");
            } else {
                dispatch(removeUser(id));
                toast(<div className='vazir-matn-font'>حذف انجام شد</div>);
            }
        } catch (error) { console.log(error) }
    }

    let { id, key } = UserData;
    return (
        <td className="px-2">
            {
                edit ? (
                    <>
                        <button type="button" className="btn btn-sm btn-primary btn-custom mx-2 text-indigo-600" onClick={EditChangeMethod.bind(this, id, key)}>Edited</button>
                        <button type="button" className="btn btn-sm btn-danger remove btn-custom text-red-600" onClick={Cancel.bind(this)}>Cancel</button>
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