import { GrInstagram } from 'react-icons/gr'
import { RiFacebookFill } from 'react-icons/ri'
import { BsYoutube } from 'react-icons/bs'
import { Divider } from '@mantine/core'

export default () => (
    <div className='bg-secondary'>
        <div className="text-white py-12 px-8">
            <div className="w-full text-[28px] font-bold text-gray-300">Connect With Us</div>

            <div className='flex mt-2 mb-4'>
                <a href='#' target='_blank' className='rounded-lg cursor-pointer mr-2 bg-gray-800 w-10 h-10 flex justify-center items-center'><RiFacebookFill className='text-white' size={25} /></a>
                <a href='#' target='_blank' className='rounded-lg cursor-pointer mr-2 bg-gray-800 w-10 h-10 flex justify-center items-center'><GrInstagram className='text-white' size={25} /></a>
                <a href='#' target='_blank' className='rounded-lg cursor-pointer mr-2 bg-gray-800 w-10 h-10 flex justify-center items-center'><BsYoutube className='text-white' size={25} /></a>
            </div>

            <div className='flex justify-between'>
                <div className='w-[49%]'>
                    <div className="text-2xl font-bold text-gray-300 mb-2">Pages</div>
                    <div className="text-gray-300 mb-4">Home</div>
                    <div className="text-gray-300 mb-4">Courses</div>
                    <div className="text-gray-300 mb-4">Our Team</div>
                    <div className="text-gray-300">About Us</div>
                </div>

                <div className='w-[49%]'>
                    <div className="text-2xl font-bold text-gray-300 mb-4">Contact</div>
                    <div className="text-gray-300 mb-4">Headquater Office - Manchester - UK</div>
                    <div className="text-gray-300 mb-4">+447791646536</div>
                    <div className="text-gray-300">info@minta.uk</div>
                </div>
            </div>

        </div>

        <Divider />

        <div className='flex justify-center text-white py-3'>Copyright © 2021 All rights reserved.</div>
    </div>
)