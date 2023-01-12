const Pilot = ( { pilot } ) => {
    return (
        <tr>
            <td>{pilot.firstName} {pilot.lastName}</td>
            <td>{pilot.email}</td>
            <td>{pilot.phoneNumber}</td>
            <td>{pilot.distance}</td>
        </tr>
    )
}

export default Pilot
