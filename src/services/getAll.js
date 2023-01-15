import getPilots from './getPilots'
import getClosest from './getClosest'

const getAll = async (setPilots, setClosest) => {
    const pilotsTemp = await getPilots()
    const closestTemp = await getClosest()

    await setPilots(pilotsTemp)
    await setClosest(closestTemp)
}

export default getAll