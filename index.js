document.addEventListener('DOMContentLoaded',() => {
  const container = document.getElementById('container')
  const scoreBoard = document.getElementById('score-board')
  const start = document.getElementById('play')
  const input = document.getElementById('user')
  const userInput = document.getElementById('user-input')
  const submitButton = document.getElementById('submit-button')
  start.style.display = "none"

  // let i = 1
  let score = 0
  let userName = ""

  scoreBoard.style.display = "none"

  function setUser(){
    if(!userInput.value){
      alert("User name cant be empty!")
    } else {
      start.style.display = ""
      userName = userInput.value
    }
    userInput.value = ''
  }


  submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    setUser()
  })


  function showBoard(){
    scoreBoard.innerHTML += `<li class="user-score">${userName}'s score: ${score}</li>`
  }

  const directionArray = ['top', 'bottom', 'left', 'right']

  function createFood(x, create, selectedDirection){
    if(2 < create){
      return
    }

    const food = document.createElement('div')
    food.className = "food"
    food.innerHTML = "<img src='image/burger.png' style='height:30px; width:30px'>"


    let top = 0
    container.appendChild(food)

    if(selectedDirection == 'top'){
      food.style.left = `${x}px`
      food.style.top = `${top}px`
      window.requestAnimationFrame(moveDown)
    }else if(selectedDirection == 'right'){
      x = x%600
      food.style.top = `${x}px`
      food.style.right = `${top}px`
      window.requestAnimationFrame(moveLeft)
    }else if(selectedDirection == 'bottom'){
      food.style.right = `${x}px`
      food.style.bottom = `${top}px`
      window.requestAnimationFrame(moveUp)
    }else if(selectedDirection == 'left'){
      x = x%600
      food.style.bottom = `${x}px`
      food.style.right = `${top}px`
      window.requestAnimationFrame(moveRight)
    }

    food.addEventListener('mouseover', (e) => {
      let chomp = new Audio('audio/animals_dog_eat_bone_short.mp3')
      chomp.play()
      food.remove()
      score += 10
      // frown.removeEventListener('mouseover', moveSad)
    })

      function moveDown(){
        if(selectedDirection == 'top'){
          top += 7
          food.style.top = `${top}px`
        }
        if (top < 600) {
            window.requestAnimationFrame(moveDown)
          } else {
            food.remove()
        }
      }

      function moveUp(){
        if(selectedDirection == 'bottom'){
          top += 7
          food.style.bottom = `${top}px`
        }
        if (top < 600) {
            window.requestAnimationFrame(moveUp)
          } else {
            food.remove()
        }
      }

      function moveRight(){
        if(selectedDirection == 'left'){
          top += 7
          food.style.left = `${top}px`
        }
        if (top < 950) {
            window.requestAnimationFrame(moveRight)
          } else {
            food.remove()
        }
      }

      function moveLeft(){
        if(selectedDirection == 'right'){
          top+=7
          food.style.right = `${top}px`
        }
        if (top < 950) {
            window.requestAnimationFrame(moveLeft)
          } else {
            food.remove()
        }
      }
  }

  start.addEventListener('click', newGame)


  function newGame(){
    scoreBoard.style.display = ""
    input.style.display = 'none'
    start.style.display = 'none'
    function createSad(x, selectedDirection){
      let direction = selectedDirection
      const frown = document.createElement('div')
      console.log(selectedDirection)
      frown.className = "frown"
      frown.innerHTML = "<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png'>"
      setInterval(() => {
        if(frown.querySelector('img').src == 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png'){
          frown.querySelector('img').src = 'image/cry.png'
          frown.querySelector('img').style.height = '50px'
          frown.querySelector('img').style.width = '50px'
        }else{
          frown.querySelector('img').src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png'
        }
      }, 700)
      // debugger
      let top = 0

      container.appendChild(frown)
      frown.addEventListener('mouseover', (e) => {
        let beep = new Audio('audio/beep.mp3')
        beep.play()
        clearInterval(id)
        container.innerHTML = ""
        start.style.display = ''
        input.style.display = ''
        showBoard()
        if(score < 200){
          alert(userName + ", LOL AMATEUR!!!")
        }else{
          alert(userName + "'s SCORE IS " + score)
        }
        fetch('http://localhost:3000/api/v1/games', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            "score": score,
            "user_id": 3
          })
        })
        // score = 0
      })

      if(selectedDirection == 'top'){
        frown.style.left = `${x}px`
        frown.style.top = `${top}px`
        window.requestAnimationFrame(moveDown)
      }else if(selectedDirection == 'right'){
        x = x%600
        frown.style.top = `${x}px`
        frown.style.right = `${top}px`
        window.requestAnimationFrame(moveLeft)
      }else if(selectedDirection == 'bottom'){
        frown.style.right = `${x}px`
        frown.style.bottom = `${top}px`
        window.requestAnimationFrame(moveUp)
      }else if(selectedDirection == 'left'){
        x = x%600
        frown.style.bottom = `${x}px`
        frown.style.right = `${top}px`
        window.requestAnimationFrame(moveRight)
      }

        function moveDown(){
          if(direction == 'top'){
            top+=5
            frown.style.top = `${top}px`
          }
          if (top < 600) {
              window.requestAnimationFrame(moveDown)
            } else {
              frown.remove()
          }
        }

        function moveUp(){
          if(direction == 'bottom'){
            top+=5
            frown.style.bottom = `${top}px`
          }
          if (top < 600) {
              window.requestAnimationFrame(moveUp)
            } else {
              frown.remove()
          }
        }

        function moveRight(){
          if(direction == 'left'){
              top+=5
              frown.style.left = `${top}px`
            }
          if (top < 950) {
              window.requestAnimationFrame(moveRight)
            } else {
              frown.remove()
          }
        }

        function moveLeft(){
          if(direction == 'right'){
            top+=5
            frown.style.right = `${top}px`
          }
          if (top < 950) {
              window.requestAnimationFrame(moveLeft)
            } else {
              frown.remove()
          }
        }

      //collision
      }

    let counter = 0
      let id = setInterval(function() {
        // container.removeChild(container.childNodes[0])
        let randomInt = Math.floor(Math.random()*directionArray.length)
        let selectedDirection = directionArray[randomInt]
        // console.log(selectedDirection)
        let randSpawn = Math.floor(Math.random()*(1000 - 50))
        createSad(randSpawn, selectedDirection)

        let randomInt2 = Math.floor(Math.random()*directionArray.length)
        let selectedDirection2 = directionArray[randomInt2]

        let randFood = Math.floor(Math.random()*(1000 - 30))
        let chanceMake = Math.floor(Math.random()*10)
        createFood(randFood, chanceMake, selectedDirection2)
        // let frowns = document.querySelectorAll('.frown')
        // console.log(frowns)
        counter++
      }, 250)
  }
})
