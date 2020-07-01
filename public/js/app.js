//On client side .js these console log show in browser tools console
console.log('Client side javascript file is loaded')

//Fetch can only be used in client side js like this.
//fetch data from this url and then run this method
fetch('http://localhost:3000/weather?address=!').then((response) => {
    
    //then section gets called when json data arrives and has been parsed.
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})