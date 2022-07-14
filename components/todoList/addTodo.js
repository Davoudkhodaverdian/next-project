
import { useState } from 'react';
import { addTodo } from "../../store/slices/todoSlice"
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

function AddTodo() {

    const [inputTodo, setInputTodo] = useState("");
    const dispatch = useDispatch()
    const inputTodoHandler = (event) => { setInputTodo(event.target.value) }

    const addTodoHandler = async (event) => {

        if (inputTodo.length > 0) {
            try {
                let res = await fetch(`https://629ef5bce67470ca4dec9bcb.endapi.io/todos`, {
                    method: "POST",
                    body: JSON.stringify({ text: inputTodo, done: false }),
                    headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
                });
                const data = await res.json();
                
                dispatch(addTodo(data.data))
                toast(<div className='vazir-matn-font'>مورد نظر اضافه شد todo</div>)
                setInputTodo("");

            } catch (error) {console.log(error)}
        } else { alert("مقداری وارد نشده") }
    }

    return (
        <div className="flex mt-4">
            <input className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo"
                onChange={inputTodoHandler}
                value={inputTodo} />
            <button onClick={addTodoHandler}
                className="flex-shrink-0 p-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700">
                Add
            </button>
        </div>
    );
}

export default AddTodo;