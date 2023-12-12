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

module.exports = { getPostsHandler,getPostHandler };