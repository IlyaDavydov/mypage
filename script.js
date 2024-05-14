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
                hello2.style.display =  "none";
                phone.style.display = "flex";
            }, 1100);
            phone.classList.add("rotate");
            setTimeout(() => {
                phone.style.display = "none";
            }, 3500)
        }
    }
});




