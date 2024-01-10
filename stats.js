function winLossRatio(trades) {
  let winners = 0,
    losers = 0,
    count = 0;

  trades.map((trade) => {
    if (trade.profit > 0) {
      winners++;
      count++;
    } else if (trade.profit < 0) {
      losers++;
      count++;
    }
  });

  return winners / losers;
}

// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
function roundTo2DecimalPlaces(x) {
  return Math.round((x + Number.EPSILON) * 100) / 100;
}

function RMultiple(trade) {
  const { openPrice, closePrice, stopLoss } = trade;

  const ret = (closePrice - openPrice) / (stopLoss - openPrice);

  
  return Math.abs(roundTo2DecimalPlaces(ret));
}

function targetRMultiple(trade) {
    const { openPrice, takeProfit, stopLoss } = trade;

    if (takeProfit == 0) return 0;

  const ret = (takeProfit - openPrice) / (stopLoss - openPrice);

  
  return Math.abs(roundTo2DecimalPlaces(ret));
}

module.exports = {
  winLossRatio,
  RMultiple,
};
