document.addEventListener('DOMContentLoaded',() => {
  const canvas = document.getElementById('background')
  // canvas.addEventListener('mousemove', (e) => {
  //   console.log('x', e.clientX, 'y', e.clientY)
  // })
  console.log(frown.offsetLeft, frown.offsetTop)

  function myMove() {
    let frown = document.getElementById("frown");

    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 500) {
        clearInterval(id);
      } else {
        pos++;
        frown.style.paddingTop = pos + 'px'
        frown.style.paddingLeft = pos + 'px'
        console.log(frown.style.margin)
      }
    }
  }
  myMove()
})
