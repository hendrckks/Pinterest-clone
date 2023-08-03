import axios from 'axios';

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization : "Client-ID ox-Ufk7oXThtDzfaCSynVkk0YZW30pdG2MsrqSk07TA",   
    }
})