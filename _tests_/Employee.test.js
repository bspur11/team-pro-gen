const { tsMethodSignature, tsExternalModuleReference } = require('@babel/types');
const { test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
  const employee = new Employee('Dave');

  expect(employee.name).toBe('Dave');
 
});