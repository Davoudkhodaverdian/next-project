
function WorkExperienceInput({ workExperience, setValueInput }) {

    return (
        <div>
            <select id="workExperience" name="workExperience" value={workExperience}
                onChange={setValueInput.bind(this, "workExperience")} >
                <option value="lessoneyear">کمتر ازیک سال</option>
                <option value="betweenoneandtwoyear">بین یک تا دو سال</option>
                <option value="moretwoyear">بیشتر از دو سال</option>
            </select>
            <label htmlFor="workExperience">سابقه کار</label>
        </div>
    )
}

export default WorkExperienceInput
