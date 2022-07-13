import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { removeUser } from '../../../../store/slices/userListSlice';
import { setCurrentUser } from '../../../../store/slices/currentUserSlice';
import { setAuthenticate } from '../../../../store/slices/authenticateSlice';

import { useRouter } from 'next/dist/client/router';

function Normalbuttons({ UserData, setState }) {

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser.currentUser);
    const router = useRouter();
    const EditStateMethod = () => { setState(prevState => ({ ...prevState, edit: true })) }
   
    const removeUserHandler = async (id) => {

        try {
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users/${id}`, {
                method: "DELETE", headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
            })

            if (currentUser.id === id) {
                dispatch(setCurrentUser({}));
                dispatch(setAuthenticate(false));
                // toast(<div className='vazir-matn-font'>شما از لیست کاربران حذف شدید، از سایت خارج میشوید</div>);
                router.push("/");
            } else {
                dispatch(removeUser(id));
                toast(<div className='vazir-matn-font'>حذف انجام شد</div>);
            }
        } catch (error) { console.log(error) }
    }
    return (
        <>
            <button type="button" className="btn btn-sm btn-primary btn-custom mx-2 text-indigo-600" onClick={EditStateMethod.bind(this)}>Edit</button>
            <button type="button" className="btn btn-sm btn-danger remove btn-custom text-red-600" onClick={removeUserHandler.bind(this, UserData.id)}>Remove</button>
        </>

    );
}

export default Normalbuttons;
