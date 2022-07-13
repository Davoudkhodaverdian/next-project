import Items from './items.json'

function NormalInput({ setValueInput }) {

    return (
        <>
            {
                Items.map((item) => (
                    <div key={item.id}>
                        <div><label className="px-1" htmlFor={item.name}>{item.descreption}</label></div>
                        <div>
                            <input type={item.name === "userPassword" ? "password" : "text"} id={item.name} name={item.name}
                                className="appearance-none rounded relative px-3 py-2 m-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder={item.descreption} onChange={setValueInput.bind(this, item.name)} />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default NormalInput
