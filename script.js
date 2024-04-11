// one slight change
//defining the values
const contentSection = document.querySelector("#slide")
const ActionBtn = document.querySelector(".challange-button")
const ReturnBtn = document.querySelector(".challange-return-button")

//Event lisener for ActionBtn
ActionBtn.addEventListener('click', SlideLeft)

//Event lisenert for ReturnBtn
ReturnBtn.addEventListener('click', SlideRight)

function SlideLeft(){
     if (contentSection) { 
        contentSection.classList.add('content-slide-left');
    } else {
        console.log("Error: contentSection not found.");
    }
}

function SlideRight(){
    if (contentSection) { 
        contentSection.classList.remove('content-slide-left');
    } else {
        console.log("Error: contentSection not found.");
    }
}