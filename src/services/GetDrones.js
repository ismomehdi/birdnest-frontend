import XMLParser from 'react-xml-parser'

const xmlTest = `<report>
<deviceInformation deviceId="GUARDB1RD">
<listenRange>500000</listenRange>
<deviceStarted>2023-01-10T10:02:39.758Z</deviceStarted>
<uptimeSeconds>392</uptimeSeconds>
<updateIntervalMs>2000</updateIntervalMs>
</deviceInformation>
<capture snapshotTimestamp="2023-01-10T10:09:12.097Z">
<drone>
<serialNumber>SN-iwobEbaV8F</serialNumber>
<model>HRP-DRP 1 S</model>
<manufacturer>ProDröne Ltd</manufacturer>
<mac>16:6a:75:d6:e7:ad</mac>
<ipv4>55.148.84.3</ipv4>
<ipv6>8e05:9c2f:7b71:34ba:3850:b304:34b5:45fa</ipv6>
<firmware>4.8.4</firmware>
<positionY>260622.4206508377</positionY>
<positionX>298053.48093969154</positionX>
<altitude>4010.4148695550352</altitude>
</drone>
<drone>
<serialNumber>SN-tYE014jzGd</serialNumber>
<model>Mosquito</model>
<manufacturer>MegaBuzzer Corp</manufacturer>
<mac>78:9d:08:f3:f7:2b</mac>
<ipv4>149.162.45.56</ipv4>
<ipv6>da04:1098:eb05:c149:c483:f5ca:d595:d0ad</ipv6>
<firmware>3.6.7</firmware>
<positionY>374513.5435351656</positionY>
<positionX>150165.6398510505</positionX>
<altitude>4826.734704327093</altitude>
</drone>
<drone>
<serialNumber>SN-z2h05Lu_6u</serialNumber>
<model>Altitude X</model>
<manufacturer>DroneGoat Inc</manufacturer>
<mac>58:8a:0e:e2:2b:38</mac>
<ipv4>24.81.231.133</ipv4>
<ipv6>70fc:dabe:7dd4:9e83:2b62:ec93:b1c0:6036</ipv6>
<firmware>0.9.9</firmware>
<positionY>171906.7765680095</positionY>
<positionX>397587.1797731017</positionX>
<altitude>4109.446859472336</altitude>
</drone>
<drone>
<serialNumber>SN-u8gIdo01sn</serialNumber>
<model>Altitude X</model>
<manufacturer>DroneGoat Inc</manufacturer>
<mac>56:94:4c:7c:d2:08</mac>
<ipv4>171.22.120.174</ipv4>
<ipv6>865a:3034:5cf4:42a6:d87e:499b:da4b:f07e</ipv6>
<firmware>2.0.8</firmware>
<positionY>52502.740959549454</positionY>
<positionX>426685.8315046492</positionX>
<altitude>4563.6959522640855</altitude>
</drone>
<drone>
<serialNumber>SN-qH2OPk4m0W</serialNumber>
<model>Eagle</model>
<manufacturer>MegaBuzzer Corp</manufacturer>
<mac>2b:22:2f:78:72:85</mac>
<ipv4>135.245.145.79</ipv4>
<ipv6>243d:1c0d:1b0e:94bc:6aa9:62b1:0dc5:ef13</ipv6>
<firmware>0.7.5</firmware>
<positionY>356114.76876409596</positionY>
<positionX>354475.3530585462</positionX>
<altitude>4156.253175945767</altitude>
</drone>
</capture>
</report>`

const getAll = () => {
    var xml = new XMLParser().parseFromString(xmlTest)
    
    let allDrones = xml
            .getElementsByTagName('drone')
            .map(drone => drone.children)
            .map(drone => ({
                serialNumber: drone[0].value,
                Y: parseFloat(drone[7].value),
                X: parseFloat(drone[8].value)
                })
            )

    return allDrones
}

export default { getAll }

//axios
//  .get('https://cors-anywhere.herokuapp.com/https://assignments.reaktor.com/birdnest/drones')
//  .then(response => {
//  })
