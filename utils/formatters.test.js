import assert from 'node:assert';
import { describe, it } from 'node:test';

import { toCamelCase } from './formatters.js';

describe('toCamelCase', () => {
  it('camel case strings', () => {
    assert.strictEqual(toCamelCase('Foo BaR', 'fooBar'));
  });
});
