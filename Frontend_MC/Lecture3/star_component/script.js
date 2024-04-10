
const stars= document.querySelectorAll(".star");
const starContainer= document.querySelector(".star_container");
const count = document.querySelector("#count");


let currentRating=0;


starContainer.addEventListener("click",(e)=>{
    let elem = e.target;
    let isRequired = elem.hasAttribute("rating");

    if(!isRequired){
        return;
    }

    const rating = elem.getAttribute("rating");
    currentRating=rating;
    fillStars(currentRating);
    count.textContent=rating;
})


starContainer.addEventListener("mouseover",(e)=>{
    let elem = e.target;
    let isRequired = elem.hasAttribute("rating");

    if(!isRequired){
        return;
    }

    const rating = elem.getAttribute("rating");
    fillStars(rating);

})

starContainer.addEventListener("mouseleave",(e)=>{   
     fillStars(currentRating);
})



function fillStars(rating){
    resetStartsToDefault();
      for(let i=0;i<rating;i++){
        stars[i].classList.add("yellow");
    }
}

function resetStartsToDefault(){
     for(let i=0;i<stars.length;i++){
        stars[i].classList.remove("yellow");
    }
}

// console.log(this);

// let add = (a,b) => {
// console.log(this);
// return a+b;
// }

// add(1,2);

