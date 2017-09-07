'use strict'

var imp = require('../_js/testImports')
var shello = require('../../index')
var Buffer = 'Uint8Array'

describe('shell-o', function() {

  it('success', function() {
    var cmdObj = shello('echo hello')
    imp.expect(cmdObj.out).to.be.a(Buffer)
    imp.expect(cmdObj.out.toString()).to.match(/hello/)

    imp.expect(cmdObj.err).to.be.undefined
    imp.expect(cmdObj.code).to.equal(0)
    imp.expect(cmdObj.ok).to.be.true
  })

  it('failure', function() {
    var cmdObj = shello('gecho hello')
    imp.expect(cmdObj.err).to.be.an('error')
    imp.expect(cmdObj.err.message).to.match(/not recognized/)

    imp.expect(cmdObj.out).to.be.undefined
    imp.expect(cmdObj.code).to.equal(1)
    imp.expect(cmdObj.ok).to.be.false
  })
})
