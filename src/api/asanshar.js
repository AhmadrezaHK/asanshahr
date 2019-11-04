import axios from 'axios'

export default axios.create({
    baseURL:'http://api.asanshahr.com/api/offers?pageSize=10&pageNumber=1'
})