
function NormalRow({ element, UserData, index }) {

    let elem = UserData[element];
    let txt = elem === "lessoneyear" ? "کمتر ازیک سال" : elem === "betweenoneandtwoyear" ? "بین یک تا دو سال" : "بیشتر از دو سال";

    return (
        <>
            {
                element === "workExperience" ?
                    <td key={index} className="py-2 px-4 mx-2">
                        <div className="max-w-[120px] overflow-hidden overflow-ellipsis">{txt}</div>
                    </td> :
                    <td className="py-2 px-4 mx-2" key={index}>
                        <div className="max-w-[120px] overflow-hidden overflow-ellipsis">
                            {UserData[element]}
                        </div>
                    </td>}
        </>
    )
}

export default NormalRow