const starC = document.querySelector(".star_container");
const countC = document.querySelector(".count");
let count;
starC.addEventListener("click", (event)=>{
    const clkEl = event.target;
    const lst = clkEl.classList;
    if(lst[0] !== "star") return
    const siblings = clkEl.parentNode.children;
    for(let idx = 0; idx < siblings.length; idx++){
        siblings[idx].classList.remove("yellow")
    }
    for(let idx = 0; idx < siblings.length; idx++){
        siblings[idx].classList.add("yellow")
        countC.querySelector("span").innerText = idx+1
        count = idx;
        if(siblings[idx] === clkEl) break;
    }
})
starC.addEventListener("mouseover",(event)=>{
    const clkEl = event.target;
    const lst = clkEl.classList;
    if(lst[0] !== "star") return
    const siblings = clkEl.parentNode.children;
    for(let idx = 0; idx < siblings.length; idx++){
        siblings[idx].classList.remove("yellow")
    }
    for(let idx = 0; idx < siblings.length; idx++){
        siblings[idx].classList.add("yellow")
        if(siblings[idx] === clkEl) break;
    }
})
starC.addEventListener("mouseleave",(event)=>{
    const clkEl = event.target;
    const siblings = starC.children;
    for(let idx = 0; idx < siblings.length; idx++){
        siblings[idx].classList.remove("yellow")
    }
    for(let idx = 0; idx <= count; idx++){
        siblings[idx].classList.add("yellow")
        if(siblings[idx] === clkEl) break;
    }
})