
import { useDispatch } from "react-redux";
import { setShow } from "../../store/slices/modalSlice";

function AddUser() {

    const dispatch = useDispatch()
    //show modal handler
    const addUserHandler = () => { dispatch(setShow(true)) }

    return (
        <div className="container p-3 ">
            <div className="flex justify-between">
                <div >
                    <p className="text-lg">Users</p>
                </div>
                <div>
                    <button onClick={addUserHandler} className="px-3 py-1 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 ">Add user</button>
                </div>
            </div>
        </div>
    );
}

export default AddUser;