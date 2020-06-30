const path = require('path')
const express = require('express')
const { response } = require('express')

const app = express()
const publicDirectory = path.join(__dirname, '../public')

//serve up static html from public directory
//Test Via http://localhost:3000/,http://localhost:3000/help.html, http://localhost:3000/about.hml 
app.use(express.static(publicDirectory))

//configure other routes

//app.com/weather
//Test Via http://localhost:3000/weather
app.get('/weather', (req, res) => {
    res.send({
        city: 'Philadelpia',
        state: 'Pennsylvania',
        country: 'United States',
        currentTemp: 27,
        feelsLike: 23,
        description: 'Partyly Cloudy'
    })  
})


//Starts up the server on a specific port.
//3000 is a development port
//Callback runs when the is server up
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})