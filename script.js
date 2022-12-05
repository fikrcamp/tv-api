let search = document.querySelector("#search");

search.addEventListener("click",()=>{

    let input =document.querySelector("#searchinput").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{

        //starting the for loop 

        for(let i = 0; i< data.length;i++){
            // console.log(data[i].show.name)
           
       let moviesection  =   document.querySelector(".movies-section")
           

       let movieCard = document.createElement("div")
        movieCard.classList.add(".movie-card")

      let  movieimage = document.createElement("div")
        movieimage.classList.add(".movie-image")

    let    newimage = document.createElement("img")
     let   h3 = document.createElement("h3")
        h3.classList.add(".movie-heading")
        
            moviesection.appendChild(movieCard)
            movieCard.appendChild(movieimage)
            movieCard.appendChild(h3)
            movieimage.appendChild(newimage)
            newimage.setAttribute("src" , data[i].show.image.medium)
        //    image.src = data[i].show.image.medium

           h3.innerHTML = data[i].show.name
    
    }

    })
    .catch(()=>{
        console.log("Error!")
    })
    
})