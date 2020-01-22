/*
    Name: Christopher Burcham
    Date: 1/13/2020
    Desc: TBA
*/

window.onload = function() {
    //assign convenient names to my object references
    let btnAdd = window.document.querySelector("#btnAdd"),
        btnSub = window.document.querySelector("#btnSub"),
        btnMult = window.document.querySelector("#btnMult"),
        txtAdd = window.document.querySelector("#addAnswer"),
        txtSub = window.document.querySelector("#subAnswer"),
        txtMult = window.document.querySelector("#multAnswer");

    btnAdd.onclick = function() {
        let txtAdd1 = parseFloat(window.document.querySelector("#txtAdd1").value),
            txtAdd2 = parseFloat(window.document.querySelector("#txtAdd2").value);

        txtAdd.innerHTML = txtAdd1 + txtAdd2;
    }

    btnSub.onclick = function() {
        let txtSub1 = parseFloat(window.document.querySelector("#txtSub1").value),
            txtSub2 = parseFloat(window.document.querySelector("#txtSub2").value);

        txtSub.innerHTML = txtSub1 - txtSub2;
    }

    // SELF CHECK
    btnMult.onclick = function() {
        let txtMult1 = parseFloat(window.document.querySelector("#txtMult1").value),
            txtMult2 = parseFloat(window.document.querySelector("#txtMult2").value);

        txtMult.innerHTML = txtMult1 * txtMult2;
    }
}