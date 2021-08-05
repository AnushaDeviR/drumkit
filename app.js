window.addEventListener('keydown', function(e) { 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const box = document.querySelector(`.box[data-key="${e.keyCode}"]`);

    if (!audio) { 
        return;
    }
    audio.currentTime = 0;
    audio.play(); 
    box.classList.toggle('playing');
});

function removeTransition(e) { 
    if (e.propertyName !== 'transform') { 
        return;
    }
    console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.box');
keys.forEach(box => box.addEventListener('transitionend', removeTransition));



