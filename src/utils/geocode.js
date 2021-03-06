const request = require('request')

const geocode = (address, callback) => {       
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoia2V2aW5qYW5iYXJsdWFkbzIiLCJhIjoiY2t6OGthNjQ0MGF5ZTJ2bzZzZHUwaW82NyJ9.EV7oCIE8uFXrTI6CjTXiAw&limit=1`
    request({ url, json: true }, (err, {body}) => {
        if (err) {
            callback(`Unable to connect to weather services!`, undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode