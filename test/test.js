var assert = require('assert');
var expect = require('chai').expect;
var request = require('supertest')
var app = require('../app');

describe('GET /cv.pdf', function(){
  it('respond with pdf', function(done){
    request(app)
      .get('/cv.pdf')
      .set('Accept', 'application/pdf')
      .expect('Content-Type', 'application/pdf')
      .expect(200, done);
  })
})
