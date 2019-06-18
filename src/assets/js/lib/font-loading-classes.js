/**
 * WEB FONT LOADING
 */
(function() {
    // Optimization for Repeat Views
    // https://www.zachleat.com/web-fonts/demos/fout-with-class.html
    if( sessionStorage.font1Active ) {
        document.documentElement.classList.add('webfont-1-active');
    }

    if( sessionStorage.font2Active ) {
        document.documentElement.classList.add('webfont-2-active');
    }
}());
