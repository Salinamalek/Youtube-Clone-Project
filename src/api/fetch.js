const key = process.env.REACT_APP_API_KEY

export function getPopularVideos() {
    return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=25&key=${key}`).then(res => res.json())
}

export function getOneVideo(id) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}key=${key}`).then(res => res.json())
}

export function getSearch(search) {
    return fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${key}`).then(res => res.json())
}

export function getRelatedVideos(id) {
    return fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=${key}`)
}