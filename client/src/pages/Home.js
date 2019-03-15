import React, {Component} from "react";

/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////////////
import SearchForm from "../components/Form";
import Results from "../components/ResultCard";
import API from "../utils/API";

class Home extends Component {

  state = {
   books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, getbooks update thebooks state
    event.preventDefault();
    console.log('clicky click')
    console.log(this.state.bookSearch)
    API.search(this.state.bookSearch)
      .then(res => {
        this.setState({books: res.data.items })
      })
      .then(console.log(this.state.books))
      .catch(err => console.log(err));
  };
  // title: { type: String, required: true },
  // author: { type: String, required: true },
  // description: { type: String, required: true },
  // image: { type: String, required: true },
  // link: { type: String, required: true },
  // date: { type: Date, default: Date.now }
  
  render() {
    // console.log("New is " + JSON.stringify(this.state))
    return (
    <React.Fragment>
        <div className = "container">
          <SearchForm
                                  name="bookSearch"
                                  value={this.state.bookSearch}
                                  onChange={this.handleInputChange}
                                  placeholder="Search For a book"
                                  onClick={this.handleFormSubmit}
          />
          <section>
          {this.state.books.map(book => {
                    return (
                      <Results
                        key={book.volumeInfo.title}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        href={book.volumeInfo.infoLink}
                        description={book.volumeInfo.description}
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : "http://books.google.com/books/content?id=VO8nDwAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" }
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