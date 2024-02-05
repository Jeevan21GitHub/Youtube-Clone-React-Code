import React, { useState } from 'react'
import { CategoryItems } from '../static/data'
// import { SideBarItems } from '../static/data'
const CategoryBar = ({setSelectedCategory,sideBarHidden}) => {
    const [active, setActive] = useState('All');
    return (
        <section className={`fixed top-0 w-full ${sideBarHidden?'w-full':'md:w-[calc(100%-240px)]'} z-10`}>
            <div className='h-8 mt-16 overflow-x-scroll bg-black md:mt-14 md:h-10 scroll scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-black whitespace-nowrap scrollbar-hide'>
            <div className='flex text-white'>
                {
                    CategoryItems.map((item, index) => {
                        return (
                            <div key={index}
                                className={`h-6 md:h-8 flex px-3 text-sm font-semibold md:font-bold rounded-xl items-center cursor-pointer hover:bg-gray-100 hover:text-black ${item === active ?"text-black bg-gray-100" : "bg-gray-800"}  mx-1`}

                                onClick={() => {setActive(item);setSelectedCategory(()=>{return item+' tamil'})}}
                            >
                                <div className='whitespace-nowrap'>
                                    {
                                        item
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </div>
        </section>

    )
}

export default CategoryBar
