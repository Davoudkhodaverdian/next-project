
import PropTypes from 'prop-types';

function NormalEditedElement({ element, editedTitle, editedField, editedAge, editedName, editedEmail, setValueInput }) {

    let text = element === "title" ? "عنوان شغلی" :
        element === "field" ? "رشته تحصیلی" : element === "age" ? "سن" : element === "name" ? "نام" : "ایمیل";
    let valueItem = element === "title" ? editedTitle :
        element === "field" ? editedField : element === "age" ? editedAge : element === "name" ? editedName : editedEmail;

    return (
        <td className="px-2">
            {
                <input type="text" className="outline-none w-full border border-slate-400 rounded-md px-1" id={element} name={element}
                    placeholder={text} value={valueItem}
                    onChange={
                        setValueInput.bind(
                            this, ("edited" + element.charAt(0).toUpperCase() + element.slice(1))
                        )}
                />
            }
        </td>
    )
}

export default NormalEditedElement

NormalEditedElement.propTypes = {
    element: PropTypes.string, editedTitle: PropTypes.string, editedField: PropTypes.string,
    editedAge: PropTypes.string, editedName: PropTypes.string, editedEmail: PropTypes.string,
    setValueInput: PropTypes.func

};

