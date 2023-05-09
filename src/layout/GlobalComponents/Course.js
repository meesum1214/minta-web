import { Image } from "@mantine/core"

export default ({ img, title }) => {
    return (
        <div className="w-[280px] h-[400px] bg-white rounded-xl shadow-3xl cursor-pointer">
            <Image
                src={img}
                alt="Announced Course"
                height={200}
                radius={12}
            />

            <div className="h-[200px] p-4 flex flex-col justify-between">
                <div className="text-lg">{title}</div>

                <div className="w-16 flex justify-center items-center rounded-md font-semibold text-primary bg-red-300">Course</div>
            </div>
        </div>
    )
}