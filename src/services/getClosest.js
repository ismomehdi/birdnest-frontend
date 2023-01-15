import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/closest'

const getClosest = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data[0])
}

export default getClosest
