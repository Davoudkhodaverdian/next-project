

function RoleInput({ Role, setValueInput }) {

    return (
        <div>
            <select id="user-type" name="user-type" value={Role} onChange={setValueInput.bind(this, "role")} >
                <option value="user">user</option>
                <option value="admin">admin</option>
            </select>
            <label htmlFor="user-type">نقش</label>
        </div>
    )
}

export default RoleInput
