const buttons = document.querySelectorAll('.navbutton')
function offother(){
    buttons.forEach(button => {
        if (button !== this) {
            button.classList.add('blue')
        }
    })
}

function remother(){
    buttons.forEach(button => {
        button.classList.remove('blue');
    })
}

buttons.forEach(button => {
    button.addEventListener('mouseover', offother)
    button.addEventListener('mouseout', remother)

})

var scale = 'scale(1)';
document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
document.body.style.msTransform =   scale;       // IE 9
document.body.style.transform = scale;     // General

function menu_open() {
    const navButtons = document.getElementsByClassName('navbutton');
  
    // Toggle the display of navButtons based on their current state
    for (let i = 0; i < navButtons.length; i++) {
      if (navButtons[i].style.display === 'none') {
        navButtons[i].style.display = 'unset';
      } else {
        navButtons[i].style.display = 'none';
      }
    }
  }