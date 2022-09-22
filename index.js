
setInterval(() => {
    let hour = document.getElementById('hour')
    let min = document.getElementById('min')
    let sec = document.getElementById('sec')

    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')

    let sec_dot = document.querySelector('.sec_dot')
    let min_dot = document.querySelector('.min_dot')
    let hour_dot = document.querySelector('.hour_dot')
    
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let am = h >= 12 ? "PM" : "AM"

    // convert clock from 24 hours to 12 hours

    if(h > 12){
        h = h - 12
    }

    // add 0 before single digit

    h = (h < 10 ) ? "0" + h : h
    m = (m < 10 ) ? "0" + m : m
    s = (s < 10 ) ? "0" + s : s

    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    ampm.innerHTML = am

    // Bar section
    
    // 12 hours clock
    hour.style.strokeDashoffset = 510 - (510 * h) / 12
    
    // 60 minutes
    min.style.strokeDashoffset = 630 - (630 * m) / 60
    
    // 60 seconds
    sec.style.strokeDashoffset = 760 - (760 * s) / 60

    // Dot section

    hour_dot.style.transform = `rotateZ(${h * 30}deg)`

    min_dot.style.transform = `rotateZ(${m * 6}deg)`
    // 360 / 60min = 6
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`
    // 360 / 60sec = 6
})