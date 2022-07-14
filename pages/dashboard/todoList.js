

import TodoList from '../../components/todoList/todoList';

import { setTodo } from "../../store/slices/todoSlice";
import { useDispatch } from 'react-redux';

export default function TodoListPage({ list }) {

    const dispatch = useDispatch();
    dispatch(setTodo(list.data));

    return (<TodoList />);
}

export async function getServerSideProps() {

    // Fetch data from external API
    const res = await fetch(`https://629ef5bce67470ca4dec9bcb.endapi.io/todos`)
    const list = await res.json()

    // Pass data to the page via props
    return { props: { list } }
}
