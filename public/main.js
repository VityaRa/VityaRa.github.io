
$(document).ready(function(){

    // async function getUser () {
    //     const res = await fetch('/api/users', {
    //         method: 'GET',
    //     })

    //     if (res.ok === true) {
    //         const user = await res.json()
    //         alert(`${user.name} - ${user.song}`)
    //     }
    // }

    // getUser()
// ProgressBar --------------------------------------------------------------
/*const progress = {
    0: 60, //JS
    1: 80, //CSS
    2: 40, //CPP
}

let collectionUN = document.getElementsByClassName('uncompleted')
let collectionCO = document.getElementsByClassName('completed')

for (let i = 0; i < collectionUN.length; i++){
    collectionUN[i].style.width = (100 - progress[i]) + '%'
    collectionCO[i].style.width = (progress[i]) + '%'
}*/
//--------------------------------------------------------------

//SmoothMoveToLinks----------------------------------

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault()
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

//----------------------------------

//FadeFunction-----------------------
let fadeButton = $('.to_top_button')

window.addEventListener('scroll', function (){
    let heightPixels = document.documentElement.scrollTop
    if (heightPixels > 980){
        fadeButton.addClass('show-button')
        fadeButton.removeClass('hide-button')
    } else{
        fadeButton.removeClass('show-button')
        fadeButton.addClass('hide-button')
    }
})

//-------------------------------------



})
