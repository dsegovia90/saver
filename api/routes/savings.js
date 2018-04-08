const express = require('express');
const router = express.Router();

const User = require('../models/users')

router.get('/', (req, res) => {
  const daniel = User.findOne({user_name: 'daniel'})
  daniel.then((data) => {
    if(data) {
      res.json(data);
    } else {
      const newDaniel = new User();
      newDaniel.user_name = 'daniel';
      newDaniel.monthly_earnings = 10.1;
      newDaniel.save()
      .then((data) => {
        res.json(data);
      })
    }
  })
  .catch((err) => {
    console.log(err)
  })
})

router.put('/', (req, res) => {
  const body = req.body;
  const fetchUser = User.findOne({user_name: body.user_name});
  fetchUser.then((user) => {
    if(user) {
      user.monthly_earnings = body.monthly_earnings
      user.desired_monthly_savings = body.desired_monthly_savings;
      user.save();
    }
  })
  .catch(err => console.log(err));
  res.json({response: 'Update received!'})
})

module.exports = router;