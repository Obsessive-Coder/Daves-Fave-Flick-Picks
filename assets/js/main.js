$(() => {
  $('.page-button').on('click', function () {
    const pageChangeAmount = parseInt($(this).attr('data-value'));

    const newPageNumber = currentPage + pageChangeAmount;

    if ((newPageNumber > movies.length / 25 + 1) || (newPageNumber < 1)) {
      return;
    }

    $("html, body").animate({ scrollTop: 0 }, "slow");

    currentPage = newPageNumber;

    $('#page-number').text(currentPage);

    const nextPageMovies = getPageMovies(movies);
    getMovieData(nextPageMovies);
  });

  $('#daves-fave').on('click', function () {
    isFavesFirst = true;
    currentPage = 1;
    $('#page-number').text(currentPage);

    const sortedMovies = sortMovies(movies);

    const pageMovies = getPageMovies(sortedMovies);

    getMovieData(pageMovies);
  });

  function getPageMovies(sortedMovies) {
    const pageMovies = [];

    let startingIndex = currentPage * 25 - 25;

    for (let i = startingIndex;
      (i < sortedMovies.length) && (i < startingIndex + 25); i++) {
      pageMovies.push(sortedMovies[i]);
    }

    return pageMovies;
  }

  function getMovieData(pageMovies) {
    let formattedMovies = [];
    let requestCount = 0;

    $(pageMovies).each((index, pageMovie) => {
      $.ajax('https://www.omdbapi.com/?apikey=e85aad&&t=' + pageMovie.Title + '&y=' + pageMovie.Year)
      // $.ajax('https://www.omdbapi.com/?apikey=e85aad&&t=' + pageMovie.Title)
        .done((movieData) => {
          requestCount += 1;
          // console.log(movieData);

          let posterUrl = (movieData.Poster === "N/A" || !movieData.Poster) ? "https://via.placeholder.com/300x500.png?text=No+poster" : movieData.Poster;

          let formattedMovie = {
            Title: movieData.Title ? movieData.Title : pageMovie.Title,
            Poster: posterUrl,
            Plot: movieData.Plot,
            Genre: movieData.Genre ? movieData.Genre : pageMovie.Genre,
            Year: movieData.Year ? movieData.Year : pageMovie.Year,
            Director: movieData.Director ? movieData.Director : pageMovie.Director,
            Writer: movieData.Writer ? movieData.Writer : pageMovie.Writer,
            IMDB: movieData.imdbRating ? movieData.imdbRating : 'N/A',
            Metascore: movieData.Metascore ? movieData.Metascore : 'N/A',
            IsFavorite: pageMovie.IsFavorite
          };

          // FIXME: this is a hack
          if(pageMovie.Title === "Lost Soul") {
            formattedMovie.Genre = pageMovie.Genre;
            formattedMovie.Year = pageMovie.Year;
            formattedMovie.Writer = pageMovie.Writer;
            formattedMovie.Director = pageMovie.Director;
          }

          formattedMovies.push(formattedMovie);

          if (requestCount === pageMovies.length) {
            if (isFavesFirst) {
              formattedMovies = sortMovies(formattedMovies);
              isFavesFirst = false;
            }

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
    const movieCard = $('<div class="card mb-5">');

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

    const infoHTML = getMovieInfoSection(movie.Title, movieInfo, movie.IsFavorite);
    cardContent.append(infoHTML);

    return cardContent;
  }

  function getMovieInfoSection(title, movieInfo, isFavorite) {
    const infoHTML = $('<div class="d-flex flex-wrap align-items-center movie-info">');

    for (const key in movieInfo) {
      if (movieInfo.hasOwnProperty(key)) {
        const infoItem = getMovieInfoItem(key, movieInfo[key]);
        infoHTML.append(infoItem);
      }
    }

    if (isFavorite === 'True') {
      infoHTML.append(getFavoriteItem());
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

  function sortMovies(unsortedMovies) {
    unsortedMovies = unsortedMovies.sort(function (a, b) {
      if (a.IsFavorite < b.IsFavorite) {
        return 1;
      } else if (a.IsFavorite > b.IsFavorite) {
        return -1;
      }
      return 0;
    });

    return unsortedMovies;
  }

  let favoriteMovies = [];
  let currentPage = 1;
  let isFavesFirst = false;

  $('#page-number').text(currentPage);

  getMovieData(getPageMovies(movies));
});