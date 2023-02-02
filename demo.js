module.exports = {
  joinParty({ leader, player }) {
    player.shardId = leader.shardId;

    // leader.shardId = player.shardId;
  },

  sum(a, b) {
    return a + b;
  },

  checkUser(user) {
    if (user.age < 18) {
      alert("Вам еще рано этим заниматься");
    }
  },
};
