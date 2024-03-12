const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
  let usernames = req.users.map(function(user) {
    return {id: user.id, username: user.username};
  });
  console.log(usernames);
  res.send(usernames);
});

router.get('/username/:name', (req, res) => {
    let name = req.params.name;
    let searchResults = req.users.filter(function(user) {
      return user.username === name;
    });
  
    if (searchResults.length > 0) {
      res.send(searchResults);
    } else {
      res.send({error: {message: `${name} not found`, status: 404}});
    }
  });

module.exports = router;