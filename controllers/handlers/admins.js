const admins = require('../../cloud/admins');
const jwt = require('jsonwebtoken');

const addAdmin = (request,reply) => {
    const {username, email, password} = request.body;
    const id = admins.length + 1;
    admins.push({id, username, email, password})
    reply.send("Account created successfully");
}

const loginAdmin = (request,reply) => {
    const {username, password} = request.body;
    const admin = admins.find(adm => (adm.username === username) && (adm.password === password));
    if(!admin){
        return reply.status(404).send({
            errorMsg: 'Invalid username or password!',
          });
    }
    jwt.sign(
        { id: admin.id },
        'my_jwt_secret',
        { expiresIn: 3 * 86400 },
        (err, token) => {
          if (err) reply.status(500).send(new Error(err));
    
          reply.send({ token });
        }
      );
    //reply.send("Logged in successfully!");
}

module.exports = {addAdmin, loginAdmin};