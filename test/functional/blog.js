var app = require('../../app');
var request = require('supertest');
var page = "blog";

describe('GET /' + page, function() {
  it('should respond with html.', function(done) {
    request(app)
      .get('/' + page)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done();
      });
  });

  //TODO: Write these tests using phantomjs
  describe('content', function() {
    it('should show medium profile.');
  });
});
