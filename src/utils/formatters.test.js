import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { formatToCamelCase, formatToKebabCase } from './formatters.js';

describe('formatToCamelCase', () => {
  it('camel cases strings', () => {
    assert.equal(formatToCamelCase('Foo BaR 123'), 'fooBar123');
  });

  it('removes non-alphanumeric characters', () => {
    assert.equal(formatToCamelCase('Hello, world!'), 'helloWorld');
  });

  it('preserves underscores', () => {
    assert.equal(formatToCamelCase('John_Doe'), 'john_doe');
  });
});

describe('formatToKebabCase', () => {
  it('kebab cases strings', () => {
    assert.equal(formatToKebabCase('Foo BaR_123'), 'foo-bar-123');
  });

  it('removes non-alphanumeric characters', () => {
    assert.equal(formatToKebabCase('Hello, world!'), 'hello-world');
  });
});
