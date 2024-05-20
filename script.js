/* START PAGE */ 

document.addEventListener("DOMContentLoaded", function() {
    textChange();
});

const textes = ["Hello! My name is Ilia, I'm a computer science student at TU Darmstadt", 'I suggest you play a game with me about my interactive CV.', 'The game is simple: there will be 5 rounds in total.', 
    'In each round, you have to complete 2 simple tasks', 'One just for fun, the other related to one of my projects.', 
    'At the end of each round, you will receive either some information about me', 'or a link to a project associated with that round.', 
    'Good luck! Click on the car to start'
];

let index = 0;

function textChange() {
    const hello = document.querySelector(".hello");
    const oldText = document.querySelector(".text");
    if (oldText) {
        hello.removeChild(oldText); 
    }
    const newText = document.createElement("h1"); 
    newText.textContent = textes[index];
    newText.classList.add("text");
    hello.appendChild(newText); 
    index = index + 1; 
    if (index < textes.length) {
        setTimeout(textChange, 4500);
    }
}

const car = document.querySelector(".car");
const plane = document.querySelector(".plane");
const hello = document.querySelector(".hello");
const hello1 = document.querySelector(".hello1");
const road = document.querySelector(".road");
const animationContainer = document.querySelector(".animation-container");
let isFirstClick = false;


function waitForСarClick() {
    return new Promise((resolve, reject) => {
        isFirstClick = true;

        function handleClick() {
            car.removeEventListener("click", handleClick);
            resolve();
        }

        car.addEventListener("click", handleClick);
    });
}


/* ROUND ONE */

let firstRoundIsEnded = false; 

const planeControl = (event) => {
    console.log("isFirstClick ", isFirstClick)
    if (isFirstClick) {
        switch (event.key) {
            case 'ArrowUp':
                moveObject(plane, 'up');
                break;
            case 'ArrowDown':
                moveObject(plane, 'down');
                if (plane.style.top === "460px") {
                    road.style.animation = "changeBorder 1s forwards";
                    firstRoundIsEnded = true;
                    plane.style.animation = "fadeOut 1.5s forwards, slide 5s linear infinite";
                    road.style.animation = "fadeOut 1.5s forwards";
                    hello1.style.animation = "fadeOut 1.5s forwards";
                    animationContainer.style.animation = "fadeOut 1.5s forwards";
                    skipPlane.style.animation = "fadeOut 1.5s forwards";
                    hello2.style.display = "flex";
                    boss1.style.display = "flex"; 
                    skipSim.style.display = "flex";
                    hello2.style.animation = "fadeIn 1.5s forwards";
                    boss1.style.animation = "fadeIn 1.5s forwards";
                    skipSim.style.animation = "fadeIn 1.5s forwards";
                    setTimeout(() => {
                        plane.style.display = "none";
                        road.style.display = "none";
                        hello1.style.display = "none";
                        animationContainer.style.display = "none";
                        skipPlane.style.display = "none";
                    }, 1500);
                }
                break;
            case 'ArrowLeft':
                moveObject(plane, 'left');
                break;
            case 'ArrowRight':
                moveObject(plane, 'right');
                break;
        }
    } 
};


function moveObject(object, direction) {
    const speed = 10; 

    let top = parseInt(object.style.top);
    let left = parseInt(object.style.left);   

    switch (direction) {
      case 'up':
        top -= speed;
        break;
      case 'down':
        top += speed;
        break;
      case 'left':
        left -= speed;
        break;
      case 'right':
        left += speed;
        break;
    }

    object.style.top = top + 'px';
    object.style.left = left + 'px';
  }

const skipPlane = document.querySelector(".skip-plane");
const skipSim = document.querySelector(".skip-sim");
const skipMeteo = document.querySelector(".skip-meteo");
const skipBeaver = document.querySelector(".skip-beaver");
const skipApples = document.querySelector(".skip-apples");
const skipSketch = document.querySelector(".skip-sketch");
const skipLibrary = document.querySelector(".skip-library");
const skipTtt = document.querySelector(".skip-ttt");

skipPlane.addEventListener("click", function() {
    road.style.animation = "changeBorder 1s forwards";
                    firstRoundIsEnded = true;
                    plane.style.animation = "fadeOut 1.5s forwards, slide 5s linear infinite";
                    road.style.animation = "fadeOut 1.5s forwards";
                    hello1.style.animation = "fadeOut 1.5s forwards";
                    animationContainer.style.animation = "fadeOut 1.5s forwards";
                    skipPlane.style.animation = "fadeOut 1.5s forwards";
                    hello2.style.display = "flex";
                    boss1.style.display = "flex"; 
                    skipSim.style.display = "flex";
                    hello2.style.animation = "fadeIn 1.5s forwards";
                    boss1.style.animation = "fadeIn 1.5s forwards";
                    skipSim.style.animation = "fadeIn 1.5s forwards";
                    setTimeout(() => {
                        plane.style.display = "none";
                        road.style.display = "none";
                        hello1.style.display = "none";
                        animationContainer.style.display = "none";
                        skipPlane.style.display = "none";
                    }, 1500);
})

waitForСarClick().then(() => {
    hello.style.animation = "fadeOut 1.5s forwards";
    skipPlane.style.display = "flex";
    hello1.style.animation = "fadeIn 1.5s forwards";
    skipPlane.style.animation = "fadeIn 1.5s forwards";
    hello1.style.display = "flex";
    plane.style.top = "320px";
    car.style.animation = "fadeOut 1.5s forwards, slide2 10s linear infinite";
    setTimeout(() => {
        hello.style.display = "none";
        car.style.display = "none";
    }, 1500);
    document.addEventListener("keydown", function(event) {
        if (!firstRoundIsEnded) {
            planeControl(event);
        }
    });
})

/* BOSS 1 */
const textes2 = ["Congratulations, you did it!", "Now you need to move the SIM card to the center of the phone to call me",
 "and I'll provide more information about myself"];
 let index2 = 0;

 function textChange2() {
     const hello = document.querySelector(".hello2");
     const oldText = document.querySelector(".text2");
     if (oldText) {
         hello.removeChild(oldText); 
     }
     const newText = document.createElement("h1"); 
     newText.textContent = textes2[index2];
     newText.classList.add("text2");
     hello.appendChild(newText); 
     index2 = (index2 + 1) % textes2.length; 
     setTimeout(textChange2, 4000); 
 }

/* BOSS 2 */ 

textChange2();

let isDragging = false;
let initialX;
let initialY;
let offsetX = 0;
let offsetY = 0;

const sim = document.querySelector('.sim');
const smartphone = document.querySelector('.smartphone');
const hello2 = document.querySelector('.hello2');
const phone = document.querySelector(".phone");
const boss1 = document.querySelector(".boss1");
const hello3 = document.querySelector(".hello3");
const hello4 = document.querySelector(".hello4");

skipSim.addEventListener("click", function() {
    document.removeEventListener("mouseup", fallmeteo);
    phone.style.display = "flex";
    sim.style.animation = "fadeOut 1.5s forwards";
    smartphone.style.animation = "fadeOut 1.5s forwards";
    skipSim.style.animation = "fadeOut 1.5s forwards";
    hello2.style.animation = "fadeOut 1.5s forwards";
    phone.style.animation = "rotateAnimation 1.5s ease-in-out infinite, fadeIn 1.5s forwards";
    setTimeout(() => {
        sim.style.display = "none";
        smartphone.style.display = "none";
        skipSim.style.display = "none";
        hello2.style.display =  "none";
        cv.style.display = "flex";
        cvbutton.style.display = "flex";
        cv.style.animation = "fadeIn 1.5s forwards";
        cvbutton.style.animation = "fadeIn 1.5s forwards";
        boss1.style.animation = "fadeOut 1.5s forwards";
    }, 1500);
    setTimeout(() => {
            boss1.style.display = "none";
        }, 3000)        
})

sim.addEventListener('mousedown', function(event) {
    isDragging = true;
    initialX = event.clientX - offsetX;
    initialY = event.clientY - offsetY;
});

document.addEventListener('mousemove', function(event) {
    if (isDragging) {
        offsetX = event.clientX - initialX;
        offsetY = event.clientY - initialY;
        sim.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
});

function fallmeteo(event) {
    if (firstRoundIsEnded) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        isDragging = false;
        if (event.clientX > screenWidth * 0.4 && event.clientX < screenWidth * 0.6 && event.clientY > screenHeight * 0.35 && event.clientY < screenHeight * 0.65) {
            document.removeEventListener("mouseup", fallmeteo);
    phone.style.display = "flex";
    sim.style.animation = "fadeOut 1.5s forwards";
    smartphone.style.animation = "fadeOut 1.5s forwards";
    skipSim.style.animation = "fadeOut 1.5s forwards";
    hello2.style.animation = "fadeOut 1.5s forwards";
    phone.style.animation = "rotateAnimation 1.5s ease-in-out infinite, fadeIn 1.5s forwards";
    setTimeout(() => {
        sim.style.display = "none";
        smartphone.style.display = "none";
        skipSim.style.display = "none";
        hello2.style.display =  "none";
        cv.style.display = "flex";
        cvbutton.style.display = "flex";
        cv.style.animation = "fadeIn 1.5s forwards";
        cvbutton.style.animation = "fadeIn 1.5s forwards";
        boss1.style.animation = "fadeOut 1.5s forwards";
    }, 1500);
    setTimeout(() => {
            boss1.style.display = "none";
        }, 3000)     
        }
    }
}

document.addEventListener('mouseup', fallmeteo);

/* CV */

let round2Started = true;

const cvbutton = document.querySelector(".cv-button");
const cv = document.querySelector(".cv");
cvbutton.addEventListener("click", function() {
    round2Started = true;
    animationContainer.style.display = "flex";
    hello3.style.display = "flex";
    meteorits.forEach(m => m.style.display = "flex");
    animationContainer.style.display = "flex";
    road.style.display = "flex";
    car.style.display = "flex";
    skipMeteo.style.display = "flex";

    animationContainer.style.animation = "fadeIn 1.5s forwards";
    hello3.style.animation = "fadeIn 1.5s forwards";
    animationContainer.style.animation = "fadeIn 1.5s forwards";
    road.style.animation = "fadeIn 1.5s forwards";
    car.style.animation = "fadeIn 1.5s forwards, slide2 10s linear infinite";
    skipMeteo.style.animation = "fadeIn 1.5s forwards";

    cv.style.animation = "fadeOut 1.5s forwards";
        cvbutton.style.animation = "fadeOut 1.5s forwards";
        plane.style.animation = "fadeOut 1.5s forwards, slide 5s linear infinite";
        road.style.animation = "fadeOut 1.5s forwards";
    setTimeout(() => {
        cv.style.display = "none";
        cvbutton.style.display = "none";
        plane.style.display = "none";
        road.style.animation = "none";
    }, 1500)
})

/* round 2 */ 

skipMeteo.addEventListener("click", function() {
    clearInterval(intervalId);
            hello4.style.display = "flex";
            forest1.style.display = "flex";
            forest2.style.display = "flex";
            forest3.style.display = "flex";
            sun.style.display = "flex";
            skipBeaver.style.display = "flex";
            hello4.style.animation = "fadeIn 1.5s forwards";
            forest1.style.animation = "fadeIn 1.5s forwards";
            forest2.style.animation = "fadeIn 1.5s forwards";
            forest3.style.animation = "fadeIn 1.5s forwards";
            sun.style.animation = "fadeIn 1.5s forwards";
            skipBeaver.style.animation = "fadeIn 1.5s forwards";
            hello3.style.animation = "fadeOut 1.5s forwards";
            road.style.animation = "fadeOut 1.5s forwards";
            plane.style.animation = "fadeOut 1.5s forwards, slide 5s linear infinite";
            skipMeteo.style.animation = "fadeOut 1.5s forwards";
            meteorits.forEach(m => m.style.display = "none");
            setTimeout(() => {
                hello3.style.display = "none";
                road.style.animation = "none";
                plane.style.display = "none";
                skipMeteo.style.display = "none";
            }, 1500)
})

const meteorits = document.querySelectorAll(".meteo");
let intervalId;

if (round2Started) {
    intervalId = setInterval(checkCollision, 100);
    console.log("i");
}

let meteors = 4;
meteorits.forEach(m => m.addEventListener("click", function() {
    m.style.display = "none";
    meteors--;
}))


function checkCollision() {
    const carRect = car.getBoundingClientRect();

    meteorits.forEach(m => {
        const meteoritRect = m.getBoundingClientRect();

        const extendedMeteoritRect = {
            left: meteoritRect.left + 50,
            top: meteoritRect.top + 50,
            right: meteoritRect.right - 50,
            bottom: meteoritRect.bottom - 50
        };

        if (carRect.left < extendedMeteoritRect.right &&
            carRect.right > extendedMeteoritRect.left &&
            carRect.top < extendedMeteoritRect.bottom &&
            carRect.bottom > extendedMeteoritRect.top) {
            meteorits.forEach(m => m.style.animationPlayState = 'paused')
            setTimeout(() => {
                meteorits.forEach(m => m.style.animationPlayState = 'running')
            }, 3000);
        }
        if (meteors === 0) {
            clearInterval(intervalId);
            hello4.style.display = "flex";
            forest1.style.display = "flex";
            forest2.style.display = "flex";
            forest3.style.display = "flex";
            sun.style.display = "flex";
            skipBeaver.style.display = "flex";
            hello4.style.animation = "fadeIn 1.5s forwards";
            forest1.style.animation = "fadeIn 1.5s forwards";
            forest2.style.animation = "fadeIn 1.5s forwards";
            forest3.style.animation = "fadeIn 1.5s forwards";
            sun.style.animation = "fadeIn 1.5s forwards";
            skipBeaver.style.animation = "fadeIn 1.5s forwards";
            hello3.style.animation = "fadeOut 1.5s forwards";
            road.style.animation = "fadeOut 1.5s forwards";
            plane.style.animation = "fadeOut 1.5s forwards, slide 5s linear infinite";
            skipMeteo.style.animation = "fadeOut 1.5s forwards";
            meteorits.forEach(m => m.style.display = "none");
            setTimeout(() => {
                hello3.style.display = "none";
                road.style.animation = "none";
                plane.style.display = "none";
                skipMeteo.style.display = "none";
            }, 1500)
        }
    });
}

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const body = document.querySelector("body");
const justinBeaver = document.querySelector(".justin-beaver");
const text4 = document.querySelector(".text4");
const forest1 = document.querySelector(".forest1");
const forest2 = document.querySelector(".forest2");
const forest3 = document.querySelector(".forest3");

sun.addEventListener("click", function() {
    sun.style.display = "none";
    moon.style.display = "flex";
    body.style.background = "black";
    body.style.animation = "none";
    justinBeaver.style.display = "flex";
    text4.style.color = "red";
    text4.textContent = "Now click on Justin Beaver!";
})

justinBeaver.addEventListener("click", function() {
    body.style.animation = "background 15s infinite alternate";
    form.style.display = "flex";
    form.style.animation = "fadeIn 1.5s forwards";
    forest1.style.animation = "fadeOut 1.5s forwards";
    forest2.style.animation = "fadeOut 1.5s forwards";
    forest3.style.animation = "fadeOut 1.5s forwards";
    justinBeaver.style.animation = "fadeOut 1.5s forwards";
    sun.style.animation = "fadeOut 1.5s forwards";
    moon.style.animation = "fadeOut 1.5s forwards";
    hello4.style.animation = "fadeOut 1.5s forwards";
    skipBeaver.style.animation = "fadeOut 1.5s forwards";
    setTimeout(() => {
        forest1.style.display = "none";
        forest2.style.display = "none";
        forest3.style.display = "none";
        justinBeaver.style.display = "none";
        sun.style.display = "none";
        moon.style.display = "none";
        hello4.style.display = "none";
        skipBeaver.style.display = "none";
    }, 1500)
})

skipBeaver.addEventListener("click", function() {
    body.style.animation = "background 15s infinite alternate";
    form.style.display = "flex";
    form.style.animation = "fadeIn 1.5s forwards";
    forest1.style.animation = "fadeOut 1.5s forwards";
    forest2.style.animation = "fadeOut 1.5s forwards";
    forest3.style.animation = "fadeOut 1.5s forwards";
    justinBeaver.style.animation = "fadeOut 1.5s forwards";
    sun.style.animation = "fadeOut 1.5s forwards";
    moon.style.animation = "fadeOut 1.5s forwards";
    hello4.style.animation = "fadeOut 1.5s forwards";
    skipBeaver.style.animation = "fadeOut 1.5s forwards";
    setTimeout(() => {
        forest1.style.display = "none";
        forest2.style.display = "none";
        forest3.style.display = "none";
        justinBeaver.style.display = "none";
        sun.style.display = "none";
        moon.style.display = "none";
        hello4.style.display = "none";
        skipBeaver.style.display = "none";
    }, 1500)
})

/* FORM */

let round3Started = true;

const formbutton = document.querySelector(".form-button");
const form = document.querySelector(".form-project");
const text6 = document.querySelector(".text6");

formbutton.addEventListener("click", function() {
    round3Started = true;
    animationContainer.style.display = "flex";
    hello6.style.display = "flex";
    text6.style.display = "flex";
    apples2.style.display = "flex";
    apples.forEach(a => a.style.display = "flex");
    basket.style.display = "flex";
    skipApples.style.display = "flex";

    animationContainer.style.animation = "fadeIn 1.5s forwards"
    text6.style.animation = "fadeIn 1.5s forwards"
    apples2.style.animation = "fadeIn 1.5s forwards"
    basket.style.animation = "fadeIn 1.5s forwards"
    skipApples.style.animation = "fadeIn 1.5s forwards"

    form.style.animation = "fadeOut 1.5s forwards";
    formbutton.style.animation = "fadeOut 1.5s forwards";
    plane.style.animation = "fadeOut 1.5s forwards, slide 5s linear infinite";
    car.style.animation = "fadeOut 1.5s forwards, slide2 10s linear infinite";

    textChange3();

    setTimeout(() => {
        form.style.display = "none";
        formbutton.style.display = "none";
        plane.style.display = "none";
        car.style.display = "none";
    }, 1500)
})

const apple1 = document.querySelector(".apple1");
const apple2 = document.querySelector(".apple2");
const apple3 = document.querySelector(".apple3");
const apple4 = document.querySelector(".apple4");
const apple5 = document.querySelector(".apple5");
const apple6 = document.querySelector(".apple6");
const apple7 = document.querySelector(".apple7");
const apple8 = document.querySelector(".apple8");
const apple9 = document.querySelector(".apple9");

function fallingApples() {
    apple2.style.animation = "fall 5s linear infinite";
    setTimeout(() => {
        apple5.style.animation = "fall 3s linear infinite";
    }, 2000);
    setTimeout(() => {
        apple9.style.animation = "fall 5s linear infinite";
    }, 4000);
    setTimeout(() => {
        apple7.style.animation = "fall 6s linear infinite";
    }, 6000);
    setTimeout(() => {
        apple4.style.animation = "fall 4s linear infinite";
    }, 8000);
    setTimeout(() => {
        apple1.style.animation = "fall 7s linear infinite";
    }, 10000);
    setTimeout(() => {
        apple8.style.animation = "fall 5s linear infinite";
    }, 12000);
    setTimeout(() => {
        apple6.style.animation = "fall 3s linear infinite";
    }, 14000);
    setTimeout(() => {
        apple3.style.animation = "fall 4s linear infinite";
    }, 16000);
}

const basket = document.querySelector(".basket");

const textes3 = ["To access the next project, you need to draw the German flag", "But first, collect as many red, black, and yellow apples as possible",
"to have the dyes for the flag by controlling the basket with the arrow keys"];

let index3 = 0;

function textChange3() {
    const hello = document.querySelector(".hello6");
    const oldText = document.querySelector(".text6");
    if (oldText) {
        hello.removeChild(oldText); 
    }
    const newText = document.createElement("h1"); 
    newText.textContent = textes3[index3];
    newText.classList.add("text6");
    hello.appendChild(newText); 
    index3 = (index3 + 1) % textes3.length; 
    setTimeout(textChange3, 4000); 
}

function moveObject2(object, direction) {
    const speed = 10; 
    let left = parseInt(window.getComputedStyle(object).left);

    switch (direction) {
        case 'left':
            left -= speed;
            break;
        case 'right':
            left += speed;
            break;
    }

    object.style.left = left + 'px';
}

if (round3Started) {
    fallingApples();
    document.addEventListener("keydown", function(event) {
        switch (event.key) {
            case 'ArrowLeft':
                moveObject2(basket, 'left');
                break;
            case 'ArrowRight':
                moveObject2(basket, 'right');
                break;
        }
    });
}
const apples = document.querySelectorAll(".apple");
const hello6 = document.querySelector(".hello6");
const animationText = document.querySelector(".animation-text")
const apples2 = document.querySelector(".apples");

let appleCounter = 9;

function checkCollisionWithBasket() {
    const basketRect = basket.getBoundingClientRect();

    const offset = 10; 

    const smallerBasketRect = {
        left: basketRect.left + offset,
        right: basketRect.right - offset,
        top: basketRect.top + offset,
        bottom: basketRect.bottom - offset
    };

    apples.forEach(apple => {
        const appleRect = apple.getBoundingClientRect();

        if (smallerBasketRect.left < appleRect.right &&
            smallerBasketRect.right > appleRect.left &&
            smallerBasketRect.top < appleRect.bottom &&
            smallerBasketRect.bottom > appleRect.top) {
                apple.style.display = "none";
                appleCounter--;
        }

        if (appleCounter === 0) {
            clearInterval(intervalId2);
            basket.style.display = "none";
            plane.style.top = "0px";
            plane.style.display = "flex";
            plane.style.animation = "fadeIn 1.5s forwards, slide 5s linear infinite";
            apples.display = "none";
            animationText.style.display = "inline-block";
            car.style.display = "flex";
            hello6.style.display = "none";
            plane.style.animationIterationCount = "1";
            setTimeout(() => {
                plane.style.display = "none";
            }, 5000);
            animationText.style.animationIterationCount = "1";
            setTimeout(() => {
                animationText.style.display = "none";
            }, 6900);
            grid.style.display = "flex";
            info.style.display = "flex";
            slidecontainer.style.display = "flex";
            slider.style.display = "flex";
            gridSingature.style.display = "flex";
            const hello88 = document.querySelector(".hello88");
            const text88 = document.querySelector(".text88");
            setTimeout(() => {
                hello88.style.display = "flex"
                text88.style.display = "flex"
            }, 8500);
            skipApples.style.display = "none";
            skipSketch.style.display = "flex";
        }
    });
}


let intervalId2;

intervalId2 = setInterval(checkCollisionWithBasket, 1000);

skipApples.addEventListener("click", function() {
    clearInterval(intervalId2);
    basket.style.display = "none";
    plane.style.top = "0px";
    plane.style.display = "flex";
    plane.style.animation = "fadeIn 1.5s forwards, slide 5s linear infinite";
    apples.display = "none";
    animationText.style.display = "inline-block";
    car.style.display = "flex";
    hello6.style.display = "none";
    apples.forEach(a => a.style.display = "none");
    plane.style.animationIterationCount = "1";
    setTimeout(() => {
        plane.style.display = "none";
    }, 5000);
    animationText.style.animationIterationCount = "1";
    setTimeout(() => {
        animationText.style.display = "none";
    }, 6900);
    grid.style.display = "flex";
    info.style.display = "flex";
    slidecontainer.style.display = "flex";
    slider.style.display = "flex";
    gridSingature.style.display = "flex";
    const hello88 = document.querySelector(".hello88");
    const text88 = document.querySelector(".text88");
    setTimeout(() => {
        hello88.style.display = "flex"
        text88.style.display = "flex"
    }, 8500);
    skipApples.style.display = "none";
    skipSketch.style.display = "flex";
});
/* boss 3 */ 

const slider = document.querySelector(".slider");
const gridSingature = document.querySelector(".slidecontainer p");
const grid = document.querySelector(".grid");
const firstRow = document.querySelector("#first");
let colorValue = "lightblue";
let backgroundColorValue = "#496B53";
const switchElement = document.querySelector('.info0 input[type="checkbox"]');
const switchElement2 = document.querySelector('.info4 input[type="checkbox"]');
let flag = 0;
const redButton = document.querySelector(".red");
const goldButton = document.querySelector(".gold");
const blackButton = document.querySelector(".black");
const info = document.querySelector(".info");
const slidecontainer = document.querySelector(".slidecontainer");

redButton.addEventListener("click", function() {
    colorValue = "red";
})

blackButton.addEventListener("click", function() {
    colorValue = "black";
})

goldButton.addEventListener("click", function() {
    colorValue = "gold";
})


const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener("mouseover", function() {
        if (mode() == 0) {
            square.style.backgroundColor = colorValue;
        }
        if (mode() == 1) {
            square.style.backgroundColor = grid.style.backgroundColor;
        }  
    });
});

slider.addEventListener("input", function() {
    console.log("ok ", slider.value);
    const currentSquares = document.querySelectorAll(".square");
    currentSquares.forEach(square => {
        square.style.backgroundColor = grid.style.backgroundColor;
    })
    gridSingature.textContent = slider.value + " x " + slider.value + " grid";
    let firstRowLength = firstRow.children.length;
    while (grid.children.length > slider.value) {
        grid.removeChild(grid.lastChild);
    }
    while (grid.children.length < slider.value) {
        let tempRow = document.createElement("div");
        tempRow.classList.add("row-initial");
        tempRow.classList.add("new");
        for (let i = 0; i < firstRowLength; i++) {
            let tempSquare = document.createElement("div");
            tempSquare.classList.add("square");
            if (mode2() == 1) {
                tempSquare.style.border = "none";
            }
            tempRow.appendChild(tempSquare);
        }
        grid.appendChild(tempRow);
    }
    const rows = document.querySelectorAll(".row-initial");
    rows.forEach(row => {
        tempLength = row.children.length;
        while (row.children.length > slider.value) {
            row.removeChild(row.lastChild);
        }
        while (row.children.length < slider.value) {
            let tempSquare = document.createElement("div");
            tempSquare.classList.add("square");
            if (mode2() == 1) {
                tempSquare.style.border = "none";
            }
            row.appendChild(tempSquare);
        }
    }) 

    const newSquares = document.querySelectorAll(".square");
    newSquares.forEach(square => {
    square.addEventListener("mouseover", function() {
        if (mode() == 0) {
            square.style.backgroundColor = colorValue;
        }
        if (mode() == 1) {
            square.style.backgroundColor = grid.style.backgroundColor;
        } 
        if (slider.value == 9) {
            let redCounter = 0;
let goldCounter = 0;
let blackCounter = 0;
const colorArray = [];
let colorFlag = false;
newSquares.forEach(ns => {
    if (ns.style.backgroundColor == "black") {
        colorArray.push(0);
    } else if (ns.style.backgroundColor == "red") {
        colorArray.push(1);
    } else if (ns.style.backgroundColor == "gold") {
        colorArray.push(2);
    }
});

let countColor = 0;
for (let i = 0; i < 81; i++) {
    if ((i < 27 && colorArray[i] == 0) || (i >= 27 && i < 54 && colorArray[i] == 1) || (i >= 54 && colorArray[i] == 2)) {
        countColor++;
    }
}
if (countColor === 81) {
    sketch.style.display = "flex";
    sketchbutton.style.display = "flex";
    sketch.style.animation = "fadeIn 1.5s forwards";
    sketchbutton.style.animation = "fadeIn 1.5s forwards";
    const hello88 = document.querySelector(".hello88");
    const text88 = document.querySelector(".text88");

    animationContainer.style.animation = "fadeOut 1.5s forwards";
    grid.style.animation = "fadeOut 1.5s forwards";
    info.style.animation = "fadeOut 1.5s forwards";
    slidecontainer.style.animation = "fadeOut 1.5s forwards";
    hello88.style.animation = "fadeOut 1.5s forwards";
    text88.style.animation = "fadeOut 1.5s forwards";
    plane.style.animation = "fadeOut 1.5s forwards";
    skipSketch.style.animation = "fadeOut 1.5s forwards";

    setTimeout(() => {
        animationContainer.style.display = "none";
        grid.style.display = "none";
        info.style.display = "none";
        slidecontainer.style.display = "none";
        hello88.style.display = "none";
        text88.style.display = "none";
        plane.style.display = "none";
        skipSketch.style.display = "none";
    })
}
        } 
    });
});
});

skipSketch.addEventListener("click", function() {
    sketch.style.display = "flex";
    sketchbutton.style.display = "flex";
    sketch.style.animation = "fadeIn 1.5s forwards";
    sketchbutton.style.animation = "fadeIn 1.5s forwards";
    const hello88 = document.querySelector(".hello88");
    const text88 = document.querySelector(".text88");

    animationContainer.style.animation = "fadeOut 1.5s forwards";
    grid.style.animation = "fadeOut 1.5s forwards";
    info.style.animation = "fadeOut 1.5s forwards";
    slidecontainer.style.animation = "fadeOut 1.5s forwards";
    hello88.style.animation = "fadeOut 1.5s forwards";
    text88.style.animation = "fadeOut 1.5s forwards";
    plane.style.animation = "fadeOut 1.5s forwards";
    skipSketch.style.animation = "fadeOut 1.5s forwards";

    setTimeout(() => {
        animationContainer.style.display = "none";
        grid.style.display = "none";
        info.style.display = "none";
        slidecontainer.style.display = "none";
        hello88.style.display = "none";
        text88.style.display = "none";
        plane.style.display = "none";
        skipSketch.style.display = "none";
    })
})

switchElement.addEventListener("change", function() {
    if (this.checked) {
      flag = 1;
    } else {
      flag =  0;
    }
  });

  function mode() {
    if (flag == 1) {
        return 1;
    }
    else {
        return 0;
    }
  }

  function mode2() {
    if (flagBorder == 1) {
        return 1;
    }
    else {
        return 0;
    }
  }

  let flagBorder = 0;

  switchElement2.addEventListener("change", function() {
    const newSquares = document.querySelectorAll(".square");
    if (this.checked) {
        newSquares.forEach(square => {
            square.style.border = "none";
            flagBorder = 1;
        });
    }
    else {
        newSquares.forEach(square => {
            square.style.border = "solid white 1px";
            flagBorder = 0;
        });
    }   
  });

  /* SKETCH */ 

  let round4Started = true;

  const sketchbutton = document.querySelector(".sketch-button");
  const sketch = document.querySelector(".sketch-project");
  sketchbutton.addEventListener("click", function() {
    textChange4();
    round4Started = true;
      const cardThis = document.querySelectorAll(".card4");
    animationContainer.style.display = "flex";
    cardThis.forEach(p => p.style.display = "flex");
      hello7.style.display = "flex";
      skipLibrary.style.display = "flex";
      animationContainer.style.animation = "fadeIn 1.5s forwards";
    cardThis.forEach(p => p.style.animation = "fadeIn 1.5s forwards");
      hello7.style.animation = "fadeIn 1.5s forwards";
      skipLibrary.style.animation = "fadeIn 1.5s forwards";
      sketch.style.animation = "fadeOut 1.5s forwards";
      sketchbutton.style.animation = "fadeOut 1.5s forwards";
      plane.style.animation = "fadeOut 1.5s forwards";
      setTimeout(() => {
        sketch.style.display = "none";
      sketchbutton.style.display = "none";
      plane.style.display = "none";
  })   
  })

 /* ROUND 4 */ 

const textes4 = ["We are almost at the finish line, with only 2 projects left", "And to access the next one,",
"you need to spell out the word 'library' with these cards!"];

let index4 = 0;

function textChange4() {
    const hello = document.querySelector(".hello7");
    const oldText = document.querySelector(".text7");
    if (oldText) {
        hello.removeChild(oldText); 
    }
    const newText = document.createElement("h1"); 
    newText.textContent = textes4[index4];
    newText.classList.add("text7");
    hello.appendChild(newText); 
    index4 = (index4 + 1) % textes4.length; 
    setTimeout(textChange4, 4000); 
}

const libraryCards = document.querySelectorAll('.card4');
libraryCards.forEach(draggable => {
    let offsetX4, offsetY4, isDragging4 = false;

    draggable.addEventListener('mousedown', (e) => {
        offsetX4 = e.clientX - draggable.getBoundingClientRect().left;
        offsetY4 = e.clientY - draggable.getBoundingClientRect().top;
        isDragging4 = true;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging4) {
            draggable.style.left = `${e.clientX - offsetX4}px`;
            draggable.style.top = `${e.clientY - offsetY4}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging4 = false;
    });
});

const lib = document.querySelector(".library-project");
const hello7 = document.querySelector(".hello7");
function checkCardOrder() {
    const cardY = document.querySelector(".card-Y");
    const cardA = document.querySelector(".card-A");
    const cardB = document.querySelector(".card-B");
    const cardR1 = document.querySelector(".card-R1");
    const cardR2 = document.querySelector(".card-R2");
    const cardL = document.querySelector(".card-L");
    const cardI = document.querySelector(".card-I");
    
    if ((cardL.getBoundingClientRect().left < cardI.getBoundingClientRect().left &&
            cardI.getBoundingClientRect().left < cardB.getBoundingClientRect().left &&
            cardB.getBoundingClientRect().left < cardR1.getBoundingClientRect().left &&
            cardR1.getBoundingClientRect().left < cardA.getBoundingClientRect().left &&
            cardA.getBoundingClientRect().left < cardR2.getBoundingClientRect().left &&
            cardR2.getBoundingClientRect().left < cardY.getBoundingClientRect().left) ||
        (cardL.getBoundingClientRect().left < cardI.getBoundingClientRect().left &&
            cardI.getBoundingClientRect().left < cardB.getBoundingClientRect().left &&
            cardB.getBoundingClientRect().left < cardR2.getBoundingClientRect().left &&
            cardR2.getBoundingClientRect().left < cardA.getBoundingClientRect().left &&
            cardA.getBoundingClientRect().left < cardR1.getBoundingClientRect().left &&
            cardR1.getBoundingClientRect().left < cardY.getBoundingClientRect().left)) {
                const cardsLibrary = document.querySelectorAll(".card4");
                document.removeEventListener('mousemove', checkCardOrder);
                library.style.display = "flex";
                librarybutton.style.display = "flex";
                lib.style.display = "flex";
                library.style.animation = "fadeIn 1.5s forwards";
                librarybutton.style.animation = "fadeIn 1.5s forwards";
                lib.style.animation = "fadeIn 1.5s forwards";
                cardsLibrary.forEach(c => c.style.animation = "fadeOut 1.5s forwards");
                    hello7.style.animation = "fadeOut 1.5s forwards";
                    skipLibrary.style.animation = "fadeOut 1.5s forwards";
                setTimeout(() => {
                    cardsLibrary.forEach(c => c.style.display = "none");
                    hello7.style.display = "none";
                    skipLibrary.style.display = "none";
                }, 1500);
    }
}

skipLibrary.addEventListener("click", function() {
    const cardsLibrary = document.querySelectorAll(".card4");
    document.removeEventListener('mousemove', checkCardOrder);
    library.style.display = "flex";
    librarybutton.style.display = "flex";
    lib.style.display = "flex";
    library.style.animation = "fadeIn 1.5s forwards";
    librarybutton.style.animation = "fadeIn 1.5s forwards";
    lib.style.animation = "fadeIn 1.5s forwards";
    cardsLibrary.forEach(c => c.style.animation = "fadeOut 1.5s forwards");
        hello7.style.animation = "fadeOut 1.5s forwards";
        skipLibrary.style.animation = "fadeOut 1.5s forwards";
    setTimeout(() => {
        cardsLibrary.forEach(c => c.style.display = "none");
        hello7.style.display = "none";
        skipLibrary.style.display = "none";
    }, 1500);
})

document.addEventListener('mousemove', checkCardOrder);

/* LIBRARY */

let round5Started = true;

const librarybutton = document.querySelector(".library-button");
const library = document.querySelector(".library-project");
librarybutton.addEventListener("click", function() {
    round5Started = true;
    textChange5();
    const theGridd = document.querySelector(".tic-tac-toe-content");
    const hello8 = document.querySelector(".hello8");
    const text8 = document.querySelector(".text8");
    animationContainer.style.display = "flex";
    theGridd.style.display = "flex";
    hello8.style.display = "flex";
    text8.style.display = "flex";
    skipTtt.style.display = "flex";

    animationContainer.style.animation = "fadeIn 1.5s forwards";
    theGridd.style.animation = "fadeIn 1.5s forwards";
    hello8.style.animation = "fadeIn 1.5s forwards";
    text8.style.animation = "fadeIn 1.5s forwards";
    skipTtt.style.animation = "fadeIn 1.5s forwards";

    library.style.animation = "fadeOut 1.5s forwards";
    librarybutton.style.animation = "fadeOut 1.5s forwards";
    plane.style.animation = "fadeOut 1.5s forwards";

    setTimeout(() => {
        library.style.display = "none";
        librarybutton.style.display = "none";
        plane.style.display = "none";
    }, 1500);
})

/* ROUND 5 */

const textes5 = ["So, we're on the home stretch!", "To access the final project, you need to beat the AI in tic-tac-toe.",
"But don't worry, it's not very smart."];

let index5 = 0;

function textChange5() {
    const hello = document.querySelector(".hello8");
    const oldText = document.querySelector(".text8");
    if (oldText) {
        hello.removeChild(oldText); 
    }
    const newText = document.createElement("h1"); 
    newText.textContent = textes5[index5];
    newText.classList.add("text8");
    hello.appendChild(newText); 
    index5 = (index5 + 1) % textes5.length; 
    setTimeout(textChange5, 4000); 
}

/* TIC-TAC-TOE */

/* GAME BOARD */ 
const gameBoard = (function() {
    let moves = 0;
    let boardArray = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    const getBoardArray = () => {
        return boardArray;
    }
    const changeBoardArray = (index, marker) => { 
        boardArray[index] =  marker;
        moves++;
    }
    const resetArray = () => {
        boardArray = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    }
    return {
        getBoardArray,
        changeBoardArray,
        resetArray
    };
})();

/* PLAYER */ 
function createPlayer(name, marker, type, score) {
    let win = false; 
    const getWin = () => {
        return win;
    };
    const setWin = (result) => {
        win = result;
    };
    return {
        name,
        marker,
        type,
        score,
        getWin,
        setWin 
    };
}

/* DEFINE IF A COMBINATION THERE ARE */
function combination(player) {
    const board = gameBoard.getBoardArray();
    const marker = player.marker;
    const grid0 = document.querySelector(".grid-0");
    const grid1 = document.querySelector(".grid-1");
    const grid2 = document.querySelector(".grid-2");
    const grid3 = document.querySelector(".grid-3");
    const grid4 = document.querySelector(".grid-4");
    const grid5 = document.querySelector(".grid-5");
    const grid6 = document.querySelector(".grid-6");
    const grid7 = document.querySelector(".grid-7");
    const grid8 = document.querySelector(".grid-8");
    const grid0P = document.querySelector(".grid-0 p");
    const grid1P = document.querySelector(".grid-1 p");
    const grid2P = document.querySelector(".grid-2 p");
    const grid3P = document.querySelector(".grid-3 p");
    const grid4P = document.querySelector(".grid-4 p");
    const grid5P = document.querySelector(".grid-5 p");
    const grid6P = document.querySelector(".grid-6 p");
    const grid7P = document.querySelector(".grid-7 p");
    const grid8P = document.querySelector(".grid-8 p");
    if ((board[0] === marker && board[1] === marker && board[2] === marker)) {
        player.setWin(true);
        setTimeout(() => {
            grid0.style.transition = "background-color 2s";
            grid1.style.transition = "background-color 2s";
            grid2.style.transition = "background-color 2s";
            grid0P.style.transition = "transform 2s color 2s";
            grid1P.style.transition = "transform 2s color 2s";
            grid2P.style.transition = "transform 2s color 2s";
            grid0.style.backgroundColor = "#b4cd37";
            grid1.style.backgroundColor = "#b4cd37";
            grid2.style.backgroundColor = "#b4cd37";
            grid0P.style.color = "#f000d0";
            grid1P.style.color = "#f000d0";
            grid2P.style.color = "#f000d0";
        }, 500);
    }
    if (board[3] === marker && board[4] === marker && board[5] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid3.style.transition = "background-color 2s";
            grid4.style.transition = "background-color 2s";
            grid5.style.transition = "background-color 2s";
            grid3P.style.transition = "transform 2s color 2s";
            grid4P.style.transition = "transform 2s color 2s";
            grid5P.style.transition = "transform 2s color 2s";
            grid3.style.backgroundColor = "#b4cd37";
            grid4.style.backgroundColor = "#b4cd37";
            grid5.style.backgroundColor = "#b4cd37";
            grid3P.style.color = "#f000d0";
            grid4P.style.color = "#f000d0";
            grid5P.style.color = "#f000d0";
        }, 500);
    }
    if (board[6] === marker && board[7] === marker && board[8] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid6.style.transition = "background-color 2s";
            grid7.style.transition = "background-color 2s";
            grid8.style.transition = "background-color 2s";
            grid6P.style.transition = "transform 2s color 2s";
            grid7P.style.transition = "transform 2s color 2s";
            grid8P.style.transition = "transform 2s color 2s";
            grid6.style.backgroundColor = "#b4cd37";
            grid7.style.backgroundColor = "#b4cd37";
            grid8.style.backgroundColor = "#b4cd37";
            grid6P.style.color = "#f000d0";
            grid7P.style.color = "#f000d0";
            grid8P.style.color = "#f000d0";
        }, 500);
    }
    if (board[0] === marker && board[3] === marker && board[6] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid0.style.transition = "background-color 2s";
            grid3.style.transition = "background-color 2s";
            grid6.style.transition = "background-color 2s";
            grid0P.style.transition = "transform 2s color 2s";
            grid3P.style.transition = "transform 2s color 2s";
            grid6P.style.transition = "transform 2s color 2s";
            grid0.style.backgroundColor = "#b4cd37";
            grid3.style.backgroundColor = "#b4cd37";
            grid6.style.backgroundColor = "#b4cd37";
            grid0P.style.color = "#f000d0";
            grid3P.style.color = "#f000d0";
            grid6P.style.color = "#f000d0";
        }, 500);
    }
    if (board[1] === marker && board[4] === marker && board[7] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid1.style.transition = "background-color 2s";
            grid4.style.transition = "background-color 2s";
            grid7.style.transition = "background-color 2s";
            grid1P.style.transition = "transform 2s color 2s";
            grid4P.style.transition = "transform 2s color 2s";
            grid7P.style.transition = "transform 2s color 2s";
            grid1.style.backgroundColor = "#b4cd37";
            grid4.style.backgroundColor = "#b4cd37";
            grid7.style.backgroundColor = "#b4cd37";
            grid1P.style.color = "#f000d0";
            grid4P.style.color = "#f000d0";
            grid7P.style.color = "#f000d0";
        }, 500);
    }
    if (board[2] === marker && board[5] === marker && board[8] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid2.style.transition = "background-color 2s";
            grid5.style.transition = "background-color 2s";
            grid8.style.transition = "background-color 2s";
            grid2P.style.transition = "transform 2s color 2s";
            grid5P.style.transition = "transform 2s color 2s";
            grid8P.style.transition = "transform 2s color 2s";
            grid2.style.backgroundColor = "#b4cd37";
            grid5.style.backgroundColor = "#b4cd37";
            grid8.style.backgroundColor = "#b4cd37";
            grid2P.style.color = "#f000d0";
            grid5P.style.color = "#f000d0";
            grid8P.style.color = "#f000d0";
        }, 500);
    }
    if (board[0] === marker && board[4] === marker && board[8] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid0.style.transition = "background-color 2s";
            grid4.style.transition = "background-color 2s";
            grid8.style.transition = "background-color 2s";
            grid0P.style.transition = "transform 2s color 2s";
            grid4P.style.transition = "transform 2s color 2s";
            grid8P.style.transition = "transform 2s color 2s";
            grid0.style.backgroundColor = "#b4cd37";
            grid4.style.backgroundColor = "#b4cd37";
            grid8.style.backgroundColor = "#b4cd37";
            grid0P.style.color = "#f000d0";
            grid4P.style.color = "#f000d0";
            grid8P.style.color = "#f000d0";
        }, 500);
    }
    if (board[6] === marker && board[4] === marker && board[2] === marker) {
        player.setWin(true);
        setTimeout(() => {
            grid6.style.transition = "background-color 2s";
            grid4.style.transition = "background-color 2s";
            grid2.style.transition = "background-color 2s";
            grid6P.style.transition = "transform 2s color 2s";
            grid4P.style.transition = "transform 2s color 2s";
            grid2P.style.transition = "transform 2s color 2s";
            grid6.style.backgroundColor = "#b4cd37";
            grid4.style.backgroundColor = "#b4cd37";
            grid2.style.backgroundColor = "#b4cd37";
            grid6P.style.color = "#f000d0";
            grid4P.style.color = "#f000d0";
            grid2P.style.color = "#f000d0";
        }, 500);
    }
}

const ttt = document.querySelector(".ttt-project");
const resultOfTheGame = (player1, player2) => {
    const grid0 = document.querySelector(".grid-0");
    const grid1 = document.querySelector(".grid-1");
    const grid2 = document.querySelector(".grid-2");
    const grid3 = document.querySelector(".grid-3");
    const grid4 = document.querySelector(".grid-4");
    const grid5 = document.querySelector(".grid-5");
    const grid6 = document.querySelector(".grid-6");
    const grid7 = document.querySelector(".grid-7");
    const grid8 = document.querySelector(".grid-8");
    const grid0P = document.querySelector(".grid-0 p");
    const grid1P = document.querySelector(".grid-1 p");
    const grid2P = document.querySelector(".grid-2 p");
    const grid3P = document.querySelector(".grid-3 p");
    const grid4P = document.querySelector(".grid-4 p");
    const grid5P = document.querySelector(".grid-5 p");
    const grid6P = document.querySelector(".grid-6 p");
    const grid7P = document.querySelector(".grid-7 p");
    const grid8P = document.querySelector(".grid-8 p");
    const winner = document.querySelector(".result p");
    const resultGrid = document.querySelector(".result");
    const ngb = document.querySelector(".result .new-game");
    const ppp = document.querySelector(".result p");
    if (player1.getWin() === true) {
        player1Score++;
        winner.style.whiteSpace = "pre";
        winner.textContent = player1.name + "  won!";
        resultGrid.style.backgroundColor = "#b4cd37"
        resultGrid.style.border = "10px solid #f000d0"
        resultGrid.style.color = "#f000d0";
        ngb.style.backgroundColor = "#b4cd37"
        ngb.style.color = "#f000d0"
        ngb.style.border = "5px solid #f000d0";
        ppp.style.color = "#f000d0";
        const theGridd = document.querySelector(".tic-tac-toe-content");
        setTimeout(() => {
            theGridd.style.display = "none";
            ttt.style.display = "flex";
        }, 3000);
        skipTtt.style.display = "none";
        return 'X WON';
    }
    else if (player2.getWin() === true) {
        player2Score++;
        winner.style.whiteSpace = "pre";
        winner.textContent = player2.name + "  won!";
        resultGrid.style.backgroundColor = "#f000d0"
        resultGrid.style.border = "10px solid #b4cd37"
        resultGrid.style.color = "#b4cd37";
        ngb.style.backgroundColor = "#f000d0"
        ngb.style.color = "#b4cd37"
        ngb.style.border = "5px solid #b4cd37";
        ppp.style.color = "#b4cd37";
        return 'O WON';
    }
    else {
        if (getNumberOfFreeFields(gameBoard.getBoardArray()) === 0) {
            player1Score++;
            player2Score++;
            winner.style.whiteSpace = "pre";
            winner.textContent = "It's  a  draw!";
            resultGrid.style.backgroundColor = "yellow"
            resultGrid.style.border = "10px solid black"
            resultGrid.style.color = "black";
            ngb.style.backgroundColor = "yellow"
            ngb.style.color = "black"
            ngb.style.border = "5px solid black";
            ppp.style.color = "black";
            setTimeout(() => {
                grid0.style.transition = "background-color 2s";
                grid0P.style.transition = "transform 2s color 2s";
                grid0P.style.color = "#f000d0";
                grid0.style.backgroundColor = "yellow";
                grid1.style.transition = "background-color 2s";
                grid1P.style.transition = "transform 2s color 2s";
                grid1P.style.color = "#f000d0";
                grid1.style.backgroundColor = "yellow";
                grid2.style.transition = "background-color 2s";
                grid2P.style.transition = "transform 2s color 2s";
                grid2P.style.color = "#f000d0";
                grid2.style.backgroundColor = "yellow";
                grid3.style.transition = "background-color 2s";
                grid3P.style.transition = "transform 2s color 2s";
                grid3P.style.color = "#f000d0";
                grid3.style.backgroundColor = "yellow";
                grid4.style.transition = "background-color 2s";
                grid4P.style.transition = "transform 2s color 2s";
                grid4P.style.color = "#f000d0";
                grid4.style.backgroundColor = "yellow";
                grid5.style.transition = "background-color 2s";
                grid5P.style.transition = "transform 2s color 2s";
                grid5P.style.color = "#f000d0";
                grid5.style.backgroundColor = "yellow";
                grid6.style.transition = "background-color 2s";
                grid6P.style.transition = "transform 2s color 2s";
                grid6P.style.color = "#f000d0";
                grid6.style.backgroundColor = "yellow";
                grid7.style.transition = "background-color 2s";
                grid7P.style.transition = "transform 2s color 2s";
                grid7P.style.color = "#f000d0";
                grid7.style.backgroundColor = "yellow";
                grid8.style.transition = "background-color 2s";
                grid8P.style.transition = "transform 2s color 2s";
                grid8P.style.color = "#f000d0";
                grid8.style.backgroundColor = "yellow";
            }, 500);
            return 'DRAW';
        }
        else {
            return 'KEEP PLAYING'
        }
    }        
}

skipTtt.addEventListener("click", function() {
    const theGridd = document.querySelector(".tic-tac-toe-content");
    theGridd.style.display = "none";
    ttt.style.display = "flex";
    skipTtt.style.display = "none";
})

/* NUMBER OF FREE FIELDS */
function getNumberOfFreeFields(array) {
    count = 0;
    for (const element of array) {
        if (element === '-') {
            count++;
        }
    }
    return count;
}

/* MOVE */
function moveAI(index, player) {
    while (gameBoard.getBoardArray()[index] !== '-') {
        index = (index + 1) % gameBoard.getBoardArray().length; 
    }
    const string = `.grid-${index} p`;
    const field = document.querySelector(string);
    field.textContent = player.marker;
    resizeElement(field);
    gameBoard.changeBoardArray(index, player.marker);
    if (combination(player)) {
        player.setWin(true);
    }
}

function movePlayer(player) {
    const gridNow = document.querySelector(".tic-tac-toe-grid");
    let eventPromise = new Promise((resolve, reject) => {
        const eventListener = (event) => {
            console.log("movePlayer")
            const index = event.target.className.substring(5, 6);
            const string = `.grid-${index} p`;
            const string2 = `.grid-${index}`;
            const div = document.querySelector(string2);
            const field = document.querySelector(string);
            if (gameBoard.getBoardArray()[index] !== '-') {
                reject();
                gridNow.removeEventListener('click', eventListener);
            }
            else {
                field.textContent = player.marker;
                resizeElement(field);
                gameBoard.changeBoardArray(index, player.marker);
                resolve();
                gridNow.removeEventListener('click', eventListener);
            }
        };
        gridNow.addEventListener('click', eventListener);
    });
    eventPromise.then(() => {
        if (combination(player)) {
            player.setWin(true);
        } 
    }).catch(() => {

    });
    return eventPromise;
}

/* TEST FUNCTION */
function getRandomNumber() {
    return Math.floor(Math.random() * 9);
}

/* OTHER FUNCTIONS */
function resizeElement(element) {
    element.classList.add('resize'); 
}

/* GAME PROCESS */

let player1Score = 0;
let player2Score = 0;
const resultDiv = document.querySelector(".result");
const gridContent = document.querySelector(".tic-tac-toe-grid");

function gameProcess() {
    /* initially dates*/
    const player1 = createPlayer("You", 'X', "Player", player1Score);
    const player2 = createPlayer("AI", 'O', "AI", player2Score);
    console.log(player1);
    console.log(player2);
    let xMove = true;
    /* game loop */
    function playTurnPlayervAI() {
        if (resultOfTheGame(player1, player2) === "KEEP PLAYING") {
            if (xMove) {
                movePlayer(player1).then(() => {
                    xMove = false;
                    left.classList.remove("jumping");
                    playTurnPlayervAI();
                }).catch(() => {
                    playTurnPlayervAI();
                });
            } else {
                setTimeout(() => {
                    const index = getRandomNumber();
                    moveAI(index, player2);
                    xMove = true;
                    playTurnPlayervAI();
                }, 500);
            }
        } else {
            setTimeout(() => {
                resultDiv.style.display = "flex";
                gridContent.style.display = "none";
            }, 2000);
        }
    }

    if (player1.type === "Player" && player2.type === "AI") {
        playTurnPlayervAI();
    }
}

/* NEW GAME FUNCTION */
function newGameFunction() {
    resultDiv.style.display = "none";
    gridContent.style.display = "grid";
    clearFields();
    gameBoard.moves = 0;
    gameBoard.resetArray();
    gameProcess(); 
}



const newGame = document.querySelector(".new-game");
newGame.addEventListener("click", function() {
    resultDiv.style.display = "none";
    gridContent.style.display = "grid";
    newGameFunction();
})


function clearFields() {
    const mainGrid = document.querySelector(".tic-tac-toe-grid");
    mainGrid.innerHTML = ''; 
    for (let i = 0; i < 9; i++) {
        const helpString = `grid-${i}`;
        const helpDiv =  document.createElement("div");
        const helpP = document.createElement("p");
        helpDiv.style.display = "flex";
        helpDiv.style.alignItems = "center";
        helpDiv.style.justifyContent = "center";
        helpDiv.style.fontSize = "160px";
        helpDiv.style.color = "#b4cd37";
        helpDiv.style.fontFamily = "'main-font', sans-serif";
        helpDiv.style.overflow = "hidden";
        helpDiv.style.backgroundColor = "#f000d0";
        helpDiv.style.borderRadius = "15px";
        helpP.style.transition = "transform 1s";
        helpDiv.classList.add(helpString);
        helpDiv.appendChild(helpP);
        console.log(helpDiv);
        mainGrid.appendChild(helpDiv);
    }
}

if (round5Started) {
    gameProcess();
}

/* TIC TAC TOE PROJECT */ 

let gameOver = true;
const theEnd = document.querySelector(".theEnd")

const tttbutton = document.querySelector(".ttt-button");
tttbutton.addEventListener("click", function() {
    ttt.style.display = "none";
    tttbutton.style.display = "none";
    animationContainer.style.display = "none";
    gameOver = true;
    theEnd.style.display = "flex";
})