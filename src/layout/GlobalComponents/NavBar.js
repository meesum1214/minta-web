import { Burger, Drawer, Image } from "@mantine/core"
import Btn from "./Btn"
import { useState } from "react"
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";

export default () => {

    const [opened, setOpened] = useState(false)
    const router = useRouter()

    return (
        <>
            <div className="sticky top-0 z-10 w-full bg-white border-b flex justify-center">
                <div className="md:max-w-[1200px] w-full flex justify-between items-center p-3">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={130}
                    />

                    <div className="hidden md:flex justify-between w-96 text-sm font-semibold">
                        <div className="cursor-pointer hover:text-primary transition-all" onClick={() => router.push('/')}>HOME</div>
                        <div className="cursor-pointer hover:text-primary transition-all" onClick={() => router.push('/courses')}>COURSES</div>
                        {/* <div className="cursor-pointer hover:text-primary transition-all" onClick={() => router.push('/our-team')}>OUR TEAM</div> */}
                        <div className="cursor-pointer hover:text-primary transition-all" onClick={() => router.push('/about-us')}>ABOUT US</div>
                        <div className="cursor-pointer hover:text-primary transition-all" onClick={() => router.push('/contact-us')}>CONTACT US</div>
                    </div>

                    <div className="flex justify-between md:w-auto w-36">
                        <Btn>Enroll Now</Btn>
                        <div className="md:hidden"><Burger opened={opened} onClick={() => setOpened(!opened)} /></div>
                    </div>
                </div>
            </div>

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
                    {/* <div className="mb-4" onClick={() => { router.push('/our-team'); setOpened(false) }}>OUR TEAM</div> */}
                    <div className="mb-4" onClick={() => { router.push('/about-us'); setOpened(false) }}>ABOUT US</div>
                    <div className="mb-4" onClick={() => { router.push('/contact-us'); setOpened(false) }}>CONTACT US</div>
                </div>
            </Drawer>
        </>
    )
}