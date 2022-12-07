//code
document.querySelector("#search").addEventListener('click', function(){
    let showName = document.querySelector(".search-box").value
    // fetch API data
    fetch(`https://api.tvmaze.com/search/shows?q=${showName}`)
    .then((res) =>{
        return res.json();
    })
    .then((data) =>{
        
        for(let i=0; i<data.length; i++){
            //creating the div for movie card
            let mainDiv = document.querySelector(".movies-section");
            let movieCard = document.createElement('div');
            movieCard.classList.add(".movie-card");
            mainDiv.appendChild(movieCard);

            let movieImg = document.createElement('div');
            movieImg.classList.add(".movie-image");
            movieCard.appendChild(movieImg);

            let newImg = document.createElement("img");
            movieImg.appendChild(newImg);
            newImg.src = data[i].show.image.medium;
            
            let movieHeading = document.createElement('h3');
            movieHeading.classList.add('.movie-heading');
            movieCard.appendChild(movieHeading);
            movieHeading.innerText = data[i].show.name;
        }

    })
    .catch((error =>{
        console.log('Error!!!!')
    }))
})