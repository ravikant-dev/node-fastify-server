const {getPostsSchema, getPostSchema, addPostSchema} = require('../controllers/schemas/posts');
const {getPostsHandler,getPostHandler, addPostHandler} = require('../controllers/handlers/posts');

const opts = {
    schema: getPostsSchema,
    handler: getPostsHandler
  };

const getPostOpts = {
  schema: getPostSchema,
  handler: getPostHandler,
  preHandler: async (request, reply) => {
    console.log('preHandler for /api/posts/:id route executed');
  } 
};

const addPostOpts = {
  schema: addPostSchema,
  handler: addPostHandler,
};

const postRoutes = (fastify, options, done) => {
    fastify.get('/api/posts',opts);
    fastify.get('/api/posts/:id', getPostOpts);
    fastify.post('/api/posts/new', addPostOpts);
    done();
}

module.exports = postRoutes;