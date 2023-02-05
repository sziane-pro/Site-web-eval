
let selectModel = document.getElementById('modele');

let selectBerline = document.getElementById('berline');
let selectBerlineCompact = document.getElementById('berlinecompact');
let selectSUV = document.getElementById('SUV');
let labelBerline = document.getElementById('berline1');
let labelSUV = document.getElementById('SUV1');
let labelBerlineCompacte = document.getElementById('berlinecompact1');


selectModel.addEventListener("change", function() {
    let selectedValue = selectModel.value;

    if (selectedValue === "berline") {
        selectBerline.style.display = "inline-block";
        labelBerline.style.display = "inline-block";
    } else {
        selectBerline.style.display = "none";
        labelBerline.style.display = "none";

    }

    if (selectedValue === "berlinecompact") {
        labelBerlineCompacte.style.display = "inline-block";
        selectBerlineCompact.style.display = "inline-block";
    } else {
        selectBerlineCompact.style.display = "none";
        labelBerlineCompacte.style.display = "none";

    }

    if (selectedValue === "SUV") {
        labelSUV.style.display = "inline-block";
        selectSUV.style.display = "inline-block";
    } else {
        selectSUV.style.display = "none";
        labelSUV.style.display = "none";

    }
});
