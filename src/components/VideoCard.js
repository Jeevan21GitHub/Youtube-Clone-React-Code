// import React, { useEffect, useState } from 'react'
// import Logo from "../assets/yt-logo-white.png"
// import { BASE_URL } from '../utils/fetchFromAPI';
// import { API } from '../utils/fetchFromAPI';

import { Link } from "react-router-dom"

const VideoCard = ({ videos, setSideBarHidden }) => {

    return (
        <section>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

                {
                    videos.map((item, index) => {
                        return (
                            <Link to={`/video/${item?.id?.videoId}`} onClick={() => setSideBarHidden(true)} key={index}>
                                <div className='mx-auto overflow-hidden text-white bg-gray-900 rounded-2xl w-80 md:w-64 lg:w-64' >
                                    <div className='relative'>
                                        <img src={item?.snippet?.thumbnails?.medium?.url} alt='' className='rounded-t-2xl' />
                                        {/* <p className='absolute bottom-0 right-0 px-1 mb-1 mr-1 bg-gray-700 rounded-xl'>3:39:16</p> */}
                                    </div>

                                    <div className='flex px-3 py-2 border-t border-gray-500'>
                                        {/* <img src={Logo} alt='' className='w-10 h-10 bg-white rounded-full' /> */}
                                        <div className='mx-2'>
                                            <h3 className='font-semibold'>{item?.snippet?.title.length >= 30 ? item?.snippet?.title.substring(0, 30) : item?.snippet?.title}...</h3>
                                            <p className='text-sm font-semibold text-gray-500'>Published At: {item?.snippet?.publishedAt.substring(0, 10)}</p>


                                        </div>
                                    </div>

                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default VideoCard
