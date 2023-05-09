import { p1, p2, p3, p4, p5, p6 } from "@/layout/GlobalComponents/text"

export default () => {
    return (
        <div className="md:flex md:justify-center">
            <div className="max-w-[1200px] w-full">
                <div className="md:hidden bg-gray-700 text-sm text-white p-4">{"Home > About Us"}</div>

                <div className="text-2xl text-center text-gray-700 font-bold py-8">About Us</div>

                <div className="px-4 pb-8 text-gray-500 text-justify">
                    <div>{p1}</div>
                    <br />
                    <div>{p2}</div>
                    <br />
                    <div>{p3}</div>
                    <br />
                    <div>{p4}</div>
                    <br />
                    <div>{p5}</div>
                    <br />
                    <div>{p6}</div>
                </div>
            </div>
        </div>
    )
}