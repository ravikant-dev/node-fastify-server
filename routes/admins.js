const {registerAdminSchema} = require('../controllers/schemas/admins')
const {addAdmin} = require('../controllers/handlers/admins')
const addAdminOpts = {
    schema: registerAdminSchema,
    handler: addAdmin
}
const adminRoutes = (fastify, options, done) => {
    fastify.post('/api/add/admin', addAdminOpts)
    done();
}
module.exports = adminRoutes