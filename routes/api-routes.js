// Requiring our Todo model
const db = require('../models');

// Routes
// =============================================================
module.exports = (app) => {
  // GET route for getting all of the pallets
  // console.log("db:",db.sequelize.options)
  app.get('/api/pallets/', (req, res) => {
    db.Pallet.findAll({}).then((dbPallet) => res.json(dbPallet));
  });

  // Get route for returning posts of a specific category
  // app.get('/api/posts/category/:category', (req, res) => {
  //   db.Post.findAll({
  //     where: {
  //       category: req.params.category,
  //     },
  //   }).then((dbPost) => {
  //     res.json(dbPost);
  //   });
  // });5

  // Get route for retrieving a single pallet by ID
  app.get('/api/pallets/:id', (req, res) => {
    db.Pallet.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbPallet) => res.json(dbPallet));
  });

  // Get route for retrieving a single pallet by pallet name
  app.get('/api/name/:name', (req, res) => {
    db.Pallet.findOne({
      where: {
        name: req.params.name,
      },
    }).then((dbPallet) => res.json(dbPallet));
  });

  // POST route for saving a new post
  app.post('/api/pallets', (req, res) => {
    console.log(req.body);
    db.Pallet.create({
      name: req.body.name,
      comment: req.body.comment,
      date: req.body.date,
      location: req.body.location,
    }).then((dbPallet) => res.json(dbPallet));
  });

  // DELETE route for deleting posts
  app.delete('/api/pallets/:id', (req, res) => {
    db.Pallet.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPallet) => res.json(dbPallet));
  });

  // PUT route for updating posts
  app.put('/api/pallets', (req, res) => {
    db.Pallet.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbPallet) => res.json(dbPallet));
  });

  // PUT route for updating posts
  app.put('/api/destroy', (req, res) => {
    db.Pallet.destroy({
      where: {},
      truncate: true
    }).then((dbPallet) => res.json(dbPallet));
  });  
};
