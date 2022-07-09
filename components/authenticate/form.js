
import FieldData from './fieldData.json'
import Link from 'next/link';

function Form({ type, confirmHandler, setValueInput }) {

    return (
        <form className=" p-2">
            {
                FieldData.map((item, index) => (
                    item.name === "name" && type === "login" ? null :
                        <div className="my-4" key={index}>
                            <label htmlFor={item.id} className="">{item.descreption}</label>
                            <input id={item.id} name={item.name} type={item.type} required placeholder={item.descreption}
                                className="appearance-none rounded relative block w-full px-3 py-2 my-1 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                onChange={setValueInput.bind(null, item.name)}
                            />
                        </div>
                ))
            }
            <div className="mx-1 my-4">
                <Link href="/">
                    <a>
                        <input type="submit" name="submit" value="بازگشت" className="px-3 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300 mx-1" />
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <input onClick={confirmHandler}
                            type="submit" name="submit" value={type === "register" ? "ثبت نام" : "ورود"} className="px-3 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1" />
                    </a>
                </Link>
            </div>
        </form>
    )
}

export default Form
