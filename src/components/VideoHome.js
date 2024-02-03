import RelatedVideoCard from './RelatedVideoCard'

const VideoHome = ({ id }) => {

  return (
    <section className='lg:ml-28 mt-24 md:mt-14 flex justify-around flex-col lg:flex-row mx-3'>
      <div className=''>
        <iframe src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="" allowFullScreen className='w-full h-[200px] mt-5 md:w-full md:h-[350px] lg:w-[900px] lg:h-[500px] '></iframe>
        <div>
          <div className='grid grid-cols-5  gap-2  my-2 w-full  animate-pulse'>
            <div className='h-5 col-span-5 mb-1 bg-gray-300'></div>
            <div className='h-5 col-span-3 mb-1 bg-gray-300'></div>
            <div className='h-5 col-span-2 bg-gray-300'></div>
          </div>
        </div>
      </div>

      <div className='md:mt-5'>
        <RelatedVideoCard id={id} />
      </div>
    </section>
  )
}


export default VideoHome
