//code

document.getElementById("search").addEventListener('click',()=>{
      
   let movie = document.querySelector(".search-box").value

fetch(`https://api.tvmaze.com/search/shows?q=${movie}`)
.then((res)=>{
    return res.json()
})
.then((data)=>{
    

   for(let i = 0; i < data.length; i++){
    
  let Div1 = document.createElement("div")
  Div1.classList.add("movies-section")
  let main = document.querySelector(".main")
  main.appendChild(Div1)
  let container = document.querySelector(".container")
  container.appendChild(Div1)
  let Div2 = document.createElement("div")
  Div2.classList.add("movie-card")
 Div1.appendChild(Div2)
 let Div3 = document.createElement("div")
  Div3.classList.add("movie-image")
 Div2.appendChild(Div3)
 let img = document.createElement("img")
 Div3.appendChild(img)
 img.src = data[i].show.image.medium

  
 let h3 = document.createElement("H3")
  h3.classList.add("movie-heading")
  h3.innerHTML = data[i].show.name;
 Div2.appendChild(h3)
 
   }

})
})

