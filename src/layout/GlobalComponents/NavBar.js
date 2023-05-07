import { Burger, Drawer, Image } from "@mantine/core"
import Btn from "./Btn"
import { useState } from "react"
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";

export default () => {

    const [opened, setOpened] = useState(false)
    const router = useRouter()

    return (
        <div className="sticky top-0 z-10 p-3 flex justify-between items-center w-full bg-white border-b">
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
                        <div className="mb-4" onClick={() => { router.push('/'); setOpened(false) }}>HOME</div>
                        <div className="mb-4" onClick={() => { router.push('/courses'); setOpened(false) }}>COURSES</div>
                        <div className="mb-4" onClick={() => { router.push('/our-team'); setOpened(false) }}>OUR TEAM</div>
                        <div className="mb-4" onClick={() => { router.push('/about-us'); setOpened(false) }}>ABOUT US</div>
                        <div className="mb-4" onClick={() => { router.push('/contact-us'); setOpened(false) }}>CONTACT US</div>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}