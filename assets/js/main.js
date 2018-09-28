$(() => {
  function showMovies(movies) {
    const movieCards = [];
    $(movies).each((index, movie) => {
      const movieCard = getMovieHTML(movie);
      movieCards.push(movieCard);
    });
    $('#movies').html(movieCards);
  }

  function getMovieHTML(movie) {;


    const movieCard = $('<div class="card my-3">');

    const cardBody = $('<div class="card-body row p-0">');

    const cardImage = $('<img class="col-5 col-md-4 img-fluid p-0">');
    cardImage.attr('src', movie.imageUrl);
    cardImage.attr('alt', movie.title);

    const cardContent = $('<div class="col-7 col-md-8">');
    cardContent.append('<h5>' + movie.title + '</h5>');

    // TODO: Add more html when abstracted from file.

    cardBody.append(cardImage, cardContent);
    movieCard.html(cardBody);
    return movieCard;
  }

  const movies = [{
    title: '8 Mile',
    imageUrl: 'https://via.placeholder.com/150x150'
  }, {
    title: 'Fear and Loathing in Las Vegas',
    imageUrl: 'https://via.placeholder.com/150x150'
  }, {
    title: 'Pulp Fiction',
    imageUrl: 'https://via.placeholder.com/150x150'
  }, {
    title: 'I Love You Man',
    imageUrl: 'https://via.placeholder.com/150x150'
  }, {
    title: 'Terminator 2',
    imageUrl: 'https://via.placeholder.com/150x150'
  }, {
    title: 'Kill Bill',
    imageUrl: 'https://via.placeholder.com/150x150'
  }];

  showMovies(movies);
});