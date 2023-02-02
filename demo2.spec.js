const { checkUser } = require("./demo");

describe("Player management", () => {
  describe("Check user", () => {
    test("checks user", () => {
      alert = jest.fn();

      checkUser({ age: 3 });

      expect(alert).toHaveBeenCalled();
    });
  });
});
