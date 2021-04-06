const { pad } = require('lodash');
const { table } = require('table');

const sanitizetokenName = c => c.toLowerCase();

const sortByValue = values => Object.entries(values).sort(
  ([, { USD: val1 }], [, { USD: val2 }]) => val2 - val1,
);

const filterObj = (obj, func) => Object.fromEntries(
  Object.entries(obj).filter(func),
);
const ignoreValueBelow = x => (([, value]) => value > x);

const toFixedDecimal = decimal => x => parseFloat(parseFloat(x).toFixed(decimal));
const toFixedDecimal1 = toFixedDecimal(1);
const toFixedDecimal2 = toFixedDecimal(2);

const printValues = values => {
  const total = values.find(([name]) => name === 'TOTAL')[1].USD;

  const res = values.map(val => {
    const [name, { count, USD, BTC }] = val;
    const ratio = toFixedDecimal1((USD * 100) / total);

    return [name, USD, ratio, BTC, count];
  });

  const headerCell = ['name', 'USD', 'ratio', 'BTC', 'count'];
  const output = table([headerCell, ...res]);

  console.log(output);
  // console.table(Object.fromEntries(res));
};

const printPortfolioNicely = res => {
  const MSG_LENGTH = 58;

  Object.entries(res).forEach(([name, values]) => {
    console.log('-'.repeat(MSG_LENGTH));
    console.log(`₿ ${pad(`${name} tokens `, MSG_LENGTH - 4)} ₿`);
    console.log('-'.repeat(MSG_LENGTH));

    printValues(values);
    console.log('');
  });
};

module.exports = {
  sanitizetokenName,
  filterObj,
  ignoreValueBelow,
  sortByValue,
  toFixedDecimal,
  toFixedDecimal2,
  printPortfolioNicely,
};
