import courses from "@/layout/mapping/courses"
import { Divider } from "@mantine/core"
import { MdOutlineCastForEducation } from "react-icons/md"

export default () => {
    return (
        <div className="md:flex md:justify-center">

            <div className="max-w-[1200px] w-full">
                <div className="text-2xl font-bold text-gray-700 text-center my-8 md:hidden">Our Courses Includes</div>


                <div className="hidden md:grid grid-cols-3 gap-6 bg-white shadow-3xl p-12 mt-1">
                    {
                        courses.map(({ icon, title, description }, i) => (
                            <div className="w-60" key={i}>
                                {icon}
                                <div className="font-bold text-lgx text-gray-700">{title}</div>
                                <div>{description}</div>
                            </div>
                        ))
                    }
                </div>

                <div className="md:hidden">
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
            </div>
        </div>
    )
}