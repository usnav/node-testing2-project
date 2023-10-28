 const request = require('supertest');
 const db = require('../data/db-config');
 const server = require("./server.js");


describe('server.js', () => {
    it('should set testing environment', () => {
      expect(process.env.NODE_ENV).toBe('testing');
    });
  });