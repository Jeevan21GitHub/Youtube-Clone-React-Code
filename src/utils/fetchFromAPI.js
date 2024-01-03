// import React, { useEffect, useState } from "react";


export const API=process.env.REACT_APP_YOUTUBE_API_KEY;
export const BASE_URL=`https://www.googleapis.com/youtube/v3`;
// const fetchUrl=`https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&order=date&maxResults=20&type=playlist,video&videoType=any&q=${videoCategory}`

// export const YTVideos=()=>{
//   const [allVideos,setAllVideos]=useState([]);
//   useEffect(() => {
//     fetch(fetchUrl)
//       .then((response) => response.json())
//       .then((resJson) => {
//         if (resJson.items) { // Check if items exist
//           const result = resJson.items.map((doc) => ({ ...doc, VideoLink: "https://www.youtube.com/embed/" + doc.id.videoId }));
//           setAllVideos(result);
//         } else {
//           console.error("API response doesn't contain an 'items' array");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching videos:", error);
//       });
//   }, []);
  
//   //console.log(allVideos);
//   return(
//     <div>
//       {
//         allVideos.map((items)=>{
//           return(
//             <div className="grid grid-cols-2 gap-4">
//                <div>
//                <iframe width="500" height="250" src={items.VideoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
//                </div>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }