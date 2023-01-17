import { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import CustomTable from './ui/table'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from '@material-ui/core/Link'

var scheme = 'ws'
const location = document.location

if (location.protocol === 'https:') {
  scheme += 's';
}

const socketUrl = `${scheme}://${location.hostname}:${location.port}`
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
        <Link href="https://github.com/ismomehdi/birdnest-backend/">        
          <GitHubIcon color="grey" fontSize="large" style={{ color: 'black', marginRight: '40px' }} />
        </Link>
        
        <Link href="https://www.linkedin.com/in/ismo-muusavi/">
          <LinkedInIcon fontSize="large" style={{ color: 'black', marginRight: '40px' }} />
        </Link>

        <Link href="https://www.instagram.com/prodbywngmn/">
          <InstagramIcon color="black" fontSize="large" style={{ color: 'black', marginRight: '40px' }} />
        </Link>
      </div>

    </div>
  )}

export default App
