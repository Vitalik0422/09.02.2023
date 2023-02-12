const trafficLightsTopRight = document.querySelector('.trafficLightsTopRight')
const trafficLightsTopleft = document.querySelector('.trafficLightsTopleft')
const trafficLightsBottomleft = document.querySelector('.trafficLightsBottomleft')
const trafficLightsBottomrigth = document.querySelector('.trafficLightsBottomrigth')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    ligthRedFirstGroup()   
    ligthGreenSecondaryGroup()
});

const ligthRedFirstGroup = () => {
    ligthRedFirstGroupTrafficOne()
    ligthRedFirstGroupTrafficTwo()
    setTimeout(ligthGreenFirstGroup, 8000)
}

const ligthGreenFirstGroup = () => {
    ligthGreenFirstGroupTrafficOne()
    ligthGreenFirstGroupTrafficTwo()
    setTimeout(ligthYellowFirstGroup,5500)
}

const ligthYellowFirstGroup = () => {
    ligthYellowFirstGroupTrafficOne()
    ligthYellowFirstGroupTrafficTwo()
    setTimeout(ligthRedFirstGroup, 2500)
}

///2 група 
const ligthRedSecondaryGroup = () => {
    ligthRedSecondaryGroupTrafficOne()
    ligthRedSecondaryGroupTrafficTwo()
    setTimeout(ligthGreenSecondaryGroup, 8000)
}

const ligthGreenSecondaryGroup = () => {
    ligthGreenSecondaryGroupTrafficOne()
    ligthGreenSecondaryGroupTrafficTwo()
    setTimeout(ligthYellowSecondaryGroup,5500)
}

const ligthYellowSecondaryGroup = () => {
    ligthYellowSecondaryGroupTrafficOne()
    ligthYellowSecondaryGroupTrafficTwo()
    setTimeout(ligthRedSecondaryGroup, 2500)
}




//Світлофори першої групи
const ligthRedFirstGroupTrafficOne = () =>{
    trafficLightsTopRight.childNodes[1].classList.add('red')
    trafficLightsTopRight.childNodes[5].classList.remove('green')
    trafficLightsTopRight.childNodes[3].classList.remove('yellow')
}

const ligthRedFirstGroupTrafficTwo = () => {
    trafficLightsBottomrigth.childNodes[1].classList.add('red')
    trafficLightsBottomrigth.childNodes[5].classList.remove('green')
    trafficLightsBottomrigth.childNodes[3].classList.remove('yellow')

}
const ligthGreenFirstGroupTrafficOne = () => {
    trafficLightsTopRight.childNodes[1].classList.remove('red')
    trafficLightsTopRight.childNodes[5].classList.add('green')
}
    
const ligthGreenFirstGroupTrafficTwo = () => {
    trafficLightsBottomrigth.childNodes[1].classList.remove('red')
    trafficLightsBottomrigth.childNodes[5].classList.add('green')
}

    const ligthYellowFirstGroupTrafficOne = () => {
    trafficLightsTopRight.childNodes[3].classList.add('yellow')
    trafficLightsTopRight.childNodes[5].classList.remove('green')
}
    const ligthYellowFirstGroupTrafficTwo = () => {
    trafficLightsBottomrigth.childNodes[3].classList.add('yellow')
    trafficLightsBottomrigth.childNodes[5].classList.remove('green')
}

//світлофори 2 групи

const ligthRedSecondaryGroupTrafficOne = () =>{
    trafficLightsTopleft.childNodes[1].classList.add('red')
    trafficLightsTopleft.childNodes[5].classList.remove('green')
    trafficLightsTopleft.childNodes[3].classList.remove('yellow')
}

const ligthRedSecondaryGroupTrafficTwo = () => {
    trafficLightsBottomleft.childNodes[1].classList.add('red')
    trafficLightsBottomleft.childNodes[5].classList.remove('green')
    trafficLightsBottomleft.childNodes[3].classList.remove('yellow')
}

const ligthGreenSecondaryGroupTrafficOne = () => {
    trafficLightsTopleft.childNodes[1].classList.remove('red')
    trafficLightsTopleft.childNodes[5].classList.add('green')
}

const ligthGreenSecondaryGroupTrafficTwo = () => {
    trafficLightsBottomleft.childNodes[1].classList.remove('red')
    trafficLightsBottomleft.childNodes[5].classList.add('green')
}

const ligthYellowSecondaryGroupTrafficOne = () => {
    trafficLightsTopleft.childNodes[3].classList.add('yellow')
    trafficLightsTopleft.childNodes[5].classList.remove('green')
}

ligthYellowSecondaryGroupTrafficTwo = () => {
    trafficLightsBottomleft.childNodes[3].classList.add('yellow')
    trafficLightsBottomleft.childNodes[5].classList.remove('green')
}

