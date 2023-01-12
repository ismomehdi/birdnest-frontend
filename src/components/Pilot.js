const Pilot = ( { pilot } ) => {
    let convertedDistance = (pilot.distance / 1000).toFixed(2)
    
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
