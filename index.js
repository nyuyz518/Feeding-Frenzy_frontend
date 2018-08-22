document.addEventListener('DOMContentLoaded',() => {
  const container = document.getElementById('container')
  let i = 1

  function createSad(x){
    container.innerHTML += "<div class='frown' id='frown" + i + "' style='padding-left:" + x + "px;'><img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/sad.png'></div>"
    i++
  }

  setInterval(function() {
    //remove child nodes was an attempt to remove face on interval
    container.removeChild(container.childNodes[0])
    createSad(Math.floor(Math.random() *  (1000 - 50)))
  }, 1000)


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
