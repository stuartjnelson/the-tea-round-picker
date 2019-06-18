export function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\]\\])/g, '\\$1');
}


export function strReplaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}


export function debounce(callback, delay) {
    let timer = null;

    return function() {
        if (timer) return;

        callback.apply(this, arguments);
        timer = setTimeout(() => timer = null, delay);
    };
}


export function throttle(callback, delay) {
    let isThrottled = false,
        args, context;

    function wrapper() {
        if (isThrottled) {
            args = arguments;
            context = this;
            return;
        }

        isThrottled = true;
        callback.apply(this, arguments);

        setTimeout(() => {
            isThrottled = false;
            if (args) {
                wrapper.apply(context, args);
                args = context = null;
            }
        }, delay);
    }

    return wrapper;
}
