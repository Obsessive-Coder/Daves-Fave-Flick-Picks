const movies = [
 {
   "Title": "1408",
   "Genre": "Horror",
   "Sub-Genre": "Campy",
   "Year": 2007,
   "Directed By": "Mikael Håfström",
   "Written By": "Matt Greenberg, Scott Alexander, Larry Karaszewski",
   "IsFavorite": "False"
 },
 {
   "Title": "12 Angry Men",
   "Genre": "Thriller",
   "Sub-Genre": "Courtroom",
   "Year": 1957,
   "Directed By": "Sidney Lumet",
   "Written By": "Reginald Rose",
   "IsFavorite": "False"
 },
 {
   "Title": "12 Years a Slave",
   "Genre": "Drama",
   "Sub-Genre": "Historical",
   "Year": 2013,
   "Directed By": "Steve McQueen",
   "Written By": "John Ridley",
   "IsFavorite": "False"
 },
 {
   "Title": "13 Ghosts",
   "Genre": "Horror",
   "Sub-Genre": "Classic",
   "Year": 1960,
   "Directed By": "William Castle",
   "Written By": "Robb White",
   "IsFavorite": "False"
 },
 {
   "Title": "2001: A Space Odyssey",
   "Genre": "Science Fiction",
   "Sub-Genre": "Space",
   "Year": 1968,
   "Directed By": "Stanley Kubrick",
   "Written By": "Stanley Kubrick, Aurthur C. Clarke",
   "IsFavorite": "False"
 },
 {
   "Title": "Adaptation.",
   "Genre": "Surrealism",
   "Sub-Genre": "Charlie Kaufman",
   "Year": 2002,
   "Directed By": "Spike Jonze",
   "Written By": "Charlie Kaufman",
   "IsFavorite": "False"
 },
 {
   "Title": "Alice",
   "Genre": "Surrealism",
   "Sub-Genre": "Fantasy",
   "Year": 1988,
   "Directed By": "Jan Švankmajer",
   "Written By": "Jan Švankmajer",
   "IsFavorite": "False"
 },
 {
   "Title": "Alien",
   "Genre": "Horror",
   "Sub-Genre": "Space",
   "Year": 1979,
   "Directed By": "Ridley Scott",
   "Written By": "Dan O'Bannon",
   "IsFavorite": "False"
 },
 {
   "Title": "All Quiet on The Western Front",
   "Genre": "War",
   "Sub-Genre": "WWI",
   "Year": 1930,
   "Directed By": "Lewis Milestone",
   "Written By": "Maxwell Anderson, George Abbott, Del Andrews, C. Gardner Sullivan",
   "IsFavorite": "True"
 },
 {
   "Title": "American Movie",
   "Genre": "Documentary",
   "Sub-Genre": "Comedy",
   "Year": 1999,
   "Directed By": "Chris Smith",
   "Written By": "",
   "IsFavorite": "True"
 },
 {
   "Title": "Angela's Ashes",
   "Genre": "Drama",
   "Sub-Genre": "Historical",
   "Year": 1999,
   "Directed By": "Alan Parker",
   "Written By": "Laura Jones, Alan Parker",
   "IsFavorite": "False"
 },
 {
   "Title": "Apocalypse Now",
   "Genre": "War",
   "Sub-Genre": "Vietnam",
   "Year": 1979,
   "Directed By": "Francis Ford Coppola",
   "Written By": "John Milius, Francis Ford Coppola",
   "IsFavorite": "False"
 },
 {
   "Title": "Chasing Sleep",
   "Genre": "Thriller",
   "Sub-Genre": "Surrealism",
   "Year": 2001,
   "Directed By": "Michael Walker",
   "Written By": "Michael Walker",
   "IsFavorite": "True"
 },
 {
   "Title": "Cloverfield",
   "Genre": "Horror",
   "Sub-Genre": "Found Footage",
   "Year": 2008,
   "Directed By": "Matt Reeves",
   "Written By": "Drew Goddard",
   "IsFavorite": "False"
 },
 {
   "Title": "Code 46",
   "Genre": "Science Fiction",
   "Sub-Genre": "Drama",
   "Year": 2003,
   "Directed By": "Michael Winterbottom",
   "Written By": "Frank Cottrell Boyce",
   "IsFavorite": "False"
 },
 {
   "Title": "Coherence",
   "Genre": "Science Fiction",
   "Sub-Genre": "Real World",
   "Year": 2013,
   "Directed By": "James Ward Byrkit",
   "Written By": "James Ward Byrkit",
   "IsFavorite": "False"
 },
 {
   "Title": "Computer Chess",
   "Genre": "Drama",
   "Sub-Genre": "Surrealism",
   "Year": 2013,
   "Directed By": "Andrew Bujalski",
   "Written By": "Andrew Bujalski",
   "IsFavorite": "False"
 },
 {
   "Title": "Crumb",
   "Genre": "Documentary",
   "Sub-Genre": "",
   "Year": 1995,
   "Directed By": "Terry Zwigoff",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "Cube",
   "Genre": "Horror",
   "Sub-Genre": "Campy",
   "Year": 1997,
   "Directed By": "Vincenzo Natali",
   "Written By": "André Bijelic, Graeme Manson, Vincenzo Natali",
   "IsFavorite": "False"
 },
 {
   "Title": "Dagon",
   "Genre": "Horror",
   "Sub-Genre": "Campy",
   "Year": 2001,
   "Directed By": "Stuart Gordon",
   "Written By": "Dennis Paoli",
   "IsFavorite": "False"
 },
 {
   "Title": "Dig!",
   "Genre": "Documentary",
   "Sub-Genre": "Music",
   "Year": 2004,
   "Directed By": "Ondi Timoner",
   "Written By": "Ondi Timoner",
   "IsFavorite": "False"
 },
 {
   "Title": "Doctor Sleep",
   "Genre": "Thriller",
   "Sub-Genre": "Psychological",
   "Year": 2002,
   "Directed By": "Nick Willing",
   "Written By": "Nick Willing, William Brookfield",
   "IsFavorite": "False"
 },
 {
   "Title": "Dog Day Afternoon",
   "Genre": "Thriller",
   "Sub-Genre": "Crime",
   "Year": 1975,
   "Directed By": "Sidney Lumet",
   "Written By": "Frank Pierson",
   "IsFavorite": "False"
 },
 {
   "Title": "Ed Wood",
   "Genre": "Comedy",
   "Sub-Genre": "Historical",
   "Year": 1994,
   "Directors": "Tim Burton",
   "Writers": "Scott Alexander, Larry Karaszewski",
   "IsFavorite": "False"
 },
 {
   "Title": "Eternal Sunshine of the Spotless Mind",
   "Genre": "Surrealism",
   "Sub-Genre": "Charlie Kaufman",
   "Year": 2004,
   "Directed By": "Michel Gondry",
   "Written By": "Charlie Kaufman",
   "IsFavorite": "False"
 },
 {
   "Title": "Existenz",
   "Genre": "Surrealism",
   "Sub-Genre": "Cronenberg",
   "Year": 1999,
   "Directed By": "David Cronenberg",
   "Written By": "David Cronenberg",
   "IsFavorite": "False"
 },
 {
   "Title": "Faust",
   "Genre": "Drama",
   "Sub-Genre": "Supernatural",
   "Year": 2011,
   "Directed By": "Alexander Sokurov",
   "Written By": "Alexander Sokurov, Marina Koreneva, Yuri Arabov",
   "IsFavorite": "False"
 },
 {
   "Title": "From Beyond",
   "Genre": "Horror",
   "Sub-Genre": "Lovecraft",
   "Year": 1986,
   "Directed By": "Stuart Gordon",
   "Written By": "Dennis Paoli",
   "IsFavorite": "False"
 },
 {
   "Title": "Full Metal Jacket",
   "Genre": "War",
   "Sub-Genre": "Vietnam",
   "Year": 1987,
   "Directed By": "Stanley Kubrick",
   "Written By": "Stanley Kubrick, Michael Herr, Gustav Hasford",
   "IsFavorite": "False"
 },
 {
   "Title": "Gattaca",
   "Genre": "Science Fiction",
   "Sub-Genre": "Thriller",
   "Year": 1997,
   "Directed By": "Andrew Niccol",
   "Written By": "Andrew Niccol",
   "IsFavorite": "False"
 },
 {
   "Title": "Get Out",
   "Genre": "Horror",
   "Sub-Genre": "Social Justice",
   "Year": 2017,
   "Directed By": "Jordan Peele",
   "Written By": "Jordan Peele",
   "IsFavorite": "False"
 },
 {
   "Title": "Ghost World",
   "Genre": "Comedy",
   "Sub-Genre": "Surrealism",
   "Year": 2001,
   "Directed By": "Terry Zwigoff",
   "Written By": "Daniel Clowes, Terry Zwigoff",
   "IsFavorite": "False"
 },
 {
   "Title": "Goodfellas",
   "Genre": "Thriller",
   "Sub-Genre": "Gangster",
   "Year": 1990,
   "Directed By": "Martin Scorcese",
   "Written By": "Nicholas Pileggi, Martin Scorsese",
   "IsFavorite": "False"
 },
 {
   "Title": "Harlan County U.S.A.",
   "Genre": "Documentary",
   "Sub-Genre": "Social Justice",
   "Year": 1977,
   "Directed By": "Barbara Kopple",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "Hereditary",
   "Genre": "Horror",
   "Sub-Genre": "Supernatural",
   "Year": 2018,
   "Directed By": "Ari Aster",
   "Written By": "Ari Aster",
   "IsFavorite": "False"
 },
 {
   "Title": "House on Haunted Hill",
   "Genre": "Horror",
   "Sub-Genre": "Classic",
   "Year": 1959,
   "Directed By": "William Castle",
   "Written By": "Robb White",
   "IsFavorite": "False"
 },
 {
   "Title": "In The Mouth of Madness",
   "Genre": "Horror",
   "Sub-Genre": "Lovecraft",
   "Year": 1994,
   "Directed By": "John Carpenter",
   "Written By": "Michael De Luca",
   "IsFavorite": "True"
 },
 {
   "Title": "Invasion of the Body Snatchers",
   "Genre": "Science Fiction",
   "Sub-Genre": "Extraterrestrial",
   "Year": 1978,
   "Directed By": "Philip Kaufman",
   "Written By": "W. D. Richter",
   "IsFavorite": "False"
 },
 {
   "Title": "It Follows",
   "Genre": "Horror",
   "Sub-Genre": "Supernatural",
   "Year": 2014,
   "Directed By": "David Robert Mitchell",
   "Written By": "David Robert Mitchell",
   "IsFavorite": "False"
 },
 {
   "Title": "JFK.",
   "Genre": "Thriller",
   "Sub-Genre": "Conspiracy",
   "Year": 1991,
   "Directed By": "Oliver Stone",
   "Written By": "Oliver Stone, Zachary Sklar",
   "IsFavorite": "False"
 },
 {
   "Title": "Jaws",
   "Genre": "Thriller",
   "Sub-Genre": "Creature",
   "Year": 1975,
   "Directed By": "Steven Spielberg",
   "Written By": "Peter Benchley, Carl Gottlieb",
   "IsFavorite": "False"
 },
 {
   "Title": "King of Kong",
   "Genre": "Documentary",
   "Sub-Genre": "Comedy",
   "Year": 2007,
   "Directed By": "Seth Gordon",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "Kung Fu Elliot",
   "Genre": "Documentary",
   "Sub-Genre": "Comedy",
   "Year": 2014,
   "Directed By": "Matthew Bauckman, Jaret Belliveau",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "La Haine",
   "Genre": "Drama",
   "Sub-Genre": "Social Justice",
   "Year": 1995,
   "Directed By": "Mathieu Kassovitz",
   "Written By": "Mathieu Kassovitz",
   "IsFavorite": "True"
 },
 {
   "Title": "Lake Mungo",
   "Genre": "Horror ",
   "Sub-Genre": "Supernatural",
   "Year": 2008,
   "Directed By": "Joel Anderson",
   "Written By": "Joel Anderson",
   "IsFavorite": "False"
 },
 {
   "Title": "Lost Soul",
   "Genre": "Documentary",
   "Sub-Genre": "Comedy",
   "Year": 2014,
   "Directed By": "David Gregory",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "Mirage Men",
   "Genre": "Documentary",
   "Sub-Genre": "Conspiracy",
   "Year": 2013,
   "Directed By": "John Lundberg",
   "Written By": "Mark Pilkington",
   "IsFavorite": "True"
 },
 {
   "Title": "Monster Camp",
   "Genre": "Documentary",
   "Sub-Genre": "Comedy",
   "Year": 2007,
   "Directed By": "Cullen Hoback",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "Monsters",
   "Genre": "Science Fiction",
   "Sub-Genre": "Extraterrestrial",
   "Year": 2010,
   "Directed By": "Gareth Edwards",
   "Written By": "Gareth Edwards",
   "IsFavorite": "False"
 },
 {
   "Title": "Mulholland Drive",
   "Genre": "Surrealism",
   "Sub-Genre": "Lynch",
   "Year": 2001,
   "Directed By": "David Lynch",
   "Written By": "David Lynch",
   "IsFavorite": "False"
 },
 {
   "Title": "Naked Lunch",
   "Genre": "Surrealism",
   "Sub-Genre": "Cronenberg",
   "Year": 1991,
   "Directed By": "David Cronenberg",
   "Written By": "David Cronenberg",
   "IsFavorite": "False"
 },
 {
   "Title": "Play Misty for Me",
   "Genre": "Thriller",
   "Sub-Genre": "Psychological",
   "Year": 1971,
   "Directed By": "Clint Eastwood",
   "Written By": "Jo Heims, Dean Riesner",
   "IsFavorite": "False"
 },
 {
   "Title": "Primer",
   "Genre": "Science Fiction",
   "Sub-Genre": "Psychological",
   "Year": 2004,
   "Directed By": "Shane Carruth",
   "Written By": "Shane Carruth",
   "IsFavorite": "False"
 },
 {
   "Title": "Pulp Fiction",
   "Genre": "Tarantino",
   "Sub-Genre": "Crime",
   "Year": 1994,
   "Directed By": "Quentin Tarantino",
   "Written By": "Quentin Tarantino",
   "IsFavorite": "False"
 },
 {
   "Title": "Raging Bull",
   "Genre": "Drama",
   "Sub-Genre": "",
   "Year": 1980,
   "Directed By": "Martin Scorcese",
   "Written By": "Paul Schrader, Mardik Martin",
   "IsFavorite": "False"
 },
 {
   "Title": "Repo Man",
   "Genre": "Science Fiction",
   "Sub-Genre": "Campy",
   "Year": 1984,
   "Directed By": "Alex Cox",
   "Written By": "Alex Cox",
   "IsFavorite": "True"
 },
 {
   "Title": "Robocop",
   "Genre": "Science Fiction",
   "Sub-Genre": "Campy",
   "Year": 1987,
   "Directed By": "Paul Verhoeven",
   "Written By": "Edward Neumeier",
   "IsFavorite": "False"
 },
 {
   "Title": "Room 237",
   "Genre": "Documentary",
   "Sub-Genre": "Conspiracy",
   "Year": 2012,
   "Directed By": "Rodney Ascher",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "Rosemary's Baby",
   "Genre": "Horror",
   "Sub-Genre": "Psychological",
   "Year": 1968,
   "Directed By": "Roman Polanski",
   "Written By": "Roman Polanski",
   "IsFavorite": "False"
 },
 {
   "Title": "Second Skin",
   "Genre": "Documentary",
   "Sub-Genre": "Comedy",
   "Year": 2008,
   "Directed By": "Juan Carlos Piñeiro Escoriaza",
   "Written By": "Peter Schieffelin Brauer,  Victor Piñeiro Escoriaza",
   "IsFavorite": "False"
 },
 {
   "Title": "Session 9 ",
   "Genre": "Horror",
   "Sub-Genre": "Supernatural",
   "Year": 2001,
   "Directed By": "Brad Anderson",
   "Written By": "Brad Anderson, Stephen Gevedon",
   "IsFavorite": "False"
 },
 {
   "Title": "Sleepaway Camp",
   "Genre": "Horror",
   "Sub-Genre": "Campy",
   "Year": 1983,
   "Directed By": "Robert Hiltzik",
   "Written By": "Robert Hiltzik",
   "IsFavorite": "False"
 },
 {
   "Title": "Stand By Me",
   "Genre": "Drama",
   "Sub-Genre": "Comedy",
   "Year": 1986,
   "Directed By": "Rob Reiner",
   "Written By": "Bruce A. Evans, Raynold Gideon",
   "IsFavorite": "False"
 },
 {
   "Title": "Starship Troopers",
   "Genre": "Science Fiction",
   "Sub-Genre": "Campy",
   "Year": 1997,
   "Directed By": "Paul Verhoeven",
   "Written By": "Edward Neumeier",
   "IsFavorite": "False"
 },
 {
   "Title": "Sunset Boulevard",
   "Genre": "Thriller",
   "Sub-Genre": "Drama",
   "Year": 1950,
   "Directed By": "Billy Wilder",
   "Written By": "Charles Brackett, Billy Wilder, D. M. Marshman Jr.",
   "IsFavorite": "False"
 },
 {
   "Title": "Tabloid",
   "Genre": "Documentary",
   "Sub-Genre": "Crime",
   "Year": 2010,
   "Directed By": "Erol Morris",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "The African Queen",
   "Genre": "Thriller",
   "Sub-Genre": "Classic",
   "Year": 1951,
   "Directed By": "John Huston",
   "Written By": "John Huston, James Agee, Peter Viertel, John Collier",
   "IsFavorite": "False"
 },
 {
   "Title": "The Andromeda Strain",
   "Genre": "Science Fiction",
   "Sub-Genre": "Thriller",
   "Year": 1971,
   "Directed By": "Robert Wise",
   "Written By": "Nelson Gidding",
   "IsFavorite": "False"
 },
 {
   "Title": "The Babadook",
   "Genre": "Horror",
   "Sub-Genre": "Supernatural",
   "Year": 2014,
   "Directed By": "Jennifer Kent",
   "Written By": "Jennifer Kent",
   "IsFavorite": "False"
 },
 {
   "Title": "The Blair Witch Project",
   "Genre": "Horror",
   "Sub-Genre": "Found Footage",
   "Year": 1999,
   "Directed By": "Daniel Myrick, Eduardo Sanchez",
   "Written By": "Daniel Myrick, Eduardo Sanchez",
   "IsFavorite": "True"
 },
 {
   "Title": "The Corporation",
   "Genre": "Documentary",
   "Sub-Genre": "Social Justice",
   "Year": 2003,
   "Directed By": "Mark Achbar, Jennifer Abbott",
   "Written By": "Joel Bakan, Harold Crooks, Mark Achbar",
   "IsFavorite": "False"
 },
 {
   "Title": "The Deer Hunter",
   "Genre": "War",
   "Sub-Genre": "Vietnam",
   "Year": 1978,
   "Directed By": "Michael Cimino",
   "Written By": "Deric Washburn",
   "IsFavorite": "False"
 },
 {
   "Title": "The Departed",
   "Genre": "Thriller",
   "Sub-Genre": "Gangster",
   "Year": 2006,
   "Directed By": "Martin Scorcese",
   "Written By": "William Monahan",
   "IsFavorite": "False"
 },
 {
   "Title": "The Dungeon Masters",
   "Genre": "Documentary",
   "Sub-Genre": "Comedy",
   "Year": 2008,
   "Directed By": "Keven McAlester",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "The Game ",
   "Genre": "Thriller",
   "Sub-Genre": "Psychological",
   "Year": 1997,
   "Directed By": "David Fincher",
   "Written By": "John Brancato, Michael Ferris",
   "IsFavorite": "False"
 },
 {
   "Title": "The Ghost and The Darkness",
   "Genre": "Thriller",
   "Sub-Genre": "Creature",
   "Year": 1996,
   "Directed By": "Stephen Hopkins",
   "Written By": "William Goldman",
   "IsFavorite": "False"
 },
 {
   "Title": "The Haunting",
   "Genre": "Horror",
   "Sub-Genre": "Classic",
   "Year": 1963,
   "Directed By": "Robert Wise",
   "Written By": "Nelson Gidding",
   "IsFavorite": "False"
 },
 {
   "Title": "The Imposter",
   "Genre": "Documentary",
   "Sub-Genre": "Crime",
   "Year": 2012,
   "Directed By": "Bart Layton",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "The Invisible Man",
   "Genre": "Horror",
   "Sub-Genre": "Classic",
   "Year": 1933,
   "Directed By": "James Whale",
   "Written By": "R. C. Sherriff",
   "IsFavorite": "False"
 },
 {
   "Title": "The Invitation",
   "Genre": "Thriller",
   "Sub-Genre": "Horror",
   "Year": 2015,
   "Directed By": "Karyn Kusama",
   "Written By": "Phil Hay, Matt Manfredi",
   "IsFavorite": "False"
 },
 {
   "Title": "The Last Man on Earth",
   "Genre": "Horror",
   "Sub-Genre": "Classic",
   "Year": 1964,
   "Directed By": "Sidney Salkow, Ubaldo B. Ragona",
   "Written By": "Logan Swanson, William F. Leicester",
   "IsFavorite": "False"
 },
 {
   "Title": "The Manchurian Candidate",
   "Genre": "Thriller",
   "Sub-Genre": "Conspiracy",
   "Year": 2004,
   "Directed By": "Johnathan Demme",
   "Written By": "Daniel Pyne, Dean Deorgaris",
   "IsFavorite": "False"
 },
 {
   "Title": "The Mist",
   "Genre": "Horror",
   "Sub-Genre": "Creature",
   "Year": 2007,
   "Directed By": "Frank Darabont",
   "Written By": "Frank Darabont",
   "IsFavorite": "False"
 },
 {
   "Title": "The Mothman Prophecies",
   "Genre": "Horror",
   "Sub-Genre": "Supernatural",
   "Year": 2002,
   "Directed By": "Mark Pellington",
   "Written By": "Richard Hatem",
   "IsFavorite": "True"
 },
 {
   "Title": "The Night of The Hunter",
   "Genre": "Thriller",
   "Sub-Genre": "Classic",
   "Year": 1955,
   "Directed By": "Charles Laughton",
   "Written By": "James Agee",
   "IsFavorite": "False"
 },
 {
   "Title": "The Nightmare",
   "Genre": "Documentary",
   "Sub-Genre": "Horror",
   "Year": 2015,
   "Directed By": "Rodney Ascher",
   "Written By": "",
   "IsFavorite": "True"
 },
 {
   "Title": "The Ninth Gate",
   "Genre": "Thriller",
   "Sub-Genre": "Campy",
   "Year": 1999,
   "Directed By": "Roman Polanski",
   "Written By": "John Brownjohn, Roman Polanski, Enrique Urbizu",
   "IsFavorite": "False"
 },
 {
   "Title": "The Others",
   "Genre": "Horror",
   "Sub-Genre": "Supernatural",
   "Year": 2001,
   "Directed By": "Alejandro Amenábar",
   "Written By": "Alejandro Amenábar",
   "IsFavorite": "False"
 },
 {
   "Title": "The Quiet Earth",
   "Genre": "Science Fiction",
   "Sub-Genre": "Post-Apocalyptic",
   "Year": 1985,
   "Directed By": "Geoff Murphy",
   "Written By": "Bill Baer, Bruno Lawrence, Sam Pillsbury",
   "IsFavorite": "False"
 },
 {
   "Title": "The Rainmaker",
   "Genre": "Thriller",
   "Sub-Genre": "Courtroom",
   "Year": 1997,
   "Directed By": "Francis Ford Coppola",
   "Written By": "Francis Ford Coppola",
   "IsFavorite": "False"
 },
 {
   "Title": "The Return of the Living Dead",
   "Genre": "Horror",
   "Sub-Genre": "Campy",
   "Year": 1985,
   "Directed By": "Dan O'Bannon",
   "Written By": "Dan O'Bannon",
   "IsFavorite": "False"
 },
 {
   "Title": "The Sandlot",
   "Genre": "Comedy",
   "Sub-Genre": "",
   "Year": 1997,
   "Directed By": "David Mickey Evans",
   "Written By": "David Mickey Evans, Robert Gunter",
   "IsFavorite": "False"
 },
 {
   "Title": "The Secret in Their Eyes",
   "Genre": "Thriller",
   "Sub-Genre": "Crime",
   "Year": 2009,
   "Directed By": "Juan Jose Campanella",
   "Written By": "Juan Jose Campanella, Eduardo Sacheri",
   "IsFavorite": "Foreign"
 },
 {
   "Title": "The Shining",
   "Genre": "Horror",
   "Sub-Genre": "Psychological",
   "Year": 1980,
   "Directed By": "Stanley Kubrick",
   "Written By": "Stanley Kubrick, Diane Johnson",
   "IsFavorite": "True"
 },
 {
   "Title": "The Tenant",
   "Genre": "Thriller",
   "Sub-Genre": "Psychological",
   "Year": 1976,
   "Directed By": "Roman Polanski",
   "Written By": "Roland Topor, Gérard Brach, Roman Polanski",
   "IsFavorite": "False"
 },
 {
   "Title": "The Thing",
   "Genre": "Horror",
   "Sub-Genre": "Creature",
   "Year": 1982,
   "Directed By": "John Carpenter",
   "Written By": "Bill Lancaster",
   "IsFavorite": "False"
 },
 {
   "Title": "The Trial",
   "Genre": "Surrealism",
   "Sub-Genre": "Psychological",
   "Year": 1962,
   "Directed By": "Orson Welles",
   "Written By": "Orson Welles",
   "IsFavorite": "True"
 },
 {
   "Title": "The Woman Who Wasn't There",
   "Genre": "Documentary",
   "Sub-Genre": "Crime",
   "Year": 2012,
   "Directed By": "Angelo J. Guglielmo Jr.",
   "Written By": "",
   "IsFavorite": "False"
 },
 {
   "Title": "Threads",
   "Genre": "Science Fiction",
   "Sub-Genre": "Horror",
   "Year": 1984,
   "Directed By": "Mick Jackson",
   "Written By": "Barry Hines",
   "IsFavorite": "True"
 },
 {
   "Title": "Total Recall",
   "Genre": "Science Fiction",
   "Sub-Genre": "Campy",
   "Year": 1990,
   "Directed By": "Paul Verhoeven",
   "Written By": "Dan O'Bannon, Gary Oldman, Ronald Shusett",
   "IsFavorite": "False"
 },
 {
   "Title": "Upstream Color",
   "Genre": "Science Fiction",
   "Sub-Genre": "Psychological",
   "Year": 2013,
   "Directed By": "Shane Carruth",
   "Written By": "Shane Carruth",
   "IsFavorite": "False"
 },
 {
   "Title": "Waiting for Hockney",
   "Genre": "Documentary",
   "Sub-Genre": "Drama",
   "Year": 2008,
   "Directed By": "Julie Checkoway",
   "Written By": "Julie Checkoway, Neal Checkoway, Chris A. Peterson",
   "IsFavorite": "False"
 },
 {
   "Title": "War of The Worlds",
   "Genre": "Horror",
   "Sub-Genre": "Classic",
   "Year": 1953,
   "Directed By": "Byron Haskin",
   "Written By": "Barré Lyndon",
   "IsFavorite": "False"
 },
 {
   "Title": "Whiplash",
   "Genre": "Drama",
   "Sub-Genre": "Psychological",
   "Year": 2014,
   "Directed By": "Damien Chazelle",
   "Written By": "Damien Chazelle",
   "IsFavorite": "False"
 },
 {
   "Title": "Why We Fight",
   "Genre": "Documentary",
   "Sub-Genre": "Social Justice",
   "Year": 2005,
   "Directed By": "Eugene Jareki ",
   "Written By": "Eugene Jareki",
   "IsFavorite": "False"
 },
 {
   "Title": "Willy Wonka and the Chocolate Factory",
   "Genre": "Musical",
   "Sub-Genre": "Comedy",
   "Year": 1971,
   "Directed By": "Mel Stuart",
   "Written By": "Roald Dahl, David Seltzer",
   "IsFavorite": "True"
 },
 {
   "Title": "Word Wars",
   "Genre": "Documentary",
   "Sub-Genre": "Comedy",
   "Year": 2004,
   "Directed By": "Eric Chaikin, Julian Petrillo",
   "Written By": "",
   "IsFavorite": "False"
 }
]