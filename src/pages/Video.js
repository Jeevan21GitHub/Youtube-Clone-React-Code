import React from 'react'

const Video = ({ videos }) => {
  console.log(videos);

  return (
    <>
      <div className=''>
        {videos.map((item, idx) => (
          <div key={idx}>
            <h2>{item.video.title}</h2>
            <p>{item.video.descriptionSnippet}</p>
          </div>
        ))}
      </div>

    </>
  )
}

export default Video
