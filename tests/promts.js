//Packages required
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

//invoking HTTP Function of Chai module
chai.use(chaiHttp);

//testing of each scripted endpoint
describe('prompts', function() {
  it('should list ALL prompts on /prompts GET', function(done) {
    chai.request(server)
      .get('/prompts')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
  it('should list a SINGLE prompts on /prompts/<id> GET', function(done) {
    chai.request(server)
      .get('/prompts/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should add a SINGLE prompts on /prompts POST', function(done) {
    chai.request(server)
      .post('/prompts')
      .send({'name': 'Java'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('string');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('string');
        res.body.SUCCESS.should.have.property('name');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.name.should.equal('Java');
        res.body.SUCCESS.lastName.should.equal('Script');
        done();
      });
  });
  it('should update a SINGLE prompts on /prompts/<id> PUT', function(done) {
    chai.request(server)
      .update('/Languages/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should delete a SINGLE prompts on /prompts/<id> DELETE', function(done) {
    chai.request(server)
      .delete('/prompts/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
