import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.one .two .three > .four {
  color: #f00;
}

.one .two {
  .three > .four {
    color: #f00;
  }
}
`;

describe('Selector depth scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Too many compound selectors in ".one .two .three > .four", maximum 3 (selector-max-compound-selectors)');
    }));
});
