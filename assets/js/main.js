$(() => {
  $('#movies').on('mouseenter', '.movie', function () {
    $(this).find('.card-img-overlay').toggleClass('invisible');
  });

  $('#movies').on('mouseleave', '.movie', function () {
    $(this).find('.card-img-overlay').toggleClass('invisible');
  });

  function showMovies(movies) {
    const movieCards = [];
    $(movies).each((index, movie) => {
      const movieCard = getMovieHTML(movie);
      movieCards.push(movieCard);
    });
    $('#movies').html(movieCards);
  }

  function getMovieHTML(movie) {
    const movieCard = $('<div class="card movie">');

    const cardImage = $('<img class="card-img">');
    cardImage.attr('src', movie.imageUrl);
    cardImage.attr('alt', movie.title);

    const imageOverlay = $('<div class="card-img-overlay invisible">');
    imageOverlay.append('<h5>' + movie.title + '</h5>');
    // TODO: Add more html when abstracted from file.

    movieCard.append(cardImage, imageOverlay);

    return movieCard;
  }

  const movies = [{
    title: '8 Mile',
    imageUrl: 'https://via.placeholder.com/200x200'
  },{
    title: 'Fear and Loathing in Las Vegas',
    imageUrl: 'https://via.placeholder.com/200x200'
  },{
    title: 'Pulp Fiction',
    imageUrl: 'https://via.placeholder.com/200x200'
  },{
    title: 'I Love You Man',
    imageUrl: 'https://via.placeholder.com/200x200'
  },{
    title: 'Terminator 2',
    imageUrl: 'https://via.placeholder.com/200x200'
  },{
    title: 'Kill Bill',
    imageUrl: 'https://via.placeholder.com/200x200'
  }];

  showMovies(movies);
});