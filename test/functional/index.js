var app = require('../../app');
var request = require('supertest');

describe('GET /', function() {
  it('should respond with html', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done();
      });
  });

  //TODO: Write these tests using phantomjs
  describe('navbar', function() {
    it('should show moosichu.com link');
    it('should show blog link');
    it('should show about link');
    it('should show social-media links');
  });
});
