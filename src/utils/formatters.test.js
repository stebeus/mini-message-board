import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { formatToCamelCase } from './formatters.js';

describe('formatToCamelCase', () => {
  it('camel cases strings', () => {
    assert.equal(formatToCamelCase('Foo BaR 123'), 'fooBar123');
  });
});
