const manager = require("../lib/manager");
const employee = require("../lib/employee");

test("constructor argument", () => {
  const testValue = 100;
  const emp = new manager("Jill", 1, "email@testing.com", testValue);
  expect(emp.officeNumber).toBe(testValue);
});

test('getRole() should return "manager"', () => {
  const testValue = "manager";
  const emp = new manager("Jill", 1, "email@testing.com", 100);
  expect(emp.getRole()).toBe(testValue);
});

test("getOffice()", () => {
  const testValue = 100;
  const emp = new manager("Jill", 1, "email@testing.com", testValue);
  expect(emp.getOfficeNumber()).toBe(testValue);
});
