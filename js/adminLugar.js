﻿function registrarLugar(res) {
    document.getElementById("listLugar").innerHTML = "";

    var lugarOb = null;

    var CKS = document.getElementsByClassName("ckB");

    var sctTP = document.getElementById("CBtp");
    var sctCiudades = document.getElementById("CBCiudades");

    if (res == true) {

        lugarOb = {
            nombre: document.getElementById("txtNombreLugar").value,
            desc: document.getElementById("txtDescLugar").value,
            costo: document.getElementById("txtCostoLugar").value,
            capacidad: document.getElementById("txtCapacidadLugar").value,
            estado: sctCiudades.options[sctCiudades.selectedIndex].value,
            tipoLugar: sctTP.options[sctTP.selectedIndex].value,
            direc: new function () {
                this.obDirec = {
                    calle: document.getElementById("txtCalleDirec").value,
                    numIn: document.getElementById("txtNumIntDirec").value,
                    numEx: document.getElementById("txtNumExtDirec").value,
                    cp: document.getElementById("txtCP").value
                }

                if (this.obDirec.calle == "" || this.obDirec.numIn == "" || this.obDirec.cp == "") {
                    this.obDirec = false;
                }
            },
            espacios: new function () {
                var a = 0;
                this.arrayId = [];
                while (CKS[a]) {
                    if (CKS[a].checked == true) {
                        this.arrayId.push(CKS[a].value);
                    }
                    a++;
                }
            },
            type: true
        };
    } else {

        lugarOb = {
            numero: parseInt(document.getElementById("tbNum").value),
            nombre: document.getElementById("txtNombreLugar").value,
            desc: document.getElementById("txtDescLugar").value,
            costo: document.getElementById("txtCostoLugar").value,
            capacidad: document.getElementById("txtCapacidadLugar").value,
            estado: sctCiudades.options[sctCiudades.selectedIndex].value,
            tipoLugar: sctTP.options[sctTP.selectedIndex].value,
            espacios: new function () {
                var a = 0;
                this.arrayId = [];
                while (CKS[a]) {
                    if (CKS[a].checked == true) {
                        this.arrayId.push(CKS[a].value);
                    }
                    a++;
                }
            },
            type: false
        };
    }

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            createDialog();
            document.getElementById("msg").innerHTML = ajax.responseText;
            clearForm();
        }
    };

    //ajax.open("GET", "../php/sendLugar.php?b="+JSON.stringify(lugarOb), true);
    ajax.open("GET", "../php/registerUpdateLugar.php?b=" + JSON.stringify(lugarOb), true);
    ajax.send();
}




function buscarLugar() {
    createDialog();
    document.getElementById("listLugar").innerHTML = "";

    var ajax = new XMLHttpRequest();

    var searchForm = null;

    
        searchForm = {
            search: document.getElementById("id_lugar").value
            
        };
    
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {

            fillLugarShc(ajax.responseText);
        }
    };


    ajax.open("GET", "../php/busquedaLugar.php?b=" + JSON.stringify(searchForm), true);
    ajax.send();

}

function modifyLugar(a) {
    turnOnPnlAdd();
    document.getElementById("btnModify").style.display = "block";
    document.getElementById("btnSend").style.display = "none";



    document.getElementById("txtNombreLugar").value = a.nombre;
    document.getElementById("txtDescLugar").value = a.desc;
    document.getElementById("txtCostoLugar").value = a.costo;
    document.getElementById("txtCapacidadLugar").value = a.capacidad;


    document.getElementById("tbNum").style.display = "block";
    document.getElementById("lblNum").style.display = "block";
    document.getElementById("tbNum").value = a.numero;

}

function loadOptionsEsp() {

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {
            fillOptionsEsp(ajax.responseText);
        }
    };

    ajax.open("get", "../php/loadEspacios.php?", true);
    ajax.send();

}

function fillOptionsEsp(ob) {
    var y = 0;
    var arrayEspacios = JSON.parse(ob);

    var espSection = document.getElementById("boxEsp");



    while (arrayEspacios[y]) {
        var ckBox = document.createElement("input");
        ckBox.setAttribute("type", "checkbox");

        ckBox.setAttribute("class", "ckB");
        ckBox.style.marginRight = "50px";

        ckBox.value = arrayEspacios[y].num;

        var lbl = document.createElement("Label");
        lbl.innerHTML = arrayEspacios[y].nombre;

        //Destino <------------ Objeto a agregar
        espSection.appendChild(lbl);
        espSection.appendChild(ckBox);
        y++;

    }
}


function loadTiposLugar() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {
            fillOptionsPT(ajax.responseText);
        }
    }

    ajax.open("get", "../php/loadTipolugar.php?", true);
    ajax.send();

}

function fillOptionsPT(ob) {
    var arrayTipoLugar = JSON.parse(ob);
    var z = 0;
    var selectTP = document.getElementById("CBtp");

    while (arrayTipoLugar[z]) {

        var option = document.createElement("option");
        option.value = arrayTipoLugar[z].num;
        option.innerHTML = arrayTipoLugar[z].nombre;

        selectTP.appendChild(option);
        z++;
    }
}


function clearForm() {

    var t = 0;

    var CKS = document.getElementsByClassName("ckB");
    var sctTP = document.getElementById("CBtp");
    var sctCiudades = document.getElementById("CBCiudades");

    document.getElementById("txtNombreLugar").value = "";
    document.getElementById("txtDescLugar").value = "";
    document.getElementById("txtCostoLugar").value = "";
    document.getElementById("txtCapacidadLugar").value = "";
    document.getElementById("txtCalleDirec").value = "";
    document.getElementById("txtNumIntDirec").value = "";
    document.getElementById("txtNumExtDirec").value = "";
    document.getElementById("txtCP").value = "";


    sctCiudades.options.selectedIndex = 0;
    sctTP.options.selectedIndex = 0;

    document.getElementById('intPnlDirection').style.display = 'none';
    document.getElementById('btnDwn').style.display = 'block';
    document.getElementById('btnUp').style.display = 'none'

    while (CKS[t]) {
        CKS[t].checked = 0;
        t++;
    }

}


function fillLugarShc(ob) {


    var list = document.getElementById("listLugar");
    list.style.display = "block"; 
    var arrayLugar = JSON.parse(ob);

    var x = 0;


    while (arrayLugar[x]) {

        var table = document.createElement("table");

        table.style.width = "30%";
        table.style.marginRight = "8%";
        table.style.border = "2px solid";
        table.style.marginBottom = "3%";

        var tr1 = document.createElement("tr");
        var tr2 = document.createElement("tr");
        var tr3 = document.createElement("tr");
        var tr4 = document.createElement("tr");
        var tr5 = document.createElement("tr");
        var tr6 = document.createElement("tr");


        tr1.innerHTML = "<td> Numero </td> <td> " + arrayLugar[x].numero + "</td> ";
        tr2.innerHTML = "<td> Nombre </td> <td> " + arrayLugar[x].nombre + "</td> ";
        tr3.innerHTML = "<td> Descripción </td> <td> " + arrayLugar[x].desc + "</td> ";
        tr4.innerHTML = "<td> Costo </td> <td> " + arrayLugar[x].costo + "</td> ";
        tr5.innerHTML = "<td> Capacidad </td> <td> " + arrayLugar[x].capacidad + "</td>  ";
        tr6.innerHTML = "<td> Tipo de lugar </td> <td> " + arrayLugar[x].tipoLugar + "</td>";

        var arrayTr = [tr1, tr2, tr3, tr4, tr5, tr6];


        for (z = 0; z < 6; z++) {
            table.appendChild(arrayTr[z]);
        }

        if (arrayLugar[x].calle != null || arrayLugar[x].numInt != null || arrayLugar[x].numExt != null || arrayLugar[x].CP != null) {

            var trC = document.createElement("tr");
            var trNI = document.createElement("tr");
            var trNE = document.createElement("tr");
            var trCP = document.createElement("tr");

            trC.innerHTML = " <td> Calle </td> <td> " + arrayLugar[x].calle + "</td>";
            trNI.innerHTML = "<td> No. Interno </td> <td> " + arrayLugar[x].numInt + "</td>";
            trNE.innerHTML = "<td> Num. Ext </td> <td> " + arrayLugar[x].numExt + "</td> ";
            trCP.innerHTML = " <td> Código Postal </td> <td> " + arrayLugar[x].CP + "</td>  ";

            var arrayDir = [trC, trNI, trNE, trCP];

            for (y = 0; y < 4; y++) {
                table.appendChild(arrayDir[y]);
            }
        }

        
            var btn = document.createElement("button");

            btn.addEventListener("click", function (_x) {
                return function () {
                    modifyLugar(arrayLugar[_x]);
                }

            }(x));
            btn.innerHTML = "Editar";
            table.appendChild(btn);
        

        list.appendChild(table);
        x++;
    }
}