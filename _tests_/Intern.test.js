const {
  test,
  expect
} = require('@jest/globals');

const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const Intern = new Intern("Joe", 1, "test@test.com", testValue);
  expect(Intern.school).toBe(testValue);
});