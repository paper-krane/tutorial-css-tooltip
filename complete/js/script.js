document.addEventListener('touchstart', function(e) {
    if(e.target.classList.contains('tooltip')) {
        e.target.classList.add('touch-active');
    } else {
        var activestates = document.querySelectorAll('.touch-active');

        for (var i = 0; i < activestates.length; i++) {
            activestates[i].classList.remove('touch-active');
        }
    }
}, false);
