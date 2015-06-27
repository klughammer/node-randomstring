"use strict";

var assert = require("assert")
var random = require("..").generate

describe("randomstring.generate()", function() {

  it("returns a string", function() {
    var rds = random();
    assert.equal(typeof(rds), "string");
    console.log("          String return: " + rds);
  })

  it("defaults to 32 characters in length", function() {
    assert.equal(random().length, 32)
  })

  it("accepts length as an optional first argument", function() {
    assert.equal(random(10).length, 10)
  })

})
