import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
p:before {
  content: '>';
}

p::hover {
  color: #f00;
}
`;

describe('Pseudo element', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Expected double colon pseudo-element notation (selector-pseudo-element-colon-notation)');
      expect(warnings[1].text).toBe('Unknown pseudo-element selector "::hover" (selector-pseudo-element-no-unknown)');
    }));
});
