import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";

export default {
  search: function(query) {
    console.log('reaching');
    console.log(BASEURL + query.trim().replace(/ /g,"%20"));
    return axios.get(BASEURL + query.trim().replace(/ /g,"%20"));
  },
  saveArticle: function(articleObject){
    return axios.post('/saveArticle', articleObject);
  },
  getSavedArticles: function(){
    return axios.get('/getSavedArticles');
  },
  deleteSavedArticle: function(id){
    return axios.delete('/deleteSavedArticle', {data: {articleId: id}})
  }

};