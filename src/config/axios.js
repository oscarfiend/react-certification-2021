import axios from 'axios'

const axiosClient=axios.create({
    baseURL:"https://content-youtube.googleapis.com/youtube/v3/"
})

export default axiosClient