const express = require('express');
const router = express.Router();

// this is our get method
// this method fetches all available data in our database
router.get('/getData', (req, res) => {
    Yesh.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });


router.get('/searchEng', (req, res) => {
    Yesh.find(
        {sort : "" }
        )

});

router.get('/searchAiNaidar', (req, res) => {
    Yesh.find(
        {word : "" }
        )

});
  
  // this is our update method
  // this method overwrites existing data in our database
  router.post('/updateData', (req, res) => {
    const { id, update } = req.body;
    Yesh.findByIdAndUpdate(id, update, (err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });
  
  // this is our delete method
  // this method removes existing data in our database
  router.delete('/deleteData', (req, res) => {
    const { id } = req.body;
    Yesh.findByIdAndRemove(id, (err) => {
      if (err) return res.send(err);
      return res.json({ success: true });
    });
  });
  
  // this is our create methid
  // this method adds new Yesh in our Yeshbase
  router.post('/putYesh', (req, res) => {
    let Yesh = new Yesh();
  
    const { id, message } = req.body;
  
    if ((!id && id !== 0) || !message) {
      return res.json({
        success: false,
        error: 'INVALID INPUTS',
      });
    }
    yesh.word  = word;
    yesh.id = id;
    yesh.save((err) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  module.exports = router;