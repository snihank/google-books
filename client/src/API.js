import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDlccwmYRkFgUwBaEOLAUCvwwJ3xn3MXF0";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};
