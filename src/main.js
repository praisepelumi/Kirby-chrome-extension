document.addEventListener('DOMContentLoaded', () => {
    const title = document.createElement('h1');
    title.innerText = 'Kirby Chrome Extension';
    const body = document.querySelector('body').appendChild(title);
    const board = document.querySelector("#board")
    body.appendChild(board)

    // This creates a new instance of our timer object, passing in the body to the timer object
    // 
    const timer = document.createElement("div");
    timer.setAttribute("id", "timer");
    timer.remainingTime = 0;


    const kirby = document.createElement("img")
    kirby.setAttribute("src", "src/assets/kirby.png");
    body.appendChild(kirby)
    kirby.style.transition = "all 4s";
    kirby.style.transitionProperty = "width,height";
    kirby.style.width = "1px"
    kirby.style.height = "1px"

    // takes a chosen duration(timer mode: 1,5 or 10) and sets remaining time
    function switchMode(numMins) {
        timer.remainingTime = numMins * 5;
        countDown();
    }

    //counts down from remaining time until 0 seconds are reached
    function countDown() {
        timer.remainingTime -= 1
        console.log(timer.remainingTime)
        if (timer.remainingTime <= 0) {
            return breathIn(kirby);
        } else {
            setTimeout(countDown, 1000)
        }
    }

    function breathIn(image) {
        console.log('breathe in')
        image.style.width = "1500px"
        image.style.height = "1500px"
        
        setTimeout(() => (breathOut(image)), 4000)
    }

    function breathOut(image) {
        console.log('hi')
        image.style.width = "100px"
        image.style.height = "100px"

    }


    const oneMinBtn = document.createElement("button")
    oneMinBtn.innerText = "One Minute"
    board.appendChild(oneMinBtn)

    oneMinBtn.onclick = () => {
        console.log('i was clicked')
        switchMode(1)
    }

    const fiveMinBtn = document.createElement("button")
    fiveMinBtn.innerText = "Five Minutes"
    board.appendChild(fiveMinBtn)

    fiveMinBtn.onclick = () => {
        console.log('i was clicked')
        switchMode(5)
    }

    const tenMinBtn = document.createElement("button")
    tenMinBtn.innerText = "TenMinutes"
    board.appendChild(tenMinBtn)

    tenMinBtn.onclick = () => {
        console.log('i was clicked')
        switchMode(10)
    }

});