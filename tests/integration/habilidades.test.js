const chai = require('chai');
const { describe } = require('mocha');
const chaiHttp = require('chai-http');
require('dotenv/config');

const api = require('../../src/api');

const { expect } = chai;

chai.use(chaiHttp);

describe('Habilidades', () => {
  describe('GetAll', () => {
    let result;
    before(async () => {
      result = await chai.request(api).get('/habilidades');
    });
    it('ser array', () => {
      expect(result.body).to.be.an('array');
    });
    it('array com objetos', () => {
      result.body.forEach((habilidade) => {
        expect(habilidade).to.be.an('object');
      });
    });
    it('objetos com propriedades id, name, level', () => {
      result.body.forEach((habilidade) => {
        expect(habilidade).to.have.keys('id', 'name', 'level');
      });
    });
  });
  describe('GetById', () => {
    let result;
    let habilidade;
    before(async () => {
      result = await chai.request(api).get('/habilidades/1');
      habilidade = result.body;
    });
    it('ser objeto', () => {
      expect(result.body).to.be.an('object');
    });
    it('array com objetos', () => {
      expect(habilidade).to.be.an('object');
    });
    it('objetos com propriedades id, name, level', () => {
      expect(habilidade).to.have.keys('id', 'name', 'level');
    });
  });
});

// describe('Inscrições');
// describe('Inscrição Habilidade');
