const rollBtn = document.getElementById("roll-btn")
const resetBtn = document.getElementById("reset-btn")

const playerTurn = document.getElementById("player-turn")

let lps = document.getElementById("left-para-shadow")

let lp = document.getElementById("left-para")

let ls = document.getElementById("left-score")

let rps = document.getElementById("right-para-shadow")

let rp = document.getElementById("right-para")

let rs = document.getElementById("right-score")

let p1 = 0
let p2 = 0

let count = 0

let win = 0

rollBtn.addEventListener("click", dice)
    
  


function dice(){
    if(count%2 === 0 && win === 0){
       
          let num1 = getRandomNumber()
          p1 = num1 + p1
          ls.textContent = "Score: " + p1
          lps.textContent = num1
          count++
          lp.textContent = num1
            lps.style.display = "None"
            lp.style.display = "block"
            rps.style.display = "block"
            rp.style.display = "none"
            playerTurn.textContent = "Player 2 Turn"
          if(p1>=20){
              win++
              playerTurn.textContent = "Player 1 Won"
              rollBtn.style.display = "none"
              resetBtn.style.display = "block"
              
          }
    }
    
    else if(count%2 !== 0 && win ===0){
        
        let num2 = getRandomNumber()
        p2 = num2 + p2
        rs.textContent = "Score: " + p2
        rps.textContent = num2;
        count++
        rp.textContent = num2
         rps.style.display = "none"
        rp.style.display = "block"
         lps.style.display = "block"
         lp.style.display = "none"
         playerTurn.textContent = "Player 1 Turn"
        if(p2>=20){
            win++
            playerTurn.textContent = "Player 2 Won"
             rollBtn.style.display = "none"
             resetBtn.style.display = "block"
            
        }
    }
   
}

resetBtn.addEventListener("click", function(){
    ls.textContent = "Score: " + 0
    rs.textContent = "Score: " + 0
    lp.textContent = "-"
    lps.textContent = "-"
    rp.textContent = "-"
    rps.textContent = "-"
    playerTurn.textContent = "Player 1 Turn"
    rps.style.display = "none"
        rp.style.display = "block"
         lps.style.display = "block"
         lp.style.display = "none"
         rollBtn.style.display = "block"
             resetBtn.style.display = "none"
             win = 0
             p1 = 0
             p2 = 0
             count = 0
})
function getRandomNumber(){
    let number = Math.floor(Math.random()*6)+1
    return number
}
