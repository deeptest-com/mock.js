/* global require, chai, describe, before, it */
/* global window */
// 数据占位符定义（Data Placeholder Definition，DPD）
var expect = chai.expect
var Mock, Random, $, _, Random

/* jshint -W061 */
describe('Random', function() {
    before(function(done) {
        require(['mock', 'underscore', 'jquery'], function() {
            Mock = arguments[0]
            window.Random = Random = Mock.Random
            _ = arguments[1]
            $ = arguments[2]
            expect(Mock).to.not.equal(undefined)
            expect(_).to.not.equal(undefined)
            expect($).to.not.equal(undefined)
            done()
        })
    })

    function stringify(json) {
        return JSON.stringify(json /*, null, 4*/ )
    }

    function doit(expression, validator) {
        it('', function() {
            // for (var i = 0; i < 1; i++) {}
            var data = eval(expression)
            validator(data)
            this.test.title = stringify(expression) + ' => ' + stringify(data)
        })
    }

    describe('Phone', function() {
        doit('Random.mobiphone()', function(result) {
            expect(result).to.have.length(11)
        })

        doit('Random.telephone()', function(result) {
            expect(result).to.have.length(8)
        })

        doit('Random.areacode()', function(result) {
            expect(result).to.have.length.above(3)
        })
    })
})
