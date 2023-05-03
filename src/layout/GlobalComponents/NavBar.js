import { Burger, Drawer, Image } from "@mantine/core"
import Btn from "./Btn"
import { useState } from "react"
import { GrClose } from "react-icons/gr";

export default () => {

    const [opened, setOpened] = useState(false)

    return (
        <div className="p-3 flex justify-between items-center w-full border-b">
            <Image
                src="/logo.png"
                alt="Logo"
                width={130}
            />

            <div className="flex justify-between w-36">
                <Btn>Enroll Now</Btn>
                <Burger opened={opened} onClick={() => setOpened(!opened)} />

                <Drawer
                    opened={opened}
                    onClose={() => setOpened(!opened)}
                    withCloseButton={false}
                    padding={0}
                >
                    <div className="bg-primary flex justify-end p-4 m-0">
                        <GrClose onClick={() => setOpened(false)} className="text-white" size={25} />
                    </div>

                    <div className="p-8 text-sm font-semibold">
                        <div className="mb-4">HOME</div>
                        <div className="mb-4">COURSES</div>
                        <div className="mb-4">OUR TEAM</div>
                        <div className="mb-4">ABOUT US</div>
                        <div className="mb-4">CONTACT US</div>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}