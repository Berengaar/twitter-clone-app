import React from 'react'
import { MYSVG } from '../Helpers/MYSVG'


const sideLinks = [
  {
    name: "Home",
    icon: <MYSVG path="/assets/svg/home.svg" svgClassName="h-7 w-7" />
  },
  {
    name: "Explore",
    icon: <MYSVG path="/assets/svg/explore.svg" svgClassName="h-7 w-7" />
  },
  {
    name: "Notifications",
    icon: <MYSVG path="/assets/svg/notifications.svg" svgClassName="h-7 w-7" />
  },
  {
    name: "Messages",
    icon: <MYSVG path="/assets/svg/messages.svg" svgClassName="h-7 w-7" />
  },
  {
    name: "Bookmarks",
    icon: <MYSVG path="/assets/svg/bookmarks.svg" svgClassName="h-7 w-7" />
  },
  {
    name: "Lists",
    icon: <MYSVG path="/assets/svg/lists.svg" svgClassName="h-7 w-7" />
  },
  {
    name: "Profile",
    icon: <MYSVG path="/assets/svg/profile.svg" svgClassName="h-7 w-7" />
  },
  {
    name: "More",
    icon: <MYSVG path="/assets/svg/more.svg" svgClassName="h-7 w-7" />
  },
]
const Sidelink = (props:any) => {
  return (
    <ul>
      {
        sideLinks.map((link: any, index) => (
          <div className='group cursor-pointer' onClick={()=>{
            props.setActive(link.name)
            }}>
            <div className='inline-block'>
              <li key={"sideLink_" + index} className='flex gap-4 items-center mb-7 py-2 pl-2 pr-7 group-hover:bg-gray-200 group-hover:text-primary-base group-hover:rounded-full group-hover:transform group-hover:transition-colors group-hover:duration-200'>
                <span>{link.icon}</span>
                <span className={` text-xl ${props.active==link.name ? "font-bold" : ""}`}>{link.name}</span>
              </li>
            </div>
          </div>
        ))
      }
    </ul>

  )
}

export default Sidelink