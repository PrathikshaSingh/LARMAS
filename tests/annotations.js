//Pakages required
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

//invoking HTTP function of Chai module
chai.use(chaiHttp);

//testing of each scripted endpoint
describe('annotations', function() {
  it('should list ALL annotations on /annotations GET', function(done) {
    chai.request(server)
      .get('/annotations')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
  it('should list a SINGLE annotations on /annotations/<id> GET', function(done) {
    chai.request(server)
      .get('/annotations/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should add a SINGLE annotations on /annotations POST', function(done) {
    chai.request(server)
      .post('/annotations')
      .send({'name': 'Java', 'lastName': 'Script'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('string');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.name.should.equal('Java');
        res.body.SUCCESS.lastName.should.equal('Script');
        done();
      });
  });
  it('should update a SINGLE annotations on /annotations/<id> PUT', function(done) {
    chai.request(server)
      .update('/annotations/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should delete a SINGLE annotations on /annotations/<id> DELETE', function(done) {
    chai.request(server)
      .delete('/annotations/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
