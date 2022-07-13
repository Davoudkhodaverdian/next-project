
import { useState } from "react";
import { useSelector } from "react-redux";
import AccountLayout from "../accountLayout";
import ButtonsEditAccount from "./buttons";
import EditInputItems from "./editInputItems.json"

import { ToastContainer } from 'react-toastify';

function EditAccount() {

    const currentUser = useSelector(state => state.currentUser.currentUser);
    const [edit, setEdit] = useState(false);

    //initial data for current user
    const [state, setState] = useState({
        name: currentUser.name, email: currentUser.email, role: currentUser.role, roleworkExperience: currentUser.roleworkExperience,
        userPassword: currentUser.userPassword
    })
    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }

    return (
        <AccountLayout>
            <div><ButtonsEditAccount setEdit={setEdit} edit={edit} dataChanged={state} /></div>
            <form>
                {EditInputItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center max-w-xs">
                        <div><label className="px-1" htmlFor={item.name}>{item.descreption}</label></div>
                        <div>
                            <input type={item.name === "userPassword" ? "password" : "text"} id={item.name}
                                name={item.name} disabled={!edit} value={state[item.name]} placeholder={item.descreption}
                                className={
                                    `appearance-none rounded relative px-3 py-2  m-1 border border-gray-300
                                    placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500
                                      disabled:opacity-70focus:border-indigo-500`
                                }
                                onChange={setValueInput.bind(null, item.name)}
                            />
                        </div>
                    </div>
                ))}
            </form>
            <ToastContainer />
        </AccountLayout>
    );
}

export default EditAccount;