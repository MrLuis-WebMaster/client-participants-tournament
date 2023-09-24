
const ButtonFloat = () => {
    return (
        <div className="fixed bottom-8 left-8 z-[99]">
            <div
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-3xl bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
            >
                <a
                    href="https://wa.link/3z8vat"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="social-link"
                    className="text-[#CED3F6] hover:text-dark text-xl"
                >
                    <i className='bx bxl-whatsapp'></i>
                </a>
            </div>
        </div>
    )
}

export default ButtonFloat