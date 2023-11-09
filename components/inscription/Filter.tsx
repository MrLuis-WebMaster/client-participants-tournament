

const Filter = ({
    searchTerm,
    setSearchTerm,
    handleSearch
}: {
    searchTerm: string,
    setSearchTerm: (e:string) => void,
    handleSearch: () => void,
}) => {
    return (
        <div className="mb-4 flex">
            <div className='ml-auto flex'>
                <input
                    type="text"
                    className="rounded-l-md w-full p-3 bg-dark"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="rounded-r-md bg-primary py-3 px-6 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 text-center"
                    onClick={handleSearch}
                >
                    Buscar
                </button>
            </div>
        </div>
    )
}

export default Filter