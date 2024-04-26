// screen
const screen = document.querySelector("#screen")
// Ac all clear
function allClear() {

    screen.innerHTML = "clear screen"
    setTimeout(() => {
        screen.innerHTML = ""
    }, 100);
}
// backspace

function oneClear() {
    // ip = screen.innerHTML
    // ip = ip.substring(0, ip.length - 1)
    // screen.innerHTML=ip
    
    screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1)

    // ip=screen.innerHTML
    // ip.slice(0,-1)
    // console.log(ip);
    // screen.innerHTML=ip

}


// numbers 0-9
function num(num) {
    screen.innerHTML += num
}


// operators

function operator(op) {
    screen.innerHTML += op
}



// calulate btn

function calac() {

    try {
        ip = screen.innerHTML
        op = eval(ip)
        // screen.innerHTML = ip+"="+op
        screen.innerHTML = op
    }
    catch {
        screen.innerHTML = "invalid operation"
        setTimeout(() => {
            screen.innerHTML = ip
        }, 1000);
    }

}
