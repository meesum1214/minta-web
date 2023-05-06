import announsedCourses from "@/layout/mapping/announsedCourses"
import { Image, ScrollArea } from "@mantine/core"

export default () => {
    return (
        <div className="bg-gray-200 py-3">
            <div className="text-2xl font-bold text-gray-700 text-center my-3">Announced Courses</div>

            <ScrollArea className="w-screen">
                <div className="flex">
                    {
                        announsedCourses.map(({ img, title }, i) => (
                            <div key={i} className="mx-3 bg-white rounded-xl shadow-2xl cursor-pointer">
                                <div>
                                    <Image
                                        src={img}
                                        alt="Announced Course"
                                        width={300}
                                        height={200}
                                        radius={12}
                                    />
                                    <div className="p-6 text-lg">{title}</div>
                                </div>

                                <div className="w-16 m-6 flex justify-center items-center rounded-md font-semibold text-primary bg-red-300">Course</div>
                            </div>
                        ))
                    }
                </div>
            </ScrollArea>
        </div>
    )
}