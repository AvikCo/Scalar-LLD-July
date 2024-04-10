import debounce from './debounce.js'
let currentAbortController = null;
window.addEventListener("load", (e)=>{
    const inputBoxEl = document.querySelector(".inputBox")
    inputBoxEl.addEventListener("input",debounce(typeEventFunction))
})

const typeEventFunction = async (e) =>{
    const enteredText = e.target.value;
    const countriesList = await getCountries(enteredText);
    populateList(countriesList);
}

const populateList = (list) => {
    const ulEl = document.querySelector(".suggestionBox");
    const liFragment = document.createDocumentFragment();
    list.forEach(element => {
        const liEl = document.createElement("li");
        liEl.textContent = element;
        liFragment.appendChild(liEl);
    });
    ulEl.innerHTML = ""
    ulEl.appendChild(liFragment)
    ulEl.classList.remove("hidden")
}

const getCountries = async (enteredText) => {
    let abortController = new AbortController();
    try{
        if(currentAbortController) abortController.abort();
        else currentAbortController = abortController;
        const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${enteredText}`,{
            signal: currentAbortController.signal
        })
        const jsonResponse = await rawResponse.json();
        currentAbortController = null;
        const countries = jsonResponse.map(countryObj => countryObj.name.common)
        return countries;

        }
        catch(ex){
            console.log("some Error Occured: ",ex)
        }

}