import React from 'react'
import VideoCard from './VideoCard'

const VideoHome = ({videos}) => {
  return (
    <section>
        {/* {
            videos.map((item,index)=>{
                return(
                    <div key={index}>
                        <VideoCard videoId={item?.id?.videoId}/>
                    </div>
                )
            })
        } */}
    </section>
  )
}

export default VideoHome
