import React, { useEffect, useState } from 'react'
import Logo from "../assets/yt-logo-white.png"
// import { BASE_URL } from '../utils/fetchFromAPI';
// import { API } from '../utils/fetchFromAPI';

const VideoCard = ({ videos }) => {
    // const[videoDetails,setVideoDetails]=useState([]);
    // useEffect(()=>{
    //     fetch(`${BASE_URL}/videos?key=${API}&part=contentDetails&part=statistics&id=${videosId}`)
    //     .then((response)=>response.json())
    //     .then((resJson)=>{
    //       if(resJson.items){
    //         setVideoDetails(resJson.items)
    //       }
    //       else{
    //         console.log("Not get data");
    //       }
    //     })
    // },videosId)
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>

                {
                    videos.map((item, index) => {
                        return (
                            <div className='bg-black text-white rounded-2xl overflow-hidden w-80 md:w-64 lg:w-64 mx-auto' key={index}>
                                <div className='relative'>
                                    <img src={item?.snippet?.thumbnails?.medium?.url} alt='' className='rounded-t-2xl'/>
                                    {/* <p className='absolute bottom-0 right-0 bg-gray-700 px-1 rounded-xl mr-1 mb-1'>3:39:16</p> */}
                                </div>
                                
                                <div className='px-3 py-2 flex border-t border-gray-500'>
                                    {/* <img src={Logo} alt='' className='rounded-full w-10 h-10 bg-white' /> */}
                                    <div className='mx-2'>
                                        <h3 className='font-semibold'>{item?.snippet?.title.length>=30?item?.snippet?.title.substring(0,30):item?.snippet?.title}...</h3>
                                        <p className='text-sm text-gray-500 font-semibold'>Published At: {item?.snippet?.publishedAt.substring(0,10)}</p>
                                      

                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default VideoCard
