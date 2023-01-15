const Pilot = ( { pilot } ) => {
    let convertedDistance = (pilot.droneDistance / 1000).toFixed(1)
    
    return (
        <tr>
            <td>{pilot.firstName} {pilot.lastName}</td>
            <td>{pilot.email}</td>
            <td>{pilot.phoneNumber}</td>
            <td>{convertedDistance} meters</td>
        </tr>
    )
}

export default Pilot
