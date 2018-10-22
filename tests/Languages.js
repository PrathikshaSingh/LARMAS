//packages required
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

//invoking HTTP function of Chai Module
chai.use(chaiHttp);

//testing of each scripted endpoint
describe('Langauges', function() {
  it('should list ALL Languages on /Languages GET', function(done) {
    chai.request(server)
      .get('/Languages')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
  it('should list a SINGLE Languages on /Languages/<id> GET', function(done) {
    chai.request(server)
      .get('/Languages/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should add a SINGLE Languages on /Languages POST', function(done) {
    chai.request(server)
      .post('/Languages')
      .send({'name': 'Java'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('string');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.name.should.equal('Java');
        done();
      });
  });
  it('should update a SINGLE Languages on /Languages/<id> PUT', function(done) {
    chai.request(server)
      .update('/Languages/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should delete a SINGLE Languages on /Languages/<id> DELETE', function(done) {
    chai.request(server)
      .delete('/Langauges/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
