window.onload = () => {
  const myCursor = document.querySelector(".board");
  let myStart = document.querySelector(".start");
  let myBackground = document.querySelector(".background");
  let restart = document.querySelectorAll(".restart");
  let playername = document.querySelector(".player-name");
  let instructions = document.querySelector(".instruction");
  let instructionExplained = document.querySelector(".instruction-explained");
  let sun = document.querySelector(".sun img");
  let volume = document.querySelector(".volume img");
  let body = document.querySelector("body");
  let arrowUp = document.querySelector(".arrow-up");
  let myWinnerDiv = document.querySelector(".winnerDeclare");
  let myWinner = document.querySelector(".winnerDeclare span");
  const slots = document.querySelectorAll(".slot");
  let currentPlayer = 1;
  let array = Array.from(Array(8), (_) => Array(10).fill(0));
  let name1 = "Player 1",
    name2 = "Player 2";
  let vol=1;
  var winnerSound =new Audio("./Resource/sounds/winner.mp3");
  volume.addEventListener("click", function () {
    var volumeSound = new Audio("./Resource/sounds/volumebutton.wav");
    winnerSound.pause();
    winnerSound.currentTime = 0;
    let temp = volume.getAttribute("src");
    if (temp == "images/volume.png") {
      vol=0;
      volume.src = "images/mute.png";
    } else {
      volumeSound.play(); volumeSound.volume = 0.3;
      vol=1;
      volume.src = "images/volume.png";
    }
  });
  sun.addEventListener("click", function () {
    var sunSound =  new Audio("./Resource/sounds/sun.wav");
    if(vol==1){
      sunSound.play(); sunSound.volume = 0.3;
    }
    body.classList.toggle("sun-filter");
    body.classList.toggle("my-body");
  });
  instructions.addEventListener("click", function () {
    var instSound =  new Audio("./Resource/sounds/volume.wav");
    if(vol==1){
      instSound.play(); instSound.volume = 0.3;
    }
    instructionExplained.classList.toggle("hide");
  });
  
  restart[0].addEventListener("click", function () {
    var restartSound =  new Audio("./Resource/sounds/restart.wav");
    winnerSound.pause();
    winnerSound.currentTime = 0;
    if(vol==1){
      restartSound.play(); restartSound.volume = 0.3;
    }
    myWinnerDiv.style.display = "none";
    restart[0].style.animation = "rotate 2s";
    playername.innerHTML = name1 + "'s Turn";
    currentPlayer = 1;
    myCursor.style.cursor = "url('./Resource/images/redImposter.cur'), auto";
    for (let i = 0; i < 10; i++) {
      slots[i].innerHTML = "";
      array = Array.from(Array(8), (_) => Array(10).fill(0));
    }
    setTimeout(function () {
      restart[0].style.animation = "";
    }, 2000);
  });
  restart[1].addEventListener("click", function () {
    var restartSound =  new Audio("./Resource/sounds/restart.wav");
    winnerSound.pause();
    winnerSound.currentTime = 0;
    if(vol==1){
      restartSound.play(); restartSound.volume = 0.3;
    }
    myWinnerDiv.style.display = "none";
    restart[1].style.animation = "rotate 2s";
    playername.innerHTML = name1 + "'s Turn";
    currentPlayer = 1;
    myCursor.style.cursor = "url('./Resource/images/redImposter.cur'), auto";
    for (let i = 0; i < 10; i++) {
      slots[i].innerHTML = "";
      array = Array.from(Array(8), (_) => Array(10).fill(0));
    }
    setTimeout(function () {
      restart[1].style.animation = "";
    }, 2000);
  });
  myStart.addEventListener("click", function () {
    var startSound =  new Audio("./Resource/sounds/start.wav");
    if(vol==1){
      startSound.play(); startSound.volume = 0.3;
    }
    myBackground.style.transform = "translateY(-100%)";
    myBackground.style.transition = "transform 2s ease-out";
    myCursor.style.display = "grid";
    if (myStart.classList.contains("resume")) {
      myStart.classList.remove("resume");
      setTimeout(function () {
        myCursor.style.transform = "translateY(0%)";
        myCursor.style.transition = "transform 1.2s ease-in-out";
        playername.style.transform = "scale(1) translate(-50%,-50%)";
      }, 1000);
    } else {
      myCursor.style.transform = "translateY(0%)";
      myCursor.style.transition = "transform 2s ease-in-out 500ms";
      setTimeout(function () {
        name1 = prompt("Enter Player 1 Name: ");
        name2 = prompt("Enter Player 2 Name: ");
        if (name1 == null || name1 == "") {
          name1 = "Player 1";
        }
        if (name2 == null || name2 == "") {
          name2 = "Player 2";
        }
        console.log(name1);
        console.log(name2);
        name1 = camelCase(name1);
        name2 = camelCase(name2);
        playername.innerHTML = name1 + "'s Turn";
        playername.style.transform = "scale(1) translate(-50%,-50%)";
      }, 2500);
    }
    arrowUp.style.display = "flex";
  });
  arrowUp.addEventListener("click", function () {
    var arrowSound =  new Audio("./Resource/sounds/volumebutton.wav");
    winnerSound.pause();
    winnerSound.currentTime = 0;
    if(vol==1){
      arrowSound.play(); arrowSound.volume = 0.3;
    }
    myStart.classList.add("resume");
    myStart.innerHTML = "Resume";
    myStart.style.padding = "20px 70px";
    myWinnerDiv.style.display = "none";
    myCursor.style.transform = "translateY(-150%)";
    myCursor.style.transition = "transform 1.5s ease-in-out";
    playername.style.transform = "scale(0)";
    myBackground.style.transform = "translateY(0%)";
    myBackground.style.transition = "transform 1.5s ease-in-out";
    setTimeout(function () {
      myCursor.style.display = "none";
      arrowUp.style.display = "none";
      myCursor.style.transition = "none";
    }, 1500);
  });
  for (var i = 0; i < slots.length; i++) {
    (function (index) {
      slots[i].addEventListener("click", function () {
        var tokenSound = new Audio("./Resource/sounds/token.wav");
        if(vol==1){
          tokenSound.play(); tokenSound.volume = 0.3;
        }
        console.log(index);
        let mod = index % 10;
        console.log("mod " + mod);
        if (array[0][mod] === 1 || array[0][mod] === 2) {
          alert(
            "There is no Space in this column! \n Try inserting somewhere else"
          );
        } else {
          var div;
          for (var k = 0; k < 8; k++) {
            console.log("for loop ");
            if (array[k][mod] === 1 || array[k][mod] === 2) {
              array[--k][mod] = currentPlayer;
              div = k * 10 + mod;
              console.log("div " + div);
              break;
            }
            if (array[7][mod] === 0) {
              array[7][mod] = currentPlayer;
              div = 7 * 10 + mod;
              console.log("div " + div);
              break;
            }
          }
          var token = document.createElement("div");
          let winner = 0;
          if (currentPlayer === 1) {
            myCursor.style.cursor =
              "url('./Resource/images/yellowImposter.cur'), auto";
            token.classList.add("red-token");
            token.classList.add("token");
            slots[mod].appendChild(token);
            if (div < 10) {
              token.style.transition = "none";
            } else if (div < 20) {
              token.style.transition = "top 500ms ease-in";
            } else if (div < 30) {
              token.style.transition = "top 1s ease-in";
            } else {
              token.style.transition = "top 2s ease-in";
            }
            token.style.top = slots[div].offsetTop - 4.5 + "px";
            console.log(slots[div].offsetTop);
            currentPlayer = 2;
            playername.innerHTML = name2 + "'s Turn";
          } else {
            myCursor.style.cursor =
              "url('./Resource/images/redImposter.cur'), auto";
            token.classList.add("yellow-token");
            token.classList.add("token");
            slots[mod].appendChild(token);
            if (div < 10) {
              token.style.transition = "none";
            } else if (div < 20) {
              token.style.transition = "top 500ms ease-in";
            } else if (div < 30) {
              token.style.transition = "top 1s ease-in";
            } else {
              token.style.transition = "top 2s ease-in";
            }
            token.style.top = slots[div].offsetTop - 4.5 + "px";
            currentPlayer = 1;
            playername.innerHTML = name1 + "'s Turn";
          }
        }
        let row;
        if (div < 10) {
          row = div;
        } else {
          row = Math.floor(div / 10);
        }
        winner = checkBoard(row, mod, currentPlayer);        
        if (winner == 1) {
          myWinner.innerHTML = name1;
          myWinner.classList.remove("animate-winner-yellow");
          myWinner.classList.add("animate-winner-red");
          setTimeout(() => {
            myWinnerDiv.style.display = "flex";
            if(vol==1){
              winnerSound.play(); 
            }
          }, 1000);
        } else if (winner == 2) {
          myWinner.innerHTML = name2;          
          myWinner.classList.remove("animate-winner-red");
          myWinner.classList.add("animate-winner-yellow");
          setTimeout(() => {
            myWinnerDiv.style.display = "flex";
            if(vol==1){
              winnerSound.play(); 
            }
          }, 1000);
        }
      });
    })(i);
  }
  function camelCase(name) {
    let fc = name.substring(0, 1).toUpperCase();
    let lc = name.substring(1).toLowerCase();
    name = fc + lc;
    return name;
  }
  function checkBoard(row, col, currentPlayer) {
    if (currentPlayer == 2) {
      currentPlayer = 1;
    } else {
      currentPlayer = 2;
    }
    console.log(array);
    console.log(currentPlayer);
    let flag = true;
    let chkRow = row,
      chkCol = col;

    if (
      array[row][col] == currentPlayer &&
      row >= 0 &&
      row < 8 &&
      col >= 0 &&
      col < 10
    ) {
      let move = "right";
      let i = 0,
        j = 0;
      let count = 0;
      while (count != 4) {
        if (
          array[row][col] == currentPlayer &&
          row >= 0 &&
          row < 8 &&
          col >= 0 &&
          col < 10
        ) {
          count++;
          if (move === "right") col++;
          else {
            col--;
          }
        } else {
          if (move === "left") {
            break;
          }
          col = chkCol - 1;
          move = "left";
        }
      }
      if (count == 4) {
        return currentPlayer;
      }

      count = 0;
      move = "down";
      row = chkRow;
      col = chkCol;
      while (count != 4) {
        console.log(row + " " + col + " " + array[row][col]);
        if (
          array[row][col] == currentPlayer &&
          row >= 0 &&
          row < 8 &&
          col >= 0 &&
          col < 10
        ) {
          count++;
          if (move === "down") row++;
          else {
            row--;
          }
        } else {
          if (move === "up") {
            break;
          }
          row = chkRow - 1;
          move = "up";
        }
      }
      if (count == 4) {
        return currentPlayer;
      }

      count = 0;
      move = "right-down";
      row = chkRow;
      col = chkCol;
      while (count != 4) {
        if (
          array[row][col] == currentPlayer &&
          row >= 0 &&
          row < 8 &&
          col >= 0 &&
          col < 10
        ) {
          count++;
          if (move === "right-down") {
            row++;
            col++;
          } else {
            row--;
            col--;
          }
        } else {
          if (move === "left-up") {
            break;
          }
          row = chkRow - 1;
          col = chkCol - 1;
          move = "left-up";
        }
      }
      if (count == 4) {
        return currentPlayer;
      }

      count = 0;
      move = "right-up";
      row = chkRow;
      col = chkCol;
      while (count != 4) {
        if (
          array[row][col] == currentPlayer &&
          row >= 0 &&
          row < 8 &&
          col >= 0 &&
          col < 10
        ) {
          count++;
          if (move === "right-up") {
            row--;
            col++;
          } else {
            row++;
            col--;
          }
        } else {
          if (move === "left-down") {
            break;
          }
          row = chkRow + 1;
          col = chkCol - 1;
          move = "left-down";
        }
      }
      if (count == 4) {
        return currentPlayer;
      }
    }
  }
};
