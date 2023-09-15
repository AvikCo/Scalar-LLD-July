let currentFetchController = null;

async function getCountries(keyword){
    try{

        //some previous request is in flight
        if(currentFetchController!==null){

            //cancel the previous 
            currentFetchController.abort();
        }
    
    
    let abbortController = new AbortController();

    //assinging a new controller to currentFetchController
    currentFetchController = abbortController;

    const rawResponse = await fetch(`https://restcountries.com/v3.1/name/${keyword}`,{
        signal:abbortController.signal
    });

    console.log(rawResponse);

    // i have recieved the response
    currentFetchController=null;
    
    const response = await rawResponse.json();

    if(rawResponse.status===200){
        return response;
    }

    if(rawResponse.status==404){
        console.log("Page not found");
        return [];
    }
    return [];

    }
    catch(err){
        console.log("Fetch Error:",err);
    }
}


export default getCountries;