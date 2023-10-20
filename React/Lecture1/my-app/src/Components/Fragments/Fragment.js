import React from "react";

function Fragment(){

    return <Table/>

}


function TableData () {
  return  (
    <>
      <td>Eat</td>
      <td>Learn</td>
      <td>Code</td>
    </>
  );
}

function Table () {
  return (
    <table>
      <tr>
        <TableData />
      </tr>
    </table>
  );
}




export default Fragment;


/*
The main difference between the two is that 
"Fragment" clears out all extra divs from a DOM tree while "Div" adds a div to the DOM tree.
*/