const stats = require("./stats");

describe("winLossRatio", () => {
  const { winLossRatio } = stats;

  test("does not include break-even trades", () => {
    const trades1 = [
      { profit: 22 },
      { profit: -25 },
      { profit: 6 },
      { profit: -10 },
    ];
    const trades2 = [
      { profit: 22 },
      { profit: -25 },
      { profit: 6 },
      { profit: -10 },
      { profit: 0 },
    ];

    expect(winLossRatio(trades1)).toEqual(winLossRatio(trades2));
  });

  test("calculates ratio of winning trades to losing trades", () => {
    const trades = [
      { profit: 22 },
      { profit: -25 },
      { profit: 6 },
      { profit: -10 },
      { profit: 5500 },
    ];
    expect(winLossRatio(trades)).toEqual(1.5);
  });

  test("greater than 1 if there are more winning trades", () => {
    const trades = [{ profit: 22 }, { profit: -25 }, { profit: 5500 }];
    expect(winLossRatio(trades)).toBeGreaterThan(1);
  });

  test("less than 1 if there are more losing trades", () => {
    const trades = [{ profit: 22 }, { profit: -25 }, { profit: -5500 }];
    expect(winLossRatio(trades)).toBeLessThan(1);
  });

  test("0 if there are no winning trades", () => {
    const trades = [{ profit: -12 }, { profit: -5000 }, { profit: -1 }];
    expect(winLossRatio(trades)).toEqual(0);
  });

  test("∞ if there are only winning trades", () => {
    const trades = [{ profit: 12 }, { profit: 5000 }, { profit: 1 }];
    expect(winLossRatio(trades)).toEqual(Infinity);
  });

  test("1 if there are equal number of winning and losing trades", () => {
    const trades = [
      { profit: -12 },
      { profit: 5 },
      { profit: -1 },
      { profit: 1000 },
      { profit: 0 },
    ];
    expect(winLossRatio(trades)).toEqual(1);
  });
});
