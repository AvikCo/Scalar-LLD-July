


const toolBoxPriorityContainer = document.querySelector(".toolbox-priority");
const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal-cont");
const textarea = modal.querySelector(".textarea-cont")
const prioritySetModal = modal.querySelector(".priority-color-cont");
const priorityColorArray = prioritySetModal.querySelectorAll(".priority-color");
const mainContainer = document.querySelector(".main");

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


modal.addEventListener("keypress",(e)=>{


    if(e.key!=="Enter"){
        return;
    }

    const content = textarea.value;

    textarea.value="";


    //create a new ticket 

    const activeColorElement = prioritySetModal.querySelector(".active");
    const cColor = activeColorElement.classList[1];


    createNewTicket(content,cColor);
    


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


function createNewTicket(content,color){


    const id= createRandomId();

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class","ticket-cont");

    ticketContainer.innerHTML=`
            <div class="ticket-color ${color}"></div>
            <div class="ticket-id"> ${id}</div>
            <div class="ticket-area"> ${content}</div>
            <div class="lock-unlock">
                <i class="fa-solid fa-lock"></i>
            </div>
        `

        mainContainer.appendChild(ticketContainer);

}

function createRandomId() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
.replace(/[xy]/g, function (c) {
const r = Math.random() * 16 | 0,
v = c == 'x' ? r : (r & 0x3 | 0x8);
return v.toString(16);
});
}