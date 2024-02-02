import RelatedVideoCard from './RelatedVideoCard'

const VideoHome = ({ id }) => {

  return (
    <section className='ml-28 mt-24 flex'>
      <div className='w-2/3'>
        <iframe src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="" allowFullScreen className='w-[900px] h-[500px] flex-1'></iframe>
      </div>
      <div className='h-1/3'>
        <RelatedVideoCard />
      </div>
    </section>
  )
}


export default VideoHome
