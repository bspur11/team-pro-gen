const {
  test,
  expect
} = require('@jest/globals');


const Engineer = require("../lib/engineer");

test('Set github account', () => {
  const testValue = "GitHubUser";
  const engineer = new Engineer('Dave', 1, "test@test.com", testValue);
  expect(engineer.github).toBe(testValue)
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const engineer = new Engineer('Dave', 1, "test@test.com", "GitHubUser");
  expect(engineer.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer('Dave', 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});