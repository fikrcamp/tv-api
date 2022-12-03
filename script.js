  //code

let search = document.querySelector("#search");

search.addEventListener("click",()=>{

    let input =document.querySelector("#input_search").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{

        //starting the for loop 

   for(let i=0 ;i<data.length;i++){
    
    let movies_section = document.querySelector(".movies-section");
    let new_movie_card = document.createElement("div");
    let new_movie_image = document.createElement("div");
    let new_h3 = document.createElement("h3");
    let new_image = document.createElement("img");
     
    new_movie_card.classList.add("movie-card")
    new_movie_image.classList.add("movie-image")
    new_h3.classList.add("movie-heading")

    // append the child with their parent elemnets
    movies_section.appendChild(new_movie_card)
    new_movie_card.appendChild(new_movie_image);
    new_movie_card.appendChild(new_h3)
    new_movie_image.appendChild(new_image)

    // creating the  src attribue
     new_image.setAttribute("src" , data[i].show.image.medium)
    
     new_h3.innerHTML=data[i].show.name
    
    }

    })
    .catch(()=>{
        console.log("Error!")
    })
    
})
