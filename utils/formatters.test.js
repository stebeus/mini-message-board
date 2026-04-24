import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { toCamelCase } from './formatters.js';

describe('toCamelCase', () => {
  it('camel case strings', () => {
    assert.equal(toCamelCase('Foo BaR 123'), 'fooBar123');
  });

  it('removes non-alphanumeric characters', () => {
    assert.equal(toCamelCase('Hello, world!'), 'helloWorld');
  });
});
