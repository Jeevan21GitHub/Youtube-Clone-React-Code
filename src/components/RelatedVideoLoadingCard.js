

const RelatedVideoLoadingCard = () => {
    const dublicate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <section className='md:h-[calc(100vh-53px)] scrollbar overflow-y-auto scrollbar-hide mt-3'>
            {
                dublicate.map((item, index) => (
                    <div className='flex my-2' key={index}>
                        <div className='h-32  rounded-2xl bg-gray-300 animate-pulse w-8/12 md:w-4/12 lg:w-10/12'>

                        </div>
                        <div className='w-11/12 md:w-10/12 lg:w-11/12'>
                            <div className='mt-2 ml-2'>
                                <div className='h-4  bg-gray-300 rounded mb-2 animate-pulse'></div>
                                <div className='h-4  bg-gray-300 rounded animate-pulse'></div>
                            </div>
                            <div className='mt-2 ml-2 grid grid-cols-6 gap-1 animate-pulse'>
                                <div className='h-3 bg-gray-300 rounded mb-2 col-span-3'></div>
                                <div className='h-3 bg-gray-300 rounded col-span-3'></div>
                                <div className='h-3 bg-gray-300 rounded mb-2 col-span-2'></div>
                                <div className='h-3 bg-gray-300 rounded col-span-4'></div>
                                <div className='h-3 bg-gray-300 rounded mb-2 col-span-3'></div>
                                <div className='h-3 bg-gray-300 rounded col-span-3'></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default RelatedVideoLoadingCard
