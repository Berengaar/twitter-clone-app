import React from 'react'

const Userbox = () => {
    return (
        <div className='flex flex-col-3 hover:bg-gray-200 pl-4 p-2 rounded-full items-center gap-4'>
            <img alt='profile' className='w-11 h-11' src='https://pbs.twimg.com/profile_images/1426290706713399298/eWfBxuNl_400x400.jpg'></img>
            <div className='flex flex-col'>
                <div className='text-lg font-semibold'>Emirhan Avcı</div>
                <div className='text-gray-500'>@Berengaar</div>
            </div>
            <div className=' font-bold'>...</div>
        </div>
    )
}

export default Userbox