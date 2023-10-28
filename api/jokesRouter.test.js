 const request = require('supertest');
 const db = require('../data/db-config');
 const server = require("./server.js");


describe('server.js', () => {
    test('should set testing environment', () => {
      expect(process.env.NODE_ENV).toBe('testing');
    });
  });