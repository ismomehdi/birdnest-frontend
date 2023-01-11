// The drones within the NDZ are calculated by using the 
// distance formula:
//
// D = sqrt((drone.X - ndzX)^2 + (drone.Y - ndzY)^2)
//
// The drone is within the NDZ if D <= ndzRadius.


const filterAll = (drones) => {
    const ndzRadius = 100000
    const ndzX = 250000
    const ndzY = 250000

    const isWithinNDZ = (drone) => 

            Math.sqrt(

                (drone.X - ndzX) ** 2 + 
                (drone.Y - ndzY) ** 2

            ) <= ndzRadius

    drones.forEach(drone => console.log('DRONE X: ', drone.X, 'DRONE Y: ', drone.Y, 'IS WITHIN NDZ: ', isWithinNDZ(drone)))

    return drones.filter(drone => isWithinNDZ(drone))
}

export default { filterAll }