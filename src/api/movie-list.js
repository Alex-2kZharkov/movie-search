import axios from "axios";

const getRequestedMovies = () => {
  axios
    .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=21f59099`)
    .then((response) => {
      return response.data.Search || [];
    })
    .catch((error) => console.log(error));
};
