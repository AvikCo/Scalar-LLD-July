import getCountries from "./fetchData";


window.addEventListener("load", ()=>{
    const inputBox= document.querySelector(".searchInput");
    inputBox.addEventListener("input",debounce(handleSuggestions));
})


async function handleSuggestions(e){
    const keyword = e.target.value;
    const response = await handleSearch(keyword);
    
     (response);
}



function populateSuggestionBox(response){

    const suggestionBox = document.querySelector(".suggestionBox");


      if(!response.length){
        console.log("No data available");
        return;
    }

    suggestionBox.classList.add("visible");


    // before showing any result -> reste you suggestion box
    suggestionBox.innerHTML="";

    const fragment = document.createDocumentFragment();

    response.forEach(countryName => {

        const li=document.createElement("li");
        li.innerText=countryName;
        fragment.appendChild(li);
    });

    suggestionBox.appendChild(fragment);
}



async function handleSearch(keyword){

    const countriesData = await getCountries(keyword);

    console.log(typeof countriesData);

   if(typeof countriesData === "undefined"){
    return [];
   }
    
    const countryNames = countriesData.map((country)=>country.name.common);

    return countryNames;
}




function debounce(fn, delay=0){

    let timerId=null;

    return function(e){

        console.log("input added");

        if(timerId){
            console.log("clearing the previous timer");
            clearTimeout(timerId);
        }

        console.log("starting the timer");
     timerId = setTimeout(()=>{
            fn(e);
        },delay);
        

    }

}

