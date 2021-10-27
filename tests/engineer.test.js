const engineer = require('../lib/engineer');

const engineerInfo = new engineer('Bubba', 7, 'bubba@gmail.com', 'BubbaGit');
    test("engineer name", () => {
      
      expect(engineerInfo.getName()).toEqual('Bubba')
    });
    test("intern ID", () => {
      // const internId = new intern(23); Why cant I use a single var here? Need to google why.
      expect(engineerInfo.getId()).toEqual(7)
    });
    test("engineer Email", () => {
      expect(engineerInfo.getEmail()).toEqual('bubba@gmail.com')
    });
    test("engineer Github", () => {
      expect(engineerInfo.getGithub()).toEqual('BubbaGit')
    });