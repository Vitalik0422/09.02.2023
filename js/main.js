const trafficLightsTopRight = document.querySelector('.trafficLightsTopRight')
const trafficLightsTopleft = document.querySelector('.trafficLightsTopleft')
const trafficLightsBottomleft = document.querySelector('.trafficLightsBottomleft')
const trafficLightsBottomrigth = document.querySelector('.trafficLightsBottomrigth')
const btn = document.querySelector('.btn')
    // trafficLightsTopRight.childNodes[3].classList.add('green')
    // // trafficLightsTopleft.childNodes[3].classList.add('yellow')
    // // trafficLightsBottomleft.childNodes[3].classList.add('green')
    // trafficLightsBottomrigth.childNodes[3].classList.add('green')

    btn.addEventListener('click', () => {
        ligthRedFirst()   
        setTimeout(ligthGreenSecondary, 500)
    });


//Світлофори першої групи
const ligthRedFirst = () =>{
    trafficLightsTopRight.childNodes[1].classList.add('red')
    trafficLightsTopRight.childNodes[5].classList.remove('green')
    trafficLightsTopRight.childNodes[3].classList.remove('yellow')
    trafficLightsBottomrigth.childNodes[1].classList.add('red')
    trafficLightsBottomrigth.childNodes[5].classList.remove('green')
    trafficLightsBottomrigth.childNodes[3].classList.remove('yellow')
    setTimeout(ligthGreenFirst, 8000)

}
const ligthGreenFirst = () => {
    trafficLightsTopRight.childNodes[1].classList.remove('red')
    trafficLightsTopRight.childNodes[5].classList.add('green')
    trafficLightsBottomrigth.childNodes[1].classList.remove('red')
    trafficLightsBottomrigth.childNodes[5].classList.add('green')
    setTimeout(ligthYellowFirst, 4000)

}
const ligthYellowFirst = () => {
    trafficLightsTopRight.childNodes[3].classList.add('yellow')
    trafficLightsBottomrigth.childNodes[3].classList.add('yellow')
    setTimeout(ligthRedFirst, 2500)
}

//світлофори 2 групи

const ligthRedSecondary = () =>{
    trafficLightsTopleft.childNodes[1].classList.add('red')
    trafficLightsTopleft.childNodes[5].classList.remove('green')
    trafficLightsTopleft.childNodes[3].classList.remove('yellow')
    trafficLightsBottomleft.childNodes[1].classList.add('red')
    trafficLightsBottomleft.childNodes[5].classList.remove('green')
    trafficLightsBottomleft.childNodes[3].classList.remove('yellow')
    setTimeout(ligthGreenSecondary, 8000)

}
const ligthGreenSecondary = () => {
    trafficLightsTopleft.childNodes[1].classList.remove('red')
    trafficLightsTopleft.childNodes[5].classList.add('green')
    trafficLightsBottomleft.childNodes[1].classList.remove('red')
    trafficLightsBottomleft.childNodes[5].classList.add('green')
    setTimeout(ligthYellowSecondary, 4000)

}
const ligthYellowSecondary = () => {
    trafficLightsTopleft.childNodes[3].classList.add('yellow')
    trafficLightsBottomleft.childNodes[3].classList.add('yellow')
    setTimeout(ligthRedSecondary, 2500)
}

