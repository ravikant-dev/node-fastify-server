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

const updatePostHandler = (req, reply) => {
  const { title, body } = req.body;
  const {id} = req.params
  const existingPost = posts.find(post => post.id === id)
  if(!existingPost){
    return reply.status(404).send(new Error(`Post with id ${id} doesn't exist`));
  }
  existingPost.title = title;
  existingPost.body = body;
  reply.send('Post updated!');
};

const deletePostHandler = (req, reply) => {
  const {id} = req.params
  const index = posts.findIndex(post => post.id === id)
  if(index === -1){
    return reply.status(404).send(new Error(`Post with id ${id} doesn't exist`));
  }
  posts.splice(index,1)
  reply.send('Post deleted!');
};
module.exports = { getPostsHandler, getPostHandler, addPostHandler, updatePostHandler, deletePostHandler };