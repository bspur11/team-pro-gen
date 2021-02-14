const {
  test,
  expect
} = require('@jest/globals');

const Intern = require("../lib/intern.js");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const intern = new Intern("Joe", 1, "test@test.com", testValue);
  expect(intern.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const intern = new Intern("Joe", 1, "test@test.com", "UCLA");
  expect(intern.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
