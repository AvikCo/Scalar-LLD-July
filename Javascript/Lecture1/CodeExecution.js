// high level view -> how your code exec


// var a = 10;

// fn()

// function fn() {
//     console.log("I am fn");
//     function inner() {
//         console.log("I am inner");
//     }
//     inner();
// }




// stack -> callstack


/*Code Excution : always exec in EC (Execution Context)

   1. GEC : Global execution Context
   2. FEC : Functional Exectuion Context
*/

// code execution
        // 1.  EC creation
                // 1.a Hoisting -> memory allocation
                                // variable -> undefined;
                                // fn -> get it's memory allocated
                // 2. global -> browser -> window/nodejs-> global-> features
                // 3. outer scope-> outer var
                // 4. this-> always calculated
        //  2. EC Code execution



// console.log(x);
// var x=5;


// function add(a,b){
//     console.log(a+b);
// }

// add(1,2);


// let a = 10;
// function fn() {
//     console.log("I am fn");
//     function inner() {
//         console.log("I am inner");
//     }
//     inner();
// }

// fn()


// real();
// function real() { console.log("I am real. Always run me"); }
// function real() { console.log("No I am real one "); }
// function real() { console.log("You both are wasted"); }


function grandParent(){
    
    var a=5;

    parent();

    

    function parent(){
        
        var b=6;

        child();
        console.log(a+b);

      

        function child(){

            var c=7;
            console.log(a+b+c);
        }
    }
}

grandParent();