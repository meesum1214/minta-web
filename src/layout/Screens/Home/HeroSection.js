import { Image } from "@mantine/core"

export default () => {
    return (
        <div className="flex justify-center">
            <div className="md:p-0 p-8 md:mx-8 md:flex md:justify-between items-center max-w-[1200px] w-full">
                <div className="md:w-[45%]">
                    <div className="text-3xl font-bold text-gray-700">Career Training Center</div>

                    <div className="text-lg text-gray-500 my-5">
                        Manchester International Training Academy (MINTA) is a premier education provider that offers a wide range of professional development courses for individuals and organizations.
                    </div>

                    <div className="bg-primary rounded-full cursor-pointer p-3 md:w-60 flex justify-center items-center text-white text-xl font-semibold">Discover Programs</div>
                </div>

                <div className="md:w-[55%] flex justify-center">
                    <Image
                        src="/learning.png"
                        alt="random-image"
                        // width={300}
                        className="rounded-full mt-10"
                    />
                </div>
            </div>
        </div>
    )
}