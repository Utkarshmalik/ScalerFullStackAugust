import axios from 'axios';


export const axiosInstance = axios.create({
    headers:{
        'Content-Type':'application/json',
        'x-access-token': `Bearer ${localStorage.getItem('token')}`
    }
})

