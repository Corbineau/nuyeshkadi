const express = require('express');
const router = express.Router();

// this is our get method
// this method fetches all available data in our database
router.get('/yesh', (req, res) => {
    Yesh.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });

//this is the one for the term and type searching
router.get('/yesh', (req, res) => {
    Yesh.find(
        {sort : "" }
        )

});

  
  // this is our update method
  // this method overwrites existing data in our database
  router.post('/yesh', (req, res) => {
    const { id, update } = req.body;
    Yesh.findByIdAndUpdate(id, update, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
  
  // this is our delete method
  // this method removes existing data in our database
  router.delete('/yesh', (req, res) => {
    const { id } = req.body;
    Yesh.findByIdAndRemove(id, (err) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });
  
  // this is our create methid
  // this method adds new Yesh in our Yeshbase
  router.post('/yesh', (req, res) => {
    let Yesh = new Yesh();
  
    const {  } = req.body;
  
    if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: 'INVALID INPUTS',
      });
    }
    yesh.word = word;
    yesh.pronunciation = pronunciation;
    yesh.partOfSpeech = partOfSpeech;
    yesh.meaning = meaning;
    yesh.save((err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  module.exports = router;