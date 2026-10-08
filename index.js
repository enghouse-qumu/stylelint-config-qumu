import stylistic from '@stylistic/stylelint-plugin';
import orderPlugin from 'stylelint-order';
import scssPlugin from 'stylelint-scss';

import errors from './rules/errors.js';
import language from './rules/language.js';
import style from './rules/style.js';
import order from './rules/order.js';
import scss from './rules/scss.js';

export default {
  customSyntax: 'postcss-scss',
  plugins: [
    scssPlugin,
    orderPlugin,
    stylistic,
  ],
  rules: {
    ...errors.rules,
    ...language.rules,
    ...style.rules,
    ...order.rules,
    ...scss.rules,
  },
};
