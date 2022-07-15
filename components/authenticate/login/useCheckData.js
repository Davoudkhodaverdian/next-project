import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useState } from 'react';

import { setAuthenticate } from "../../../store/slices/authenticateSlice"
import { setCurrentUser } from "../../../store/slices/currentUserSlice"

export default function useCheckData(state) {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const checkData = async () => {
        setLoading(true)
        try {
            const res = await fetch(`https://62891163abc3b5e327cc086b.endapi.io/users`)
            const data = await res.json();

            const userFinded = null;
            data.data.map(item => { if (item.email === state.email && item.userPassword === state.password) userFinded = item });

            if (userFinded) {
                dispatch(setAuthenticate(true));
                dispatch(setCurrentUser(userFinded));
                toast(<div className='vazir-matn-font'>شما با موفقیت وارد شدید</div>)
                setLoading(false)
                router.push("/");
            } else {
                setLoading(false)
                alert("چنین کاربری وجود ندارد")
            }

        } catch (error) { console.log(error) }

        setLoading(false);
    }

    return { loading, checkData };
}
