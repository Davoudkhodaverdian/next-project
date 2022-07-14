
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { removeTodo, toggleDoneTodo } from "../../store/slices/todoSlice"
import PropTypes from 'prop-types';

function NarmalItem({ data, setEditItemHandler }) {

    const dispatch = useDispatch();

    //removeTodoHandler sent id to todoSlice removeTodo 
    const removeTodoHandler = async () => {

        try {
            let res = await fetch(`https://629ef5bce67470ca4dec9bcb.endapi.io/todos/${data.id}`, {
                method: "DELETE", headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
            });
            dispatch(removeTodo(data.id));
            toast(<div className='vazir-matn-font'>حذف انجام شد</div>);
        } catch (error) { console.log(error) }
    }

    //toggleTodoHandler sent id to todoSlice toggleDoneTodo
    const toggleTodoHandler = async () => {

        try {
            let res = await fetch(`https://629ef5bce67470ca4dec9bcb.endapi.io/todos/${data.id}`, {
                method: "PUT",
                body: JSON.stringify({ done: !data.done }),
                headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
            });
            dispatch(toggleDoneTodo(data.id));
            toast(<div className='vazir-matn-font'>ویرایش انجام شد</div>);
        } catch (error) { console.log(error) }
    }

    return (

        <>
            <p className={`w-full ${data.done ? "line-through text-green-700" : "text-gray-700"}`}>{data.text}</p>
            <button
                className={`flex-shrink-0 p-2 ml-4 border-2 rounded hover:text-white 
                            ${data.done ? "text-green-700 border-green-700 hover:bg-green-700" : "text-gray-700 border-gray-700 hover:bg-gray-700"}`}
                onClick={toggleTodoHandler}  >{data.done ? "Done" : "Not done"}</button>
            <button
                className="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
                onClick={removeTodoHandler} >
                Remove</button>
            <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700"
                onClick={setEditItemHandler.bind(null, true)} >
                edit</button>
        </>



    );
}

export default NarmalItem;

NarmalItem.propTypes = {
    data: PropTypes.object,
    setEditItemHandler: PropTypes.func
};