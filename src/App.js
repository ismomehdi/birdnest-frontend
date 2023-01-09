import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  var [drones, setDrones] = useState([])

  useEffect(() => {
    let interval = setInterval(() => {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://assignments.reaktor.com/birdnest/drones')
        .then(response => {
          let parser = new DOMParser()
          let xmlDOM = parser.parseFromString(response.data, 'text/xml')      
          setDrones(xmlDOM)
          console.log(response.data)
        })
    }, 2000)
  }, [])

  return (console.log('Hello World'))
}

export default App