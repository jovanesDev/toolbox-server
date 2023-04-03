import axios from 'axios'
const token = 'aSuperSecretKey'

const axiosClient = axios.create({
    baseURL:'https://echo-serv.tbxnet.com/v1/secret',
    headers:{
        "Authorization":` Bearer ${token}`,
        "Content-Type":'application/json'
    }
})

export default axiosClient