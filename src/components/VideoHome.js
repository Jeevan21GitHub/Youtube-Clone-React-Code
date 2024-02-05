import { useEffect, useState } from 'react'
import RelatedVideoCard from './RelatedVideoCard'

const VideoHome = ({ id, selectedCategory,setSelectedCategory }) => {
  const [vId, setVId] = useState(id);
  
  useEffect(() => {
    if(selectedCategory.length>1){
      setVId(selectedCategory)
      setSelectedCategory("")
    }
    
  }, [selectedCategory,setSelectedCategory])
  console.log(vId);
  return (
    <section className='flex flex-col mx-3 mt-24 md:mt-14 lg:flex-row'>
      <div className='lg:mr-5'>
        <iframe src={`https://www.youtube.com/embed/${vId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  className='w-full h-[200px] mt-5 md:w-full md:h-[350px] lg:w-[900px] lg:h-[500px] '></iframe>
        {/* <div>
          <div className='grid w-full grid-cols-5 gap-2 my-2 animate-pulse'>
            <div className='h-5 col-span-5 mb-1 bg-gray-300'></div>
            <div className='h-5 col-span-3 mb-1 bg-gray-300'></div>
            <div className='h-5 col-span-2 bg-gray-300'></div>
          </div>
        </div> */}
      </div>
    

      <div className='md:mt-5'>
        <RelatedVideoCard vId={vId} setVId={setVId} />
      </div>
    </section>
  )
}


export default VideoHome
