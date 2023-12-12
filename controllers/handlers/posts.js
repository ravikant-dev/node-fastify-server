const posts = require('../../cloud/posts');

const getPostsHandler = (req, reply) => {
    reply.send(posts);
  };

const getPostHandler = (req, reply) => {
  const { id } = req.params;

  const post = posts.filter((post) => {
    return post.id === id;
  })[0];

  if (!post) {
    return reply.status(404).send({
      errorMsg: 'Post not found',
    });
  }

  return reply.send(post);
};

const addPostHandler = (req, reply) => {
  const { title, body } = req.body;

  const id = posts.length + 1; // posts is imported from cloud/posts.js
  posts.push({ id, title, body });
  reply.send('Post added');
};

module.exports = { getPostsHandler, getPostHandler, addPostHandler };