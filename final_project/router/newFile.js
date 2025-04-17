let books = require("./booksdb.js");
const { public_users } = require('./general.js');

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
    //Write your code here
    const author = req.params.author;
    //   for (let index = 0; index < books.length; index++) {
    //     const element = books[index];
    //     res.send(element[author])
    //   }
    books.map((book) => {
        res.send(book[author]);
    });
    return res.status(300).json({ message: "Yet to be implemented" });
});
