import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.colorkeyword {
  color: green;
}
`;

describe('Color keyword', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Disallowed named color "green" (color-named)');
    }));
});
