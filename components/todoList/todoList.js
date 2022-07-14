

import AddTodo from './addTodo';
import { useSelector } from 'react-redux'
import TodoItem from './todoItem';

import DashboardLayout from "../dashboard/dashboardLayout";

function TodoList() {

    const todo = useSelector((state) => state.todo.list)

    return (
        <DashboardLayout>
            <div className="w-full flex items-center justify-center  " dir='ltr'>
                <div className="bg-slate-50 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-gray-700">Todo List</h1>
                        <AddTodo />
                    </div>
                    <div className='max-h-[300px] overflow-auto'>
                        {
                            todo.length === 0 ? <p className='text-center'>there is nothing to show</p> :
                                todo.map(item => <TodoItem key={item.id} data={item} />)
                        }
                    </div>
                </div>
            </div>
        </DashboardLayout>

    );
}

export default TodoList;
