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
  const Employee = new Employee('Bill');
  expect(Employee.name).toBe('Bill');

});

test('Checking for the id', () => {
  const testValue = 50;
  const Employee = new Employee('steve', testValue);
  expect(Employee.id).tobe(testValue);
});

