const router = require('express').Router();
let ArtRecord = require('../models/ArtRecord.model');
let BitRecord = require('../models/bids.model');

router.route('/arts').get((req, res) => {
    ArtRecord.find()
      .then((artRecords) => res.json(artRecords))
      .catch((err) => res.status(400).json('Error: ' + err));
  });

  router.route('/art').post((req,res)=>{

   // title = req.body.title;
   // author = req.body.author;
    //description = req.body.description;

    artName = req.body.artName;
    serial = req.body.serial;
    src = req.body.src;
    alt = req.body.alt;


    //user = req.body.bids.user;
    //bid = req.body.bids.bid;

    bids = req.body.bids;

    // const newBidRecord = {
    //    user : user,
    //    bid : bid
    // }

    const newArtRecord = new ArtRecord({
        artName,
        serial,
        src,
        alt,
        bids
    });

    newArtRecord.save()
    .then(() => res.json('ArtRecord added!'))
    .catch((err) => res.status(400).json('Error: ' + err));

  });

  router.route('/art/:id').post(async (req, res) => {
    console.log(req.params.id);
  await  ArtRecord.findById(req.params.id)
      .then((artForEdit) => {
        artForEdit.artName = req.body.artName;
        artForEdit.serial = req.body.serial;
        artForEdit.src = req.body.src;
        artForEdit.alt = req.body.alt;
        artForEdit.bids.user = req.body.bids.user;
        artForEdit.bids.bid = re.body.bids.bid;
  
        artForEdit
          .save()
          .then(() => res.json('ArtRecord updated!'))
          .catch((err) => res.status(400).json('Error: ' + err));
      })
      .catch((err) => res.status(400).json('Error: ' + err));
  });

  

  module.exports = router;