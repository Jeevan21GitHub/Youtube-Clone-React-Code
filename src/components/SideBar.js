import React, { useEffect, useState } from 'react'
import { SideBarItems } from '../static/data'
import "./SideBar.css"
// h-[calc(100vh-53px)]
const SideBar = ({ selectedCategory, setSelectedCategory, setVideos }) => {
  const [active, setActive] = useState("Home");
  
  return (
    <section className='bg-black fixed left-0 mt-14  top-0 w-60 h-full scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-black overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-hide  hidden md:block'>
      <div className='mb-4 pb-2 border-b border-gray-600'>
        {
          SideBarItems.Top.map((item, index) => {
            return (
              <div key={index}
                className={`h-10 flex text-white justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-gray-800 ${item.name === active ? "bg-gray-800" : "bg-black"}`}
                onClick={() => { setActive(item.name); setSelectedCategory(()=>{return item.name==='Home'?'LatestTamil':item.name+'tamil&english'});  }} >
                <div className='mr-2'>
                  {item.icon}
                </div>
                <div>
                  {item.name}
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='mb-4 pb-2 border-b border-gray-600'>
        {
          SideBarItems.Middle.map((item, index) => {
            return (
              <div key={index}
                className={`h-10 flex text-white justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-gray-800 ${item.name === active ? "bg-gray-800" : "bg-black"}`}
                onClick={() => { setActive(item.name);}} >
                <div className='mr-2'>
                  {item.icon}
                </div>
                <div>
                  {item.name}
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='mb-4 pb-2 border-b border-gray-600'>
        {
          SideBarItems.Explore.map((item, index) => {
            return (
              <div key={index}
                className={`h-10 flex text-white justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-gray-800 ${item.name === active ? "bg-gray-800" : "bg-black"}`}
                onClick={() => { setActive(item.name); setSelectedCategory(()=>{return item.name+'tamil&english'});  }} >
                <div className='mr-2'>
                  {item.icon}
                </div>
                <div>
                  {item.name}
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default SideBar
