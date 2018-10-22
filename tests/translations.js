//Package required
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();
//invoking HTTP function of Chai Module
chai.use(chaiHttp);

//testing of each scripted endpoint
describe('translations', function() {
  it('should list ALL translations on /translations GET', function(done) {
    chai.request(server)
      .get('/translations')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
  it('should list a SINGLE translations on /translations/<id> GET', function(done) {
    chai.request(server)
      .get('/translations/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should add a SINGLE translations on /translations POST', function(done) {
    chai.request(server)
      .post('/translations')
      .send({'name': 'hello'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('string');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('string');
        res.body.SUCCESS.should.have.property('name');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.name.should.equal('Hello');
        res.body.SUCCESS.lastName.should.equal('Script');
        done();
      });
  });
  it('should update a SINGLE translations on /translations/<id> PUT', function(done) {
    chai.request(server)
      .update('/translations/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should delete a SINGLE translations on /translations/<id> DELETE', function(done) {
    chai.request(server)
      .delete('/translations/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
