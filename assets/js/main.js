$(() => {
  function getMovieData(movies) {
    const newMovies = [];

    $(movies).each((index, movie) => {
      if(movie.isFavorite) {
        favoriteMovies.push(movie.title);
      }

      $.ajax('https://www.omdbapi.com/?apikey=e85aad&&t=' + movie.title + '&y=' + movie.year)
        .done((movieData) => {
          newMovies.push(movieData);

          if (movies.length === newMovies.length) {
            // newMovies.length;
            showMovies(newMovies);
          }
        });
    });
  }

  function showMovies(movies) {
    const movieCards = [];
    $(movies).each((index, movie) => {
      const movieCard = getMovieHTML(movie);
      movieCards.push(movieCard);
    });
    console.log(formattedMovies);
    $('#movies').html(movieCards);
    sortMovies();
    console.log(formattedMovies);
  }

  function getMovieHTML(movie) {
    const movieCard = $('<div class="card my-5">');

    const cardBody = $('<div class="card-body row p-0">');

    const cardImage = $('<img class="col-5 col-md-4 img-fluid p-0">');
    cardImage.attr('src', movie.Poster);
    cardImage.attr('alt', movie.Title);

    const cardContent = getMovieCardContent(movie);

    // TODO: Add more html when abstracted from file.

    cardBody.append(cardImage, cardContent);
    movieCard.html(cardBody);
    return movieCard;
  }

  function getMovieCardContent(movie) {
    const cardContent = $('<div class="col-7 col-md-8 p-5">');
    cardContent.append('<h2>' + movie.Title + '</h2>');

    const movieInfo = {
      Title: movie.Title,
      Genre: movie.Genre,
      Year: movie.Year,
      Director: movie.Director,
      Writer: movie.Writer
    };

    formattedMovies.push(movieInfo);

    const infoHTML = getMovieInfoSection(movieInfo);
    cardContent.append(infoHTML);

    return cardContent;
  }

  function getMovieInfoSection(movieInfo) {
    const infoHTML = $('<div class="d-flex flex-wrap align-items-center h-100">');
    for (const key in movieInfo) {
      if (movieInfo.hasOwnProperty(key)) {
        const infoItem = getMovieInfoItem(key, movieInfo[key]);
        infoHTML.append(infoItem);
      }

      if (key === 'writer') {
        if(favoriteMovies.includes(movieInfo.Title)) {
          infoHTML.append(getFavoriteItem());
        }
      }
    }

    return infoHTML;
  }

  function getMovieInfoItem(category, value) {
    const infoItem = $('<div class="w-50 flex-fill">');
    infoItem.append('<strong class="m-0">' + category + '</strong>');
    infoItem.append('<small class="d-block">' + value + '</small>');

    return infoItem;
  }

  function getFavoriteItem() {
    const favoriteItem = $('<div class="flex-fill"></div>');
    favoriteItem.append('<strong>Dave\'s Fave!</strong>');

    return favoriteItem;
  }

  function sortMovies() {
    formattedMovies.sort(function(movie1, movie2){
      if(movie1.Title < movie2.Title) {
        return -1;
      }

      if(movie1.Title > movie2.Title) {
        return 1;
      }

      return 0;
    });
  }

  const favoriteMovies = [];
  const formattedMovies = [];

  getMovieData(movies);
});