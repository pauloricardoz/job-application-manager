const chai = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const chaiHttp = require('chai-http');
require('dotenv/config');

const api = require('../../src/api');

const { expect } = chai;

chai.use(chaiHttp);

describe('Empresa', () => {
  describe('GetAll', () => {
    let result;
    before(async () => {
      result = await chai.request(api).get('/empresas');
    });
    it('ser array', () => {
      expect(result.body).to.be.an('array');
    });
    it('array com objetos', () => {
      result.body.forEach((empresa) => {
        expect(empresa).to.be.an('object');
      });
    });
    it('objetos com propriedades id, name', () => {
      result.body.forEach((empresa) => {
        expect(empresa).to.have.keys('id', 'name');
      });
    });
  });
});

// describe('Habilidade');
// describe('Inscrições');
// describe('Inscrição Habilidade');
