import React, {Component} from "react";

/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////////////
import SearchForm from "../components/Form";
import Results from "../components/ResultCard";
import API from "../utils/API";

class Home extends Component {

  state = {
    recipes: [],
    recipeSearch: ""
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
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };
  
  render() {
    // console.log("New is " + JSON.stringify(this.state))
    return (
    <React.Fragment>
        <div className = "container">
          <SearchForm newQuery={this.newQuery}/>
          <Results results={this.state}/>
        </div>
    </React.Fragment>
    )
  } // End of Render
} // End of Class

export default Home;