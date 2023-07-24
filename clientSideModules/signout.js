// const express = require('express');
// const router = express.Router();

// const authenticate = require("../middelware/authenticate");

// // Sign Out implementation

// module.exports = router.get('/signout', authenticate, (req, res)=>{
//     console.log('user log out')
    
//     res.clearCookie('jwtoken', {path: '/'})
//     res.status(200).send("User Logout")
// })

const express = require('express');
const router = express.Router();
const authenticate = require("../middelware/authenticate");

// Sign Out implementation
router.get('/signout', authenticate, (req, res) => {
  try {
    console.log('User log out');
    
    // Clear the "jwtoken" cookie from the response (replace "jwtoken" with your actual token name)
    res.clearCookie('jwtoken', { path: '/' });

    // You can also clear any other cookies if necessary
    // res.clearCookie('anotherCookie', { path: '/' });

    // Send a success message to the client
    res.status(200).send("User Logout");
  } catch (error) {
    console.error(error);
    // If any error occurs, send an error response
    res.status(500).send("Something went wrong during logout");
  }
});

module.exports = router;
