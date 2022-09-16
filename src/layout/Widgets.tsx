import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { MYSVG } from '../Helpers/MYSVG'

const Widgets = () => {
  return (
    <aside className=' w-80 ml-5'>
      <div className='flex items-center mx-1 my-2 px-4 py-3 gap-2 bg-gray-100 rounded-full focus-within:ring-1 focus-within:ring-primary-base'>
        <MYSVG path="/assets/svg/search.svg" svgClassName="h-5 w-5 focus-within:text-primary-base" />
        <input className='bg-transparent outline-none ' placeholder="Search Twitter" type="text" />
      </div>
      <div>
        <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'TwitterDev'
        }}
        options={{
          height: '1000'
        }}
      /></div>
    </aside>
  )
}

export default Widgets