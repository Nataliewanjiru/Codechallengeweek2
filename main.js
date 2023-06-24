  /* Access all the five animals buttons and a section for displaying*/
  let section = document.getElementById("section")
  let buttons = document.querySelectorAll(".button")
  let body = document.getElementById("body")
   
  
  /*Elements being created*/
  let title =document.createElement("h2")
  let image = document.createElement("img")
  
  
  let voteNumber = document.getElementById("vote")
 
  
  
  
  /* Function for all the animals loading */
  
   function first(value,section){
      if(section.style.display == "none"){
         section.style.display = "block"
         body.style.display = "none"
         
        
         title.textContent = value.name;
         section.append(title)
         
         
         image.src = value.image;
         section.append(image)
         
         
      
        voteNumber.textContent = "Votes:" + value.votes;
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
   voteNumber.textContent = 'Votes:' + value.votes
 })


 
 

 
 
 
 
 
 // Function for the vote button

 function vote(detail){
   fetch(`http://localhost:3000/characters/${detail.id}`)
      .then(response=> response.json())  
      .then(data =>{
       voteNumber.addEventListener("click" ,()=>{
          data.votes += 1
          voteNumber.textContent = "Votes:"+ data.votes

          reset(data)//Function for reset
      }
   )
   
   })
}
 




// This function now fetches the data and displays it an even votting

buttons.forEach(button =>{
   button.addEventListener('click',()=>{
       fetch(`http://localhost:3000/characters/${button.id}`)
      .then(response=> response.json())  
      .then((data)=>{
          first(data,section)// Function for display
          vote(data) //Function for voting
          
      })
   })
 })


 //For the Reset Button
 let resetButton = document.getElementById("reset")
 
 function reset(value){
   resetButton.addEventListener("click", ()=>{
      value.votes = 0
      voteNumber.textContent= "Votes:" + value.votes
   })
 }

 
