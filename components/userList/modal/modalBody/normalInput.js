

function NameInput({ setValueInput }) {

    return (


        <div>
            {

                ["name", "title", "field", "age", "email"].map((item, index) => {

                    let text = item == "title" ? "عنوان شغلی" : item == "field" ? "رشته تحصیلی" :
                        item == "age" ? "سن" : item === "name" ? "نام و نام خانوادگی" : "ایمیل";
                    return (
                        <div key={index}>
                            <input type="text" id={item} name={item} className="input-custom"
                                placeholder={text} onChange={setValueInput.bind(this, item)} />
                            <label htmlFor={item}>{text}</label>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default NameInput
