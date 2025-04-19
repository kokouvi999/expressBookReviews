const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
const usernameValid = users.filter((user) =>{
    user.username === username
})
if (usernameValid.length > 0) {
    res.status(200).json({usernameValid})
}
return res.status(300).json({message: "L'utilisateur n'est pas valide"})
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
const isAuthenticateUser = Object.keys(books).filter((book)=>{
    book["author"] === username && book["password"] === password
})

if (isAuthenticateUser.length > 0) {
    res.status(200).json(usernameValid)
    
}
return res.status(400).json({message: "Erreur de d'authentification"})
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
