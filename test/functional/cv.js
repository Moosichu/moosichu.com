var request = require('supertest');
var app = require('../../app');
var page = "cv.pdf";

describe('GET /' + page, function() {
  it('should respond with pdf.', function(done) {
    request(app)
      .get('/' + page)
      .expect('Content-Type', 'application/pdf')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done();
      });
  });
});
