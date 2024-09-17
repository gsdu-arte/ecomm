import request from 'supertest';
import {describe, expect, it, jest} from '@jest/globals';

import app from '../src/app.js';

describe('GET  /categorias', () => {
    it('Deve retortar categorias', async () => {
        const response = await request(app)
            .get('/categories')
            .expect(200);
        expect(response.body[0].nome).toEqual('INFORMÁTICA');
    });
});

let idResposta;

describe('POST /categories', ()=> {
    it('cria uma categoria', async ()=> {
        const response = await request(app)
            .post('/categories')
            .send({
                nome: 'CATEGORIA TESTE',
                status: 'ATIVA'
            })
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(201);
    
        idResposta = response.body._id;
    });
});

describe('GET /categories/:id', () => {
    it('deve retortar categorias por id' , async () =>{
        await request(app)
        .get(`/categories/${idResposta}`)
        expect(200);
    });
});
