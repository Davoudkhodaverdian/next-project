
function WorkExperienceElement({ editedWorkExperience,setValueInput }) {

    return (
        <td className="px-2">
            <select id="workExperience" name="workExperience" value={editedWorkExperience}
                onChange={setValueInput.bind(this, "editedWorkExperience")} >
                <option value="lessoneyear">کمتر ازیک سال</option>
                <option value="betweenoneandtwoyear">بین یک تا دو سال</option>
                <option value="moretwoyear">بیشتر از دو سال</option>
            </select>
        </td>
    )
}

export default WorkExperienceElement