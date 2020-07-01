const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=c44bf181e3f9b36c3997ffc12b71f126&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {

             if (error) {
                 callback('Unable to connect to weather service!', undefined)
             } else if (body.error) {
                 callback('Unable to find location', undefined)
             } else {
                callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' +  body.current.temperature 
                    + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.')
             }   
         })
}

module.exports = forecast