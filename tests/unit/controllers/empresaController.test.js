const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const empresaService = require('../../../services/empresaService');
const empresaController = require('../../../controllers/empresaController');

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

describe('GET ALL outra forma de testar', () => {
  const testMyController = async (controller, request = {}) => {
    const result = {
      body: undefined,
      status: undefined,
    };

    const response = {
      json: (obj) => {
        result.body = obj;
        return null; 
        },
      status: (num) => {
      result.status = num; 
      return response; 
      },
    };

    const spyJson = Sinon.spy(response, 'json');
    const spyStatus = Sinon.spy(response, 'status');
    await controller(request, response);
    return { ...result, spies: { json: spyJson, status: spyStatus } };
  };
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
});