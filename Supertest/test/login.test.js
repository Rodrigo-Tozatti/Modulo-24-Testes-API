const req = require('supertest');
const API_URL = process.env.API_URL

describe('Login de usuário', () => {
    it('Deve acessar o token', () => {
        req(API_URL)
            .post('/login')
            .send({
                "username": "admin",
                "password": "admin"
            })
            .set('Accept', 'application/json')
            .then(reponse => {
                expect(reponse.statusCode).toEqual(201)
                expect(reponse.body.accessToken).not.toBe(undefined)
            })
    });
});