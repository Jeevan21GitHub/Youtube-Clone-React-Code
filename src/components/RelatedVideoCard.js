import React, { useEffect, useState } from 'react'
import { BASE_URL,API } from '../utils/fetchFromAPI';

const RelatedVideoCard = () => {
    const [relatedVideo, setRelatedVideo] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/search?key=${API}&part=snippet&maxResults=20&q=thalapathy`)
            .then((response) => response.json())
            .then((resJson) => {
                if (resJson.items) {
                    console.log(resJson);
                    setRelatedVideo(resJson.items)
                }
                else {
                    console.log("Not get data on related video");
                }
            })
            .catch(err => {
                console.log('Not fetch link on related video', err);
            })
    }, [])
    console.log("Related Video:" + relatedVideo);
    return (
        <div>
            <h1>RelatedVideoCard</h1>
            {

                relatedVideo.map((item, inx) => {
                    <div key={inx}>

                        <h3 className='font-semibold'>{item?.snippet?.title.length >= 30 ? item?.snippet?.title.substring(0, 30) : item?.snippet?.title}...</h3>
                    </div>
                })
            }
        </div>
    )
}

export default RelatedVideoCard
