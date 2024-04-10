const addButton = document.querySelector(".add-button")
const deleteButton = document.querySelector(".delete-button")
const modelCont = document.querySelector(".modal-cont")
const mainCont = document.querySelector(".main")
const pendingCont = document.querySelector(".pending_cont")
const finishedCont = document.querySelector(".finished_cont")
const priorityModalButtons = document.querySelector(".priority-cont")
const priorityToolBox =  document.querySelector(".toolbox-priority")


let allTickets = localStorage.getItem("kanbanTickets") || [];

if(typeof(allTickets) === "string"){
allTickets = JSON.parse(allTickets);
console.log("Storage object available")
populateUI();
}

function populateUI(){
for(let i = 0; i < allTickets.length; i++){
   createCardBox(allTickets[i].message, allTickets[i].ticketId, allTickets[i].color, allTickets[i].isPending)
}
}
addButton.addEventListener("click",(e)=>{
    modelCont["style"]["display"] = "flex";
})


//adding text 
modelCont.addEventListener("keypress",(e)=>{
if(e.key !== "Enter") return;
//save the container and hide
const enteredText = e.target.value;
if(enteredText.trim().length !== 0) {
const { randomUUID } = new ShortUniqueId({ length: 10 });
const uniqueId = randomUUID();
const chosenColor = modelCont.querySelector(".selected").classList[1]
e.target.value = ""
console.log("id", uniqueId)
createCardBox(enteredText, uniqueId, chosenColor, true)
let ticketObj={
    ticketId: uniqueId,
    color: chosenColor,
    message: enteredText,
    isPending: true
}
allTickets.push(ticketObj);
updateInLocalStorage();
}
modelCont["style"]["display"] = "none"
}) 


//selecting a modal colour button
priorityModalButtons.addEventListener("click", e=>{
    if(e.target === e.currentTarget) return;
    const buttons = priorityModalButtons.querySelectorAll(".priority-select")
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("selected")
    }
    e.target.classList.add("selected")
})




//creating a card message box
function createCardBox(message, uniqueId, chosenColor, isPending){

    let createdCont = document.createElement("div")
    createdCont.setAttribute("draggable", true)
createdCont.setAttribute("class", "card-cont")
createdCont.innerHTML = `<div class="card-color ${chosenColor}"></div>
<div class="card-ticket">#${uniqueId}</div>
<div class="card-message">${message}</div>
<div class="card-lock-status">
    <i class="fa-solid fa-lock"></i>
</div>`

/*********adding click event listener*******/
createdCont.addEventListener("click",(e)=>{
    const isDeleteActivated = deleteButton.classList.contains("red")
    if (!isDeleteActivated)
        return;

        createdCont.remove();
        let currId = createdCont.querySelector(".card-ticket").textContent.split("#")[1]
        allTickets = allTickets.filter((ticketObj)=>ticketObj.ticketId !== currId)
        updateInLocalStorage();
        createdCont = null;
})
/*****************adding event on lock click***********/
let lockEl = createdCont.querySelector(".card-lock-status");
let ticketEditableArea = createdCont.querySelector(".card-message")
AddLockUnlockFeature(lockEl, ticketEditableArea);

/*****************Change color on ticket header click***********/
let ticketHeader = createdCont.querySelector(".card-color")
AddColourChangeFeature(ticketHeader)
if(isPending)
    pendingCont.appendChild(createdCont);
else
    finishedCont.appendChild(createdCont)

}

//selecting toolbox colour buttons
priorityToolBox.addEventListener("click", (e)=>{
    if(e.target === e.currentTarget) return;
    const toolBoxButtons = document.querySelectorAll(".filter-button")
    for(let i = 0; i < toolBoxButtons.length; i++){
        toolBoxButtons[i].classList.remove("selected");
    }
    const selectedColor = e.target.classList[1]
    const currColourBoxes = document.querySelectorAll(".card-color")
    for(let i = 0; i < currColourBoxes.length; i++){
        if(!currColourBoxes[i].classList.contains(selectedColor)){
            currColourBoxes[i].parentNode["style"]["display"] = "none"
        }else{
            currColourBoxes[i].parentNode["style"]["display"]= "block"
        }
    }
    e.target.classList.add("selected")
})

//double clicking toolbox colout buttons
priorityToolBox.addEventListener("dblclick", (e)=>{
    if(e.target === e.currentTarget) return;
    const toolBoxButtons = document.querySelectorAll(".filter-button")
    const cardColorBoxs = document.querySelectorAll(".card-color");
    e.target.classList.remove("selected")
    const selectedColor = e.target.classList[1]
    for(let i = 0; i < cardColorBoxs.length; i++){
        cardColorBoxs[i].parentNode["style"]["display"]= "block"
    }
})

//clicking on delete button
deleteButton.addEventListener("click",e=>{
    deleteButton.classList.toggle("red")
})

function AddLockUnlockFeature(lockButton, editableArea){
    lockButton.addEventListener("click",lockUnlockEvent)
    function lockUnlockEvent(e){
        const isLock = e.target.classList.contains("fa-lock")
        if(isLock){
            e.target.classList.remove("fa-lock")    
            e.target.classList.add("fa-unlock")    
            editableArea.setAttribute("contenteditable", true);
            editableArea.style.cursor = "text"
        }else{
            e.target.classList.remove("fa-unlock")    
            e.target.classList.add("fa-lock")    
            editableArea.setAttribute("contenteditable", false);
            editableArea.style.cursor = "default"
            const ticId = editableArea.parentNode.querySelector(".card-ticket").textContent.split("#")[1]
            const updatedMsg = editableArea.textContent;
            allTickets.forEach(ticket =>{
                if(ticket.ticketId === ticId)
                    ticket.message = updatedMsg
            })
            updateInLocalStorage();
        }
    }
}
function AddColourChangeFeature(colourHeader){
    const colorArr = ["pink","blue","green", "purple"]
    colourHeader.addEventListener("click", changeColour);
    function changeColour(e){
        const currColor = colourHeader.classList[1];
        let colorIdx = colorArr.indexOf(currColor)
        let newColorIdx = (colorIdx + 1)%colorArr.length
        colourHeader.classList.remove(currColor)
        colourHeader.classList.add(colorArr[newColorIdx])
        const ticketId = colourHeader.nextElementSibling.textContent.split("#")[1];
        allTickets = allTickets.map(ticket=>{
            if(ticket.ticketId === ticketId){
                ticket.color = colorArr[newColorIdx]
                return ticket
            }
            return ticket;
        })
        updateInLocalStorage();
    }
}

function updateInLocalStorage(){
    localStorage.setItem("kanbanTickets", JSON.stringify(allTickets))
}