window.onload = function(){
    
    // Theme toggle
    let themeButton = document.querySelector('#theme-switches');
    themeButton.addEventListener('click', function(){
        let pageTheme = document.head.querySelector("#page-theme");
        let bool = pageTheme.getAttribute('href') == '../themes/darktheme.css';
        pageTheme.setAttribute('href', bool ? '../themes/lighttheme.css' : '../themes/darktheme.css');
    });

}