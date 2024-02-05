import React from "react";


const RelatedVideoTemplate = ({ relatedVideo, setVId }) => {
    return (
        <section className="mt-2">
            <div className="flex flex-col">
                {relatedVideo.map((item, index) => {
                    return (
                        <div
                            onClick={() => setVId(item?.id?.videoId)}
                            key={index}
                            className="cursor-pointer"
                        >
                            <div className="flex mb-4 ">
                                <div className="w-8/12 md:w-4/12 lg:w-10/12">
                                    <img
                                        src={item?.snippet?.thumbnails?.medium?.url}
                                        alt=""
                                        className="rounded-2xl"
                                    />

                                </div>

                                <div className="w-11/12 md:w-10/12 lg:w-11/12">

                                    <div className="mx-2">
                                        <h3 className="font-semibold">
                                            {item?.snippet?.title.length >= 65
                                                ? item?.snippet?.title.substring(0, 65) + "..."
                                                : item?.snippet?.title
                                            }

                                        </h3>
                                        <p className="text-sm font-semibold text-gray-500">
                                            Published At:{" "}
                                            {item?.snippet?.publishedAt.substring(0, 10)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default RelatedVideoTemplate;
