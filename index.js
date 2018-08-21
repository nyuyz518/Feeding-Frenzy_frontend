document.addEventListener('DOMContentLoaded',() => {
  const canvas = document.getElementById('background')
  const frown = document.getElementById('frown')
  console.log(frown.offsetLeft, frown.offsetTop)
  // canvas.addEventListener('mousemove', (e) => {
  //   console.log('x', e.clientX, 'y', e.clientY)
  // })

  // moveDown()
  // function moveDown(){
  //   let pos = 0
  //   let id = setInterval(frame, 5)
  //   function frame(){
  //     if(pos == 350){
  //       clearInterval(id)
  //     } else {
  //       pos++
  //       frown.style.top = pos + 'px';
  //       frown.style.left = pos + 'px';
  //     }
  //   }
  // }
})
