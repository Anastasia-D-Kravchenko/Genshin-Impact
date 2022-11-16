var d = document;
q2 = d.querySelector('#inform1');
q1 = d.querySelector('#inform2');
q3 = d.querySelector('#inform3');
q4 = d.querySelector('#inform4');
q5 = d.querySelector('#inform5');
q6 = d.querySelector('#inform6');
q7 = d.querySelector('#inform7');
q22 = d.querySelector('#inform8');
q12 = d.querySelector('#inform9');
q32 = d.querySelector('#inform10');
q42 = d.querySelector('#inform11');
q52 = d.querySelector('#inform12');
q62 = d.querySelector('#inform13');
q72 = d.querySelector('#inform14');
none = "none";
block = "block";
function Electro() {
    for(i=1;i<15;i++){
       d.querySelector('#inform'+i).style.display = none;
    }
    q1.style.display = block;
    q12.style.display = block;
}

function Anemo() {
    for(i=1;i<15;i++){
        d.querySelector('#inform'+i).style.display = none;
    }
    q2.style.display = block;
    q22.style.display = block;
}

function Hydro() {
    for(i=1;i<15;i++){
        d.querySelector('#inform'+i).style.display = none;
    }
    q3.style.display = block;
    q32.style.display = block;
}

function Pyro() {
    for(i=1;i<15;i++){
        d.querySelector('#inform'+i).style.display = none;
    }
    q4.style.display = block;
    q42.style.display = block;
}

function Geo() {
    for(i=1;i<15;i++){
        d.querySelector('#inform'+i).style.display = none;
    }
    q5.style.display = block;
    q52.style.display = block;
}

function Cryo() {
    for(i=1;i<15;i++){
        d.querySelector('#inform'+i).style.display = none;
    }
    q6.style.display = block;
    q62.style.display = block;
}

function Dendro() {
    for(i=1;i<15;i++){
        d.querySelector('#inform'+i).style.display = none;
    }
    q7.style.display = block;
    q72.style.display = block;
}