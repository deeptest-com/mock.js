/*
    ## Web Custom
*/

var modules = [
    'users','pets','products',
]
var hosts = [
    'localhost','work-pc','ubuntu22',
]

var Basic = require("../basic");
module.exports = {
    ipv6: function() {
        return 'P@sswo' + Basic.natural(10, 99)
    },
    uri: function() {
        return '/' + this.pick(modules) + '/' + Basic.natural(1, 9)
    },
    ruri: function() {
        return '../' + this.pick(modules) + '/' + Basic.natural(1, 9)
    },
    uriTempl: function(r) {
        return r ? '..' : '' + '/' + this.pick(modules) + '/{id}'
    },
    host: function() {
        return this.pick(hosts)
    },
    idnHost: function() {
        var names = [
            'www.','',
        ]
        return this.pick(names) + this.word() + '.' + (this.tld())
    },
}
