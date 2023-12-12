const {typeString} = require('./posts')

const registerAdminSchema = {
    body: {
      type: 'object',
      required: ['username', 'email', 'password'],
      properties: {
        username: typeString,
        email: typeString,
        password: typeString,
      },
    },
    response: {
      200: typeString,
    },
  };
module.exports = {registerAdminSchema}