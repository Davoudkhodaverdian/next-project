import Link from 'next/link'

function AuthenticateButtons() {

    return (
        <>
            <Link href="/register">
                <a>
                    <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">ثبت نام</button>
                </a>
            </Link>
            <Link href="/login">
                <a>
                    <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">ورود</button>
                </a>
            </Link>
        </>
    );
}

export default AuthenticateButtons;
