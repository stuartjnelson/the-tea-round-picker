import FontFaceObserver from 'fontfaceobserver';

// Set this to true when using webfonts
const WEB_FONTS = true;

function fontLoading() {
    // 1. Timeout helper
    function timer(time) {
        return new Promise(function(resolve, reject) {
            setTimeout(reject, time);
        });
    }

    const timeout = WEB_FONTS ? 3000 : 1;


    // 2. Setup FontFaceObservers and pass in your fonts family name
    //    rather than the font files name. This can be anything you want. If
    //    you are loading 2 weight for the same font you *MUST* ensure that
    //    both font familes have very different names. Eg;

    //    LatoRegular = Lato 400
    //    LatoBold    = Lato 700

    // 3. Be sure to set WEB_FONTS to true at top of file
    const primaryFont = new FontFaceObserver('LatoRegular', {
        weight: 400
    });


    Promise.race([
        timer(timeout), // if the fonts aint loaded fast enough then kick off big time!
        primaryFont.load()
    ])
        .then(() => {
            document.documentElement.classList.add('webfont-1-active');

            sessionStorage.font1Active = true;


            //
            //  SECONDARY FONTS
            //
            //  If you have more than one font then create a new instance of the
            //  `FontFaceObserver` per font. You can pass in CSS font properties
            //  when you call `FontFaceObserver`.
            //

            const secondaryFont = new FontFaceObserver('LatoBold', {
                weight: 700
            });

            Promise.all([
                secondaryFont.load()
            ]).then(function() {
                document.documentElement.className += ' webfont-2-active';

                // Optimization for Repeat Views
                sessionStorage.foutFontsLoaded2 = true;
            });
        }).catch(() => {
            document.documentElement.classList.add('webfont-inactive');
        });
}

export default fontLoading;
