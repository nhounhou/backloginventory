// Requiring our Todo model
const db = require('../models');

// Routes
// =============================================================
module.exports = (app) => {
  // GET route for getting all of the lanes priority
  app.get('/api/lanes/', (req, res) => {
    db.Lane.findAll({}).then((dbLane) => res.json(dbLane));
  });

  // GET route for getting all of the lanes priority
  app.get('/api/map/', (req, res) => {
    console.log('findAll Map')
    db.LaneMap.findAll({}).then((dbMap) => res.json(dbMap));
  });

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
  // });

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
    // console.log(req.body);
    db.Pallet.create({
      name: req.body.name,
      comment: req.body.comment,
      date: req.body.date,
      location: req.body.location,
    }).then((dbPallet) => res.json(dbPallet));
  });

  // POST route for saving a new Lane
  app.post('/api/map', (req, res) => {
    console.log('new Lane',req.body)
    db.LaneMap.create({
      name: req.body.name,
    }).then((dbMap) => res.json(dbMap));
  });

  // POST route for saving a new post
  app.post('/api/lanes', (req, res) => {
    console.log('POST Lane',req.body);
    db.Lane.create({
      name: req.body.name,
      isPriority: req.body.isPriority,
    }).then((dbLane) => res.json(dbLane));
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

  // PUT route for updating lanes
  app.put('/api/lanes/:name', (req, res) => {
    console.log('PUT Lane',req.body);
    const condition = `name = ${req.params.name}`
    console.log('condition',condition)
    db.Lane.update(
      {
        isPriority: req.body.isPriority,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      }
    ).then((dbLane) => res.json(dbLane));
  });

  // PUT route for updating posts
  app.put('/api/laneDestroy', (req, res) => {
    db.Lane.destroy({
      where: {},
      truncate: true
    }).then((dbLane) => res.json(dbLane));
  });  

  // PUT route for updating posts
  app.put('/api/laneMapDestroy/:name', (req, res) => {
    console.log('delete lane',req)
    db.LaneMap.delete({
      where: {
        name: req.params.name
      },
      // truncate: true
    }).then((dbMap) => res.json(dbMap));
  });  

  // PUT route for updating posts
  app.put('/api/destroy', (req, res) => {
    db.Pallet.destroy({
      where: {},
      truncate: true
    }).then((dbPallet) => res.json(dbPallet));
  });  
};
