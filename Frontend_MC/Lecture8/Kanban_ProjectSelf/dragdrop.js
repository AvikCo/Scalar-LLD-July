const container = document.querySelectorAll(".container")
let draggedCont = null;
container.forEach(container=>{
    
    container.addEventListener("dragstart",e=>{
        e.target.style.opacity = "0.5"
        draggedCont = e.target;
    })
    container.addEventListener("dragend",e=>{
        e.target.style.opacity = "1"
        draggedCont = null;
    })
    container.addEventListener("dragover",e=>{
        e.preventDefault();
    })
    container.addEventListener("drop", e=>{
        const finishedContainer = e.target;
        if(draggedCont){
        finishedContainer.appendChild(draggedCont)
        const ticketId = draggedCont.querySelector(".card-ticket").textContent.split("#")[1]
        const selectedTicket = allTickets.find(e=>{return e.ticketId === ticketId})
        const newPendingStatus = selectedTicket.isPending === true ? false : true;
        selectedTicket.isPending = newPendingStatus;
        updateInLocalStorage();
        }
    })
})