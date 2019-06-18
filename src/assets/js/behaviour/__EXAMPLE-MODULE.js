/**
 * EXAMPLE MODULE
 *
 * description of the default module
 */


/**
 * CONSTRUCTOR
 * initialises the object
 */
class MODULE_NAME {
    constructor(el, options) {
        this.el = el;

        const defaults = {
            activeClass: '-item-active',
        };

        // Merging options with defaults
        this.settings = Object.assign({}, defaults, options);

        this.init();
    }

    init() {
        this.addListeners();
    }

    addListeners() {}

    _privateMethod() {}
}


// Export
export default MODULE_NAME;
