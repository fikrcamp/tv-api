//code

document.querySelector(".button").addEventListener("click", function () {
    let film = document.querySelector(".search-box").value;
    fetch(`https://api.tvmaze.com/search/shows?q=${film}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.querySelector(".movies-section").innerHTML = ""
        data.map(function (value) {
         let movie = document.createElement("div");
         let image = document.createElement("img"); 
         let heading = document.createElement("h3");

         movie.classList.add("movie-card")
         heading.classList.add("movie-heading")
         

        //  Appending Elemnt to Parent
          movie.appendChild(image)
          movie.appendChild(heading)
          document.querySelector(".movies-section").appendChild(movie)

          // console.log(value.show.name)
          image.src = value.show.image.medium;
          heading.textContent = value.show.name;
          
        });
      });
  });
