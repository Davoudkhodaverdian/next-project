
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../../../store/slices/userListSlice';

function useAddUserHandler({ closeModal, setState }) {

    const dispatch = useDispatch();

    const addUserHandler = async (values) => {

        try {
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users`, {
                method: "POST", body: JSON.stringify(values),
                headers: { 'Content-Type': 'application/json', 'charset': 'utf-8' }
            })

            const data = await res.json();
            dispatch(addUser(data.data))
            setState({
                name: "", day: "", month: "", year: "", email: "", role: "user", title: "", field: "", age: "",
                workExperience: "lessoneyear", userPassword: ""
            });
            closeModal();
            toast(<div className='vazir-matn-font'>کاربر اضافه شد</div>);
        } catch (error) { console.log(error) }
    }

    return { addUserHandler }
}

export default useAddUserHandler;