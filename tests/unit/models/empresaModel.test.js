const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');

const empresaModel = require('../../../models/empresaModel');

describe('MODEL EMPRESA', () => {
  describe('GET ALL', () => {
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
  describe('GET BY ID', () => {
    // before(()=>{
    //   const resultExecute = []
    //   Sinon.stub(connection, 'execute').resolves([resultExecute]);
    // })
    afterEach(function () {
      // connection.execute.restore();
      Sinon.restore();
    });
    it('retorna undefined', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = [];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);

      const resultado = await empresaModel.getById();

      expect(resultado).to.be.equal(undefined);
    });
  
    it('Retorna um objeto', async function () {
      const resultExecute = [{ id: 1, name: 'teste' }];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);

      const resultado = await empresaModel.getById();

      expect(resultado).to.be.an('object');
    });
    it('Retorna objetos que contenha "id" e "name"', async function () {
      const resultExecute = [{ id: 1, name: 'teste' }];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);

      const resultado = await empresaModel.getById(1);

      expect(resultado).to.be.an('object');
      expect(resultado).to.all.keys('name', 'id');
    });
  });
  describe('CREATE', () => {
    // before(()=>{
    //   const resultExecute = []
    //   Sinon.stub(connection, 'execute').resolves([resultExecute]);
    // })
    afterEach(function () {
      // connection.execute.restore();
      Sinon.restore();
    });
    it('retorna objeto', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = { insertId: 1 };
      Sinon.stub(connection, 'execute').resolves([resultExecute]);

      const resultado = await empresaModel.create({ name: 'tester' });

      expect(resultado).to.be.an('object');
    });
  
    it('retorna objeto with "id" and "name"', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = { insertId: 1 };
      Sinon.stub(connection, 'execute').resolves([resultExecute]);

      const resultado = await empresaModel.create({ name: 'tester' });

      expect(resultado).to.be.deep.equal({ name: 'tester', id: 1 });
    });
  });
  describe('UPDATE', () => {
    describe('Caso OK', () => {
      // before(()=>{
      //   const resultExecute = []
      //   Sinon.stub(connection, 'execute').resolves([resultExecute]);
      // })
      afterEach(function () {
        // connection.execute.restore();
        Sinon.restore();
      });
      it('retorna objeto', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = { affectedRows: 1 };
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.update({ name: 'tester' });

        expect(resultado).to.be.an('object');
      });
  
      it('retorna objeto with "id" and "name"', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = { affectedRows: 1 };
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.update({ name: 'tester' });

        expect(resultado).to.keys('affectedRows');
      });
    });
    describe('Caso Falha', () => {
      // before(()=>{
      //   const resultExecute = []
      //   Sinon.stub(connection, 'execute').resolves([resultExecute]);
      // })
      afterEach(function () {
        // connection.execute.restore();
        Sinon.restore();
      });
      it('retorna objeto', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = { affectedRows: 0 };
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.update({ name: 'tester' });

        expect(resultado).to.be.an('object');
      });
  
      it('retorna objeto with "id" and "name"', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = { affectedRows: 0 };
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.update({ name: 'tester' });

        expect(resultado).to.keys('affectedRows');
      });
    });
  });
  describe('EXCLUDE', () => {
    describe('Caso OK', () => {
      // before(()=>{
      //   const resultExecute = []
      //   Sinon.stub(connection, 'execute').resolves([resultExecute]);
      // })
      afterEach(function () {
        // connection.execute.restore();
        Sinon.restore();
      });
      it('retorna objeto', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = { affectedRows: 1 };
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.exclude({ name: 'tester' });

        expect(resultado).to.be.an('object');
      });
  
      it('retorna objeto with "id" and "name"', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = { affectedRows: 1 };
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.exclude({ name: 'tester' });

        expect(resultado).to.keys('affectedRows');
      });
    });
    describe('Caso Falha', () => {
      // before(()=>{
      //   const resultExecute = []
      //   Sinon.stub(connection, 'execute').resolves([resultExecute]);
      // })
      afterEach(function () {
        // connection.execute.restore();
        Sinon.restore();
      });
      it('retorna objeto', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = { affectedRows: 0 };
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.exclude({ name: 'tester' });

        expect(resultado).to.be.an('object');
      });
  
      it('retorna objeto with "id" and "name"', async function () {
        // AAA - ARRANGE - ACT - ASSERT
        const resultExecute = { affectedRows: 0 };
        Sinon.stub(connection, 'execute').resolves([resultExecute]);

        const resultado = await empresaModel.exclude({ name: 'tester' });

        expect(resultado).to.keys('affectedRows');
      });
    });
  });
});
