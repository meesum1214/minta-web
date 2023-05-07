import Btn from "@/layout/GlobalComponents/Btn"
import { TextInput, Textarea } from "@mantine/core"
import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import { HiLocationMarker } from 'react-icons/hi'
import { AiTwotonePhone } from 'react-icons/ai'
import { MdEmail } from "react-icons/md"

export default () => {

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    })

    const onSubmit = () => {
        if (data.name === '') { alert('Please Enter Name!'); return }
        if (!data.phone) { alert('Please Enter Phone!'); return }
        if (!data.email) { alert('Please Enter Email!'); return }
        if (!data.subject) { alert('Please Enter Subject!'); return }
        if (!data.message) { alert('Please Enter Message!'); return }

        console.log("data >> ", data)
    }

    return (
        <div>
            <div className="bg-gray-700 text-sm text-white p-4">{"Home > Contact Us"}</div>

            <div className="text-2xl text-center text-gray-700 font-bold py-8">Contact Us</div>

            <div className="w-full p-4">
                <TextInput
                    placeholder="Enter Name"
                    className="mb-2 w-full"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <PhoneInput
                    country={'us'}
                    placeholder="Enter Phone Number"
                    className="mb-2"
                    inputStyle={{ width: '100%' }}
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e })}
                />
                <TextInput
                    placeholder="Enter Email"
                    className="mb-2 w-full"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <TextInput
                    placeholder="Enter Subject"
                    className="mb-2 w-full"
                    value={data.subject}
                    onChange={(e) => setData({ ...data, subject: e.target.value })}
                />
                <Textarea
                    placeholder="Enter Your Message!"
                    className="mb-2 w-full"
                    value={data.message}
                    onChange={(e) => setData({ ...data, message: e.target.value })}
                    minRows={5}
                ></Textarea>
                <Btn onClick={onSubmit}>Submit</Btn>
            </div>

            <div className="w-full p-4">
                <div className="text-2xl text-center text-gray-700 font-bold pt-8 mb-3">Contact Us</div>

                <div className="flex items-center"><HiLocationMarker size={20} className="text-primary mr-2 mb-2" />Headquarter Office - Manchester - UK</div>
                <div className="flex items-center"><AiTwotonePhone size={20} className="text-primary mr-2 mb-2" />+447791646536</div>
                <div className="flex items-center"><MdEmail size={20} className="text-primary mr-2 mb-2" />info@minta.uk</div>
            </div>
        </div>
    )
}