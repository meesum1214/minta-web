import Course from "@/layout/GlobalComponents/Course"
import announsedCourses from "@/layout/mapping/announsedCourses"

export default () => {
    return (
        <div className="px-6">
            <div className="text-2xl font-bold text-gray-700 my-3">All Courses</div>

            <div className="flex flex-wrap">
                {
                    announsedCourses.map(({ img, title }, i) => (
                        <div key={i} className="mr-5 mb-5">
                            <Course img={img} title={title} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}