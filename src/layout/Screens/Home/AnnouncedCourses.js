import Course from "@/layout/GlobalComponents/Course"
import announsedCourses from "@/layout/mapping/announsedCourses"
import { ScrollArea } from "@mantine/core"

export default () => {
    return (
        <div className="md:flex md:justify-center">
            <div className="md:py-0 py-8 max-w-[1200px] w-full">
                <div className="text-2xl font-bold text-gray-700 text-center my-3">Announced Courses</div>

                <ScrollArea className="w-full">
                    <div className="flex p-4">
                        {
                            announsedCourses.map(({ img, title }, i) => (
                                <div className="mr-4" key={i}>
                                    <Course img={img} title={title} />
                                </div>
                            ))
                        }
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}