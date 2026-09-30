import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.hexvalidation {
  background: #ab;
}
`;

describe('Hex validation', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Invalid hex color "#ab" (color-no-invalid-hex)');
    }));
});
