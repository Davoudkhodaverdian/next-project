import ModalBody from "./modalBody/modalBody";

function Modal({ show, setShow }) {

    //close modal handler
    const closeHandler = () => { setShow(false) }

    return (
        <>
            <div className={`${show ? "" : "hidden"} fixed inset-0  h-full w-full bg-black bg-opacity-30 overflow-auto `}>
                <div className={`fixed inset-0  h-full w-full  p-3 transition-all`} onClick={closeHandler}></div>
                <div className="relative modal-container w-[100% - 40px] md:w-3/4 lg:w-2/4 bg-white mx-5 md:mx-auto mt-10 rounded shadow ">
                    <div className="flex justify-end">
                        <button onClick={closeHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                    </div>
                    <div className="p-3 flex flex-col text-right " >
                        <ModalBody closeModal={closeHandler} />
                    </div>

                </div>
            </div>
        </>

    );
}

export default Modal;