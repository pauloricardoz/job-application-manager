const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');

const habilidadesModel = require('../../../models/habilidadesModel');
const habilidadesService = require('../../../services/habilidadesService');

describe('SERVICE', () => {
  describe('GET ALL', () => {
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna array', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = [];
      Sinon.stub(habilidadesModel, 'getAll').resolves(resultExecute);

      const resultado = await habilidadesService.getAll();

      expect(resultado).to.be.an('array');
    });
    it('retorna array vazio', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = [];
      Sinon.stub(habilidadesModel, 'getAll').resolves(resultExecute);

      const resultado = await habilidadesService.getAll();

      expect(resultado).to.be.empty;
    });
    it('Retorna array cheio', async function () {
      const resultExecute = [{ name: 'teste skill', id: 99, level: 'iniciante' }];
      Sinon.stub(habilidadesModel, 'getAll').resolves(resultExecute);

      const resultado = await habilidadesService.getAll();

      expect(resultado).to.be.not.empty;
    });
    it('Retorna array contenha objetos com "name", "level" e "id"', async function () {
      const resultExecute = [{ name: 'teste skill', id: 99, level: 'iniciante' }];
      Sinon.stub(habilidadesModel, 'getAll').resolves(resultExecute);

      const [resultado] = await habilidadesService.getAll();

      expect(resultado).to.be.an('object');
      expect(resultado).to.all.keys('name', 'id', 'level');
    });
  });

  describe('GET BY ID', () => {
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna um objeto da habilidade', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = { name: 'teste skill', id: 99, level: 'iniciante' };
      Sinon.stub(habilidadesModel, 'getById').resolves(resultExecute);

      const resultado = await habilidadesService.getById();

      expect(resultado).to.be.an('object');
    });
    it('retorna objeto com "name", "level" e "id"', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = { name: 'teste skill', id: 99, level: 'iniciante' };
      Sinon.stub(habilidadesModel, 'getById').resolves(resultExecute);

      const resultado = await habilidadesService.getById();

      expect(resultado).to.keys('name', 'level', 'id');
    });
    it('Retorna undefined quando não achar o "id"', async function () {
      const resultExecute = undefined;
      Sinon.stub(habilidadesModel, 'getById').resolves(resultExecute);

      const resultado = await habilidadesService.getById();

      expect(resultado).to.be.undefined;
    });
  });

  describe('CREATE', () => {
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna um objeto da habilidade', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultGetAll = [];
      const resultCreate = { name: 'teste skill', id: 99, level: 'iniciante' };
      Sinon.stub(habilidadesModel, 'getAll').resolves(resultGetAll);
      Sinon.stub(habilidadesModel, 'create').resolves(resultCreate);

      const resultado = await habilidadesService.create({ 
        name: 'Teste Inc.', level: 'iniciante', 
      }); 

      expect(resultado).to.be.an('object');
    });
    it('retorna objeto com "name", "level" e "id"', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultGetAll = [];
      const resultCreate = { name: 'teste skill', id: 99, level: 'iniciante' };
      Sinon.stub(habilidadesModel, 'getAll').resolves(resultGetAll);
      Sinon.stub(habilidadesModel, 'create').resolves(resultCreate);
     
      const resultado = await habilidadesService.create({
        name: 'teste skill', level: 'iniciante', 
      });
     
      expect(resultado).to.keys('name', 'level', 'id');
    });
    it('Retorna null quando habilidade já existir"', async function () {
      const resultGetAll = [
        { name: 'teste skill 1', id: 99, level: 'iniciante' },
        { name: 'teste skill 2', id: 99, level: 'iniciante' },
      ];
      const resultCreate = { name: 'teste skill', id: 99, level: 'iniciante' };
      Sinon.stub(habilidadesModel, 'getAll').resolves(resultGetAll);
      Sinon.stub(habilidadesModel, 'create').resolves(resultCreate);

      const resultado = await habilidadesService.create({ 
        name: 'teste skill 1', level: 'iniciante', 
      });

      expect(resultado).to.be.null;
    });
  });

  describe('UPDATE', () => {
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna null para habilidade inexistente', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultGetById = undefined;
      Sinon.stub(habilidadesModel, 'getById').resolves(resultGetById);

      const resultado = await habilidadesService.update({ name: 'skill 1.', level: 'senior' });

      expect(resultado).to.be.null;
    });
    it('retorna null para nenhuma alteração realizada', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultGetById = { name: 'teste skill', id: 99, level: 'iniciante' };
      const resultUpdate = { affectedRows: 0 };
      Sinon.stub(habilidadesModel, 'getById').resolves(resultGetById);
      Sinon.stub(habilidadesModel, 'update').resolves(resultUpdate);
     
      const resultado = await habilidadesService.update({ 
        name: 'teste skill', id: 99, level: 'iniciante', 
      });
     
      expect(resultado).to.be.null;
    });
    it('Retorna objeto da habilidade que foi alterado"', async function () {
      const resultgetById = { name: 'teste skill', id: 99, level: 'iniciante' };
      const resultUpdate = { affectedRows: 1 };
      Sinon.stub(habilidadesModel, 'getById').resolves(resultgetById);
      Sinon.stub(habilidadesModel, 'update').resolves(resultUpdate);

      const resultado = await habilidadesService.update(
        { name: 'teste skill', id: 99, level: 'senior' },
      );

      expect(resultado).to.be.an('object');
    });
    it('Retorna objeto com novos dados contendo "name" e "id', async function () {
      const resultgetById = { name: 'teste skill', id: 99, level: 'iniciante' };
      const resultUpdate = { affectedRows: 1 };
      Sinon.stub(habilidadesModel, 'getById').resolves(resultgetById);
      Sinon.stub(habilidadesModel, 'update').resolves(resultUpdate);

      const resultado = await habilidadesService.update(
        { name: 'teste skill', id: 99, level: 'senior' },
      );

      expect(resultado).to.all.keys('name', 'level', 'id');
    });
  });
  describe('EXCLUDE', () => {
    afterEach(function () {
      Sinon.restore();
    });
    it('retorna null para habilidade inexistente', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExclude = { affectedRows: 0 };
      Sinon.stub(habilidadesModel, 'exclude').resolves(resultExclude);

      const resultado = await habilidadesService.exclude(1);

      expect(resultado).to.be.null;
    });
    
    it('Retorna true para habilidade excluida"', async function () {
      const resultExclude = { affectedRows: 1 };
      Sinon.stub(habilidadesModel, 'exclude').resolves(resultExclude);

      const resultado = await habilidadesService.exclude(1);

      expect(resultado).to.be.true;
    });
  });
});
