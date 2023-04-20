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
    kirby.setAttribute("src", "src/assets/kirby_walking.webp");
    body.appendChild(kirby)
    kirby.style.transition = "all 4s";
    kirby.style.transitionProperty = "width,height";
    kirby.style.position = "absolute"
    kirby.style.top ="125px"
    kirby.style.width = "100px"
    kirby.style.height = "100px"

    // takes a chosen duration(timer mode: 1,5 or 10) and sets remaining time in (min * 60 sec/min)
    function switchMode(numMins) {
        timer.remainingTime = numMins * 60;
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
        
        image.src = "src/assets/kirby.png"
        image.style.width = "750px"
        image.style.height = "750px"
        
        setTimeout(() => (breathOut(image)), 4000)
    }

    function breathOut(image) {
        console.log('hi')
        image.style.width = "100px";
        image.style.height = "100px";
        setTimeout(() => (image.src = "src/assets/kirby_walking.webp"), 4000);

    }


    const oneMinBtn = document.createElement("button")
    oneMinBtn.innerText = "One Minute"
    board.appendChild(oneMinBtn)
    oneMinBtn.style.position = "relative";

    oneMinBtn.onclick = () => {
        console.log('i was clicked')
        switchMode(1)
    }

    const fiveMinBtn = document.createElement("button")
    fiveMinBtn.innerText = "Five Minutes"
    board.appendChild(fiveMinBtn)
    fiveMinBtn.position = "relative";

    fiveMinBtn.onclick = () => {
        console.log('i was clicked')
        switchMode(5)
    }

    const tenMinBtn = document.createElement("button")
    tenMinBtn.innerText = "TenMinutes"
    board.appendChild(tenMinBtn)
    tenMinBtn.position = "relative";

    tenMinBtn.onclick = () => {
        console.log('i was clicked')
        switchMode(10)
    }

});