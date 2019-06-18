const formData = document.querySelector('.js-skeleton-form');
formData.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // 1. Creating a FormData object and blank object
    const formData = new FormData();
    const formDataObj = {};

    // 2. Iterating over all form inputs and creating
    //    key/value pairs of form input and value
    for ( const pair of formData.entries() ) {
        const key = pair[0];
        const value = pair[1];

        // 2.1 Checking if the current key already exists.
        //     If it does not creat it
        if( formDataObj[key] === undefined ) {
            formDataObj[key] = value;
        } // eslint-disable-line
        // 2.2 If the current key does exist then we have a
        //     multiple checkbox so we need to create an array.
        else {
            // 2.2.1 Storing the current value/s for the current key
            const oldValue = ( Array.isArray(formDataObj[key]) ? formDataObj[key] : [formDataObj[key]]);
            // 2.2.3 Combining the old values with the new value
            formDataObj[key] = [...oldValue, value];
        }
    }

    // 3. Creating JSON object from our fromDataObj
    const formValues = JSON.stringify( formDataObj );


    const request = new Request('./lib/form/capture.php', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'same-origin', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json', // Content type in our requests body
            'Accept': 'application/json' // Return bodies content type
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: formValues
    });


    fetch(request)
        .then(response => response.json() )
        .then(response => {
            const mainWrappers = document.querySelectorAll('div.form__input-container');
            mainWrappers.forEach(element => {
                element.classList.remove('form__input-container--error');
            });

            const errorMessage = document.querySelector('.js-warning-form');
            errorMessage.classList.remove('form__input-container--message');


            // If our form has validation errors
            if(response.success === false) {
                // Create array of all of the error keys
                const keys = Object.keys(response);

                const errors = keys.filter(key => {
                    return response[key] === true;
                });

                // Loop through does errors
                errors.forEach(error => {
                    const el = error; // - this doesn't work FYI
                    // Target all input elements with errors
                    const input = document.querySelector(`.js-form-input[name="${el}"]`);
                    // Toggle aria-invalid to true for fields with errors
                    input.setAttribute('aria-invalid', true);

                    const inputWrapper = input.closest('div.form__input-container');

                    // Find the form container for each one
                    // Add error class for each mandatory input field
                    inputWrapper.classList.add('form__input-container--error');
                });
                // Display Error Message on top of the form
                errorMessage.classList.add('form__input-container--message');
            } else {
                // If our form has no validation errors
                // Display Success Message
                const successMessage = document.querySelector('.js-success-form');
                successMessage.classList.add('form__input-container--message');
                console.log('Form is valid and has been submitted!');
            }
        })
        .catch(error => console.error(error));
}
