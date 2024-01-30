"use strict";

function janken(user_num) {

    var npc_num = Math.floor(Math.random() * 3);

    var resultHTML = "";

    resultHTML += "[あなた: " + changeText(user_num) + " ] VS [Computer: " + changeText(npc_num) + " ]";
    //win
    if (user_num == npc_num) {
        // daw
        resultHTML += "<br>Daw!!";
    } else if ((user_num == 0 && npc_num == 1) || (user_num == 1 && npc_num == 2) || (user_num == 2 && npc_num == 0)) {
        // win
        resultHTML += "<br>Win!!";
    } else {
        // lose
        resultHTML += "<br>Lose...";
    }
    document.getElementById("result").innerHTML = resultHTML;
}
function changeText(num) {
    var item = "";
    switch (num) {
        case 0: item = "ぐー"; break;
        case 1: item = "ちょき"; break;
        case 2: item = "ぱー"; break;
        default: item = "不正";
    }
    return item;
}