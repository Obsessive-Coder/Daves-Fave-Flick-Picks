$(() => {
  $('#next-page').on('click', function() {
    // isSecondPage = true;
    getMovieData();
  });

  function getMovieData() {
    const newMovies = [];
    currentIndex = 0;

    $(movies).each((index, movie) => {
      // Add the movie title to array of favorite movies.
      if (movie.isFavorite) {
        favoriteMovies.push(movie.title);
      }

      currentIndex += 1;

      if (currentIndex === 26) {
        return false;
      }

      $.ajax('https://www.omdbapi.com/?apikey=e85aad&&t=' + movie.title + '&y=' + movie.year)
        .done((movieData) => {
          newMovies.push(movieData);

          // Show the movies if this is the last movie in the loop.
          if (newMovies.length === 25 || movies.length === 0) {
            console.log(currentIndex);
            console.log(movies);
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

    $('#movies').html(movieCards);
  }

  function getMovieHTML(movie) {
    const movieCard = $('<div class="card my-5 rounded-0">');

    const cardBody = $('<div class="card-body d-md-flex p-0">');

    const cardImage = $('<img class="img-fluid p-0">');
    cardImage.attr('src', movie.Poster);
    cardImage.attr('alt', movie.Title);

    const cardContent = getMovieCardContent(movie);

    cardBody.append(cardImage, cardContent);
    movieCard.html(cardBody);
    return movieCard;
  }

  function getMovieCardContent(movie) {
    const cardContent = $('<div class="flex-fill p-3 pb-5">');
    cardContent.append('<h2>' + movie.Title + '</h2>');
    cardContent.append('<p class="m-0 mt-1 px-5">' + movie.Plot + '</p>');

    const movieInfo = {
      Title: movie.Title,
      Plot: movie.Plot,
      Genre: movie.Genre,
      Year: movie.Year,
      Director: movie.Director,
      Writer: movie.Writer,
      IMDB: movie.imdbRating,
      Metascore: movie.Metascore
    };

    formattedMovies.push(movieInfo);

    const infoHTML = getMovieInfoSection(movieInfo);
    cardContent.append(infoHTML);

    return cardContent;
  }

  function getMovieInfoSection(movieInfo) {
    const infoHTML = $('<div class="d-flex flex-wrap align-items-center h-75 movie-info">');
    for (const key in movieInfo) {
      if ((key !== "Title") && (key !== "Plot") && movieInfo.hasOwnProperty(key)) {
        const infoItem = getMovieInfoItem(key, movieInfo[key]);
        infoHTML.append(infoItem);
      }

      if (key === 'Metascore') {
        if (favoriteMovies.includes(movieInfo.Title)) {
          infoHTML.append(getFavoriteItem());
        }
      }
    }

    return infoHTML;
  }

  function getMovieInfoItem(category, value) {
    const width = category !== "Plot" ? "w-50" : "w-100";
    const infoItem = $('<div class="flex-fill movie-info-item ' + width + '">');
    infoItem.append('<strong class="m-0">' + category + '</strong>');
    infoItem.append('<small class="d-block">' + value + '</small>');

    return infoItem;
  }

  function getFavoriteItem() {
    const favoriteItem = $('<div class="flex-fill dave-fave"></div>');
    favoriteItem.append('<strong class="text-warning">Dave\'s Fave!</strong>');

    return favoriteItem;
  }

  function sortMovies() {
    formattedMovies.sort(function (movie1, movie2) {
      if (movie1.Title < movie2.Title) {
        return -1;
      }

      if (movie1.Title > movie2.Title) {
        return 1;
      }

      return 0;
    });
  }

  const favoriteMovies = [];
  const formattedMovies = [];

  let currentIndex = 0;
  let isSecondPage = false;

  getMovieData();
});