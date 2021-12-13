var body = document.querySelector('body');

if (body) {
    body.addEventListener('click', function (event) {
        var history = event.target.closest('.history__show');
        var onoffswitchBtn = event.target.closest('.onoffswitch input');
    
        if (history) {
            history.nextElementSibling.classList.toggle('history_show');
        }
    
        if (onoffswitchBtn) {
            toggleThems();
        }   
    });
}


var defaultTheme = document.querySelectorAll('.theme_color_project-default');
var inverseTheme = document.querySelectorAll('.theme_color_project-inverse');
var brandTheme = document.querySelectorAll('.theme_color_project-brand');
var warningTheme = document.querySelectorAll('.theme_color_project-warning');

function toggleThems () {
    if (defaultTheme) {
        for (var i = 0; i < defaultTheme.length; i++) {
            defaultTheme[i].classList.toggle('theme_color_project-brand');
        }
    }

    if (brandTheme) {
        for (var i = 0; i < brandTheme.length; i++) {
            brandTheme[i].classList.toggle('theme_color_project-default');
        }
    }

    if (inverseTheme) {
        for (var i = 0; i < inverseTheme.length; i++) {
            inverseTheme[i].classList.toggle('theme_color_project-warning');
        }
    }

    if (warningTheme) {
        for (var i = 0; i < warningTheme.length; i++) {
            warningTheme[i].classList.toggle('theme_color_project-inverse');
        }
    }
}