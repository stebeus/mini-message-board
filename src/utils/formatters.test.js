import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import {
  formatDate,
  formatToCamelCase,
  formatToKebabCase,
} from './formatters.js';

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

describe('formatDate', () => {
  it('rejects non-Date object inputs', () => {
    assert.throws(formatDate, {
      message:
        'Expected undefined to be an instance of Date, received undefined',
    });
  });

  it('formats dates numerically in the en-US locale by default', () => {
    // Arrange
    const date = new Date(2000, 1, 1);

    // Act
    const formattedDate = formatDate(date);

    // Assert
    assert.equal(formattedDate, '2/1/2000, 12:00:00 AM');
  });

  it('formats dates based on options', () => {
    // Arrange
    const date = new Date(2000, 0, 1);

    // Act
    const formattedDate = formatDate(date, 'en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });

    // Assert
    assert.equal(formattedDate, '01 January 2000');
  });
});

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
