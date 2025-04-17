const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(JSON.stringify(books))
//   return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  let isbn = req.params.isbn;
  if (isbn) {
    res.status(200).json(books[isbn])
  }
  return res.status(300).json({message:"erreur du transfert"});
 });
  
 public_users.get('/author/:author', function (req, res) {
    const author = req.params.author;

    // 1. Obtenir toutes les clés de l'objet books
    const bookKeys = Object.keys(books);

    // 2. Parcourir les livres et filtrer ceux dont l'auteur correspond
    const filteredBooks = [];

    bookKeys.forEach(key => {
        const book = books[key];
        if (book["author"].toLowerCase() === author.toLowerCase()) {
            filteredBooks.push(book);
        }
    });

    // 3. Répondre avec les livres trouvés
    if (filteredBooks.length > 0) {
        res.status(200).json({ filteredBooks });
    } else {
        res.status(404).json({ message: "Aucun livre trouvé pour cet auteur." });
    }
});

// Get book details based on author
// public_users.get('/author/:author',function (req, res) {
//   //Write your code here
//   const author = req.params.author;

//   let authorKey = Object.values(books[1]).filter((book)=>{
//     return book["author"] === author;
//   })
//   res.send(authorKey)
// //   for (let index = 0; index < books.length; index++) {
// //     const element = books[index];
// //     res.send(element)
// //   }
// // books.map((book)=>{
// //     res.send(book[author])
// // })
//   return res.status(300).json({message: "erreur"});
// });

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
