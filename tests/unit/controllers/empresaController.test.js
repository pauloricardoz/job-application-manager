const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const empresaService = require('../../../services/empresaService');
const empresaController = require('../../../controllers/empresaController');

describe('GET ALL', () => {
  describe('Caso OK', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('retorna array vazio', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const request = {};
      const response = {};

      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      const resultExecute = [];
      Sinon.stub(empresaService, 'getAll').resolves(resultExecute);

      await empresaController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith([])).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
    });
    it('Retorna json chamado com parametro obj', async () => {
      const request = {};
      const response = {};

      response.status = Sinon.stub().returns(response);
      response.json = Sinon.stub().returns();
      const resultExecute = null;
      Sinon.stub(empresaService, 'getAll').resolves(resultExecute);

      await empresaController.getAll(request, response);

      expect(response.status.calledWith(500)).to.be.equal(true);
      expect(response.status.calledOnce).to.be.true;
      console.log(response.json.args[0][0]);
      expect(response.json.args[0][0]).to.keys('message');
    });
    
  });
});
