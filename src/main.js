document.addEventListener('DOMContentLoaded', () => {
    const title = document.createElement('h1');
    title.innerText = 'Kirby Chrome Extension';
    const body = document.querySelector('body').appendChild(title);
    const board = document.querySelector("#board")
    body.appendChild(board)

    // This creates a new instance of our timer object, passing in the body to the timer object
    // 
    const timer = new TimerObj(body)
    const kirby = document.createElement("img")
        kirby.setAttribute("src", "src/assets/kirby.png");
        board.appendChild(kirby)
 

    const oneMinBtn = document.createElement("button")
    oneMinBtn.innerText = "One Minute"
    board.appendChild(oneMinBtn)

    oneMinBtn.onclick = () => {
        console.log('i was clicked')
        timer.SwitchMode(1)
    }
    
    const fiveMinBtn = document.createElement("button")
    fiveMinBtn.innerText = "Five Minutes"
    board.appendChild(fiveMinBtn)
    
    fiveMinBtn.onclick = () => {
        console.log('i was clicked')
        timer.SwitchMode(5)
    }

    const tenMinBtn = document.createElement("button")
    tenMinBtn.innerText = "TenMinutes"
    board.appendChild(tenMinBtn)
    
    tenMinBtn.onclick = () => {
        console.log('i was clicked')
        timer.SwitchMode(10)
    }

});

//start the timer?
    //trigger Kirby

//setTimeout or whatever to call dancing Kirby