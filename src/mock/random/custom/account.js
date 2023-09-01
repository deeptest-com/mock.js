/*
    ## Account Custom
*/

var Basic = require("../basic");
module.exports = {
    idnEmail: function() {
        return this.word() + '@' + (this.word() + '.' + this.tld())
    },
    password: function(len) {
        len = len ? len : 8
        var prefix = 'P@sswd'
        var prefixLen = prefix.length

        if (len <= 6) {
            return prefix.substring(0, len)
        }

        var start = Math.pow(10, len - prefixLen - 1)
        var end = Math.pow(10, len - prefixLen) - 1

        return prefix + Basic.natural(start, end)
    },
}
