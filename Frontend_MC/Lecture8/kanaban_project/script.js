


const toolBoxPriorityContainer = document.querySelector(".toolbox-priority");
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".remove-btn");
const modal = document.querySelector(".modal-cont");
const textarea = modal.querySelector(".textarea-cont")
const prioritySetModal = modal.querySelector(".priority-color-cont");
const priorityColorArray = prioritySetModal.querySelectorAll(".priority-color");
const mainContainer = document.querySelector(".main");
let colors = ["pink","blue","purple","green"];

let allTickets = localStorage.getItem("localTickets") || [];
let isFromLocalStorage=false;

if(typeof allTickets ==="string"){
    allTickets = JSON.parse(allTickets);
    console.log(allTickets);
    populateUI();
}

function populateUI(){
    isFromLocalStorage=true;
    console.log(allTickets);
    for(let i=0;i<allTickets.length;i++){
        let ticketObj = allTickets[i];
        console.log(ticketObj);
         createNewTicket(ticketObj.content, ticketObj.color, ticketObj.id);
    }
    isFromLocalStorage=false;
}



toolBoxPriorityContainer.addEventListener("click",function(e){

    if(e.target === e.currentTarget){
        return;
    }

    const currentColElem = e.target;
    const cColor = currentColElem.classList[1];
    const ticketArr = document.querySelectorAll(".ticket-cont");


    for(let i=0;i<ticketArr.length;i++){
        const ticketColorElem  = ticketArr[i].querySelector(".ticket-color");
        let cTicketColor  = ticketColorElem.classList[1];
        if(cTicketColor!==cColor){
               ticketArr[i].style.display="none";
        }else{
            ticketArr[i].style.display="block";
        }
    }
})

toolBoxPriorityContainer.addEventListener("dblclick",function(e){

    if(e.target === e.currentTarget){
        return;
    }
    const ticketArr = document.querySelectorAll(".ticket-cont");
    for(let i=0;i<ticketArr.length;i++){
            ticketArr[i].style.display="block";
    }
})



addBtn.addEventListener("click",()=>{

    //display the modal

    modal.style.display="flex";

})

deleteBtn.addEventListener("click",(e)=>{
    console.log(e.target);

    e.target.classList.toggle("red");
})



modal.addEventListener("keypress",(e)=>{


    if(e.key!=="Enter"){
        return;
    }

    const content = textarea.value;

    textarea.value="";


    //create a new ticket 

    const activeColorElement = prioritySetModal.querySelector(".active");
    const cColor = activeColorElement.classList[1];

     const { randomUUID } = new ShortUniqueId({ length: 10 });
     const id = randomUUID();
    createNewTicket(content,cColor,id);
    


    modal.style.display="none";

})

prioritySetModal.addEventListener("click",(e)=>{

    if(e.target === e.currentTarget){
        return;
    }


    for(let i=0;i<priorityColorArray.length;i++){
        priorityColorArray[i].classList.remove("active");
    }

    e.target.classList.add("active");

})




function createNewTicket(content,color,id){

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class","ticket-cont");
    ticketContainer.setAttribute("draggable","true");

    ticketContainer.innerHTML=`
            <div class="ticket-color ${color}"></div>
            <div class="ticket-id"> #${id}</div>
            <div class="ticket-area"> ${content}</div>
            <div class="lock-unlock">
                <i class="fa-solid fa-lock"></i>
            </div>
        `

        mainContainer.appendChild(ticketContainer);


        /*** store the ticket *****/
        let ticketObj={
            id:id,
            content:content,
            color:color
        }

        if(!isFromLocalStorage){
            allTickets.push(ticketObj);
            updateInLocalStorage();
        }

        /***************color click************** */
        const ticketColorElem = ticketContainer.querySelector(".ticket-color");
        ticketColorElem.addEventListener("click",toggleColor);

        /***************lock click************** */
        
        const lockBtn = ticketContainer.querySelector(".lock-unlock");
        const ticketArea = ticketContainer.querySelector(".ticket-area");
        AddLockAndUnlock(lockBtn,ticketArea);

        /****   ********/

        ticketContainer.addEventListener("click",handleContainerClick)

}

function handleContainerClick(e){

    const isDeleteActivated  = deleteBtn.children[0].classList.contains("red");

    if(!isDeleteActivated){
        return;
    }

     const ticketId = e.currentTarget.querySelector(".ticket-id").textContent.split('#')[1];
     e.currentTarget.remove();

     allTickets = allTickets.filter((ticket)=>{
        return ticket.id!=ticketId
     });

     updateInLocalStorage();
}

function toggleColor(e){
    
    const cColor = e.target.classList[1];
    let idx= colors.indexOf(cColor);
    
    let nextIdx= (idx+1)%(colors.length);

    e.target.classList.remove(cColor);
    e.target.classList.add(colors[nextIdx]);
}

function AddLockAndUnlock(lockBtn,ticketArea){
        lockBtn.addEventListener("click",handleLock);

        function handleLock(e){
            
            let isLocked = e.target.classList.contains("fa-lock");

            if(isLocked){
                // unlock 
                ticketArea.setAttribute("contenteditable",true);
                e.target.classList.remove("fa-lock");
                e.target.classList.add("fa-lock-open");

            }else{
                //lock it 
                 ticketArea.setAttribute("contenteditable",false);
                e.target.classList.add("fa-lock");
                e.target.classList.remove("fa-lock-open");
            }
        
        }

}

function updateInLocalStorage(){
    localStorage.setItem("localTickets",JSON.stringify(allTickets));
}