import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/userSlice'
import { auth } from '../firebase'


import CategoryBar from '../components/CategoryBar'

import VideoCard from '../components/VideoCard'
import VideoHome from '../components/VideoHome'
import { BASE_URL } from '../utils/fetchFromAPI'
import { API } from '../utils/fetchFromAPI'
import VideoCardLoading from '../components/VideoCardLoading'

const Home = ({sideBarHidden,selectedCategory,setSelectedCategory}) => {

  
  const [videos, setVideos] = useState([]);
 
  const dispatch = useDispatch();

  // const handleVideo = () => {

  //   fetch(`${BASE_URL}/search?key=${API}&part=snippet&order=date&maxResults=20&q=${selectedCategory}`)
  //     .then((response) => response.json())
  //     .then((resJson) => {
  //       if (resJson.items) {
  //         setVideos(resJson.items)
  //       }
  //       else {
  //         console.log("Not get data");
  //       }
  //     })

  // }

  useEffect(() => {
    fetch(`${BASE_URL}/search?key=${API}&part=snippet&order=viewCount&maxResults=20&q=${selectedCategory}`)
      .then((response) => response.json())
      .then((resJson) => {
        if (resJson.items) {
          setVideos(resJson.items)
        }
        else {
          console.log("Not get data");
        }
      })
  },[selectedCategory])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? dispatch(setUser(user)) : dispatch(setUser(null));
    })
  }, [])
  console.log(videos);
  return (
    <>
      <section className=''>
        <div className={sideBarHidden?"hidden":"block"}>
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setVideos={setVideos}/>
        </div>
        <div className={sideBarHidden?"ml-0":"md:ml-60"}>
          <CategoryBar setSelectedCategory={setSelectedCategory} />
          <div className='mt-36 md:mt-32 mx-5'>
            {
              videos.length>0?<VideoCard videos={videos} />: <VideoCardLoading/>
            }             
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
