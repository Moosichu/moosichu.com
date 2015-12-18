var assert = require('assert');
var expect = require('chai').expect;
var request = require('request');

describe("Color Code Converter API", function() {
  describe("RGB to Hex conversion", function() {
    var url = "http://localhost:3000/cv.pdf";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
