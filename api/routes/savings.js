const express = require('express');
const router = express.Router();

const User = require('../models/users')

router.get('/', (req, res) => {
  const daniel = User.findOne({user: 'Daniel'})
  daniel.then((data) => {
    if(data) {
      res.send(data);
    } else {
      const newDaniel = new User();
      newDaniel.user = 'Daniel';
      newDaniel.monthly_earnings = 10.1;
      newDaniel.save()
      .then((data) => {
        res.send(data);
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports = router;