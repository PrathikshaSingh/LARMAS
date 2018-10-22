//Packages required
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

//invloking HTTP function of Chai Module
chai.use(chaiHttp);

////testing of each scripted endpoint
describe('Users', function() {
  it('should list ALL Users on /Users GET', function(done) {
    chai.request(server)
      .get('/Users')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });
  it('should list a SINGLE Users on /Users/<id> GET', function(done) {
    chai.request(server)
      .get('/Users/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should add a SINGLE Users on /Users POST', function(done) {
    chai.request(server)
      .post('/Users')
      .send({'name': 'Java', 'lastName': 'Script'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('string');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('string');
        res.body.SUCCESS.should.have.property('username');
        res.body.SUCCESS.should.have.property('email');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.name.should.equal('Java');
        res.body.SUCCESS.lastName.should.equal('Script');
        done();
      });
  });
  it('should update a SINGLE Users on /Users/<id> PUT', function(done) {
    chai.request(server)
      .update('/Users/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  it('should delete a SINGLE Users on /Users/<id> DELETE', function(done) {
    chai.request(server)
      .delete('/Users/{id}')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
});
