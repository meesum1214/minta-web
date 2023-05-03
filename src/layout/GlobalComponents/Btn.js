export default ({ onClick, children }) => {
    return (
        <div
            className="flex justify-center items-center py-1 px-3 bg-primary rounded-full font-semibold text-white text-sm cursor-pointer"
            onClick={onClick}
        >
            {children}
        </div>
    )
}