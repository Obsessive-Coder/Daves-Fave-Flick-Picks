$(() => {
  $('.page-button').on('click', function () {
    const pageChangeAmount = parseInt($(this).attr('data-value'));

    const newPageNumber = currentPage + pageChangeAmount;

    if (newPageNumber > movies.length / 25 + 1) {
      return;
    }
    if (newPageNumber < 1) {
      return;
    }

    currentPage = newPageNumber;

    $('#page-number').text(currentPage);

    const nextPageMovies = getPageMovies();
    console.log(nextPageMovies);
    getMovieData(nextPageMovies);
  });

  function getPageMovies() {
    const pageMovies = [];

    let startingIndex = 0;

    switch (currentPage) {
      case 2:
        startingIndex = 25;
        break;
      case 3:
        startingIndex = 50;
        break;
      case 4:
        startingIndex = 75;
        break;
      case 5:
        startingIndex = 100;
        break;
      case 6:
        startingIndex = 125;
        break;
      default:
        startingIndex = 0;
        break;
    }

    for (let i = startingIndex;
      (i < (startingIndex + 25)) && i < movies.length; i++) {
      pageMovies.push(movies[i]);
    }

    return pageMovies;
  }

  function getMovieData(pageMovies) {
    const formattedMovies = [];
    let requestCount = 0;

    $(pageMovies).each((index, pageMovie) => {
      // Add movie title to favorites array.
      if (pageMovie.IsFavorite === "True") {
        favoriteMovies.push(pageMovie.Title);
      }

      $.ajax('https://www.omdbapi.com/?apikey=e85aad&&t=' + pageMovie.Title + '&y=' + pageMovie["Release Date"])
        .done((movieData) => {
          requestCount += 1;
          // console.log(movieData);

          const posterUrl = movieData.Poster !== "N/A" ? movieData.Poster : "https://via.placeholder.com/300x500.png?text=No+poster";

          let formattedMovie = {
            Title: movieData.Title,
            Poster: posterUrl,
            Plot: movieData.Plot,
            Genre: movieData.Genre,
            Year: movieData.Year,
            Director: movieData.Director,
            Writer: movieData.Writer,
            IMDB: movieData.imdbRating,
            Metascore: movieData.Metascore
          };

          formattedMovies.push(formattedMovie);

          // if (formattedMovies.length === pageMovies.length) {
          if (requestCount === pageMovies.length) {
            // console.log(formattedMovies.length);

            getTrailer(formattedMovie.Title);


            showMovies(formattedMovies);
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
    const movieCard = $('<div class="card my-5">');

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
    const cardContent = $('<div class="flex-fill p-1 p-md-3 pb-5">');
    cardContent.append('<h2 class="movie-title">' + movie.Title + '</h2>');
    cardContent.append('<p class="m-2 px-md-5">' + movie.Plot + '</p>');

    const movieInfo = {
      Genre: movie.Genre,
      Year: movie.Year,
      "Director(s)": movie.Director,
      "Writer(s)": movie.Writer,
      IMDB: movie.IMDB,
      Metascore: movie.Metascore
    };

    const infoHTML = getMovieInfoSection(movie.Title, movieInfo);
    cardContent.append(infoHTML);

    return cardContent;
  }

  function getMovieInfoSection(title, movieInfo) {
    const infoHTML = $('<div class="d-flex flex-wrap align-items-center movie-info">');
    for (const key in movieInfo) {
      if (movieInfo.hasOwnProperty(key)) {
        const infoItem = getMovieInfoItem(key, movieInfo[key]);
        infoHTML.append(infoItem);
      }

      if (key === 'Metascore') {
        if (favoriteMovies.includes(title)) {
          infoHTML.append(getFavoriteItem());
        }
      }
    }

    return infoHTML;
  }

  function getMovieInfoItem(category, value) {
    const width = category !== "Plot" ? "w-50" : "w-100";
    const infoItem = $('<div class="flex-fill my-3 movie-info-item ' + width + '">');
    infoItem.append('<strong class="m-0">' + category + '</strong>');

    infoItem.append('<small class="d-block">' + value + '</small>');

    return infoItem;
  }

  function getFavoriteItem() {
    const favoriteItem = $('<div class="flex-fill dave-fave"></div>');
    favoriteItem.append('<strong class="mx-1">Dave\'s Fave!</strong>');

    return favoriteItem;
  }

  function getTrailer(title) {
    $.ajax('http://simpleapi.traileraddict.com/greenberg/trailer')
    .done((result) => {
      console.log(result);
    });
  }

  const favoriteMovies = [];
  let currentPage = 1;

  const pageMovies = getPageMovies();

  $('#page-number').text(currentPage);

  getMovieData(pageMovies);
});