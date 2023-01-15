import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/pilots'

const getPilots = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default getPilots
