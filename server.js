const fastify = require('fastify')({ logger: true });
const {postRoutes} = require('./routes/posts');
const adminRoutes = require('./routes/admins');
const {verifyToken} = require('./controllers/auth/authentication')
const PORT = process.env.PORT || 5000;

//Hooks
fastify.addHook('preHandler', async(_req,_reply) => {
  console.log('Global level preHandler executed')
})

//fastify swagger for api documentation
fastify.register(require('@fastify/swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'Fastify-api',version: '1.0' },
  },
});

// https://fastify.dev/docs/latest/Reference/Decorators/
fastify.decorate('verifyToken', verifyToken); 

//Register all the routes here
fastify.register(postRoutes);
fastify.register(adminRoutes);
// fastify
//     .register(require('@fastify/auth'))
//     .after(() => privatePostRoutes(fastify));

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