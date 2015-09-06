"use strict";

var assert = require("assert");
var random = require("..").generate;

describe("randomstring.generate(options)", function() {

  it("returns a string", function() {
    var rds = random();
    assert.equal(typeof(rds), "string");
  });

  it("defaults to 32 characters in length", function() {
    assert.equal(random().length, 32);
  });

  it("accepts length as an optional first argument", function() {
    assert.equal(random(10).length, 10);
  });
  
  it("accepts length as an option param", function() {
    assert.equal(random({ length: 7 }).length, 7);
  });
  
  it("accepts 'numeric' as charset option", function() {
    var testData = random({ length: 24700, charset: 'numeric' });
    var search = testData.search(/\D/ig);
    assert.equal(search, -1);
  });
  
  it("accepts 'alphabetic' as charset option", function() {
    var testData = random({ length: 24700, charset: 'alphabetic' });
    var search = testData.search(/\d/ig);
    assert.equal(search, -1);
  });
  
  it("accepts 'hex' as charset option", function() {
    var testData = random({ length: 24700, charset: 'hex' });
    var search = testData.search(/[^0-9a-f]/ig);
    assert.equal(search, -1);
  });
  
  it("accepts custom charset", function() {
    var charset = "abc";
    var testData = random({ length: 24700, charset: charset });
    var search = testData.search(/[^abc]/ig);
    assert.equal(search, -1);
  });
  
  it("accepts readable option", function() {
    var testData = random({ length: 24700, readable: true });
    var search = testData.search(/[0OIl]/ig);
    assert.equal(search, -1);
  });

});
