import { useState, useEffect } from 'react'
import droneService from './services/GetDrones'
import ndzService from './services/FilterNDZ'
import pilotService from './services/GetPilot'

const App = () => {
  var [drones, setDrones] = useState([]) // This can be removed later
  var [ndzDrones, setNdzDrones] = useState([])

  useEffect(() => {
    setInterval(async () => {

      let allDrones = await droneService.getAll()
      setDrones(allDrones)
      setNdzDrones(ndzService.filterAll(allDrones))
      
    }, 2000)
  }, [])

  console.log('All drones: ', drones)
  console.log('NDZ drones: ', ndzDrones)

  ndzDrones.forEach(async drone => {
    let pilot = await pilotService.getPilot(drone.serialNumber)

    console.log('Pilot: ', pilot.firstName, pilot.lastName, 
      'Phone: ', pilot.phoneNumber, 'Email: ', pilot.email)
  })
}

export default App