const chai = require('chai');
const { describe } = require('mocha');
// const Sinon = require('sinon');
const chaiHttp = require('chai-http');
require('dotenv/config');

const api = require('../../src/api');

const { expect } = chai;

chai.use(chaiHttp);

describe('Inscrições', () => {
  describe('GetAll', () => {
    let result;
    before(async () => {
      result = await chai.request(api).get('/inscricoes');
    });
    it('ser array', () => {
      expect(result.body).to.be.an('array');
    });
    it('array com objetos', () => {
      result.body.forEach((inscricao) => {
        expect(inscricao).to.be.an('object');
      });
    });
    it('objetos com propriedades id, data_inscricao, data_retorno, empresa_id, status', () => {
      result.body.forEach((inscricao) => {
        expect(inscricao).to.have.keys(
          'id',
          'data_inscricao',
          'data_retorno',
          'empresa_id',
          'status',
        );
      });
    });
  });
  describe('GetById', () => {
    let result;
    let inscricao;
    before(async () => {
      result = await chai.request(api).get('/inscricoes/1');
      inscricao = result.body;
    });
    it('ser object', () => {
      expect(result.body).to.be.an('object');
    });
    it('array com objetos', () => {
      expect(inscricao).to.be.an('object');
    });
    it('objetos com propriedades id, data_inscricao, data_retorno, empresa_id, status', () => {
      expect(inscricao).to.have.keys(
        'id',
        'data_inscricao',
        'data_retorno',
        'empresa_id',
        'status',
      );
    });
  });
});

// describe('Habilidade');
// describe('Inscrições');
// describe('Inscrição Habilidade');
