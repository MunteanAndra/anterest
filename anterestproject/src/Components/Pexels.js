import axios from 'axios';

export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: '563492ad6f91700001000001c599c49ae88342338b797884b0daca88'
    }
});