// all code about displaying or updating gameboard goes here

import {createPlayer} from "./player.js";

export function showDialogNames(){
    const startingDialog = document.querySelector("#startingDialog");

    startingDialog.showModal();
}



export function setPlayers(){
    const player1Name = document.querySelector("#player1Name").value;

    const player2Name = document.querySelector("#player2Name").value;

    const player1Symbol = document.querySelector("#player1Symbol").value;

    const player2Symbol = document.querySelector("#player2Symbol").value;

    if (!player1Name || !player1Symbol || !player2Name || !player2Symbol){
        alert("one or more fields are empty, please fill them!");
        return;
    }

    if (player1Name == player2Name){
        alert("Names must be unique!");
    }

    if (player1Symbol == player2Symbol){
        alert("Symbols must be unqiue!");
    }

    const player1 = createPlayer(player1Name, player1Symbol);
    const player2 = createPlayer(player2Name, player2Symbol);

    return player1, player2;
}