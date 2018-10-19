$(() => {
  function getMovieData(movies) {
    const newMovies = [];
    $(movies).each((index, movie) => {
      $.ajax('https://www.omdbapi.com/?apikey=e85aad&&t=' + movie.title + '&y=' + movie.year)
        .done((movieData) => {
          newMovies.push(movieData);

          if (movies.length === newMovies.length) {
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
    console.log(movie);
    const movieCard = $('<div class="card my-3">');

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
    const cardContent = $('<div class="col-7 col-md-8">');
    cardContent.append('<h5>' + movie.Title + '</h5>');

    const info = {
      genre: movie.Genre,
      year: movie.Year,
      director: movie.Director,
      writer: movie.Writer
    };

    const infoHTML = getMovieInfoSection(movie.Title, info);
    cardContent.append(infoHTML);

    return cardContent;
  }

  function getMovieInfoSection(title, info) {
    const infoHTML = $('<div class="d-flex flex-wrap align-items-center h-100">');
    for (const key in info) {
      if (info.hasOwnProperty(key)) {
        const infoItem = getMovieInfoItem(key, info[key]);
        infoHTML.append(infoItem);
      }

      if(key === 'writer' && daveFavorites.includes(title.toLowerCase())) {
        console.log(daveFavorites.includes(title.toLowerCase()));
        infoHTML.append(getFavoriteItem());
      }
    }

    return infoHTML;
  }

  function getMovieInfoItem(category, value) {
    const infoItem = $('<div class="w-50">');
    infoItem.append('<strong class="m-0">' + category + '</strong>');
    infoItem.append('<small class="d-block">' + value + '</small>');

    return infoItem;
  }

  function getFavoriteItem() {
    const favoriteItem = $('<div class="flex-fill"></div>');
    favoriteItem.append('<strong>Dave\'s Fave!</strong>');

    return favoriteItem;
  }

  const movieNames = [{
      title: '1408',
      year: '2007'
    },
    {
      title: '12 Angry Men',
      year: 1957
    },
    {
      title: '12 Years a Slave',
      year: 2013
    },
    {
      title: '13 Ghosts',
      year: 1960
    }
  ];

  const  daveFavorites = ['1408', '13 ghosts'];

  getMovieData(movieNames);
});