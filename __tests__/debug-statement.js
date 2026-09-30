import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
$color-blue: #1c94c6;

.debug {
  @debug $color-blue;
}
`;

describe('Debug statement scss', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
      syntax: 'scss',
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(1);
      expect(warnings[0].text).toBe('Disallowed at-rule "@debug" (at-rule-disallowed-list)');
    }));
});
