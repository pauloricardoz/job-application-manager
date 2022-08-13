const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');

const empresaModel = require('../../../models/empresaModel');

describe.only('MODEL EMPRESA', () => {
  describe('GET ALL', () => {
    describe('Caso OK', () => {
      afterEach(function () {
        Sinon.restore();
      });
      it('retorna array', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = [];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.getAll();

        expect(resultado).to.be.an('array');
      });
      it('retorna array vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = [];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.getAll();

        expect(resultado).to.be.empty;
      });
      it('Retorna array cheio', async function () {
        const resultExecute = [{ id: 1, name: 'teste' }];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.getAll();

        expect(resultado).to.be.not.empty;
      });
      it('Retorna array contenha objetos ', async function () {
        const resultExecute = [{ id: 1, name: 'teste' }];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const [resultado] = await empresaModel.getAll();

        expect(resultado).to.be.an('object');
        expect(resultado).to.all.keys('name', 'id');
      });
    });
  });
  describe.only('GET BY ID', () => {
    describe('Caso OK', () => {
      // before(()=>{
      //   const resultExecute = []
      //   Sinon.stub(connection, 'execute').resolves([resultExecute]);
      // })
      afterEach(function () {
        // connection.execute.restore();
        Sinon.restore();
      });
      it('retorna array', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = [];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.getAll();

        expect(resultado).to.be.an('array');
      });
      it('retorna array vazio', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = [];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.getAll();

        expect(resultado).to.be.empty;
      });
      it('Retorna array cheio', async function () {
        const resultExecute = [{ id: 1, name: 'teste' }];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.getAll();

        expect(resultado).to.be.not.empty;
      });
      it('Retorna array contenha objetos ', async function () {
        const resultExecute = [{ id: 1, name: 'teste' }];
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const [resultado] = await empresaModel.getAll();

        expect(resultado).to.be.an('object');
        expect(resultado).to.all.keys('name', 'id');
      });
    });
  });
});
