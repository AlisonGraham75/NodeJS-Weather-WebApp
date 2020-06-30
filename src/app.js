const path = require('path')
const express = require('express')

const app = express()

//define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname,  '../templates')

//Set up handlebars templating package and views location
app.set('view engine', 'hbs')
app.set('views', viewsDirectory)


//Set up static directory to serve
app.use(express.static(publicDirectory))

//configure other routes

//wire up handlebars views and inject and objects into it. 
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Alison Graham'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Alison Graham'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'Help Message'
    })
})




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