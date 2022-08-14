const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
require('dotenv/config');

const testErrors = process.env.TEST_ERRORS === 'true';

const habilidadesService = require('../../../services/habilidadesService');
const habilidadesController = require('../../../controllers/habilidadesController');
const testMyController = require('../helper/controllerTester');

describe('CONTROLLER HABILIDADES', () => {
  describe('GET ALL outra forma de testar', () => {
    describe('Caso OK com BD vazio', () => {
      beforeEach(async function () {
        const resultExecute = [];
        Sinon.stub(habilidadesService, 'getAll').resolves(resultExecute);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getAll);
        expect(result.status).to.be.equal(200);
      });
      it('retorna json com array vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getAll);
        expect(result.body).to.be.deep.equal([]);
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getAll);
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getAll);
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('Caso OK com BD com dados', () => {
      beforeEach(async function () {
        const resultExecute = [{ name: 'teste skill', id: 99, level: 'iniciante' }];
        Sinon.stub(habilidadesService, 'getAll').resolves(resultExecute);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getAll);
        expect(resposta.status).to.be.equal(200);
      });
      it('retorna json com array de habilidades', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getAll);
        expect(resposta.body).to.be.deep.equal([
          { name: 'teste skill', id: 99, level: 'iniciante' },
        ]); 
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getAll);
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getAll);
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('BD lança erro', () => {
      if (testErrors) return null;
      beforeEach(async function () {
        Sinon.stub(habilidadesService, 'getAll').throws(new Error('Erro do teste'));
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getAll);
        expect(resposta.status).to.be.equal(500);
      });
      it('retorna json com objeto com mensagem de erro', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getAll);
        expect(resposta.body).to.be.deep.equal({ message: 'Algo deu errado' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getAll);
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getAll);
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
  });

  describe('GET BY ID outra forma de testar', () => {
    describe('Caso OK com BD vazio', () => {
      const req = { params: { id: '1' } };
      beforeEach(async function () {
        const resultExecute = {};
        Sinon.stub(habilidadesService, 'getById').resolves(resultExecute);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getById, { ...req });
        expect(result.status).to.be.equal(200);
      });
      it('retorna json com objeto vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getById, { ...req });
        expect(result.body).to.be.deep.equal({});
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getById, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getById, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('Caso OK com BD com dados', () => {
      const req = { params: { id: '1' } };
      beforeEach(async function () {
        const resultExecute = { name: 'teste skill', id: 99, level: 'iniciante' };
        Sinon.stub(habilidadesService, 'getById').resolves(resultExecute);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getById, { ...req });
        expect(result.status).to.be.equal(200);
      });
      it('retorna json com objeto de habilidade', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getById, { ...req });
        expect(result.body).to.be.deep.equal({ name: 'teste skill', id: 99, level: 'iniciante' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getById, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.getById, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('BD lança erro', () => {
      if (testErrors) return null;
      beforeEach(async function () {
        Sinon.stub(habilidadesService, 'getById').throws(new Error('Erro do teste'));
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 500', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getById);
        expect(resposta.status).to.be.equal(500);
      });
      it('retorna json com objeto com mensagem de erro', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getById);
        expect(resposta.body).to.be.deep.equal({ message: 'Algo deu errado' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getById);
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.getById);
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
  });

  describe('CREATE outra forma de testar', () => {
    describe('Caso empresa não exista no BD', () => {
      const req = { body: { name: 'teste skill', level: 'iniciante' } };
      beforeEach(async function () {
        const resultExecute = { id: 1, name: 'teste skill', level: 'iniciante' };
        Sinon.stub(habilidadesService, 'create').resolves(resultExecute);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 201', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.create, { ...req });
        expect(result.status).to.be.equal(201);
      });
      it('retorna json com objeto criado', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.create, { ...req });
        expect(result.body).to.be.deep.equal({ id: 1, name: 'teste skill', level: 'iniciante' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.create, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.create, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('Caso empresa EXISTA no BD', () => {
      const req = { body: { name: 'teste skill', level: 'iniciante' } };
      beforeEach(async function () {
        Sinon.stub(habilidadesService, 'create').resolves(null);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 400', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.create, { ...req });
        expect(result.status).to.be.equal(400);
      });
      it('retorna json com objeto vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.create, { ...req });
        expect(result.body).to.be.deep.equal({ message: 'Empresa já existe' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.create, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.create, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('BD lança erro', () => {
      if (testErrors) return null;

      const req = { body: { name: 'Test Inc.' } };
      beforeEach(async function () {
        Sinon.stub(habilidadesService, 'create').throws(new Error('Erro do teste'));
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 500', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.create, { ...req });
        expect(resposta.status).to.be.equal(500);
      });
      it('retorna json com objeto com mensagem de erro', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.create, { ...req });
        expect(resposta.body).to.be.deep.equal({ message: 'Algo deu errado' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.create, { ...req });
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.create, { ...req });
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
  });

  describe('UPDATE outra forma de testar', () => {
    describe('Caso empresa não exista no BD', () => {
      const req = { body: { name: 'teste skill', level: 'iniciante' }, params: { id: '1' } };
      beforeEach(async function () {
        const resultUpdate = null;
        Sinon.stub(habilidadesService, 'update').resolves(resultUpdate);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 400', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.update, { ...req });
        expect(result.status).to.be.equal(400);
      });
      it('retorna json com objeto criado', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.update, { ...req });
        expect(result.body).to.be.deep.equal({ message: 'Operação não foi completada' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.update, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.update, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('Caso empresa EXISTA no BD', () => {
      const req = { body: { name: 'teste skill', level: 'iniciante' }, params: { id: '1' } };
      beforeEach(async function () {
        const resultService = { id: 1, name: 'teste skill', level: 'iniciante' };
        Sinon.stub(habilidadesService, 'update').resolves(resultService);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 200', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.update, { ...req });
        expect(result.status).to.be.equal(200);
      });
      it('retorna json com objeto da habilidade', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.update, { ...req });
        expect(result.body).to.be.deep.equal({ id: 1, name: 'teste skill', level: 'iniciante' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.update, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.update, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('BD lança erro', () => {
      if (testErrors) return null;

      const req = { body: { name: 'Test Inc.' }, params: { id: '1' } };
      beforeEach(async function () {
        Sinon.stub(habilidadesService, 'update').throws(new Error('Erro do teste'));
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 500', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.update, { ...req });
        expect(resposta.status).to.be.equal(500);
      });
      it('retorna json com objeto com mensagem de erro', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.update, { ...req });
        expect(resposta.body).to.be.deep.equal({ message: 'Algo deu errado' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.update, { ...req });
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.update, { ...req });
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
  });

  describe('Exclude outra forma de testar', () => {
    describe('Caso empresa não exista no BD', () => {
      const req = { params: { id: '1' } };
      beforeEach(async function () {
        const resultUpdate = null;
        Sinon.stub(habilidadesService, 'exclude').resolves(resultUpdate);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 404', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.exclude, { ...req });
        expect(result.status).to.be.equal(404);
      });
      it('retorna json com objeto criado', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.exclude, { ...req });
        expect(result.body).to.be.deep.equal({ message: 'Nenhuma linha afetada' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.exclude, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.exclude, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('Caso empresa EXISTA no BD', () => {
      const req = { params: { id: '1' } };
      beforeEach(async function () {
        const resultService = true;
        Sinon.stub(habilidadesService, 'exclude').resolves(resultService);
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 204', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.exclude, { ...req });
        expect(result.status).to.be.equal(204);
      });
      it('retorna json com undefined', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.exclude, { ...req });
        expect(result.body).to.be.deep.equal(undefined);
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.exclude, { ...req });
        expect(result.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const result = await testMyController(habilidadesController.exclude, { ...req });
        expect(result.spies.json.calledOnce).to.be.equal(true);
      });
    });
    describe('BD lança erro', () => {
      if (testErrors) return null;

      const req = { body: { name: 'Test Inc.' }, params: { id: '1' } };
      beforeEach(async function () {
        Sinon.stub(habilidadesService, 'exclude').throws(new Error('Erro do teste'));
      });
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna status 500', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.exclude, { ...req });
        expect(resposta.status).to.be.equal(500);
      });
      it('retorna json com objeto com mensagem de erro', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.exclude, { ...req });
        expect(resposta.body).to.be.deep.equal({ message: 'Algo deu errado' });
      });
      it('status chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.exclude, { ...req });
        expect(resposta.spies.status.calledOnce).to.be.equal(true);
      });
      it('json chamado uma unica vez', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resposta = await testMyController(habilidadesController.exclude, { ...req });
        expect(resposta.spies.json.calledOnce).to.be.equal(true);
      });
    });
  });
});
