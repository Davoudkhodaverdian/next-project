
import { setAuthenticate } from "../../store/slices/authenticateSlice"
import { useDispatch } from 'react-redux'
import Link from "next/link";
import { toast } from 'react-toastify';

function AccountItems() {

    const dispatch = useDispatch()
    const authenticateHandler = () => {
        dispatch(setAuthenticate(false))
        toast(<div className='vazir-matn-font'>شما از سایت خارج شدید</div>)
    }

    return (
        <>
            <Link href="/account">
                <a>
                    <button className="flex flex-row items-center">
                        <span className="px-2">حساب کاربری من</span>
                        {/* avatar svg */}
                        <img src="/images/maleAvatar.svg" width={24} alt="avatar" />
                    </button>

                </a>
            </Link>
            {/* logout */}
            <button onClick={authenticateHandler} >
                <Link href="/" >
                    <a className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                        </svg>
                        <span>خروج</span>

                    </a>
                </Link>
            </button>
        </>
    )
}

export default AccountItems