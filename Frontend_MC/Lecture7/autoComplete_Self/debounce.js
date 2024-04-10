const debounce = (fn, delay = 1000) =>{
    let existingTimerVal = null;
    return (e)=>{
    if(existingTimerVal) clearTimeout(existingTimerVal)

    existingTimerVal = setTimeout(()=>{
        fn(e);
    },delay)
    }
}

export default debounce;