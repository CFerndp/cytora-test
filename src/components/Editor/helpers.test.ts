import { expect, test, describe } from 'vitest';
import { getLanguageBasedOnFileExtension } from '@/components/Editor/helpers';

describe('Given a file path', () => {
  describe('When calling getLanguageBasedOnFileExtension', () => {
    test('Then it should return the correct language for a JavaScript file', () => {
      const filePath = 'path/to/file.js';
      const result = getLanguageBasedOnFileExtension(filePath);
      expect(result).toBe('javascript');
    });

    test('Then it should return the correct language for a TypeScript file', () => {
      const filePath = 'path/to/file.ts';
      const result = getLanguageBasedOnFileExtension(filePath);
      expect(result).toBe('typescript');
    });

    test('Then it should return the correct language for an HTML file', () => {
      const filePath = 'path/to/file.html';
      const result = getLanguageBasedOnFileExtension(filePath);
      expect(result).toBe('html');
    });

    test('Then it should return the correct language for a CSS file', () => {
      const filePath = 'path/to/file.css';
      const result = getLanguageBasedOnFileExtension(filePath);
      expect(result).toBe('css');
    });

    test('Then it should return the correct language for a JSON file', () => {
      const filePath = 'path/to/file.json';
      const result = getLanguageBasedOnFileExtension(filePath);
      expect(result).toBe('json');
    });

    test('Then it should default to JavaScript for an unknown file extension', () => {
      const filePath = 'path/to/file.unknown';
      const result = getLanguageBasedOnFileExtension(filePath);
      expect(result).toBe('javascript');
    });

    test('Then it should default to JavaScript for an empty file path', () => {
      const result = getLanguageBasedOnFileExtension();
      expect(result).toBe('javascript');
    });
  });
});
