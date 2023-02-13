const trafficLightsFirst = document.querySelectorAll(".trafficLightsFirst")
const trafficLightsSecondary = document.querySelector('.trafficLightsSecondary')
const onBtn = document.querySelector('.btn')


const timer2 = () => {
    trafficLightsFirstChange(5, 'green')
    setTimeout(timer3, 5000)
}

const timer3 = () => {
    trafficLightsFirstChange(3, 'yellow')
}

onBtn.addEventListener('click', () => {
    trafficLightsFirstChange(1, 'red')
    setTimeout(timer2, 5000)
})



const trafficLightsFirstChange = (x, light) => {
    for(let i = 0; i < trafficLightsFirst.length ; i++){
        trafficLightsFirst[i].childNodes[x].classList.toggle(light)
    }
}
