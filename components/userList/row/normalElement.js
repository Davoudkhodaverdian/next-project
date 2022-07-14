import PropTypes from 'prop-types';

function NormalElement({ element, UserData }) {

    let elem = UserData[element];
    let txt = elem === "lessoneyear" ? "کمتر ازیک سال" : elem === "betweenoneandtwoyear" ? "بین یک تا دو سال" : "بیشتر از دو سال";

    return (
        <>
            {
                element === "workExperience" ?
                    <td className="py-2 px-4 mx-2">
                        <div className="max-w-[120px] overflow-hidden overflow-ellipsis">{txt}</div>
                    </td> :
                    <td className="py-2 px-4 mx-2">
                        <div className="max-w-[120px] overflow-hidden overflow-ellipsis">{elem}</div>
                    </td>
            }
        </>
    )
}

export default NormalElement

NormalElement.propTypes = {
    element: PropTypes.string,
    UserData: PropTypes.object
};