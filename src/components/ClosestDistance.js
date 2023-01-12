const ClosestDistance = ( { closestDistance } ) => {
    let convertedDistance = (closestDistance / 1000).toFixed(1)

    if (closestDistance === null) {
        return
    }
    
    return (
        <p>Closest distance to the nest: {convertedDistance} meters</p>
    )
}

export default ClosestDistance