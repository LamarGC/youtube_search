import axios from 'axios';

const KEY = 'AIzaSyDhDMrhPjpP_enL3Z1Gv-yDGm5dtboCv9Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});