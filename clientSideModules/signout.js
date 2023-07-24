

const express = require('express');
const router = express.Router();
const authenticate = require("../middelware/authenticate");


router.get('/signout', authenticate, (req, res) => {
  try {
    console.log('User log out');

    res.clearCookie('jwtoken', { path: '/' });

    res.status(200).send("User Logout");
  } catch (error) {
    console.error(error);

    res.status(500).send("Something went wrong during logout");
  }
});

module.exports = router;
