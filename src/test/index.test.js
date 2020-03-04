process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const container = require('../api/container');
const server = container.resolve('server');
const app = server.getApp();
const request = require('supertest');
const db = container.resolve('db');

class Test {
  run() {
    let token;
    describe('api integration', () => {
      before(async () => {
        /*await db.sequelize.sync({
          force: true,
          match: /_test$/,
          logging: false
        }); */
        await db.sequelize.sync();
      });

      after(async () => {
        await db.sequelize.drop();
      });

      //login
      describe('login', () => {
        it('login failed', done => {
          let user = {
            username: 'challenge',
            password: 'xxxx'
          };
          request(app)
            .post('/api/login')
            .send(user)
            .end((err, res) => {
              expect(res.statusCode).to.equal(401);
              done();
            });
        });

        it('login successfull', done => {
          let user = {
            username: 'challenge',
            password: 'password'
          };
          request(app)
            .post('/api/login')
            .send(user)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              token = res.body.token;
              done();
            });
        });
      });

      // companies
      describe('/api/company', () => {
        it('create company', done => {
          let createCompany = {
            name: 'ABC',
            legalName: 'ABC',
            email: 'empresa@abc.com',
            phone: '123123',
            address: 'dummy 123123123'
          };
          request(app)
            .post('/api/company')
            .set('Authorization', 'Bearer ' + token)
            .send(createCompany)
            .end((err, res) => {
              expect(res.statusCode).to.equal(201);
              done();
            });
        });

        it('companies list', done => {
          request(app)
            .get('/api/company')
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              done();
            });
        });

        it('company id=1', done => {
          request(app)
            .get('/api/company/1')
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              done();
            });
        });

        it('update company', done => {
          let updateCompany = {
            name: 'Solution IT 3.1',
            legalName: 'SolutionIT3.1',
            email: 'solutions3@solutionit31.com',
            phone: '33333333333',
            address: 'dummy 7891'
          };
          request(app)
            .put('/api/company/1')
            .set('Authorization', 'Bearer ' + token)
            .send(updateCompany)
            .end((err, res) => {
              expect(res.statusCode).to.equals(200);
              done();
            });
        });
      });

      // user
      describe('/api/user', () => {
        it('create user', done => {
          let createUser = {
            companyId: '1',
            fullName: 'juan dominguez',
            phone: '12312321',
            age: 22,
            email: 'as@asdad.com',
            position: 'develop',
            address: 'cordoba'
          };
          request(app)
            .post('/api/user')
            .set('Authorization', 'Bearer ' + token)
            .send(createUser)
            .end((err, res) => {
              expect(res.statusCode).to.equal(201);
              done();
            });
        });

        it('users list', done => {
          request(app)
            .get('/api/user')
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              done();
            });
        });

        it('user id = 1', done => {
          request(app)
            .get('/api/user/1')
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              done();
            });
        });

        it('update user', done => {
          let updateUser = {
            companyId: '1',
            fullName: 'juan dominguez',
            phone: '12312312312312323',
            age: 22,
            email: 'xxxx@xxxx.com',
            position: 'develop',
            address: 'tucuman'
          };
          request(app)
            .put('/api/user/1')
            .set('Authorization', 'Bearer ' + token)
            .send(updateUser)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              done();
            });
        });

        it('delete user', done => {
          request(app)
            .delete('/api/user/1')
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              done();
            });
        });

        it('delete company', done => {
          request(app)
            .delete('/api/company/1')
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              done();
            });
        });
      });
    });
  }
}

new Test().run();
