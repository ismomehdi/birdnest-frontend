import { useState, useEffect } from 'react'

import Pilot from './components/Pilot'
import ClosestDistance from './components/ClosestDistance'
import getAll from './services/getAll'

const App = () => {
  const [pilots, setPilots] = useState([])
  const [closest, setClosest] = useState(null)

  //useEffect(() => 
  //  { getAll(setPilots, setClosest) }, []
  //)

  getAll(setPilots, setClosest)

  //setInterval(() => {
  //  getAll(setPilots, setClosest)
  //}, 2000)

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