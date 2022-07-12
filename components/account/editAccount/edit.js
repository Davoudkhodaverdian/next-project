
import { useState } from "react";
import { useSelector } from "react-redux";
import AccountLayout from "../accountLayout";
import ButtonsEditAccount from "./buttonsEditAccount";
import InputItems from "./inputItems.json"

import { ToastContainer } from 'react-toastify';

function EditAccount() {
    const currentUser = useSelector(state => state.currentUser.currentUser);
    const [state, setState] = useState({
        name: currentUser.name, email: currentUser.email, role: currentUser.role, roleworkExperience: currentUser.roleworkExperience,
        userPassword: currentUser.userPassword
    })

    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }
    const [edit, setEdit] = useState(false);

    return (
        <AccountLayout>
            <div><ButtonsEditAccount setEdit={setEdit} edit={edit} state={state} /></div>
            <form>
                {InputItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center max-w-xs">
                        <div>
                            <label className="px-1" htmlFor={item.name}>{item.descreption}</label>
                        </div>
                        <div>
                            <input type={item.name === "userPassword" ? "password" : "text"} id={item.name} name={item.name} 
                            disabled={!edit} className={`appearance-none rounded relative px-3 py-2  m-1 border border-gray-300
                                 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500
                                   disabled:opacity-70focus:border-indigo-500`}
                                value={state[item.name]}
                                placeholder={item.descreption} onChange={setValueInput.bind(this, item.name)} />
                        </div>
                    </div>
                ))}
                
            </form>
            <ToastContainer />
        </AccountLayout>
    );
}

export default EditAccount;