import React, { useEffect } from 'react'
import db from '../firebase'
import { MYSVG } from '../Helpers/MYSVG'

const Content = () => {

  return (
    <main className='flex-1 m-2 '>
      <header>
        <div className='flex items-center justify-between  mb-2 '>
          <div className='text-xl font-bold'>Home</div>
          <MYSVG path="/assets/svg/home.svg" svgClassName="h-7 w-7" />
        </div>
        <div className='flex items-start gap-3'>
          <div className='h-24'>
            <img alt='profile' className='w-14 h-14' src='https://pbs.twimg.com/profile_images/1426290706713399298/eWfBxuNl_400x400.jpg'></img>
          </div>
          <div className='flex flex-col mt-2 justify-between'>
            <div className='h-16'>
              <input type="text" placeholder="What's happening?" className='outline-none w-full' />
            </div>
            <div className='flex items-center justify-between fill-primary-base'>
              <div className='flex gap-3'>
                <MYSVG path="/assets/svg/01-media.svg" svgClassName="h-6 w-6 " />
                <MYSVG path="/assets/svg/02-gif.svg" svgClassName="h-6 w-6" />
                <MYSVG path="/assets/svg/03-poll.svg" svgClassName="h-6 w-6" />
                <MYSVG path="/assets/svg/04-emoji.svg" svgClassName="h-6 w-6" />
                <MYSVG path="/assets/svg/05-shedule.svg" svgClassName="h-6 w-6" />
                <MYSVG path="/assets/svg/06-location.svg" svgClassName="h-6 w-6" />
              </div>
              <button className='m-2 px-4 py-3 bg-primary-base text-white font-bold rounded-full'>Tweet</button>
            </div>
          </div>
        </div>
      </header>
    </main>
  )
}

export default Content