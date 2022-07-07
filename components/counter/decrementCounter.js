
import { useDispatch } from 'react-redux';
import {decrement } from './../../store/slices/counterSlice';

function DecrementCounter() {

    const dispatch = useDispatch();
    const decrementHandler = () => {
        dispatch(decrement())
    }

    return (
        <>
            <button  onClick={decrementHandler} className="px-3 mx-2 rounded-md text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300">decrement</button>
        </>
    )
}

export default DecrementCounter