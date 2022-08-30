// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let like=document.querySelectorAll(".like-glyph")
console.log(like)
like.forEach(like => like.addEventListener('click',()=>{
  console.log("clicked")
  return mimicServerCall()
  .then(res => console.log(res))
  .then(()=>{
    if(like.innerText === EMPTY_HEART){ 
    // if(like === EMPTY_HEART){ 
      like.innerText =FULL_HEART
    like.className="activated-heart"

    }else{
      like.innerText=EMPTY_HEART
      like.classList.remove("activated-heart")
    }
    // like.classList.remove("activated-heart")
    

  })
  .catch(function (error) {
    setTimeout( ()=>{
      let error=document.querySelector("#modal")
      error.classList.remove("hidden")
    },3000)
    

  });

}))



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
