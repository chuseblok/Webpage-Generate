const engineer = require("../lib/engineer");

test("Can set gitHUb", () => {
  const testValue = "gitHubAccount";
  const emp = new engineer("Jill", 1, "email@testing.com", testValue);
  expect(emp.github).toBe(testValue);
});

test('getRole() should return "engineer"', () => {
  const testValue = "engineer";
  const emp = new engineer("Jill", 1, "email@testing.com", "gitHubAccount");
  expect(emp.getRole()).toBe(testValue);
});

test("Can get gitHub()", () => {
  const testValue = "gitHubAccount";
  const emp = new engineer("Jill", 1, "email@testing.com", testValue);
  expect(emp.getGithub()).toBe(testValue);
});
