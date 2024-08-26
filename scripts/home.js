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

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    getElementById('body').style.display = 'none';
}