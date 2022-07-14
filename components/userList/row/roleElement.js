import PropTypes from 'prop-types';
function NormalRow({ editedRole ,setValueInput}) {


    return (
        <>
            <td className="px-2 outline-hidden">
                <select id="user-type" name="user-type" value={editedRole}
                    onChange={setValueInput.bind(this, "editedRole")} >
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </select>
            </td>
        </>
    )
}

export default NormalRow

NormalRow.propTypes = {
    setValueInput: PropTypes.func,
    editedRole: PropTypes.string
};