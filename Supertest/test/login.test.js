const req = require('supertest');

describle('User login', () => {
    it('Deve acessar o token', () => {
        Request('http://localhost:3000/api')
            .post('/login')
            .send({
                "username": "admin",
                "passworld": "aedmin"
            })
            .set('Accept', 'application/json')
            .then(reponse => {

            })

    });

})