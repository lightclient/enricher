'use strict';

const numberToPercentConverter = (number, decimals=2) => {
    return (number * 100).toFixed(decimals);
}

module.exports.numberToPercent = async (event, context) => {
  const body = JSON.parse(event.body)

  return {
    statusCode: 200,
    body: JSON.stringify({
      percent: numberToPercentConverter(body.number, body.decimals),
    }),
  }
}
