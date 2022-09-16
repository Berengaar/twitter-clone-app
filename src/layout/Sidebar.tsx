import React,{useState} from 'react'
import Sidelink from '../components/Sidelink'
import Userbox from '../components/Userbox';
import { MYSVG } from '../Helpers/MYSVG'

const Sidebar = () => {
    const [active,setActive]=useState("Home");
    return (
        <div className='flex flex-col justify-between w-72  px-2'>
            <div className='mt-2'>
                <MYSVG path="/assets/svg/twitterIcon.svg" svgClassName="h-12 w-12  rounded-full p-1 hover:bg-primary-light hover:cursor-pointer hover:transform hover:transition-colors hover:duration-200" />{" "}
                <nav className='mb-4'>
                        <Sidelink active={active} setActive={setActive}/>
                </nav>
                <button className='bg-primary-base hover:bg-primary-dark text-center rounded-full text-white w-11/12 py-3 font-bold shadow-lg transform transition-colors duration-200'>Tweet</button>
            </div>

            <div>
                <Userbox/>
            </div>
        </div>

    )
}

export default Sidebar