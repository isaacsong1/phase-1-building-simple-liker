// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartBtns = document.querySelectorAll(".like-glyph");

function likeCallback(event) {
  const heart = event.target;
  mimicServerCall("someURL")
  .then(function() {
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART;
    } else {
      heart.textContent = EMPTY_HEART;
    }
  })
}


for (const heartBtn of heartBtns) {
  heartBtn.addEventListener("click", likeCallback);
}


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

