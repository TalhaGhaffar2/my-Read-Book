import React  from 'react';

function Shelf (props) {   

     const shelfBooks = props.books;
     console.log('shelfBooks', shelfBooks);
    return(
        <div className="list-books-content">
        <div>
    <div className="bookshelf">
  <h2 className="bookshelf-title">{props.title}</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
        { shelfBooks.map( book => (
 <li key = {book.id} >
 <div className="book">
   <div className="book-top">
     <div className="book-cover" 
     style={{ width: 150, height: 190,
      backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
     <div className="book-shelf-changer">
       <select value={book.shelf} onChange = { event => props.changeShelf(book, event.target.value)}>
         <option value="move" disabled>Move to...</option>
         <option value="currentlyReading">Currently Reading</option>
         <option value="wantToRead">Want to Read</option>
         <option value="read">Read</option>
         <option value="none">None</option>
       </select>
     </div>
   </div>
   <div className="book-title">{book.title}</div>
   <div className="book-authors">{book.authors}</div>
 </div>
</li>
        )
        )
          }
     
    </ol>
  </div>
</div>
</div>
</div>
    )
}

export default Shelf;