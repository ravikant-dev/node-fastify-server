const {getPostsSchema, getPostSchema, addPostSchema, updatePostSchema, deletePostSchema} = require('../controllers/schemas/posts');
const {getPostsHandler,getPostHandler, addPostHandler, updatePostHandler, deletePostHandler} = require('../controllers/handlers/posts');
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

const updatePostOpts = {
  schema: updatePostSchema,
  handler: updatePostHandler,
};

const deletePostOpts = {
  schema: deletePostSchema,
  handler: deletePostHandler,
};

const postRoutes = (fastify, options, done) => {
    fastify.get('/api/posts',opts);
    fastify.get('/api/posts/:id', getPostOpts);
    fastify
    .register(require('@fastify/auth'))
    .after(() => privatePostRoutes(fastify));
    done();
}

const privatePostRoutes = (fastify, options, done) => {
  fastify.post('/api/posts/new', {
    preHandler: fastify.auth([fastify.verifyToken]),
    ...addPostOpts
  });
  fastify.put('/api/posts/edit/:id', updatePostOpts)
  fastify.delete('/api/posts/delete/:id', deletePostOpts)
  //done();
}

module.exports = {postRoutes, privatePostRoutes};