import Course from "@/layout/GlobalComponents/Course"
import announsedCourses from "@/layout/mapping/announsedCourses"

export default () => {
    return (
        <div className="px-6">

            <div className="w-full flex flex-col items-center">
                <div className="text-2xl font-bold text-gray-700 my-6">All Courses</div>
                <div className="max-w-[1200px] grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                    {
                        announsedCourses.map(({ img, title }, i) => (
                            <div key={i} className="mb-5">
                                <Course img={img} title={title} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}