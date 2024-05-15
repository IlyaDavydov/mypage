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
        car.addEventListener("click", function() {
            resolve();
        });
    });
}

/* ROUND ONE */

let firstRoundIsEnded = false; 

const planeControl = (event) => {
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
                    setTimeout(() => {
                        plane.style.display = "none";
                        road.style.display = "none";
                        hello1.style.display = "none";
                        animationContainer.style.display = "none";
                    }, 1000) 
                }
                break;
            case 'ArrowLeft':
                moveObject(plane, 'left');
                break;
            case 'ArrowRight':
                moveObject(plane, 'right');
                break;
        }
    } else {
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

waitForСarClick().then(() => {
    hello.style.display = "none";
    hello1.style.display = "flex";
    plane.style.top = "320px";
    car.style.display = "none";
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

document.addEventListener('mouseup', function(event) {
    firstRoundIsEnded = true;
    if (firstRoundIsEnded) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        isDragging = false;
        if (event.clientX > screenWidth * 0.4 && event.clientX < screenWidth * 0.6 && event.clientY > screenHeight * 0.35 && event.clientY < screenHeight * 0.65) {
            sim.classList.add("hidden");
            smartphone.classList.add("hidden");
            setTimeout(() => {
                sim.style.display = "none";
                smartphone.style.display = "none";
                phone.style.display = "flex";
            }, 1100);
            phone.classList.add("rotate");
            setTimeout(() => {
                phone.style.display = "none";
            }, 3500)
            hello2.style.display =  "none";
            boss1.style.display = "none";
        }
    }
});

/* CV */

let round2Started = true;

const cvbutton = document.querySelector(".cv-button");
const cv = document.querySelector(".cv");
cvbutton.addEventListener("click", function() {
    cv.style.display = "none";
    cvbutton.style.display = "none";
    animationContainer.style.display = "flex";
    plane.style.display = "none";
    round2Started = true;
})

/* round 2 */ 

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
            hello3.style.display = "none";
            hello4.style.display = "flex";
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
    forest1.style.display = "none";
    forest2.style.display = "none";
    forest3.style.display = "none";
    justinBeaver.style.display = "none";
    sun.style.display = "none";
    moon.style.display = "none";
    hello4.style.display = "none";
})













