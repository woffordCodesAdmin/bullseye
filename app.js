
let points = 0

const throwDart = (position) => {
    let area = document.querySelector(`#p${position}`)
    let dart= document.createElement('img')
    dart.setAttribute('src', 'https://pngimg.com/d/darts_PNG22.png')
    dart.setAttribute('class','rh')
    area.append(dart)
}


const findNumber = ()=>{
    return Math.floor(Math.random() * (10 - 1) + 1)
    
}
const trackPoints = () =>{
    let scoreboard = document.querySelector('.pts')
    scoreboard.innerHTML = points
}

const start =()=>{
    let tope = findNumber()
    if(tope === 1 || tope === 6 ){
        alert("Missed")
    }else{
        points++
    }
    throwDart(tope)
    trackPoints()
}