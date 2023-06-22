const knex = require('knex')(require('../knexfile'));

const index = (_req, res) => {
  knex('post')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Posts: ${err}`)
    );
};

const findOne = (req, res) => {
  knex("post")
    .where({ id: req.params.id })
    .then((postsFound) => {

      if (postsFound.length === 0) {
        return res
          .status(404)
          .json({ message: `Post with ID: ${req.params.id} not found` });
      }

      const postData = postsFound[0];

      res.status(200).json(postData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve post data for post with ID: ${req.params.id}`,
      });
    });
}

module.exports = {
  index,
  findOne
}