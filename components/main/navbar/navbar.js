
import { useState } from 'react';
import { useSelector } from 'react-redux';
import AvatarItems from '../../account/avatarItems';
import Link from 'next/link'

function Navbar() {

    //this state is for menu of responsive main page
    const [state, setState] = useState(false);
    const MenuHandle = () => { setState(prevState => !prevState) }

    const authenticate = useSelector((state) => state.authenticate.authenticate);

 
    return (
        <nav className=' p-3 bg-gray-100 shadow'>
            <div className='flex flex-wrap justify-between items-center container mx-auto'>
                <div className='flex  items-center'>
                    <img src="/images/logo.svg" width={50} alt="logo" />
                </div>

                <button className='  rounded-lg shadow' onClick={MenuHandle} >
                    <div className='space-y-1 m-1 md:hidden '>
                        <div className='bg-violet-500 w-5 h-1 rounded-sm'></div>
                        <div className='bg-violet-500 w-5 h-1 rounded-sm'></div>
                        <div className='bg-violet-500 w-5 h-1 rounded-sm'></div>
                    </div>

                </button>

                <div
                    className={
                        `md:flex flex-col md:flex-row  w-full md:w-auto items-start ${!state ? "hidden" : "flex flex-col"} 
                        md:space-x-4 md:space-x-reverse space-y-4 md:space-y-0 mt-2 md:mt-0`
                    }
                >
                    <Link href="/">
                        <a>
                            <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">صفحه اصلی</button>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a>
                            <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">درباره ما</button>
                        </a>
                    </Link>
                    {
                        authenticate ?
                            <>
                                <Link href="/dashboard">
                                    <a>
                                        <button className="px-3 rounded-lg text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">داشبورد</button>
                                    </a>
                                </Link>
                                <AvatarItems />
                            </>

                            :
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
                    }

                </div>


            </div>
        </nav>
    );
}

export default Navbar;