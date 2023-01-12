import { useState, useEffect } from 'react'

import droneService from './services/getDrones'
import ndzService from './services/filterNDZ'
import pilotService from './services/getPilot'

import Pilot from './components/Pilot'
import ClosestDistance from './components/ClosestDistance'

const App = () => {
  const [pilots, setPilots] = useState([])
  const [closestDistance, setClosestDistance] = useState(null)

  useEffect(() => {
    const interval = setInterval(async () => {
      
      let allDrones = await droneService.getDrones()
      let ndzDrones = await ndzService.filterNDZ(allDrones)

      ndzDrones.forEach(drone => {
        let getPilot = pilotService.getPilot(drone.serialNumber)
        let pilot = { ...getPilot, distance: drone.distance, 
          droneSerialNumber: drone.serialNumber }

        if (drone.distance < closestDistance || closestDistance === null) {
          setClosestDistance(drone.distance)
        }

        setPilots(pilots => 
          pilots.filter(pilot => pilot.droneSerialNumber !== drone.serialNumber)
                .concat(pilot)
        )
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <ClosestDistance closestDistance={closestDistance} />
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