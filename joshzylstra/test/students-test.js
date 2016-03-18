'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
require(__dirname + '/../server.js');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;


let studentsTest = {
  name: 'Josh',
  hometown: 'Cutlerville',
  major: 'Ancient Civilizations and Biblical Studies'
}

describe('testing students routes', () => {
  it('should respond to a GET request from students', (done) => {
    request('localhost:3000')
      .get('/students/')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      });
   });

  it('should respond to Post Request from students', (done) => {
    request('localhost:3000')
      .post('/students')
      .send(studentsTest)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        done();
      });
    });
  it('should respond to a get from students/major', (done) => {
     request('localhost:3000')
       .get('/students/major')
       .end((err, res) => {
         expect(err).to.equal(null);
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         done();
       });
 });
});
