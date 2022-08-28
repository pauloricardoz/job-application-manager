const Sinon = require('sinon');

const BASIC_REQ = {
  body: undefined,
  params: {},
  headers: {},
};

const testMyController = async (controller, request = BASIC_REQ) => {
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

module.exports = testMyController;