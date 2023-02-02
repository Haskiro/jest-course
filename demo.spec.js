const { joinParty, sum, checkUser } = require("./demo");

describe("Player management", () => {
  describe("Check user", () => {
    beforeAll(() => {
      //Arrange
      alert = jest.fn();
    });

    // beforeEach(() => {
    //   alert = jest.fn();
    // });

    // afterEach();
    // afterAll()

    test("alerts if user is under 18", () => {
      checkUser({ age: 3 }); //Act

      expect(alert).toHaveBeenCalled(); //Assert
    });

    test("does not alerts if user above 18", () => {
      checkUser({ age: 22 });

      expect(alert).not.toHaveBeenCalled();
    });
  });

  describe("joinParty", () => {
    test.each`
      a     | b    | result
      ${1}  | ${2} | ${3}
      ${-1} | ${1} | ${0}
    `("when a is $a and b is $b", ({ a, b, result }) => {
      expect(sum(a, b)).toBe(result);
    });

    test("Should move player to leaders shard", () => {
      const PLAYER1_SHARD_ID = 1;

      const player1 = { id: 1, shardId: PLAYER1_SHARD_ID };
      const player2 = { id: 2, shardId: 2 };

      joinParty({ leader: player1, player: player2 });

      expect(player2.shardId).toBe(PLAYER1_SHARD_ID);
    });
  });
});
