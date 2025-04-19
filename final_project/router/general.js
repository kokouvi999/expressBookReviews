const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
//   const username = req.body.username;
//   const password = req.body.password;

  const {username, password} = req.body

  if (!username || !password) {
    res.status(400).json({message: "le non d'utilisateur et le mot de passe requis"})
  }
  
  if (!isValid(username)) {
    users.push({username, password})
    // users.push({"usename": username, "password": password})
    res.status(200).json({users})
  } else {
    res.status(409).json({message: "user is already register"})
  }
//   return res.status(300).json({message: "Veillez fourni un non d'utilisateur!!!"});
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


// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const title = req.params.title;
  const titleKey = Object.keys(books)

  const titleTable = []
  titleKey.forEach(key =>{
    const book = books[key];
    if (book["title"].toLowerCase() === title.toLowerCase()) {
        titleTable.push(book)
    }
  })
  if (titleTable.length > 0) {
    res.status(200).json({titleTable})
  } 
  return res.status(300).json({message: "il y'a pas ce titre dans le livre!!!"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;

  const review = Object.values(books).filter((book)=>{
    book["reviews"] === isbn
  })
  if (review) {
    res.status(200).json(review)
  }
  return res.status(300).json({message: "il n'existe pas de crétique!!!"});
});

module.exports.general = public_users;
