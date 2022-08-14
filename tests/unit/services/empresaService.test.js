const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const empresaModel = require('../../../models/empresaModel');
const empresaService = require('../../../services/empresaService');

describe('SERVICE', () => {
  describe('GET ALL', () => {
    afterEach(function () {
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
    it('Retorna array cheio', async function () {
      const resultExecute = [{ id: 1, name: 'teste' }];
      Sinon.stub(empresaModel, 'getAll').resolves(resultExecute);

      const resultado = await empresaService.getAll();

      expect(resultado).to.be.not.empty;
    });
    it('Retorna array contenha objetos com "name" e "id"', async function () {
      const resultExecute = [{ id: 1, name: 'teste' }];
      Sinon.stub(empresaModel, 'getAll').resolves(resultExecute);

      const [resultado] = await empresaService.getAll();

      expect(resultado).to.be.an('object');
      expect(resultado).to.all.keys('name', 'id');
    });
  });

  describe('GET BY ID', () => {
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna um objeto da empresa', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = { name: 'Teste Inc.', id: 1 };
      Sinon.stub(empresaModel, 'getById').resolves(resultExecute);

      const resultado = await empresaService.getById();

      expect(resultado).to.be.an('object');
    });
    it('retorna objeto com "name" e "id"', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = { name: 'Teste Inc.', id: 1 };
      Sinon.stub(empresaModel, 'getById').resolves(resultExecute);

      const resultado = await empresaService.getById();

      expect(resultado).to.keys('name', 'id');
    });
    it('Retorna undefined quando não achar o "id"', async function () {
      const resultExecute = undefined;
      Sinon.stub(empresaModel, 'getById').resolves(resultExecute);

      const resultado = await empresaService.getById();

      expect(resultado).to.be.undefined;
    });
  });

  describe('CREATE', () => {
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna um objeto da empresa', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultGetAll = [];
      const resultCreate = { name: 'Teste Inc.', id: 1 };
      Sinon.stub(empresaModel, 'getAll').resolves(resultGetAll);
      Sinon.stub(empresaModel, 'create').resolves(resultCreate);

      const resultado = await empresaService.create({ name: 'Teste Inc.' });

      expect(resultado).to.be.an('object');
    });
    it('retorna objeto com "name" e "id"', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultGetAll = [];
      const resultCreate = { name: 'Teste Inc.', id: 1 };
      Sinon.stub(empresaModel, 'getAll').resolves(resultGetAll);
      Sinon.stub(empresaModel, 'create').resolves(resultCreate);
     
      const resultado = await empresaService.create({ name: 'Teste Inc.' });
     
      expect(resultado).to.keys('name', 'id');
    });
    it('Retorna null quando empresa já existir"', async function () {
      const resultGetAll = [
        { name: 'Teste Inc.', id: 1 },
        { name: 'Teste', id: 2 },
      ];
      const resultCreate = { name: 'Teste Inc.', id: 1 };
      Sinon.stub(empresaModel, 'getAll').resolves(resultGetAll);
      Sinon.stub(empresaModel, 'create').resolves(resultCreate);

      const resultado = await empresaService.create({ name: 'Teste Inc.' });

      expect(resultado).to.be.null;
    });
  });

  describe('UPDATE', () => {
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna null para empresa inexistente', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultGetById = undefined;
      Sinon.stub(empresaModel, 'getById').resolves(resultGetById);

      const resultado = await empresaService.update({ name: 'Teste Inc.' });

      expect(resultado).to.be.null;
    });
    it('retorna null para nenhuma alteração realizada', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultGetById = { name: 'Teste Inc', id: 1 };
      const resultUpdate = { affectedRows: 0 };
      Sinon.stub(empresaModel, 'getById').resolves(resultGetById);
      Sinon.stub(empresaModel, 'update').resolves(resultUpdate);
     
      const resultado = await empresaService.update({ name: 'Teste Inc.', id: 1 });
     
      expect(resultado).to.be.null;
    });
    it('Retorna objeto da empresa que foi alterado"', async function () {
      const resultgetById = { name: 'Teste Inc', id: 1 };
      const resultUpdate = { affectedRows: 1 };
      Sinon.stub(empresaModel, 'getById').resolves(resultgetById);
      Sinon.stub(empresaModel, 'update').resolves(resultUpdate);

      const resultado = await empresaService.update({ name: 'Teste Inc.', id: 1 });

      expect(resultado).to.be.an('object');
    });
    it('Retorna objeto com novos dados contendo "name" e "id', async function () {
      const resultgetById = { name: 'Teste Inc', id: 1 };
      const resultUpdate = { affectedRows: 1 };
      Sinon.stub(empresaModel, 'getById').resolves(resultgetById);
      Sinon.stub(empresaModel, 'update').resolves(resultUpdate);

      const resultado = await empresaService.update({ name: 'Teste Inc.', id: 1 });

      expect(resultado).to.keys('name', 'id');
    });
  });
  describe('EXCLUDE', () => {
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna null para empresa inexistente', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExclude = { affectedRows: 0 };
      Sinon.stub(empresaModel, 'exclude').resolves(resultExclude);

      const resultado = await empresaService.exclude(1);

      expect(resultado).to.be.null;
    });
    
    it('Retorna true para empresa excluida"', async function () {
      const resultExclude = { affectedRows: 1 };
      Sinon.stub(empresaModel, 'exclude').resolves(resultExclude);

      const resultado = await empresaService.exclude(1);

      expect(resultado).to.be.true;
    });
  });
});
