angular.module("serialGenerator", []);
angular.module("serialGenerator").provider("serialGenerator",
    function () {
        var _length = 10;
        this.getLength = () => _length;
        this.setLength = length => _length = length;
        this.$get = () => {
            return {
                generate: () => {
                    var serial = "";
                    while (serial.length < _length) {
                        serial += String.fromCharCode(Math.floor(Math.random() * 64) +32);
                    }
                    return serial;
                }
            }
        }
    }
);
