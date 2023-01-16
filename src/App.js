import React, { useEffect, useState } from 'react'

import Pilot from './components/Pilot'
import ClosestDistance from './components/ClosestDistance'

const socketUrl = 'ws://127.0.0.1:3001/'

const ws = new WebSocket(socketUrl)

const App = () => {
  const [pilots, setPilots] = useState([])
  const [closest, setClosest] = useState(null)

  useEffect(() => {
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data)
      const closestTemp = data.filter(obj => obj['category'] === 'closestDistance')
      const pilotsTemp = data.filter(obj => obj['category'] === 'pilot')

      setPilots(pilotsTemp.sort())
      setClosest(closestTemp[0])
    }

  }, [])

  return (
    <div>
      <ClosestDistance obj={closest} />
      <table>
        <thead>
          <tr>
            <th>Pilot</th>
            <th>Email</th>
            <th>Number</th>
            <th>Distance</th>
          </tr>
        </thead>
      
        <tbody >
        { pilots.map(pilot => <Pilot key={pilot.droneSerialNumber} pilot={pilot} /> )}    
        </tbody>

      </table>
    </div>
  )

}

export default App
