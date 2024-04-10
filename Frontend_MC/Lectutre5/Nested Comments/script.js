const replyButton = document.querySelector(".reply_btn");
const submitButton = document.querySelector(".submit_btn");


const replyFn = (e) =>{
    const clickedEl = e.target
    clickedEl.style.display = "none"
    const nextEl = clickedEl.nextElementSibling;
    nextEl.style.display = "block"
};
const submitFn =(e)=>{
    const btn = e.target
    const inputText = btn.previousElementSibling;
    const insertedText = inputText.value;
    inputText.value = "";
    const clkdInputContainer = btn.parentNode
    clkdInputContainer.previousElementSibling.style.display = "block"

    
    const mainContainer = document.createElement("div")
    mainContainer.setAttribute("class", "main_container");
    const comment = document.createElement("div")
    comment.classList.add("comment")
    comment.textContent = insertedText;
    mainContainer.appendChild(comment);

    const replyButton = document.createElement("div")
    replyButton.classList.add("reply_btn");
    replyButton.textContent = "Reply"
    mainContainer.insertBefore(replyButton,comment.nextSibling);

    const inputContainer = document.createElement("div")
    inputContainer.classList.add("input_container")

    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("id", "input")
    inputContainer.appendChild(input);

    const submitButton = document.createElement("button");
    submitButton.classList.add("submit_btn");
    submitButton.setAttribute("type","submit");
    submitButton.textContent = "Send";
    inputContainer.appendChild(submitButton);

    mainContainer.appendChild(inputContainer);

    replyButton.addEventListener("click",replyFn);
    submitButton.addEventListener("click", submitFn);
    console.log(mainContainer)
    clkdInputContainer.parentNode.insertBefore(mainContainer, clkdInputContainer.parentNode.lastElementChild.nextSibling)

    clkdInputContainer.style.display = "none"

}

submitButton.addEventListener("click", submitFn)
replyButton.addEventListener("click",replyFn);