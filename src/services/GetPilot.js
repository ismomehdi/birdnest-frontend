const test_data = `{
    "pilotId": "P-NxfSFwZAMS",
    "firstName": "Casey",
    "lastName": "Jast",
    "phoneNumber": "+210350184916",
    "createdDt": "2022-10-10T02:57:10.927Z",
    "email": "casey.jast@example.com"
    }`

const getPilot = (serialNumber) => {
    return JSON.parse(test_data)
}

export default { getPilot }