const admins = require('../../cloud/admins');

const addAdmin = (request,reply) => {
    const {username, email, password} = request.body;
    // if(!username || !email || !password){
    //     reply.status(404).send(new Error(`Required field is `));
    // }
    const id = admins.length + 1;
    admins.push({id, username, email, password})
    reply.send("Account created successfully");
}

module.exports = {addAdmin};