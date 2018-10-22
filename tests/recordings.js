//Packages required
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();
//invoke HTTP function of Chai Module
chai.use(chaiHttp);

//testing of each scripted endpoint
describe('recordings', function() {
  it('should list ALL recordings on /recordings GET', function(done) {
    chai.request(server)
      .get('/recordings')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
  it('should list a SINGLE recordings on /recordings/<id> GET', function(done) {
    chai.request(server)
      .get('/recordings/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should add a SINGLE recordings on /recordings POST', function(done) {
    chai.request(server)
      .post('/recordings')
      
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.lastName.should.equal('Script');
        done();
      });
  });
  it('should update a SINGLE recordings on /recordings/<id> PUT', function(done) {
    chai.request(server)
      .update('/recordings/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should delete a SINGLE recordings on /recordings/<id> DELETE', function(done) {
    chai.request(server)
      .delete('/recordings/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
