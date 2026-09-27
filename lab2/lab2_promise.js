/*
Purpose: Act as an API developer and create a new promise to either Resolve or reject
*/
async function fetch_games() {
    let promise_games = new Promise((resolve, reject) => {
        let isRegistered = true

        setTimeout(() => {

            if (isRegistered) {
                const gamesJSON = {
                    monday: "leafs",
                    tuesday: "raptors"
                }
                let gamesJSONstr = JSON.stringify(gamesJSON)
                resolve(gamesJSONstr)
            } else {
                reject("You must be a registered member first")
            }


        }, 2000)

    })
    let result_from_promise = await promise_games
    console.log(result_from_promise)
}

fetch_games()
let someStrToPrint = "bob"
console.log(someStrToPrint)