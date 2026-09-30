import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.property-spelling {
  diplay: none;
  heigth: 100%;
}
`;

describe('Property spelling scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(2);
      expect(warnings[0].text).toBe('Unknown property "diplay" (property-no-unknown)');
      expect(warnings[1].text).toBe('Unknown property "heigth" (property-no-unknown)');
    }));
});
