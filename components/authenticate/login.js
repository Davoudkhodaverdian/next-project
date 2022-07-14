import Link from 'next/link';
import { setAuthenticate } from "../../store/slices/authenticateSlice"
import { setCurrentUser } from "../../store/slices/currentUserSlice"
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import Form from './form';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function Login() {

    const [state, setState] = useState({ email: "", password: "" })
    const dispatch = useDispatch();
    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }
    const router = useRouter()
    const [loading, setLoading] = useState(false);

    const checkInputs = async () => {
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
        setLoading(false)
    }

    const enterHandler = (event) => {

        event.preventDefault();
        if (state.password === "" || state.email === "") {
            if (state.email === "") alert("ایمیل را به درستی وارد کنید")
            else if (state.password === "") alert("رمز عبور را به درستی وارد کنید")
        } else checkInputs();
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col max-w-[500px] rounded shadow-lg p-4 bg-white w-[calc(100%-16px)] mx-2 lg:w-1/2">
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900 text-right">ورود</h2>
                <Form type="login" confirmHandler={enterHandler} setValueInput={setValueInput} loading={loading} />
                <Link href="/register"><a><div>قبلا ثبت نام نکرده اید</div></a></Link>
            </div>
        </div>
    )
}

export default Login;