import { useDispatch } from 'react-redux';
import {increment } from './../../store/slices/counterSlice'

function IncrementCounter() {

    const dispatch = useDispatch();
    const incrementHandler = () => dispatch(increment());


    return (
        <>
            <button onClick={incrementHandler} className="px-3 mx-2 rounded-md text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300">increment</button>
        </>
    )
}

export default IncrementCounter