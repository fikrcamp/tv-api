//code


// let Newel =document.createElement("movie-card")
//  Newel.appendChild(movie-card);

document.querySelector('#search').addEventListener('click', () =>{
 
  let Film = document.querySelector(".search-box").value
  let Films = Film  ;
 console.log(Film)
  fetch( `https://api.tvmaze.com/search/shows?q=${Film}`)
  .then((movie) =>{
   return movie.json()
  })
  .then((data) => {
    console.log(data)

  for( let i = 0; i < data.length; i++){
   let newmovie = document.createElement('div');
   newmovie.classList.add('movie-card');
  

   console.log(data[i].show.image.medium)
   let imgcontainer = document.createElement('div');
   imgcontainer.classList.add('movie-image')
   
  console.log(data[i].show.name)

   let pic = document.createElement('img');
   pic.src = data[i].show.image.medium;
   imgcontainer.appendChild(pic);
   newmovie.appendChild(imgcontainer);

  let Mtitle = document.createElement('h3');
      Mtitle.classList.add('movie-heading')
      Mtitle.innerText = data[i].show.name;
      newmovie.appendChild(Mtitle)
      document.querySelector('.movies-section').appendChild(newmovie);


  }
  })

})
