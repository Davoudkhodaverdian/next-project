import { editTodo } from "../../store/slices/todoSlice"
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function TodoItem({ data, setEditItemHandler }) {

    const [inputEdit, setInputEdit] = useState(data.text);
    const dispatch = useDispatch();
    const inputTodoHandler = (event) => { setInputEdit(event.target.value) }

    //editTodoHandler sent id to todoSlice editTodo 
    const editTodoHandler = async () => {

        try {
            let res = await fetch(`https://629ef5bce67470ca4dec9bcb.endapi.io/todos/${data.id}`, {
                method: "PUT",
                body: JSON.stringify({ text: inputEdit }),
                headers: { 'Content-Type': 'application/json', 'charset': 'utf-8 ' }
            });
            dispatch(editTodo({ id: data.id, text: inputEdit }))
            setEditItemHandler(false)

        } catch (error) { console.log(error) }
    }

    return (
        <>
            <input className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo"
                onChange={inputTodoHandler}
                value={inputEdit} />
            <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-blue-700 border-blue-700 hover:text-white hover:bg-blue-700"
                onClick={editTodoHandler} >
                edited</button>
        </>
    );
}

export default TodoItem;