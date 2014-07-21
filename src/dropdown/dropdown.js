var klass = require("hsp/klass");

var _openClass = "open";
var _openClassRegExp = /\bopen\b/g;

exports.DropdownController = new klass({
    attributes:{
        body: {type: "template", defaultContent: true},
        isopen: {type: "boolean", defaultValue: false, binding: "2-way"},

        //BS events
        "ondropdownbeforeshow": { type: "callback" },
        "ondropdownshow": { type: "callback" },
        "ondropdownbeforehide": { type: "callback" },
        "ondropdownhide": { type: "callback" }
    },
    $init: function() {
    },
    $dispose: function() {
    },
    $refresh: function() {
        var dropdown = this.dropdown = this.$getElement(0);

        // Change the open class depending on the isopen attribute
        var classes = dropdown.getAttribute("class");
        var isopen = this.isopen;
        debugger;
        var isClassPresent = _openClassRegExp.test(classes);
        if (isopen && !isClassPresent) {
            dropdown.setAttribute("class", classes + " " + _openClass);
        } else if (!isopen && isClassPresent) {
            dropdown.setAttribute("class", classes.replace(_openClassRegExp, ""));
        }


        var toggleButton = this.toggleButton = dropdown.querySelector('[data-toggle=dropdown]');
        var that = this;
        toggleButton.addEventListener("click", function() {
            debugger;
            that.isopen = !that.isopen;
        });
        //debugger;
    },
});
