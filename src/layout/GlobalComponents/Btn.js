export default ({ onClick, children }) => {
    return (
        <div
            className="flex justify-center items-center h-9 py-1 px-5 bg-primary rounded-full font-semibold text-white text-sm cursor-pointer"
            onClick={onClick}
        >
            {children}
        </div>
    )
}