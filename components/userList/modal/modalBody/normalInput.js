

function NameInput({ setValueInput }) {

    return (


        <>
            {

                ["name", "title", "field", "age", "email"].map((item, index) => {

                    let text = item == "title" ? "عنوان شغلی" : item == "field" ? "رشته تحصیلی" :
                        item == "age" ? "سن" : item === "name" ? "نام و نام خانوادگی" : "ایمیل";
                    return (
                        <div key={index}>
                            <div>
                                <label className="px-1" htmlFor={item}>{text}</label>
                            </div>
                            <div>
                                <input type="text" id={item} name={item} className="appearance-none rounded relative px-3 py-2 m-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder={text} onChange={setValueInput.bind(this, item)} />
                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}

export default NameInput
