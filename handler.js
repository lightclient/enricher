'use strict';

const funFacts = require('./fixtures/FunFacts.json');

const numberToPercentConverter = (number, decimals=2, suffix='%') => {
    return `${(number * 100).toFixed(decimals)}${suffix}`
}

module.exports.numberToPercent = async (event, context) => {
  const body = JSON.parse(event.body)

  return {
    statusCode: 200,
    body: JSON.stringify({
      percent: numberToPercentConverter(body.number, body.decimals, body.suffix),
    }),
  }
}

module.exports.funFacts = async (event, context) => {
  const query = event.queryStringParameters

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: funFacts[query.id]
    }),
  }
}
