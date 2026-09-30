import { describe, it, expect } from 'vitest';
import stylelint from 'stylelint';
import config from '../index.js';

const invalidCode = `
.singlelineproperty1 {
  margin: 0; padding: 0;
}

.singlelineproperty1 { margin: 0; padding: 0; }
`;

describe('Single line per property', () => {
  it('should return warnings', () => stylelint
    .lint({
      code: invalidCode,
      config,
    })
    .then((output) => output.results[0].warnings)
    .then((warnings) => {
      expect(warnings).toHaveLength(6);
      expect(warnings[0].text).toBe('Expected newline before "}" (@stylistic/block-closing-brace-newline-before)');
      expect(warnings[1].text).toBe('Expected newline after "{" (@stylistic/block-opening-brace-newline-after)');
      expect(warnings[2].text).toBe('Unexpected whitespace before "{" of a single-line block (@stylistic/block-opening-brace-newline-before)');
      expect(warnings[3].text).toBe('Expected newline after ";" (@stylistic/declaration-block-semicolon-newline-after)');
      expect(warnings[4].text).toBe('Expected newline after ";" (@stylistic/declaration-block-semicolon-newline-after)');
      expect(warnings[5].text).toBe('Too many declarations, maximum 1 (declaration-block-single-line-max-declarations)');
    }));
});
