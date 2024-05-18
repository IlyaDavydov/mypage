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
                    firstRoundIsEnded = !firstRoundIsEnded;
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
        console.log("first round is ended", firstRoundIsEnded)
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

/* FORM */

let round3Started = true;

const formbutton = document.querySelector(".form-button");
const form = document.querySelector(".form-project");
formbutton.addEventListener("click", function() {
    form.style.display = "none";
    formbutton.style.display = "none";
    animationContainer.style.display = "flex";
    plane.style.display = "flex";
    round3Started = true;
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
    textChange3();
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

let appleCounter = 9;

function checkCollisionWithBasket() {
    const basketRect = basket.getBoundingClientRect();

    const offset = 20; 

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
        }
    });
}


let intervalId2;

intervalId2 = setInterval(checkCollisionWithBasket, 1000);


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
    animationContainer.style.display = "none";
    grid.style.display = "none";
    info.style.display = "none";
    slidecontainer.style.display = "none";
}

        } 
    });
});
});

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

  /* sketch */ 

  let round4Started = true;

  const sketchbutton = document.querySelector(".sketch-button");
  const sketch = document.querySelector(".sketch-project");
  sketchbutton.addEventListener("click", function() {
      sketch.style.display = "none";
      sketchbutton.style.display = "none";
      animationContainer.style.display = "flex";
      plane.style.display = "flex";
      round4Started = true;
  })


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

if (round4Started) {
    textChange4();
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
        cardsLibrary.forEach(c => c.style.display = "none");
        document.removeEventListener('mousemove', checkCardOrder);
        lib.style.display = "flex";
        hello7.style.display = "none";
    }
}

document.addEventListener('mousemove', checkCardOrder);



