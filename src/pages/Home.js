import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../slices/userSlice'
import { auth } from '../firebase'


import CategoryBar from '../components/CategoryBar'

import VideoCard from '../components/VideoCard'
// import VideoHome from '../components/VideoHome'
import { BASE_URL } from '../utils/fetchFromAPI'
import { API } from '../utils/fetchFromAPI'
import VideoCardLoading from '../components/VideoCardLoading'

const Home = ({ sideBarHidden, setSideBarHidden, selectedCategory, setSelectedCategory }) => {


  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

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
      .catch(err => {
        console.log('Not fetch link',err);
      })
  }, [selectedCategory])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? dispatch(setUser(user)) : dispatch(setUser(null));
    })
  }, [dispatch])
  // console.log(videos);
  return (
    <>
      <section className=''>
        <div className={`${sideBarHidden ? "hidden" : "block"} transition-all delay-300 duration-500`}>
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setVideos={setVideos} />
        </div>
        <div className={sideBarHidden ? "ml-0" : "md:ml-60"}>
          <CategoryBar setSelectedCategory={setSelectedCategory} sideBarHidden={sideBarHidden} />
          <div className='mt-36 md:mt-32 mx-5'>
            {
              videos.length > 0 ? <VideoCard videos={videos} setSideBarHidden={setSideBarHidden} /> : <VideoCardLoading setSideBarHidden={setSideBarHidden} />
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Home
