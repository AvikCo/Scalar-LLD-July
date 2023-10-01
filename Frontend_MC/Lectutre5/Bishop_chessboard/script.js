
let n=10;


window.addEventListener("load",()=>{
    
    let table = document.querySelector("#table");

    initialiseGrid(table,n);

    table.addEventListener("mouseover",(e)=>{

        let [cRi,cCi] = e.target.dataset.index.split('-');

        // remove the yellow class on all the cells 
        let boxes= document.querySelectorAll(".box");
        for(let i=0;i<boxes.length;i++){
            boxes[i].classList.remove("yellow");
        }


        let storage={};

        traverseTopLeft(cRi,cCi,storage);
        traverseTopRight(cRi,cCi,storage);
        traverseBottomLeft(cRi,cCi,storage);
        traverseBottomRight(cRi,cCi,storage);

    

          for(let i=0;i<boxes.length;i++){
            let cDataIndex = boxes[i].dataset.index;
            if(storage[cDataIndex]===true){
                boxes[i].classList.add("yellow");
            }
        }
    })
})


function traverseTopLeft(cRi,cCi,storage){

        while(cRi>=0 && cCi>=0){
                let dataIndex= `${cRi}-${cCi}`;
                storage[dataIndex] =true;

                cRi--;
                cCi--;
        }
}

function traverseTopRight(cRi,cCi,storage){

                while(cRi>=0 && cCi<n){
            let dataIndex= `${cRi}-${cCi}`;
            storage[dataIndex] =true;

            cRi--;
            cCi++;
        }

}

function traverseBottomLeft(cRi,cCi,storage){
     while(cRi<n && cCi>=0){
            let dataIndex= `${cRi}-${cCi}`;
            storage[dataIndex] =true;

            cRi++;
            cCi--;
        }
}


function traverseBottomRight(cRi,cCi,storage){

        while(cRi<n && cCi<n){
            let dataIndex= `${cRi}-${cCi}`;
            storage[dataIndex] =true;

            cRi++;
            cCi++;
        }

}




function initialiseGrid(table,n){

        for(let ri=0;ri<n;ri++){

        let row=document.createElement("tr");
        table.appendChild(row);

        let white = ri%2===0;

        let cells = document.createDocumentFragment();

        for(let ci=0;ci<n;ci++){

            let cell = document.createElement("td");
            cell.setAttribute("class","box");
            cell.setAttribute("data-index",`${ri}-${ci}`);
            cell.classList.add(((white)?"white":"black"));

            cells.appendChild(cell);

            white=!white;
        }

        row.appendChild(cells);

    }

}