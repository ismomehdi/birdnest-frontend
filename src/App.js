import { useState, useEffect } from 'react'

import droneService from './services/GetDrones'
import ndzService from './services/FilterNDZ'
import pilotService from './services/GetPilot'

import Pilot from './components/Pilot'

const App = () => {
  const [pilots, setPilots] = useState([])

  useEffect(() => {
    const interval = setInterval(async () => {
      
      let allDrones = await droneService.getDrones()
      let ndzDrones = await ndzService.filterNDZ(allDrones)

      ndzDrones.forEach(drone => {
        let getPilot = pilotService.getPilot(drone.serialNumber)
        let pilot = { ...getPilot, distance: drone.distance }
        setPilots(pilots => [...pilots, pilot])
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
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
          {pilots.map(pilot => 
            <Pilot 
              key={pilot.id} 
              pilot={pilot} 
            />
          )}
        </tbody>

      </table>
    </div>
  )

}

export default App