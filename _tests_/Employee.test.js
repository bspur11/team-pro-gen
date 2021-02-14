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
  expect(employee.id).toBe(testValue);
});


test('Checking for email', () => {
  const testValue = "test@test.com";
  const employee = new Employee('steve', 1, testValue);
  expect(employee.email).toBe(testValue);
});

test('gets role of employee', () => {
  const testValue = "Employee";
  const employee = new Employee('steve', 1, testValue);
  expect(employee.role).toBe(testValue);
});

test('getName', () => {
  const testValue = 'Dave';
  const employee =new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test('to getId', () => {
  const testValue = 50;
  const employee = new Employee('Dave', testValue);
  expect(employee.getId()).toBe(testValue);
});

test('to get the email', () => {
  const testValue = "test@test.com";
  const employee = new Employee('Dave', testValue);
  expect(employee.getId()).toBe(testValue);
});



