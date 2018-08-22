document.addEventListener('DOMContentLoaded',() => {
  const container = document.getElementById('container')
  let i = 1

  const directionArray = ['top', 'bottom', 'left', 'right']

  function createSad(x, selectedDirection){
    let direction = selectedDirection
    const frown = document.createElement('div')
    console.log(selectedDirection)
    frown.className = "frown"
    frown.innerHTML = "<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png'>"
    // debugger
    let top = 0
    // console.log("this is top")
    // frown.style.left = `${x}px`
    // let top = 0
    // frown.style.top = `${top}px`

    // debugger
    container.appendChild(frown)
    frown.addEventListener('mouseover', (e) => {
      clearInterval(id)
      container.innerHTML = ""
      alert("YOU LOSE")
      // frown.removeEventListener('mouseover', moveSad)
    })

    if(selectedDirection == 'top'){
      frown.style.left = `${x}px`
      frown.style.top = `${top}px`
      window.requestAnimationFrame(moveDown)
    }else if(selectedDirection == 'right'){
      x = x%650
      frown.style.top = `${x}px`
      frown.style.right = `${top}px`
      window.requestAnimationFrame(moveLeft)
    }else if(selectedDirection == 'bottom'){
      frown.style.right = `${x}px`
      frown.style.bottom = `${top}px`
      window.requestAnimationFrame(moveUp)
    }else if(selectedDirection == 'left'){
      x = x%650
      frown.style.bottom = `${x}px`
      frown.style.right = `${top}px`
      window.requestAnimationFrame(moveRight)
    }

      function moveDown(){
        if(direction == 'top'){
          frown.style.top = `${top++}px`
        }
        if (top < 600) {
            window.requestAnimationFrame(moveDown)
          } else {
            frown.remove()
        }
      }

      function moveUp(){
        if(direction == 'bottom'){
          frown.style.bottom = `${top++}px`
        }
        if (top < 600) {
            window.requestAnimationFrame(moveUp)
          } else {
            frown.remove()
        }
      }

      function moveRight(){
        if(direction == 'left'){
            frown.style.left = `${top++}px`
          }
        if (top < 600) {
            window.requestAnimationFrame(moveRight)
          } else {
            frown.remove()
        }
      }

      function moveLeft(){
        if(direction == 'right'){
          frown.style.right = `${top++}px`
        }
        if (top < 600) {
            window.requestAnimationFrame(moveLeft)
          } else {
            frown.remove()
        }
      }

    //collision
    }







  //   container.innerHTML += "<div class='frown' id='frown" + i + "' style='top: -50px; left: " + x + "px;'><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png'></div>"
  //   i++
  // }


    let id = setInterval(function() {
      // container.removeChild(container.childNodes[0])
      let randomInt = Math.floor(Math.random()*directionArray.length)
      let selectedDirection = directionArray[randomInt]
      console.log(selectedDirection)
      let randSpawn = Math.floor(Math.random()*(1000 - 50))
      createSad(randSpawn, selectedDirection)
      // let frowns = document.querySelectorAll('.frown')
      // console.log(frowns)

    }, 1000)




  // // console.log(frown.offsetLeft, frown.offsetTop)
  //
  // //need to create element at that point
  // setInterval(() => {
  //   let randomInt = Math.floor(Math.random()*randomDirection.length)
  //   const selectedDirection = randomDirection[randomInt]
  //   createSad()
  //   myMove(selectedDirection)
  // }, 2000)
  //
  // // inputting left will move right etc.
  // function myMove(direction) {
  //   let pos = 0
  //   this.direction = direction.toUpperCase()
  //   let frown = document.getElementById(`frown${i}`)
  //   i++
  //   let id = setInterval(() => {
  //     if (pos === 800) {
  //       clearInterval(id)
  //       container.innerHTML = ''
  //     } else {
  //       pos++
  //       if(this.direction.toLowerCase() === "right"){
  //         frown.style.paddingRight = pos + 'px'
  //       }else if (this.direction.toLowerCase() === "left"){
  //         frown.style.paddingLeft = pos + 'px'
  //       }else if(this.direction.toLowerCase() === "bottom"){
  //         frown.style.paddingBottom = pos + 'px'
  //       }else if(this.direction.toLowerCase() === "top"){
  //         frown.style.paddingTop = pos + 'px'
  //       }
  //     }
  //   }, 1)
  // }

})
