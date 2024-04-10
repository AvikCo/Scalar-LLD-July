const body = document.querySelector("body");
let rowInputVal;
let colInputVal;

window.addEventListener("load", (e)=> {
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "main_container")

    const smallerDiv = document.createElement("div");
    smallerDiv.setAttribute("class", "board_input")

    const table = document.createElement("table");
    table.setAttribute("id", "table")

    const inputRowDiv = document.createElement("div")
    const lableRow = document.createElement("label")
    lableRow.textContent = "Row: "
    const rowInput = document.createElement("input");
    rowInput.setAttribute("id", "rowInput")
    inputRowDiv.appendChild(lableRow)
    inputRowDiv.appendChild(rowInput)


    const inputColDiv = document.createElement("div")
    const colInput = document.createElement("input");
    colInput.setAttribute("id", "colInput")
    const lableCol = document.createElement("label")
    lableCol.textContent = "Col: "
    inputColDiv.appendChild(lableCol)
    inputColDiv.appendChild(colInput)

    const btn = document.createElement("button");
    btn.setAttribute("id", "btn_create")
    btn.textContent = "Create Row"

    smallerDiv.appendChild(inputRowDiv)
    smallerDiv.appendChild(inputColDiv)
    smallerDiv.appendChild(btn)

    mainDiv.appendChild(smallerDiv)
    mainDiv.append(table)

    body.appendChild(mainDiv)

    btn.addEventListener("click", (e)=>createTable(e))
    table.addEventListener("mouseover", (e)=>makeYellow(e))
    table.addEventListener("mouseleave",(e)=>removeYellow())
})

function createTable(event){
    const dc = document;
    const table= dc.getElementById("table");
    rowInputVal = dc.getElementById("rowInput").value
    colInputVal = dc.getElementById("colInput").value
    while (table.hasChildNodes()){
        table.removeChild(table.firstChild)
    }

    const fragment = dc.createDocumentFragment();
    for(let rowIdx = 0; rowIdx < rowInputVal; rowIdx++){
        const row = dc.createElement("tr");
        let isWhite = rowIdx%2;
        for(let colIdx = 0; colIdx < colInputVal; colIdx++){
            const col = dc.createElement("td")
            col.setAttribute("class","box")
            col.classList.add((isWhite) ? "white" : "black")
            col.setAttribute("data-index", `${rowIdx}-${colIdx}`)
            row.appendChild(col)
            isWhite = !isWhite
        }
        fragment.appendChild(row);
    }
    table.appendChild(fragment);
    table.style.border = "1px solid grey"
}
function makeYellow(e){
    const currEl = e.target
    const boxes = document.querySelectorAll(".box")
    console.log(currEl)
    removeYellow()
    const [currRowIdx, currColIdx] = currEl.dataset.index.split("-")

    const boxObj = {}
    makeDiagonalsYellow(currRowIdx, currColIdx, true, true, boxObj)
    makeDiagonalsYellow(currRowIdx, currColIdx, true, false, boxObj)
    makeDiagonalsYellow(currRowIdx, currColIdx, true, boxObj)
    makeDiagonalsYellow(currRowIdx, currColIdx, false, false, boxObj)
    //makeDiagonalsYellow(currRowIdx, currColIdx, rowUp, colLeft)
    console.log(boxObj)

    for(let bxNum = 0; bxNum < boxes.length; bxNum++){
        const currBox = boxes[bxNum]
        const index = currBox.dataset.index
        if(boxObj[index])
            currBox.classList.add("yellow")
    }
    // console.log(currEl)
}

function makeDiagonalsYellow(currRowIdx, currColIdx, isGoUp, isGoLeft, boxObj){

    console.log(currRowIdx, currColIdx)
    while(currRowIdx < rowInputVal && currRowIdx >= 0 && currColIdx >= 0 && currColIdx < colInputVal){
        boxObj[`${currRowIdx}-${currColIdx}`] = true;
        
        if(isGoUp) currRowIdx--
        else currRowIdx++

        if(isGoLeft) currColIdx--
        else currColIdx++
    }

}

function removeYellow(){
    const boxes = document.querySelectorAll(".box")

    for(let bxNum = 0; bxNum < boxes.length; bxNum++){
        boxes[bxNum].classList.remove("yellow")
    }
}