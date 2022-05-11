const employee = require("./employee");
class Manager extends employee {
  constructor(name, id, email, officenNumber) {
    super(name, id, email);
    this.officenUmber = officenNumber;
  }

  getRole() {
    return "Manager";
  }

  gerOfficeNumber() {
    return this.officenNumber;
  }
}

module.exports = Manager;
