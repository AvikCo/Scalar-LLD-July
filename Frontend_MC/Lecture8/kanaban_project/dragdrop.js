let draggedTicket = null;

containers.forEach((container)=>{
    console.log(container)
    container.addEventListener("dragstart",(e)=>{
        e.target.style.opacity = "0.5";
        draggedTicket=e.target;
    })


    container.addEventListener("dragend",(e)=>{
        e.target.style.opacity = "1";
        draggedTicket=null;
    })

    container.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })

    container.addEventListener("drop",(e)=>{
        
        const dropContainer = e.target;
        console.log(dropContainer);

        if(draggedTicket){
            dropContainer.appendChild(draggedTicket);
            console.log(draggedTicket);

            const isPending = dropContainer.classList[0] === "pending-cont" ? true : false;

            const ticketId = draggedTicket.querySelector(".ticket-id").innerText.split("#")[1];

            const ticketObj = allTickets.find((ticket)=>{
                return ticket.id == ticketId;
            })

            ticketObj.isPending = isPending;

            updateInLocalStorage();
            
        }

    })
})