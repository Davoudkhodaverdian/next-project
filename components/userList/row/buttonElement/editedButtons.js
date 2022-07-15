import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { setCurrentUser } from '../../../../store/slices/currentUserSlice';
import { editUser } from '../../../../store/slices/userListSlice';
import Loading from '../../../loading/loading';

function EditedButtons({ UserData, setState, state }) {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser.currentUser);
    const [loading, setLoading] = useState(false);

    const EditChangeMethod = async (id) => {

        let dataChanged = {
            name: state.editedName, email: state.editedEmail, role: state.editedRole, password: Date.now().toString(),
            membershipDate: `${Number(state.editedYear)}/ ${Number(state.editedMonth)}/${Number(state.editedDay)}`,
            title: state.editedTitle, field: state.editedField, age: state.editedAge, workExperience: state.editedWorkExperience,
            userPassword: state.editedUserPassword,
        }

        try {
            setLoading(true)
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users/${id}`, {
                method: "PUT",
                body: JSON.stringify(dataChanged),
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'utf-8 '
                }
            });
            setLoading(false)
            const data = await res.json();
            const responseData = data.data;
            dispatch(editUser({ dataChanged: responseData }))

            if (currentUser.id === id) { dispatch(setCurrentUser(responseData)) }
            setState(prevState => ({ ...prevState, edit: false }));
            toast(<div className='vazir-matn-font'>ویرایش انجام شد</div>);

        } catch (error) { console.log(error) }
    }

    const Cancel = () => {
        setState({
            edit: false, editedName: UserData.name, editedDay: UserData.membershipDate.split("/")[2],
            editedMonth: UserData.membershipDate.split("/")[1], editedYear: UserData.membershipDate.split("/")[0],
            editedEmail: UserData.email, editedRole: UserData.role, editedTitle: UserData.title,
            editedField: UserData.field, editedAge: UserData.age, editedWorkExperience: UserData.workExperience,
        });
    }

    return (
        <div className='flex'>
            <div>
                {
                    loading ? <Loading/> :
                        <button type="button" className="btn btn-sm btn-primary btn-custom mx-2 text-indigo-600"
                            onClick={EditChangeMethod.bind(this, UserData.id)}>Edited</button>
                }
            </div>
            <div>
                <button type="button" className="btn btn-sm btn-danger remove btn-custom text-red-600" onClick={Cancel.bind(this)}>Cancel</button>
            </div>
        </div>

    );
}

export default EditedButtons;

EditedButtons.propTypes = {
    setState: PropTypes.func,
    UserData: PropTypes.object,
    state: PropTypes.object,
};

