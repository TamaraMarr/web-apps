import YTSearch from "youtube-api-search";
import { YOUTUBE_API_KEY } from "../constants";
import Video from "./../entities/Video";

class FetchYTData {
    
    loadData(term, handleVideos) {
        const options = { term, key: YOUTUBE_API_KEY };
        YTSearch(options, (videos) => {
            console.log(videos);
            const listOfVideos =  videos.map(video=>{
                const singleVideo = new Video(video);
                return singleVideo;
            });
            handleVideos(listOfVideos);
        })
    }
}

export const fetchYTData = new FetchYTData();