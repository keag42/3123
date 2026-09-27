//fetching data from a 3rd party API
let url = "https://isitdownstatus.com/api/v1/status/netflix"

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((dataJSONObj) => {
        console.log(dataJSONObj)
        console.log(dataJSONObj.ok)
    })
    .catch((error) => {
        console.log(error)
    })