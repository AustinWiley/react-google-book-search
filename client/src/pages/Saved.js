import React, {Component} from "react";


/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////////////

import Saved from "../components/SavedCard";
import API from "../utils/API";

class Home extends Component {

  state = {
   books: [],
    bookSearch: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDeleteSubmit = event => {
    event.preventDefault();

    let bookId =  event.target.getAttribute('value');
    console.log(bookId);

    API.deleteBook(bookId)
      .then(res => this.loadBooks())
      .catch(err => console.log(err))

  };
  
  render() {
    // console.log("New is " + JSON.stringify(this.state))
    return (
    <React.Fragment>
        <div className = "container">
        <h1 className="centered">Your Saved Books</h1>
          <section>
          {this.state.books.map(book => {
                    return (
                      <Saved
                      key={book.title}
                      title={book.title}
                      author={book.author}
                      href={book.link}
                      description={book.description}
                      thumbnail={book.image}
                      value={book}
                      id={book._id}
                      onClick={this.handleDeleteSubmit}
                      />
                    );
                  })}
          </section>
        </div>
    </React.Fragment>
    )
  } // End of Render
} // End of Class

export default Home;