import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://wger.de/api/v2/',
  headers: {
    'Accept': 'application/json',
  }
});

export default apiClient;