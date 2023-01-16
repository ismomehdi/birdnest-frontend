// import axios from 'axios'
import useWebSocket from 'react-use-websocket'
const baseUrl = 'ws://localhost:3001/api/pilots'

const GetPilots = () => {
    console.log('GetPilots called.')

    const { lastMessage } = useWebSocket(baseUrl, {
        share: true
    })

    // const request = axios.get(baseUrl)
    // return request.then(response => response.data)

    let data = lastMessage 
    console.log('data: ', data)

    return data
}

export default GetPilots
