const intern = require('../lib/intern')
const internInfo = new intern('Ruby', 23, 'rf@gmail.com', 'SMU');
    test("intern name", () => {
      
      expect(internInfo.getName()).toEqual('Ruby')
    });
    test("intern ID", () => {
      // const internId = new intern(23); Why cant I use a single var here? Need to google why.
      expect(internInfo.getId()).toEqual(23)
    });
    test("intern email", () => {
      expect(internInfo.getEmail()).toEqual('rf@gmail.com')
    });
    test("intern school", () => {
      expect(internInfo.getSchool()).toEqual('SMU')
    });