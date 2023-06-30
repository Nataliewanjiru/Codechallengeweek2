  /* Access all the five animals buttons and a section for displaying*/
  let section = document.getElementById("section")
   let body = document.getElementById("body")
   
  
  /*Elements being created*/
  let title =document.createElement("h2")
  let image = document.createElement("img")
  
  
  /* Function for all the animals loading */
  
   function first(value,section){
      if(section.style.display == "none"){
         section.style.display = "block"
         body.style.display = "none"
           
         title.textContent = value.name;
         section.append(title)  
         
         image.src = value.image;
         section.append(image) 
      } else{
         section.style.display = "none"
      }
     }
 
 //function for going back to home page
 let homeButton = document.getElementById("home")

 homeButton.addEventListener("click",()=>{
   body.style.display = "block";
   section.style.display ="none"
   title.textContent=""
   image.src = ""
 })

 // Function for the vote button
 let voteNumber = document.getElementById("vote")
function vote(detail){
  voteNumber.addEventListener("click" ,()=>{
      voteNumber.textContent = "Votes:" + detail.votes;
       detail.votes +=1;
       voteNumber.textContent = "Votes:" + detail.votes

      
       fetch(`http://localhost:3000/characters/${detail.id}`,{
         method: "PATCH",
         headers:{
            'Content-Type': 'application/json',
         },
         body:JSON.stringify({votes:detail.votes})
      })    
   })
}
 

// This function now fetches the data and displays it an even votting
var buttons = document.querySelectorAll(".button")
buttons.forEach(button =>{
   button.addEventListener('click',()=>{
       fetch(`http://localhost:3000/characters/${button.id}`)
      .then(response=> response.json())  
      .then((data)=>{
         console.log(data)
          first(data,section)// Function for display
          vote(data) //Function for voting
          reset(data)
      })
   })
 })


 
 //For the Reset Button
 
 function reset(value){
   let resetButton = document.getElementById("reset")  

   resetButton.addEventListener("click" ,()=>{
      value.votes *=0;
      voteNumber.textContent = "Votes:" + value.votes
 
     
      fetch(`http://localhost:3000/characters/${value.id}`,{
        method: "PATCH",
        headers:{
           'Content-Type': 'application/json',
        },
        body:JSON.stringify({votes:value.votes})
     }) }
 )
}