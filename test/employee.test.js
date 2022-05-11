const employee = require("../lib/employee");

test("instantiate", () => {
  const emp = new employee();
  expect(typeof emp).toBe("object");
});

test("constructor argument", () => {
  const name = "Barley";
  const emp = new employee(name);
  expect(emp.name).toBe(name);
});

test("constructor argument", () => {
  const testValue = 100;
  const emp = new employee("Jill", testValue);
  expect(emp.id).toBe(testvalue);
});

test("constructor argument", () => {
  const testValue = "email@testing.com";
  const emp = new employee("Jill", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("getName()", () => {
  const testValue = "Barley";
  const emp = new employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("getId()", () => {
  const testValue = 100;
  const emp = new employee("Jill", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("getEmail()", () => {
  const testValue = "email@testing.com";
  const emp = new employee("Jill", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test('getRole() should return "employee"', () => {
  const testValue = "employee";
  const emp = new employee("Barley", 1, "email@testing.com");
  expect(emp.getRole()).toBe(testValue);
});
