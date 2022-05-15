//code
// document.querySelector("#btn").addEventListener("click", function () {

//   newDiv.classList.add("text-color");
//   newHeading.innerText = "New H3";

//   console.log(newDiv);
// });
document.querySelector(".btn-search").addEventListener("click", function () {
  let input = document.querySelector(".search-box").value;
  fetch(`https://api.tvmaze.com/search/shows?q= ${input}`)
    .then(function (data) {
      return data.json();
    })
    .then((result) => {
      document.querySelector(".movies-section").innerText = "";
      result.map(function (value) {
        let newHeading = document.createElement("h3");
        let movies = document.createElement("div");
        let newimg = document.createElement("img");
        movies.appendChild(newimg);
        movies.appendChild(newHeading);
        movies.classList.add("movie-card");
        newHeading.classList.add("movie-heading");

        document.querySelector(".movies-section").appendChild(movies);
        console.log(value.show.image);
        newimg.src = value.show.image.medium;
        newHeading.innerText = value.show.name;
      });
    });
});
