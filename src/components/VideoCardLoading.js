import React from 'react'
import { Link } from 'react-router-dom';

const VideoCardLoading = ({setSideBarHidden}) => {
    const videoCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];
    return (

        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                {
                    videoCount.map((item, index) => (
                        
                        <Link to={'/video/123'} key={index} onClick={()=>setSideBarHidden(true)} >
                            <div  className='h-52 bg-gray-100 rounded-2xl w-80 md:w-64 lg:w-64 mx-auto'>
                            <div className='h-32 bg-gray-300 rounded-t-2xl animate-pulse'>

                            </div>
                            <div className='flex mx-2 mt-2'>
                                <div>
                                    <p className='h-10 w-10 bg-gray-300 rounded-full animate-pulse'>

                                    </p>
                                </div>
                                <div className='mt-2 ml-2 grid grid-cols-4 gap-1 w-full'>
                                    <p className='col-span-4 h-2 bg-gray-300 animate-pulse'></p>
                                    <p className='col-span-1 h-2 bg-gray-300 animate-pulse'></p>
                                    <p className='col-span-3 h-2 bg-gray-300 animate-pulse'></p>
                                    <p className='col-span-3 h-2 bg-gray-300 animate-pulse'></p>
                                    <p className='col-span-1 h-2 bg-gray-300 animate-pulse'></p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </>

    )
}

export default VideoCardLoading
