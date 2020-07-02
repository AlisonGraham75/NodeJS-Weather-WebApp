const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { response } = require('express')

const app = express()
const port = process.env.PORT || 3000

//define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname,  '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials' )

//Set up handlebars templating package and views location
app.set('view engine', 'hbs')
app.set('views', viewsDirectory)
hbs.registerPartials(partialsPath)



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
        message: 'Help Message',
        name: 'Alison Graham'
    })
})

app.get('/weather', (req, res) => {
    //Check the URL Query string for an city 
    if (!req.query.city) {
        //Must have return here or you will get
        // 'Cannot set headers after they are sent to the client' 
        //  error for having two res.send methods
        return res.send({
            error: 'You must provide a city.'
        })
    }

    //{latitude, longitude, location} = {}  setting up a default object for object trying to destructure.
    //This will set latitude, longitude, location to undefined if not set.
    geocode(req.query.city, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({error})
        }

        forecast(latitude, longitude,(error, forcastData) => {
            if (error) {
                return res.send({error})
            }

            res.send({
                forecast: forcastData, 
                location,
                city: req.query.city
            })
        })
    })
})

//if they are looking for anything in /help that doesnt exist
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        message: 'Help article not found',
        name: 'Alison Graham'
    })
})

//route everything else for 404 error
//Must be last route so that it catches everything not already routed.
app.get('*', (req, res) => {
    res.render('404', {
        title: '404 error',
        message: 'Page not found.',
        name: 'Alison Graham'
    })
})


//Starts up the server on a specific port.
//3000 is a development port
//Callback runs when the is server up
app.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
})