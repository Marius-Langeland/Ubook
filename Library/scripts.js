window.onload = function(){
    
    // Theme toggle
    let themeButton = document.querySelector('#theme-switches');
    themeButton.addEventListener('click', function(){
        let pageTheme = document.head.querySelector("#page-theme");
        let bool = pageTheme.getAttribute('href') == 'darktheme.css';
        pageTheme.setAttribute('href', bool ? 'lighttheme.css' : 'darktheme.css');
    });

}