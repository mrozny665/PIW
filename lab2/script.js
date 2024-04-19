"use strict";

const adder = () => {
    const inputA = document.getElementById("number-a");
    const inputB = document.querySelector("#number-b");

    const inputB2 = $("number-b");

    if (inputA.value === "" || inputB.value === ""){
        console.log("A lub B jest puste");

        const modal = document.getElementById("my-modal");
        modal.showModal();
        return;
    }

    const numA = Number(inputA.value);
    const numB = Number(inputB.value);

    if (isNaN(numA) || isNaN(numB)){
        console.log("A lub B nie jest liczbą");
        return;
    }

    console.log(`${numA} + ${numB} = ${numA + numB}`);

    const theList = document.getElementById("list-of-operations");
    const listItem = document.createElement("li"); //<li></li>
    listItem.innerText = `${numA} + ${numB} = ${numA + numB}`;
    theList.append(listItem);

    // zmienna = 55;
    // var zmienna = 10;

    // const zmiennaOStalejReferencji = [];
    // zmiennaOStalejReferencji = {};
    // let zmiennaPoProstu = 4;
    
    // zmiennaPoProstu = 33;
    // zmiennaPoProstu = "napis";
}

//window.addEventListener("load")
window.onload = () => {
    const closingButton = document.getElementById("closing");
        closingButton.addEventListener("click", () =>{
            const modal = document.getElementById("my-modal");
            modal.close()
        })
}

//function func () {}
//const func2 = function () {}