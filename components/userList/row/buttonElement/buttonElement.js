


import EditedButtons from './editedButtons';
import NormalButtons from './normalbuttons';

function ButtonElement({ edit, state, UserData, setState }) {

    return (
        <td className="px-2">
            {
                edit ? <EditedButtons setState={setState} UserData={UserData} state={state} />
                    : <NormalButtons setState={setState} UserData={UserData} />
            }
        </td>
    )
}

export default ButtonElement