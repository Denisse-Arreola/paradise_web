// JavaScript source code
function lugares() {

    var ajax = new XMLHttpRequest();

    lista = '';

    ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {
            //document.getElementById('lugares').innerHTML = ajax.responseText;
            lugaresList(ajax.responseText);
        }
    }

    ajax.open("GET", "../php/actions/show_search_lugares.php?lista=" + lista, true);
    ajax.send();
}

function lugaresList(ls) {
    var y = 0;
    var arrayLugares = JSON.parse(ls);

    var lugares = document.getElementById("lugares");



    while (arrayLugares[y]) {
        var lugAg = document.createElement('section');
        lugAg.setAttribute("class", "complete_section")

        var img = document.createElement('Img');
        img.setAttribute('class', 'lugImg');
        img.setAttribute('src', '../img/index/anuncio6.jpeg');

        var lugSec = document.createElement("section");
        lugSec.setAttribute("class", "lista")

        var lb5 = document.createElement("Section");
        lb5.setAttribute("class", "espacio");

        var lb6 = document.createElement("Section");
        lb6.setAttribute("class", "espacio");

        var lb1 = document.createElement("Section");
        lb1.setAttribute("class", "nombreLug");
        lb1.innerHTML = arrayLugares[y].nombre;

        var lb2 = document.createElement("Section");
        lb2.setAttribute("class", "description");
        lb2.innerHTML = arrayLugares[y].desc;

        var lb3 = document.createElement("Section");
        lb3.setAttribute("class", "costo");
        lb3.innerHTML = 'A partir de $' + arrayLugares[y].costo;

        var lb4 = document.createElement("Section");
        lb4.setAttribute("class", "capacidad");
        lb4.innerHTML = 'Apropiado para ' + arrayLugares[y].capacidad + ' personas';

        var bt = document.createElement("button");
        bt.setAttribute("class", "lugBoton");
        bt.addEventListener('click', function (_y) {
            return function () {
                location.href = '../php/actions/PHP_MLUGAR.php?id=' + arrayLugares[_y].num;
                console.log(_y);
            }
        }(y));
        bt.innerHTML = 'Consultar Lugar';

        var br = document.createElement('br');


        lugares.appendChild(lb5);
        lugares.appendChild(lugAg);
        lugAg.appendChild(lugSec);
        lugAg.appendChild(img);
        lugSec.appendChild(br);
        lugSec.appendChild(lb1);
        lugSec.appendChild(lb2);
        lugSec.appendChild(lb3);
        lugSec.appendChild(lb4);
        lugSec.appendChild(bt);

        lugSec.appendChild(lb6);


        y++;
    }

}



function cargarOPE() {

    var ajax = new XMLHttpRequest();
    caso = 1;

    ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {
            fillData(ajax.responseText);
        }
    };

    ajax.open("get", "../php/actions/loadElements.php?", true);
    ajax.send();

}

//function cargarOPTL()
//{

//    var ajax = new XMLHttpRequest();
//    caso = 2;

//    ajax.onreadystatechange = function () {
//        if (ajax.status == 200 && ajax.readyState == 4) {
//            fillDataTl(ajax.responseText);
//        }
//    };

//    ajax.open("get", "../php/filtrosLug.php?caso=" + caso, true);
//    ajax.send();

//}

function fillData(ob) {
    var y = 0;
    var obj = JSON.parse(ob);
    var arrayEspacios = obj.espacios;
    var arrayTipo = obj.tipoLugar;

    var espSection = document.getElementById("espBox");



    var tabla = document.createElement("table");
    tabla.className = "tablaBox";

    espSection.appendChild(tabla);


    while (arrayEspacios[y]) {

        var ckBox = document.createElement("input");
        ckBox.setAttribute("type", "checkbox");
        ckBox.setAttribute("class", "ckB");
        ckBox.style.marginRight = "50px";

        ckBox.value = arrayEspacios[y].num;

        var lbl = document.createElement("Label");
        lbl.innerHTML = arrayEspacios[y].nombre;

        var td = document.createElement("td");
        var tr = document.createElement("tr");

        td.appendChild(ckBox);
        td.appendChild(lbl);

        tr.appendChild(td);
        tabla.appendChild(tr);


        y++;
    }

    var x = 0;
    var tlSection = document.getElementById("opsel");


    while (arrayTipo[x]) {

        var option = document.createElement("option");
        //option.setAttribute("class", "opsel");
        option.style.marginRight = "50px";

        option.value = arrayTipo[x].num;

        option.innerHTML = arrayTipo[x].nombre;

        tlSection.appendChild(option);
        x++;
    }

}

function fillDataTl(ob) {
    var y = 0;
    var arrayEspacios = JSON.parse(ob);

    var tlSection = document.getElementById("opsel");


    while (arrayEspacios[y]) {

        var option = document.createElement("option");
        //option.setAttribute("class", "opsel");
        option.style.marginRight = "50px";

        option.value = arrayEspacios[y].num;

        option.innerHTML = arrayEspacios[y].nombre;

        tlSection.appendChild(option);
        y++;
    }
}

function searchSp() {
    var lugares = document.getElementById("lugares");
    lugares.innerHTML = '';

    espacios = document.getElementsByClassName("ckB");

    console.log(document.getElementById('opsel').value);

    objbuscar =
    {
        ciudad: document.getElementById('ciudad').value,

        tipoL: document.getElementById('opsel').value,

        precios: document.getElementById('precio').value,

        capacidad: document.getElementById('cap').value,

        esp: new function () {
            var a = 0;
            this.arrayId = [];
            while (espacios[a]) {
                if (espacios[a].checked == true) {
                    this.arrayId.push(espacios[a].value);
                }
                a++;
            }
        }
    };

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {
            //console.log(objbuscar);
            fillCompresData(ajax.responseText);
            //console.log(ajax.responseText);
        }
    }



    ajax.open("get", "../php/actions/search_filter_lug.php?objbuscar=" + JSON.stringify(objbuscar), true);
    ajax.send();
}

function fillCompresData(ob) {
    var y = 0;
    var arrayLugares = JSON.parse(ob);

    var lugares = document.getElementById("lugares");
    lugares.innerHTML = '';



    while (arrayLugares[y]) {

        var lugAg = document.createElement('section');
        lugAg.setAttribute("class", "complete_section")

        var img = document.createElement('Img');
        img.setAttribute('class', 'lugImg');
        img.setAttribute('src', '../img/index/anuncio6.jpeg');

        var lugSec = document.createElement("section");
        lugSec.setAttribute("class", "lista")

        var lb5 = document.createElement("Section");
        lb5.setAttribute("class", "espacio");

        var lb6 = document.createElement("Section");
        lb6.setAttribute("class", "espacio");

        var lb1 = document.createElement("Section");
        lb1.setAttribute("class", "nombreLug");
        lb1.innerHTML = arrayLugares[y].nombre;

        var lb2 = document.createElement("Section");
        lb2.setAttribute("class", "description");
        lb2.innerHTML = arrayLugares[y].desc;

        var lb3 = document.createElement("Section");
        lb3.setAttribute("class", "costo");
        lb3.innerHTML = 'A partir de $' + arrayLugares[y].costo;

        var lb4 = document.createElement("Section");
        lb4.setAttribute("class", "capacidad");
        lb4.innerHTML = 'Apropiado para ' + arrayLugares[y].capacidad + ' personas';

        var bt = document.createElement("button");
        bt.setAttribute("class", "lugBoton");
        bt.addEventListener('click', function (_y) {
            return function () {
                location.href = '../php/actions/PHP_MLUGAR.php?id=' + arrayLugares[_y].num;
                //console.log(_y);
            }
        }(y));
        bt.innerHTML = 'Consultar Lugar';

        var br = document.createElement('br');


        lugares.appendChild(lb5);
        lugares.appendChild(lugAg);
        lugAg.appendChild(lugSec);
        lugAg.appendChild(img);
        lugSec.appendChild(br);
        lugSec.appendChild(lb1);
        lugSec.appendChild(lb2);
        lugSec.appendChild(lb3);
        lugSec.appendChild(lb4);
        lugSec.appendChild(bt);

        lugSec.appendChild(lb6);

        y++;
    }
}

function cerrar() {
    document.getElementById("error2").close();

}