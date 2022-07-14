


import EditedButtons from './editedButtons';
import NormalButtons from './normalbuttons';
import PropTypes from 'prop-types';

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

ButtonElement.propTypes = {
    edit: PropTypes.bool,
    setState: PropTypes.func,
    UserData: PropTypes.object,
    state: PropTypes.object,
};
