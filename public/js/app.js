//On client side .js these console log show in browser tools console
console.log('Client side javascript file is loaded')



const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (event) => {
    //prevents auto refresh in browser
    event.preventDefault()

    const location = searchInput.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ' '

    //Fetch can only be used in client side js like this.
    //fetch data from this url and then run this method
    fetch('http://localhost:3000/weather?city=' + location).then((response) => {
        
        //then section gets called when json data arrives and has been parsed.
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ' '
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})