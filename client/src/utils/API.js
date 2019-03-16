import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";

export default {
  search: function(query) {
    console.log('reaching');
    console.log(BASEURL + query.trim().replace(/ /g,"%20"));
    return axios.get(BASEURL + query.trim().replace(/ /g,"%20"));
  },
  saveBook: function(bookObject){
    return axios.post('api/books/', bookObject);
  },
  getBooks: function(){
    console.log('getting books')
    return axios.get('/api/books/');
  },
  deleteBook: function(id){
    return axios.delete('/api/books/' + id)
  }

};