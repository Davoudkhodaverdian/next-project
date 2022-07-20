

import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../store/slices/themeSlice'

export default function Example() {


    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const themeHandler = () => {
        dispatch(toggleTheme(theme === "dark" ? "light" : "dark"));
    }

    return (
        <div className="">
            <div onClick={themeHandler} className="cursor-pointer">
                <div className={`pointer-events-auto h-6 w-10 rounded-full p-1 transition duration-200 ease-in-out ${theme === "dark" ? 'bg-slate-900' : 'bg-slate-500'}`}>
                    <div className={`h-4 w-4 rounded-full bg-white shadow-sm transition duration-200 ease-in-out ${theme === "dark"  ? 'translate-x-[-16px]' : 'translate-x-0'}`}></div>
                </div>
            </div>
        </div>
    )
}