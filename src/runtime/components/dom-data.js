var runtimeId = require("./util").___runtimeId;
var counter = 0;
var seed = "M" + runtimeId;
var WeakMap =
    global.WeakMap ||
    function WeakMap() {
        var id = seed + counter++;
        return {
            get: function(ref) {
                return ref[id];
            },
            set: function(ref, value) {
                ref[id] = value;
            }
        };
    };

module.exports = {
    ___vPropsByDOMNode: new WeakMap(),
    ___vElementByDOMNode: new WeakMap(),
    ___componentByDOMNode: new WeakMap(),
    ___detachedByDOMNode: new WeakMap(),
    ___keyByDOMNode: new WeakMap()
};
