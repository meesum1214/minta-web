import courses from "@/layout/mapping/courses"
import { Divider } from "@mantine/core"

export default () => {
    return (
        <div>
            <div className="text-2xl font-bold text-gray-700 text-center my-8">Our Courses Includes</div>

            {
                courses.map(({ icon, title, description }, i) => (
                    <div key={i}>
                        <div className="flex justify-between">
                            {icon}
                            <div className="w-[75%]">
                                <div className="font-bold text-lgx text-gray-700">{title}</div>
                                <div>{description}</div>
                            </div>
                        </div>

                        <Divider my={10} />
                    </div>
                ))
            }
        </div>
    )
}