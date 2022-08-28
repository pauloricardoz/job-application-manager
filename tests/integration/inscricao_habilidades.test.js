const chai = require('chai');
const { describe } = require('mocha');
// const Sinon = require('sinon');
const chaiHttp = require('chai-http');
require('dotenv/config');

const api = require('../../src/api');

const { expect } = chai;

chai.use(chaiHttp);

describe('Inscricao Habilidades', () => {
  describe('GetAll', () => {
    let result;
    before(async () => {
      result = await chai.request(api).get('/inscricao-habilidades');
    });
    it('ser array', () => {
      expect(result.body).to.be.an('array');
    });
    it('array com objetos', () => {
      result.body.forEach((inscricaoHabilidades) => {
        expect(inscricaoHabilidades).to.be.an('object');
      });
    });
    it('objetos com propriedades id_habilidade, id_inscricao', () => {
      result.body.forEach((inscricaoHabilidades) => {
        expect(inscricaoHabilidades).to.have.keys(
          'id_habilidade',
          'id_inscricao',
        );
      });
    });
  });
  describe('GetById', () => {
    let result;
    before(async () => {
      result = await chai.request(api).get('/inscricao-habilidades/1');
    });
    it('Status 404', () => {
      expect(result.status).to.be.equal(404);
    });
    it('Cannot GET', () => {
      expect(result.body.message).to.be.contain('Rota inexistente');
    });
  });
});

// describe('Habilidade');
// describe('Inscrições');
// describe('Inscrição Habilidade');
