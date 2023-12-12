const typeString = { type: 'string' };

const post = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    title: typeString,
    body: typeString,
  },
};

const getPostsSchema = {
    response: {
      200: {
        type: 'array',
        items: post
      },
    },
  };

  const getPostSchema = {
    params: {
      id: { type: 'number' },
    },
    response: {
      200: post
    },
  };

module.exports = {getPostsSchema, getPostSchema}