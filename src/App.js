import { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import CustomTable from './ui/table'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from '@material-ui/core/Link'

const socketUrl = 'ws://spring-moon-3266.fly.dev//'
const ws = new WebSocket(socketUrl)

const App = () => {
  const [pilots, setPilots] = useState([])
  const [closestDistance, setClosest] = useState(null)

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
    <div style={{ marginTop: '50px' }}>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Typography variant="h2" gutterBottom> Project Birdnest </Typography>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
        { CustomTable(pilots, closestDistance) }
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px'}}>
        <Link href="https://github.com/ismomehdi">        
          <GitHubIcon color="grey" fontSize="large" style={{ color: 'black', marginRight: '40px' }} />
        </Link>
        
        <Link href="https://www.linkedin.com/in/ismo-mehdi-973aa01a9/">
          <LinkedInIcon fontSize="large" style={{ color: 'black', marginRight: '40px' }} />
        </Link>

        <Link href="https://www.instagram.com/prodbywngmn/">
          <InstagramIcon color="black" fontSize="large" style={{ color: 'black', marginRight: '40px' }} />
        </Link>
      </div>

    </div>
  )}

export default App
