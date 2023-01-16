const ClosestDistance = ( { obj } ) => {
    if (obj === null || obj === undefined) return
    let convertedDistance = (obj.droneDistance / 1000).toFixed(2)

    return (
        <p>Closest distance to the nest: { convertedDistance } meters</p>
    )
}

export default ClosestDistance