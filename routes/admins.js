const {registerAdminSchema, loginAdminSchema} = require('../controllers/schemas/admins')
const {addAdmin, loginAdmin} = require('../controllers/handlers/admins')
const addAdminOpts = {
    schema: registerAdminSchema,
    handler: addAdmin
}

const loginAdminOpts = {
    schema: loginAdminSchema,
    handler: loginAdmin
}

const adminRoutes = (fastify, options, done) => {
    fastify.post('/api/add/admin', addAdminOpts);
    fastify.post('/api/login/admin', loginAdminOpts);
    done();
}
module.exports = adminRoutes