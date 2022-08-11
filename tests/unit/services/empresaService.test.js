const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const empresaModel = require('../../../models/empresaModel');
const empresaService = require('../../../services/empresaService');

describe('GET ALL', () => {
  describe('Caso OK', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('retorna array', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = [];
      Sinon.stub(empresaModel, 'getAll').resolves(resultExecute);

      const resultado = await empresaService.getAll();

      expect(resultado).to.be.an('array');
    });
    it('retorna array vazio', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = [];
      Sinon.stub(empresaModel, 'getAll').resolves(resultExecute);

      const resultado = await empresaService.getAll();

      expect(resultado).to.be.empty;
    });
    it('Retorna array cheio', async () => {
      const resultExecute = [{ id: 1, name: 'teste' }];
      Sinon.stub(empresaModel, 'getAll').resolves(resultExecute);

      const resultado = await empresaService.getAll();

      expect(resultado).to.be.not.empty;
    });
    it('Retorna array contenha objetos ', async () => {
      const resultExecute = [{ id: 1, name: 'teste' }];
      Sinon.stub(empresaModel, 'getAll').resolves(resultExecute);

      const [resultado] = await empresaService.getAll();

      expect(resultado).to.be.an('object');
      expect(resultado).to.all.keys('name', 'id');
    });
  });
});
