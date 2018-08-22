document.addEventListener('DOMContentLoaded',() => {
  const container = document.getElementById('container')
  let i = 1

  function createSad(x){
    const frown = document.createElement('div')
    frown.className = "frown"
    frown.innerHTML = "<img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png'>"
    frown.style.left = `${x}px`
    let top = 0
    frown.style.top = `${top}px`

    frown.addEventListener('mouseover', (e) => {
      clearInterval(id)
      container.innerHTML = ""
      alert("YOU LOSE")
      // frown.removeEventListener('mouseover', moveSad)
    })

    container.appendChild(frown)
    // debugger
      function moveSad() {
        frown.style.top = `${top++}px`
        //if (collision happens) {
          //end game
        //}

        if (top < 600) {
          window.requestAnimationFrame(moveSad)
        } else {
          frown.remove()
        }
      }
    window.requestAnimationFrame(moveSad)
    }







  //   container.innerHTML += "<div class='frown' id='frown" + i + "' style='top: -50px; left: " + x + "px;'><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png'></div>"
  //   i++
  // }


  let id = setInterval(function() {
    //remove child nodes was an attempt to remove face on interval
    // container.removeChild(container.childNodes[0])
    let rand = Math.floor(Math.random() *  (1000 - 50))

    // clearInterval(id)
    console.log(rand);
    createSad(rand)
    // let frowns = document.querySelectorAll('.frown')
    // console.log(frowns)

  }, 1000)

  if(container.innerHTML == " "){
    alert("YOU LOSE, YOU SUCK")
  }




  // // console.log(frown.offsetLeft, frown.offsetTop)
  // let randomDirection = ['top', 'bottom', 'left', 'right']
  //
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
