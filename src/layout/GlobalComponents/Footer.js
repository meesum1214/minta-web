import { FaFacebookF } from 'react-icons/fa'
import { RiFacebookFill } from 'react-icons/ri'

export default () => (
    <div className="bg-secondary text-white p-6">
        <div className="w-full text-3xl font-bold text-gray-300">Connect With Us</div>
        <div className='flex mt-2'>
            <div className='rounded-lg mr-2 bg-gray-800 w-10 h-10 flex justify-center items-center'><RiFacebookFill className='text-white' size={25} /></div>
            <div className='rounded-lg mr-2 bg-gray-800 w-10 h-10 flex justify-center items-center'><RiFacebookFill className='text-white' size={25} /></div>
            <div className='rounded-lg mr-2 bg-gray-800 w-10 h-10 flex justify-center items-center'><RiFacebookFill className='text-white' size={25} /></div>
            <div className='rounded-lg mr-2 bg-gray-800 w-10 h-10 flex justify-center items-center'><RiFacebookFill className='text-white' size={25} /></div>
            <div className='rounded-lg mr-2 bg-gray-800 w-10 h-10 flex justify-center items-center'><RiFacebookFill className='text-white' size={25} /></div>
        </div>
    </div>
)