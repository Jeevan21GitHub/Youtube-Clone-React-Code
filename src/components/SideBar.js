import React, { useState } from 'react'
import { SideBarItems } from '../static/data'
import { Link } from 'react-router-dom'
import "./SideBar.css"
// h-[calc(100vh-53px)]
const SideBar = ({ selectedCategory, setSelectedCategory, setVideos }) => {
  const [active, setActive] = useState("Home");

  return (
    <section className='bg-black fixed  mt-14 left-0 top-0 w-60 h-full md:h-[calc(100vh-53px)] scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-black overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-hide  hidden md:block '>
      <Link to={`/`} >
        <div
          className={`h-10 flex text-white justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-gray-800 ${SideBarItems.Home[0].name === active ? "bg-gray-800" : "bg-black"}`}
          onClick={() => { setActive(SideBarItems.Home[0].name); }} >
          <div className='mr-2'>
            {SideBarItems.Home[0].icon}

          </div>
          <div>
            {SideBarItems.Home[0].name}
          </div>
        </div>
      </Link>
      <div className='mb-4 pb-2 border-b border-gray-600'>
        {
          SideBarItems.Top.map((item, index) => {
            return (
              <div key={index}
                className={`h-10 flex text-white justify-start px-3 rounded-xl items-center cursor-pointer hover:bg-gray-800 ${item.name === active ? "bg-gray-800" : "bg-black"}`}
                onClick={() => { setActive(item.name); setSelectedCategory(() => { return item.name + 'tamil&english' }); }} >
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
                onClick={() => { setActive(item.name); }} >
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
                onClick={() => { setActive(item.name); setSelectedCategory(() => { return item.name + 'tamil&english' }); }} >
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
