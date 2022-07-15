import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useState } from 'react';

import { setAuthenticate } from "../../../store/slices/authenticateSlice"
import { setCurrentUser } from "../../../store/slices/currentUserSlice"
import { addUser } from '../../../store/slices/userListSlice';

export default function useSendData(state) {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const sendData = async () => {
        let key = Date.now();
        let values = {
            name:state.name, membershipDate: "1401/4/28", title: "-", field: "-", age: "0000",
            workExperience: "lessoneyear", email:state.email, role: "user", userPassword: state.password, password: key.toString()
        }
        setLoading(true)
        try {
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
            })
            const data = await res.json();
            
            dispatch(addUser(data.data))
            dispatch(setAuthenticate(true));
            dispatch(setCurrentUser(data.data));
            setLoading(false);
            toast(<div className='vazir-matn-font'>شما با موفقیت ثبت نام کردید</div>);
            router.push("/");
    
        } catch (error) { console.log(error) }
        setLoading(false);
    }

    return { loading, sendData };
}
