const stats = require("./stats");

describe("RMultiple", () => {
  const { RMultiple } = stats;

  test("1 if we risked what we made", () => {
    const trade = {
      openPrice: 15000,
      closePrice: 15050,
      stopLoss: 14950,
    };

    expect(RMultiple(trade)).toEqual(1);
  });
  test("<1 if we made less than we risked", () => {
    const trade = {
      openPrice: 15000,
      closePrice: 15100,
      stopLoss: 14800,
    };

    expect(RMultiple(trade)).toEqual(0.5);
  });
  test(">1 if we made more than we risked", () => {
    const trade = {
      openPrice: 15000,
      closePrice: 15200,
      stopLoss: 14900,
    };

    expect(RMultiple(trade)).toEqual(2);
  });
  test("should work for fx-type figures", () => {
    const trade = {
      openPrice: 1.10636,
      closePrice: 1.10922,
      stopLoss: 1.10416,
    };

    expect(RMultiple(trade)).toEqual(1.3);
  });
});
