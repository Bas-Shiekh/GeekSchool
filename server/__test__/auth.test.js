/* eslint-disable no-undef */
// import {
//   describe, test, expect, beforeAll, afterAll,
// } from '@jest/globals';
// import supertest from 'supertest';

// import connection from '../database/connection';
// import app from '../app';

describe('Testing signup route', () => {
  test('Dummy test', () => {
    expect(1).toBe(1);
  });
  //   test('It should check the content type and return 201 when the user enters a valid data.',
  // (done) => {
  //     supertest(app)
  //       .post('/api/v1/signup')
  //       .send({
  //         name: 'Mustafa Salem',
  //         email: 'hi@hi.hi',
  //         password: 'root123',
  //         confPassword: 'root123',
  //         mobile: '0599000000',
  //         location: 'Gaza-Palestine',
  //         role: 'parent',
  //       })
  //       .expect('Content-Type', /json/)
  //       .expect(201)
  //       .end((err) => {
  //         if (err) return done(err);
  //         return done();
  //       });
  //   });

  //   test('It should check if the user data and message are returned from the server.',
  // (done) => {
  //     supertest(app)
  //       .post('/api/v1/signup')
  //       .send({
  //         name: 'Mustafa Salem',
  //         email: 'hello@hello.hello',
  //         password: 'root123',
  //         confPassword: 'root123',
  //         mobile: '0599000000',
  //         location: 'Gaza-Palestine',
  //         role: 'parent',
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res.body.data).toBeDefined();
  //         expect(res.body.message).toBeDefined();
  //         return done();
  //       });
  //   });

  //   test('It should return return 400 when the user enters an incompatible data.', (done) => {
  //     supertest(app)
  //       .post('/api/v1/signup')
  //       .send({
  //         name: 'Mustafa Salem',
  //         email: 'hi@hi.hi',
  //         password: 'root123',
  //         confPassword: 'root123',
  //         mobile: '0599000000',
  //         location: 'Gaza-Palestine',
  //         role: 123,
  //       })
  //       .expect(400)
  //       .end((err) => {
  //         if (err) return done(err);
  //         return done();
  //       });
  //   });

  //   test('It should return return error message when the user enters an incompatible data.',
  // (done) => {
  //     supertest(app)
  //       .post('/api/v1/signup')
  //       .send({
  //         name: 'Mustafa Salem',
  //         email: 'hi@hi.hi',
  //         password: 'root123',
  //         confPassword: 'root123',
  //         mobile: '0599000000',
  //         location: 'Gaza-Palestine',
  //         role: 123,
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res.body.message).toBe('Incompatible data!');
  //         return done();
  //       });
  //   });

  //   test('It should return 422 when the user already exists.', (done) => {
  //     supertest(app)
  //       .post('/api/v1/signup')
  //       .send({
  //         name: 'Mustafa Salem',
  //         email: 'hi@hi.hi',
  //         password: 'root123',
  //         confPassword: 'root123',
  //         mobile: '0599000000',
  //         location: 'Gaza-Palestine',
  //         role: 123,
  //       })
  //       .end((err, res) => {
  //         if (err) return done(err);
  //         expect(res.status).toBe(422);
  //         return done();
  //       });
  //   });

//   test('It should return a message in the body.', (done) => {
//     supertest(app)
//       .post('/api/v1/signup')
//       .send({
//         name: 'Mustafa Salem',
//         email: 'hi@hi.hi',
//         password: 'root123',
//         confPassword: 'root123',
//         mobile: '0599000000',
//         location: 'Gaza-Palestine',
//         role: 123,
//       })
//       .end((err, res) => {
//         if (err) return done(err);
//         expect(res.body.message).toBe('The email does already exist!');
//         return done();
//       });
//   });
});
