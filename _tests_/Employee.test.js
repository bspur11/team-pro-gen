// const {
//   tsMethodSignature,
//   tsExternalModuleReference
// } = require('@babel/types');
const {
  test,
  expect
} = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('Bill');
  expect(employee.name).toBe('Bill');

});

test('Checking for the id', () => {
  const testValue = 50;
  const employee = new Employee('steve', testValue);
  expect(employee.id).tobe(testValue);
});

