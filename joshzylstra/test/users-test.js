'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
require(__dirname + '/../server.js');

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

let usersTest = {
  name: 'Vinny',
  email: 'vcassidy@miami.edu',
  username: 'vcassidy'
}

let updateUser = {
   email: 'vcassidy@gmail.com'
 };

let userID = '56eb15d05e334a9424e40a9f';

describe('testing users routes', () => {
  it('should respond to a get request from users', (done) => {
     request('localhost:3000')
       .get('/users/')
      .end((err, res) => {
        expect(err).to.equal(null);
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         done();
      });
   });

  it('should respond to post request from users', (done) => {
     request('localhost:3000')
       .post('/users')
       .send(usersTest)
       .end((err, res) => {
         expect(err).to.equal(null);
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         done();
       });
   });
  it('should respond to put on a user ID', (done) => {
     request('localhost:3000')
       .put('/users/' + userID)
       .send(updateUser)
       .end((err, res) => {
         expect(err).to.equal(null);
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         done();
       });
   })

  it('should respond to delete on a user ID', (done) => {
    request('localhost:3000')
    .delete('/users/' + userID)
    .end((err, res) => {
      expect(err).to.equal(null);
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      done();
    });
  });
 })
