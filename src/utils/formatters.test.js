import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { formatToCamelCase, formatToKebabCase } from './formatters.js';

describe('formatToCamelCase', () => {
  it('parses inputs to strings', () => {
    const string = formatToCamelCase(null);
    assert.equal(string, 'null');
  });

  it('removes non-alphanumeric characters', () => {
    const string = formatToCamelCase('Hello, world!');
    assert.equal(string, 'helloWorld');
  });

  it('camel cases strings', () => {
    const string = formatToCamelCase('John Do_e-123 ');
    assert.equal(string, 'johnDoe123');
  });
});

describe('formatDate', () => {});

describe('formatToKebabCase', () => {
  it('parses inputs to strings', () => {
    const string = formatToKebabCase(null);
    assert.equal(string, 'null');
  });

  it('removes non-alphanumeric characters', () => {
    const string = formatToKebabCase('Hello, world!');
    assert.equal(string, 'hello-world');
  });

  it('kebab cases strings', () => {
    const string = formatToKebabCase('John Do_e-123 ');
    assert.equal(string, 'john-doe-123');
  });
});
