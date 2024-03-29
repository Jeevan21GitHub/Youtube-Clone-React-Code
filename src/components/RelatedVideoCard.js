import React, { useEffect, useState } from 'react'
import { BASE_URL, API } from '../utils/fetchFromAPI';
import RelatedVideoLoadingCard from './RelatedVideoLoadingCard';
import { CategoryItems } from '../static/data'
import RelatedVideoTemplate from './RelatedVideoTemplate';
const RelatedVideoCard = ({ vId, setVId }) => {
    const [relatedVideo, setRelatedVideo] = useState([]);
    const [active, setActive] = useState('All');

    useEffect(() => {
        fetch(`${BASE_URL}/search?key=${API}&part=snippet&maxResults=20&q=${vId}`)
            .then((response) => response.json())
            .then((resJson) => {
                if (resJson.items) {

                    setRelatedVideo(resJson.items)
                }
                else {
                    console.log("Not get data on related video");
                }
            })
            .catch(err => {
                console.log('Not fetch link on related video', err);
            })
    }, [vId, setVId])

    return (
        <div className="">
            <section className={`w-full lg:w-[550px] z-10 overflow-hidden`}>
                <div className='bg-black rounded  h-8 md:h-10 scroll scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-black overflow-x-scroll whitespace-nowrap scrollbar-hide'>
                    <div className='flex text-white '>
                        {
                            CategoryItems.map((item, index) => {
                                return (
                                    <div key={index}
                                        className={`h-6 mt-1 md:h-8 flex px-3 text-sm font-semibold md:font-bold rounded-xl items-center cursor-pointer hover:bg-gray-100 hover:text-black ${item === active ? "text-black bg-gray-100" : "bg-gray-800"}  mx-1`}

                                        onClick={() => { setActive(item); setVId(item) }}
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
            <section className=''>
                {
                    relatedVideo.length > 0 ? <RelatedVideoTemplate relatedVideo={relatedVideo} setVId={setVId} />
                        : <RelatedVideoLoadingCard />

                }
            </section>
        </div>
    )
}

export default RelatedVideoCard
