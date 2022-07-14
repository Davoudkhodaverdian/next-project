

import { useState } from 'react';
import NarmalItem from './normalItem';
import EditedItem from './editedItem';

function TodoItem({ data }) {

    const [edit, seteditItem] = useState(false);

    //set edit state for current item
    const setEditItemHandler = (boolean) => {
        seteditItem(boolean)
    }

    return (

        <div className="flex mb-4 items-center">
            {
                !edit ?
                    <NarmalItem data={data} setEditItemHandler={setEditItemHandler} /> :
                    <EditedItem data={data} setEditItemHandler={setEditItemHandler} />
            }
        </div>

    );
}

export default TodoItem;