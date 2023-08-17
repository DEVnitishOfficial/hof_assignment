
const bookList = [
    {
    bookId : "b1",
    bookName : "Making India Awesome",
    authorName : "Chetan Bhagat",
    publication_year: "2008"
},
{
    bookId : "b2",
    bookName : "One Indian Girl",
    authorName : "Chetan Bhagat",
    publication_year: "2009"

},
{
    bookId : "b3",
    bookName : "Half Girlfriend",
    authorName : "Chetan Bhagat",
    publication_year: "2012"

},
{
    bookId : "b4",
    bookName : "Naked Triangle",
    authorName : "Balwant Gargi",
    publication_year: "2015"

},

]

const filterBookList = bookList
    .filter(book => book.publication_year <= "2010")
    .map(book => ({
        ...book,
        authorName_update: book.authorName.toUpperCase()
    }));
console.log('Capitalize author name', filterBookList);


// const bookWithIdB4 = bookList.find((book) => book.publication_year <= "2010");
// console.log(bookWithIdB4);

