const intern = require("../lib/intern");

test("set constructor", () => {
  const testValue = "GT";
  const e = new intern("Jill", 1, "email@testing.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "intern"', () => {
  const testValue = "intern";
  const e = new intern("Jill", 1, "email@testing.com", "GT");
  expect(e.getRole()).toBe(testValue);
});

test("getSchool()", () => {
  const testValue = "GT";
  const e = new intern("Jill", 1, "email@testing.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
