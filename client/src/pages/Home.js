import React, {Component} from "react";
/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////////////
import SearchForm from "../components/Form";
import Results from "../components/ResultCard";
import API from "../utils/API";

class Home extends Component {
  state = {
    clear: [],
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
    this.setState({ books: this.state.clear})
    console.log('clicky click')
    console.log(this.state.bookSearch)
    API.search(this.state.bookSearch)
      .then(res => {
        const results = res.data.items;
        const collections = [];
        results.map(book => {
          const info = book.volumeInfo;
          const volume = {
            title: info.title,
            author: info.authors,
            description: info.description ? info.description : "Presents the life and accomplishments of the American author, discussing such topics as his service in the First World War, the publication of his short stories and novels, and his award of the Nobel prize for literature in 1954.",
            image: info.imageLinks.smallThumbnail ? info.imageLinks.smallThumbnail : "http://books.google.com/books/content?id=VO8nDwAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            link: info.infoLink
          };
          collections.push(volume)
        })
        console.log(collections)
        this.setState({ books: collections})
      })
      .catch(err => console.log(err));
  };

  handleSaveSubmit = event => {
    event.preventDefault();
    let bookData =  JSON.parse(event.target.getAttribute('value'))
    console.log(bookData)
    console.log(this.state.books.indexOf(bookData))
    API.saveBook(bookData)
      .then(res => {
        console.log(' Book saved!!')
      })
      .catch(err => console.log(err))
  };
  
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
           <h1 className="centered">SEARCH RESULTS</h1>
          <section>
          {this.state.books.map(book => {
                    return (
                      <Results
                      key={book.title}
                      title={book.title}
                      author={book.author}
                      href={book.link}
                      description={book.description}
                      thumbnail={book.image}
                      value={book}
                      onClick={this.handleSaveSubmit}
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