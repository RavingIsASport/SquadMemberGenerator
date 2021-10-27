const Manager = require("../lib/Manager");

const managerInfo = new Manager('Janks', 1, 'janks@gmail.com', 2813308004);
    test("manager name", () => {
      
      expect(managerInfo.getName()).toEqual('Janks')
    });
    test("manager ID", () => {
      // const internId = new intern(23); Why cant I use a single var here? Need to google why.
      expect(managerInfo.getId()).toEqual(1)
    });
    test("manager Email", () => {
      expect(managerInfo.getEmail()).toEqual('janks@gmail.com')
    });
    test("manager Github", () => {
      expect(managerInfo.getOfficeNumber()).toEqual(2813308004)
    });