
import DateInput from './dateInput'
import { useState } from 'react';
import ModalHandler from './modalHandler';
import NormalInput from './normalInput'
import RoleInput from './roleInput';
import WorkExperienceInput from './workExperienceInput';

function ModalBody({ closeModal }) {



    const [state, setState] = useState({
        name: "", day: "", month: "", year: "", email: "", role: "user", title: "", field: "", age: "", workExperience: "lessoneyear"
    });

    const setValueInput = (name, event) => { setState(prevState => ({ ...prevState, [name]: event.target.value })) }

    let { day, month, year, name, Role,  workExperience } = state;

    return (
        <>
            <form  dir='rtl'>
                <div className='flex flex-row flex-wrap'>
                <NormalInput setValueInput={setValueInput} name={name} />
                </div>
                <DateInput setValueInput={setValueInput} year={year} month={month} day={day} />

            
                <RoleInput Role={Role} setValueInput={setValueInput} />
                <WorkExperienceInput workExperience={workExperience} setValueInput={setValueInput} />
         

                <ModalHandler closeModal={closeModal} state={state} setState={setState} />
            </form>



        </>

    );
}

export default ModalBody;