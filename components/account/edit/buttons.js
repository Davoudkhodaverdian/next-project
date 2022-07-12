
import { useSelector } from "react-redux";
import { setCurrentUser } from '../../../store/slices/currentUserSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export default function ButtonsEditAccount({ setEdit, edit, dataChanged }) {

    const currentUser = useSelector(state => state.currentUser.currentUser);
    const dispatch = useDispatch();
    const confirmEditHandler = async () => {

        //some user data is changed
        let userData = {
            name: dataChanged.name, email: dataChanged.email, role: dataChanged.role, userPassword: dataChanged.userPassword,
            membershipDate: currentUser.membershipDate, title: currentUser.title, field: currentUser.field, age: currentUser.age,
            workExperience: currentUser.workExperience,
        }

        try {
            
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users/${currentUser.id}`, {
                method: "PUT",
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'utf-8 '
                }
            });

            const data = await res.json();
            const responseData = data.data;
            dispatch(setCurrentUser(responseData))
            setEdit(false)
            toast(<div className='vazir-matn-font'>ویرایش انجام شد</div>);

        } catch (error) { console.log(error) }
    }

    return (
        <>
            <button className={`px-3 m-2 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 
                ${edit ? "hidden" : ""}`} onClick={() => setEdit(true)}>ویرایش</button>

            <button className={`px-3 m-2 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 
            ${!edit ? "hidden" : ""}`} onClick={confirmEditHandler}>ثبت ویرایش</button>
        </>
    )
} 