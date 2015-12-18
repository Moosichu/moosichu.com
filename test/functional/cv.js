var request = require('supertest');
var app = require('../../app');

describe('GET /cv.pdf', function() {
  it('should respond with pdf', function(done) {
    request(app)
      .get('/cv.pdf')
      .set('Accept', 'application/pdf')
      .expect('Content-Type', 'application/pdf')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done();
      });
  });
});
