import React from 'react'
import SideBar from '../components/SideBar'
import { useParams } from 'react-router-dom'
import VideoHome from '../components/VideoHome';

const Video = ({sideBarHidden}) => {

  const {id}=useParams();

  return (
    <section className=''>
      <div className={`${sideBarHidden?'hidden':'block'}`} >
        <SideBar/>
      </div>
      <div className=' mt-14'>
          <VideoHome id={id}/>
      </div>
    </section>
  )
}

export default Video
