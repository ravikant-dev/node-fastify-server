const fastify = require('fastify')({ logger: true });
const postRoutes = require('./routes/posts');
const adminRoutes = require('./routes/admins');
const PORT = process.env.PORT || 5000;

//Hooks
fastify.addHook('preHandler', async(_req,_reply) => {
  console.log('Global level preHandler executed')
})

//Register all the routes here
fastify.register(postRoutes);
fastify.register(adminRoutes);

//Starting server
const startServer = () => {
    try {
      fastify.listen({ port: PORT });
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
};

startServer();