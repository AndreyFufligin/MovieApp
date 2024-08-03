import axios from 'axios';


export const Axios  = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmZmZGQ1YjcxZmU3MmZlNTU4NmIwYWI2MzQ1ZGRhNiIsIm5iZiI6MTcyMjE3MjEwMi45MzkxMTUsInN1YiI6IjY2NmVkZTg4ZmM3MzY5ZDg3MmM0ZDAzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QlGO1nOWNdQYWxQiXbrBl_xWT7lq919X8n3NSr2Ljxo',
    }

})
