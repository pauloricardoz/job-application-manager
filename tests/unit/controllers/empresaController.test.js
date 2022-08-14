const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
require('dotenv/config');

const testErrors = process.env.TEST_ERRORS === 'true';

const empresaService = require('../../../services/empresaService');
const empresaController = require('../../../controllers/empresaController');
const testMyController = require('../helper/controllerTester');
/*
describe('GET ALL', () => {
  describe('Caso OK com BD vazio', () => {
    let request = {};
    let response = {};
    beforeEach(async function () {
      request = {};
      response = {};
  
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      const resultExecute = [];
      Sinon.stub(empresaService, 'getAll').resolves(resultExecute);
  
      await empresaController.getAll(request, response);
    });
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna status 200', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('retorna status json com array vazio', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      expect(response.json.calledWith([])).to.be.equal(true);
    });
    it('status chamado uma unica vez', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      expect(response.status.calledOnce).to.be.true;
    });
    it('json chamado uma unica vez', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      expect(response.json.calledOnce).to.be.true;
    });
  });
  describe('Caso OK com BD com dados', () => {
    let request = {};
    let response = {};
    beforeEach(async function () {
      request = {};
      response = {};
  
      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      const resultExecute = [{ name: 'teste Inc.', id: 99 }];
      Sinon.stub(empresaService, 'getAll').resolves(resultExecute);
  
      await empresaController.getAll(request, response);
    });
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna status 200', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    it('retorna status json com array vazio', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      expect(response.json.calledWith([{ name: 'teste Inc.', id: 99 }]))
        .to.be.equal(true);
    });
    it('status chamado uma unica vez', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      expect(response.status.calledOnce).to.be.true;
    });
    it('json chamado uma unica vez', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      expect(response.json.calledOnce).to.be.true;
    });
  });
});
*/
describe('CONTROLLER', () => {
  describe('GET ALL outra forma de testar', () => {
    describe('Caso OK com BD vazio', () => {
      beforeEach(async function () {
        const resultExecute = [];
        Sinon.stub(empresaService, 'getAll').resolves(resultExecute);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getAll);
        expect(result.status).to.be.equal(200);
      });
      it('retorna status json com array vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getAll);
        expect(result.body).to.be.deep.equal([]);
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getAll);
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getAll);
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('Caso OK com BD com dados', () => {
      beforeEach(async function () {
        const resultExecute = [{ name: 'teste Inc.', id: 99 }];
        Sinon.stub(empresaService, 'getAll').resolves(resultExecute);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getAll);
        expect(resposta.status).to.be.equal(200);
      });
      it('retorna status json com array vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getAll);
        expect(resposta.body).to.be.deep.equal([{ name: 'teste Inc.', id: 99 }]);
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getAll);
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getAll);
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('BD lança erro', () => {
      if (testErrors) return null;
      beforeEach(async function () {
        Sinon.stub(empresaService, 'getAll').throws(new Error('Erro do teste'));
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getAll);
        expect(resposta.status).to.be.equal(500);
      });
      it('retorna json com objeto com mensagem de erro', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getAll);
        expect(resposta.body).to.be.deep.equal({ message: 'Algo deu errado' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getAll);
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getAll);
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
  });

  describe('GET BY ID outra forma de testar', () => {
    describe('Caso OK com BD vazio', () => {
      const req = { params: { id: '1' } };
      beforeEach(async function () {
        const resultExecute = {};
        Sinon.stub(empresaService, 'getById').resolves(resultExecute);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getById, { ...req });
        expect(result.status).to.be.equal(200);
      });
      it('retorna status json com array vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getById, { ...req });
        expect(result.body).to.be.deep.equal({});
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getById, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getById, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('Caso OK com BD com dados', () => {
      const req = { params: { id: '1' } };
      beforeEach(async function () {
        const resultExecute = { name: 'teste Inc.', id: 99 };
        Sinon.stub(empresaService, 'getById').resolves(resultExecute);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getById, { ...req });
        expect(result.status).to.be.equal(200);
      });
      it('retorna status json com array vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getById, { ...req });
        expect(result.body).to.be.deep.equal({ name: 'teste Inc.', id: 99 });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getById, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.getById, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('BD lança erro', () => {
      if (testErrors) return null;
      beforeEach(async function () {
        Sinon.stub(empresaService, 'getAll').throws(new Error('Erro do teste'));
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 500', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getById);
        expect(resposta.status).to.be.equal(500);
      });
      it('retorna json com objeto com mensagem de erro', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getById);
        expect(resposta.body).to.be.deep.equal({ message: 'Algo deu errado' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getById);
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.getById);
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
  });

  describe('CREATE outra forma de testar', () => {
    describe('Caso empresa não exista no BD', () => {
      const req = { body: { name: 'Test Inc.' } };
      beforeEach(async function () {
        const resultExecute = { id: 1, name: 'Test Inc.' };
        Sinon.stub(empresaService, 'create').resolves(resultExecute);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 201', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.create, { ...req });
        expect(result.status).to.be.equal(201);
      });
      it('retorna json com objeto criado', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.create, { ...req });
        expect(result.body).to.be.deep.equal({ id: 1, name: 'Test Inc.' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.create, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.create, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('Caso empresa EXISTA no BD', () => {
      const req = { body: { name: 'Test Inc.' } };
      beforeEach(async function () {
        Sinon.stub(empresaService, 'create').resolves(null);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 400', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.create, { ...req });
        expect(result.status).to.be.equal(400);
      });
      it('retorna status json com array vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.create, { ...req });
        expect(result.body).to.be.deep.equal({ message: 'Empresa já existe' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.create, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.create, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('BD lança erro', () => {
      if (testErrors) return null;

      const req = { body: { name: 'Test Inc.' } };
      beforeEach(async function () {
        Sinon.stub(empresaService, 'create').throws(new Error('Erro do teste'));
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 500', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.create, { ...req });
        expect(resposta.status).to.be.equal(500);
      });
      it('retorna json com objeto com mensagem de erro', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.create, { ...req });
        expect(resposta.body).to.be.deep.equal({ message: 'Algo deu errado' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.create, { ...req });
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.create, { ...req });
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
  });

  describe('UPDATE outra forma de testar', () => {
    describe('Caso empresa não exista no BD', () => {
      const req = { body: { name: 'Test Inc.' }, params: { id: '1' } };
      beforeEach(async function () {
        const resultUpdate = null;
        Sinon.stub(empresaService, 'update').resolves(resultUpdate);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 400', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.update, { ...req });
        expect(result.status).to.be.equal(400);
      });
      it('retorna json com objeto criado', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.update, { ...req });
        expect(result.body).to.be.deep.equal({ message: 'Operação não foi completada' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.update, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.update, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('Caso empresa EXISTA no BD', () => {
      const req = { body: { name: 'Test Inc.' }, params: { id: '1' } };
      beforeEach(async function () {
        const resultService = { name: 'Test Inc.', id: 1 };
        Sinon.stub(empresaService, 'update').resolves(resultService);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.update, { ...req });
        expect(result.status).to.be.equal(200);
      });
      it('retorna status json com array vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.update, { ...req });
        expect(result.body).to.be.deep.equal({ name: 'Test Inc.', id: 1 });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.update, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.update, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('BD lança erro', () => {
      if (testErrors) return null;

      const req = { body: { name: 'Test Inc.' }, params: { id: '1' } };
      beforeEach(async function () {
        Sinon.stub(empresaService, 'update').throws(new Error('Erro do teste'));
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 500', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.update, { ...req });
        expect(resposta.status).to.be.equal(500);
      });
      it('retorna json com objeto com mensagem de erro', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.update, { ...req });
        expect(resposta.body).to.be.deep.equal({ message: 'Algo deu errado' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.update, { ...req });
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.update, { ...req });
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
  });

  describe('Exclude outra forma de testar', () => {
    describe('Caso empresa não exista no BD', () => {
      const req = { body: { name: 'Test Inc.' }, params: { id: '1' } };
      beforeEach(async function () {
        const resultUpdate = null;
        Sinon.stub(empresaService, 'exclude').resolves(resultUpdate);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 404', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.exclude, { ...req });
        expect(result.status).to.be.equal(404);
      });
      it('retorna json com objeto criado', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.exclude, { ...req });
        expect(result.body).to.be.deep.equal({ message: 'Nenhuma linha afetada' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.exclude, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.exclude, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('Caso empresa EXISTA no BD', () => {
      const req = { body: { name: 'Test Inc.' }, params: { id: '1' } };
      beforeEach(async function () {
        const resultService = true;
        Sinon.stub(empresaService, 'exclude').resolves(resultService);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 204', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.exclude, { ...req });
        expect(result.status).to.be.equal(204);
      });
      it('retorna status json com undefined', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.exclude, { ...req });
        expect(result.body).to.be.deep.equal(undefined);
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.exclude, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(empresaController.exclude, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('BD lança erro', () => {
      if (testErrors) return null;

      const req = { body: { name: 'Test Inc.' }, params: { id: '1' } };
      beforeEach(async function () {
        Sinon.stub(empresaService, 'exclude').throws(new Error('Erro do teste'));
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 500', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.exclude, { ...req });
        expect(resposta.status).to.be.equal(500);
      });
      it('retorna json com objeto com mensagem de erro', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.exclude, { ...req });
        expect(resposta.body).to.be.deep.equal({ message: 'Algo deu errado' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.exclude, { ...req });
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(empresaController.exclude, { ...req });
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
  });
});
