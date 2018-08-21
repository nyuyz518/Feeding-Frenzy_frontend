document.addEventListener('DOMContentLoaded',() => {
  const canvas = document.getElementById('background')
  const container = document.getElementById('container')
  // canvas.addEventListener('mousemove', (e) => {
  //   console.log('x', e.clientX, 'y', e.clientY)
  // })
  let i = 1

  function createSad(){
    container.innerHTML += `<div class='frown' id='frown${i}' style='padding:0'><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png'></div>`
  }

  // console.log(frown.offsetLeft, frown.offsetTop)
  let randomDirection = ['top', 'bottom', 'left', 'right']


  //need to create element at that point
  setInterval(() => {
    let randomInt = Math.floor(Math.random()*randomDirection.length)
    const selectedDirection = randomDirection[randomInt]
    console.log(randomInt)
    createSad()
    // debugger
    myMove(selectedDirection)
  }, 1000)

  // inputting left will move right etc.
  function myMove(direction) {
    this.direction = direction.toUpperCase()
    let frown = document.getElementById(`frown${i}`)
    i++
    // console.log(frown)
    // debugger
    var pos = 0;
    var id = setInterval(() => {
      if (pos > 500) {
        clearInterval(id);
        frown.remove();
      } else {
        pos++;
        if(this.direction.toLowerCase() === "right"){
          frown.style.paddingRight = pos + 'px'
        }else if (this.direction.toLowerCase() === "left"){
          frown.style.paddingLeft = pos + 'px'
        }else if(this.direction.toLowerCase() === "bottom"){
          frown.style.paddingBottom = pos + 'px'
        }else if(this.direction.toLowerCase() === "top"){
          frown.style.paddingTop = pos + 'px'
        }
      }
    }, .5);
  }

})

// function frame() {
//   const padding = frown.style.padding`${this.direction}`
//   if (pos == 500) {
//     clearInterval(id);
//   } else {
//     pos++;
//     padding = pos + 'px'
//     // frown.style.paddingLeft = pos + 'px'
//     // console.log(frown.style.paddingRight)
//   }
// }
