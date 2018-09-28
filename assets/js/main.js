$(() => {
  function showMovies(movies) {
    const movieCards = [];
    $(movies).each((index, movie) => {
      const movieCard = getMovieHTML(movie);
      movieCards.push(movieCard);
    });
    $('#movies').html(movieCards);
  }

  function getMovieHTML(movie) {
    const movieCard = $('<div class="card my-3">');

    const cardBody = $('<div class="card-body d-flex p-0">');

    const cardImage = $('<img class="card-img w-25">');
    cardImage.attr('src', movie.imageUrl);
    cardImage.attr('alt', movie.title);

    const cardContent = $('<div class="flex-fill">');
    cardContent.append('<h4>' + movie.title + '</h4>');

    // TODO: Add more html when abstracted from file.

    cardBody.append(cardImage, cardContent);
    movieCard.html(cardBody);
    return movieCard;
  }

  const movies = [{
    title: '8 Mile',
    imageUrl: 'https://via.placeholder.com/200x200'
  }, {
    title: 'Fear and Loathing in Las Vegas',
    imageUrl: 'https://via.placeholder.com/200x200'
  }, {
    title: 'Pulp Fiction',
    imageUrl: 'https://via.placeholder.com/200x200'
  }, {
    title: 'I Love You Man',
    imageUrl: 'https://via.placeholder.com/200x200'
  }, {
    title: 'Terminator 2',
    imageUrl: 'https://via.placeholder.com/200x200'
  }, {
    title: 'Kill Bill',
    imageUrl: 'https://via.placeholder.com/200x200'
  }];

  showMovies(movies);
});