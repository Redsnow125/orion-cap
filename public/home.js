const eightBall = document.querySelector('#circle')
const textSubmit = document.querySelector('#text')
const form = document.querySelector('#question')


function submit(evt){
    evt.preventDefault()
    let body = {
        question: textSubmit.value

    }
    console.log(body)
    axios.post('/8ball', body)
        .then(response => {
            let last = response.data.length - 1
            alert(response.data[last].answer)
        }).catch(err => console.log(err))
}


eightBall.addEventListener('click', submit); 
