const { describe, it } = require('@jest/globals');
const request = require('supertest');

const app = require('../src/app.js');

let idResposta;

describe('POST /payments', () => {
  it('cria um pagamento', async () => {
    const response = await request(app)
      .post('/payments')
      .send({
        value: 678,
        cardName: 'TESTE',
        cardNumber: '4472-3594-4239-1356',
        expirationDate: '2026-02',
        cvv: 112,
        status: 'CRIADO'
    })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    idResposta = response.body.id;
    console.log(idResposta);
  });
});

describe('GET /payments/:id', () => {
  it('deve retornar um pagamento por id' , async () =>{
      await request(app)
      .get(`/payments/${idResposta}`)
      .expect(200);
  });
});

describe('PUT /payments/:id', () => {
  test.each([
    ['cardName', { cardName: 'TESTE' }],
    ['value', { value: 999.99 }],
  ])('Deve alterar o campo %s', async (_chave, param) => {
      const requisicao = { request };
      const spy = jest.spyOn(requisicao, 'request');
      await requisicao.request(app)
      .put(`/payments/${idResposta}`)
      .send(param)
      .expect(200);
      expect(spy).toHaveBeenCalled();
  });
});
