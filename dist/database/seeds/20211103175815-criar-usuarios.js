"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'John Doe',
          email: 'joe@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Samantha Alexa',
          email: 'sam@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Alex',
          email: 'alex@yahoo.com.br',
          password_hash: await bcryptjs.hash('alex123', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {});
  },

  down: async () => {},
};
