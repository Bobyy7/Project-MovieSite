const movies = [
  {
    name: "Parasite",
    releaseDate: 2019,
    imdbRating: 8.5,
    director: "Bong Joon Ho",
    stars: ["Song Kang-ho", "Lee Sun-Kyun", "Cho Yeo-jeong"],
    img: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Forrest Gump",
    releaseDate: 1994,
    imdbRating: 8.8,
    director: "Robert Zemeckis",
    stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    img: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Hachi: A Dog's Tale",
    releaseDate: 2009,
    imdbRating: 8.1,
    director: "Lasse Hallström",
    stars: ["Richard Gere", "Joan Allen", "Cary-Hiroyuki Tagawa"],
    img: "https://m.media-amazon.com/images/M/MV5BNTU5NjYyYTgtZGQ3My00MzRhLThjNGYtZmVjN2JjYjhkMjhhXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Breaking Bad",
    releaseDate: "2008 - 2013",
    imdbRating: 9.5,
    director: "Vince Gilligan",
    stars: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    img: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Chernobyl",
    releaseDate: 2019,
    imdbRating: 9.3,
    director: "Craig Mazin",
    stars: ["Jared Harris", "Jessie Buckley", "Stellan Skarsgård"],
    img: "https://m.media-amazon.com/images/S/pv-target-images/a184cd3e5b1ef34ffcaa1950324be3fcc050a00d98c5e88a27f90acbcdc2e4cb.jpg",
  },
  {
    name: "Pelé",
    releaseDate: 2021,
    imdbRating: 7.0,
    director: ["Ben Nicholas", "David Tryhorn"],
    stars: ["Pelé", "Muhammad Ali", "Amarlido"],
    img: "https://m.media-amazon.com/images/M/MV5BMjhiNTI2NWMtMjhmYi00MGIyLTg3MGQtNjljYTcxM2I2NWI1XkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Ronaldo",
    releaseDate: 2015,
    imdbRating: 6.3,
    director: "Anthony Wonke",
    stars: ["Lionel Messi", "Cristiona Ronaldo", "Dolores Aveiro"],
    img: "https://m.media-amazon.com/images/M/MV5BNzMyMTM1MjQxNF5BMl5BanBnXkFtZTgwMjY4NTE5NjE@._V1_.jpg",
  },
  {
    name: "Goal! The Dream Begins",
    releaseDate: 2005,
    imdbRating: 6.7,
    director: ["Mike Jefferies", "Adrian Butchart", "Dick Clement"],
    stars: ["Kuno Becker", "Alessandro Nivola", "Anna Friel"],
    img: "https://m.media-amazon.com/images/M/MV5BMjAxNDk2Njk1OV5BMl5BanBnXkFtZTcwOTE5MzIzMQ@@._V1_.jpg",
  },
  {
    name: "Social Network",
    releaseDate: 2010,
    imdbRating: 7.8,
    director: "David Fincher",
    stars: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
    img: "https://m.media-amazon.com/images/M/MV5BMjlkNTE5ZTUtNGEwNy00MGVhLThmZjMtZjU1NDE5Zjk1NDZkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Steve Jobs",
    releaseDate: 2015,
    imdbRating: 7.2,
    director: "Danny Boyle",
    stars: ["Micheal Fassbender", "Kate Winslet", "Seth Rogen"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekORXXMoYezRXYUmGanedy6v8bHE7JSroQsXnmOkNrmFYBigEKo_cTD8&s=10",
  },
];

const container = document.getElementById("container-Movie");

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];

  // Shine elementuud
  const card = document.createElement("div");
  card.classList.add("add");

  const movieName = document.createElement("h1");
  const releasedate = document.createElement("p");
  const imdb = document.createElement("p");
  const directorr = document.createElement("h2");
  const casts = document.createElement("h3");
  const imgg = document.createElement("img");

  movieName.textContent = movie.name;
  releasedate.textContent = movie.releaseDate;
  directorr.textContent = movie.director;
  imdb.textContent = movie.imdbRating;
  casts.textContent = movie.stars;
  imgg.src = movie.img;

  card.appendChild(movieName);
  card.appendChild(releasedate);
  card.appendChild(imdb);
  card.appendChild(directorr);
  card.appendChild(casts);
  card.appendChild(imgg);

  container.appendChild(card);

  movieName.classList.add("");
}
